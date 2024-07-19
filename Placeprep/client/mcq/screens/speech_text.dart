import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:placeprep/Authentication/config.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Speech to Text ',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: SpeechToTextScreen(),
    );
  }
}

class Answer {
  final String text;
  final List<String> keyPoints;

  Answer({required this.text, required this.keyPoints});

  factory Answer.fromJson(Map<String, dynamic> json) {
    return Answer(
      text: json['text'] ?? '',
      keyPoints: List<String>.from(json['keyPoints'] ?? []),
    );
  }
}

class SpeechToTextScreen extends StatefulWidget {
  @override
  _SpeechToTextScreenState createState() => _SpeechToTextScreenState();
}

class _SpeechToTextScreenState extends State<SpeechToTextScreen> {
  late stt.SpeechToText _speech;
  bool _isListening = false;
  String _text = '';
  Answer? _correctAnswer;
  String _resultText = '';
  List<String> _resultKeyPoints = [];

  @override
  void initState() {
    super.initState();
    _speech = stt.SpeechToText();
    _initSpeechState();
    _fetchAnswer();
  }

  void _initSpeechState() async {
    bool available = await _speech.initialize();
    if (available) {
      setState(() {});
    } else {
      print('Speech recognition not available');
    }
  }

  Future<void> _fetchAnswer() async {
    final response = await http.get(Uri.parse(answer));
    if (response.statusCode == 200) {
      final jsonBody = jsonDecode(response.body);
      final answer = Answer.fromJson(jsonBody);
      setState(() {
        _correctAnswer = answer;
      });
    } else {
      print('Failed to fetch answer');
    }
  }

  void _toggleListening() {
    if (!_isListening) {
      _startListening();
    } else {
      _stopListening();
    }
  }

  void _startListening() {
    _speech.listen(
      onResult: (result) => setState(() {
        _text = result.recognizedWords;
        _checkAnswer(_text);
      }),
    );
    setState(() => _isListening = true);
  }

  void _stopListening() {
    _speech.stop();
    setState(() => _isListening = false);
  }

  void _checkAnswer(String userAnswer) {
    if (_correctAnswer != null) {
      if (_correctAnswer!.text.toLowerCase() == userAnswer.toLowerCase()) {
        _showResult(true, _correctAnswer!.keyPoints);
      } else {
        _showResult(false, []);
      }
    }
  }

  void _showResult(bool isCorrect, List<String> keyPoints) {
    setState(() {
      _resultText = isCorrect ? 'Correct!' : 'Incorrect';
      _resultKeyPoints = keyPoints;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Speech to Text Demo'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Press the button and start speaking:',
            ),
            SizedBox(height: 20),
            Text(
              _text,
              style: TextStyle(fontSize: 20),
            ),
            SizedBox(height: 20),
            Text(
              '$_resultText',
              style: TextStyle(
                fontSize: 20,
                color: _resultText == 'Correct!' ? Colors.green : Colors.red,
              ),
            ),
            SizedBox(height: 10),
            if (_resultKeyPoints.isNotEmpty)
              Column(
                children: _resultKeyPoints
                    .map((keyPoint) => Text(
                  keyPoint,
                  style: TextStyle(fontSize: 16),
                ))
                    .toList(),
              ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _speech?.isListening ?? false ? _stopListening : _startListening,
        child: Icon(_speech?.isListening ?? false ? Icons.stop : Icons.mic),
      ),
    );
  }
}

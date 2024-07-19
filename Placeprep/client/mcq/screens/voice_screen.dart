import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_tts/flutter_tts.dart';
import 'package:http/http.dart' as http;
import 'package:placeprep/Authentication/config.dart';
import 'package:placeprep/mcq/screens/result_screen.dart';
import 'package:placeprep/mcq/screens/speech_text.dart'; // Import the file where Speechtotext class is defined
import 'package:speech_to_text/speech_to_text.dart' as stt;

class TextToSpeechScreen extends StatefulWidget {
  // final int score;
  // final int totalQuestions;

  const TextToSpeechScreen({super.key});
  @override
  _TextToSpeechScreenState createState() => _TextToSpeechScreenState();
}


class _TextToSpeechScreenState extends State<TextToSpeechScreen> {
  final FlutterTts flutterTts = FlutterTts();
  String? currentQuestion;
  int currentQuestionIndex = 0;
  List<String>? options;
  final stt.SpeechToText speechToText = stt.SpeechToText();
  bool isListening = false;
  String lastWords = '';
  String lastError = '';
  bool isCorrect = false;

  @override
  void initState() {
    super.initState();
    fetchText();
  }

  Future<void> fetchText() async {
    final response = await http.get(Uri.parse(speech));
    if (response.statusCode == 200) {
      print("success");
      final jsonData = json.decode(response.body);
      final text = jsonData['text']; // Extract 'text' from the response
      setState(() {
        currentQuestion = text;
      });
      await speakText(currentQuestion!);
    } else {
      throw Exception('Failed to load text');
    }
  }

  Future<void> speakText(String text) async {
    await flutterTts.speak(text);
  }

  // Method to handle "Give Answer" button tap
  void giveAnswer() {
    // Navigate to Speechtotext class
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => SpeechToTextScreen()),
    );
  }

  // Method to handle "Submit Answer" button tap
  void submitAnswer() {
    // Implement logic to handle submitting answer
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Speech to Text Example'),
      ),
      body: Center(
        child: currentQuestion != null
            ? Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              currentQuestion!,
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 16),
            ),
            // Other widgets remain unchanged
          ],
        )
            : CircularProgressIndicator(),
      ),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          FloatingActionButton(
            onPressed: giveAnswer,
            tooltip: 'Give Answer',
            child: Icon(Icons.edit),
          ),
          FloatingActionButton(
            onPressed: (){
              /* Navigator.push(context, MaterialPageRoute(builder: (context)=>ResultScreen(
                                score: widget.score,
                                totalQuestions: widget.totalQuestions,
                                //email:widget.email, // Pass the total number of questions
                              ),)); */
            },
            tooltip: 'Submit Answer',
            child: Icon(Icons.send),
          ),
        ],
      ),
    );
  }
}

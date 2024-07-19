import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_speed_dial/flutter_speed_dial.dart';
import 'package:placeprep/Authentication/config.dart';
import 'package:placeprep/mcq/screens/voice_screen.dart';
import '../screens/result_screen.dart';
import 'package:http/http.dart' as http;

import '../models/question.dart';

import '../widgets/answer_card.dart';
import '../widgets/next_button.dart';
// Replace with your API URL

Future<List<Question>> fetchQuestions(String topic) async {
  final response = await http.get(Uri.parse(
    // OOPS
            topic == "classobj"
          ? classobj
          : topic == "inheritance"
          ? inheritance
          : topic == "abstraction"
          ? abstraction
          : topic == "encapsulation"
          ? encapsulation
          : topic == "cpolymorphism"
          ? cpolymorphism
          : topic == "rpolymorphism"
          ? rpolymorphism
      // JAVA
          : topic == "encapsulation1"
          ? encapsulation1
          : topic == "object1"
          ? object1
          : topic == "inheritance1"
          ? inheritance1
          : topic == "controlstatements"
          ? controlstatements
          : topic == "ctpolymorphism"
          ? ctpolymorphism
          : topic == "rtpolymorphism"
          ? rtpolymorphism
          : topic == "array"
          ? arrayjava
          : topic == "abstraction"
          ? abstraction
      //computer networking
          : topic == "ipaddressing1"
          ? ipaddressing1
          : topic == "networktopology1"
          ? networktopology1
          : topic == "osimodel1"
          ? osimodel1
          : topic == "protocols1"
          ? protocols1
          : topic == "routing1"
          ? routing1
          : topic == "tcpip1"
          ? tcpip1
            //OS
          : topic == "deadlock1"
                ? deadlock1
                : topic == "filemanagement1"
                ? filemanagement1
                : topic == "memorymanagement1"
                ? memorymanagement1
                : topic == "misc1"
                ? misc1
                : topic == "operatingsystem1"
                ? operatingsystem1
                : topic == "processmanagement1"
                ? processmanagement1
                : topic == "synch1"
                ? synch1
            //SQL
                : topic == "AF1"
                ? AF1
                : topic == "Clauses1"
                ? Clauses1
                : topic == "createdb1"
                ? createdb1
                : topic == "dataconstraints1"
                ? dataconstraints1
                : topic == "functions1"
                ? functions1
                : topic == "joiningdata1"
                ? joiningdata1
                : topic == "operators1"
                ? operators1
                : topic == "queries1"
                ? queries1
                : topic == "tables1"
                ? tables1
                : topic == "views1"
                ? views1
            //DSA
                : topic == "array1"
                ? array1
                : topic == "graph1"
                ? graph1
                : topic == "hashing1"
                ? hashing1
                : topic == "heap1"
                ? heap1
                : topic == "linkedlist1"
                ? linkedlist1
                : topic == "matrix1"
                ? matrix1
                : topic == "queue1"
                ? queue1
                : topic == "string1"
                ? string1
                : topic == "stack1"
                ? stack1
                : topic == "tree1"
                ? tree1

          : "Invalid Request"
  ));

  if (response.statusCode == 200) {
    final dynamic data = json.decode(response.body);
    print(response.body);
    print(data);
    if (data is List) {
      List<Question> questions =
          data.map((json) => Question.fromJson(json)).toList();
      return questions;
    } else {
      throw Exception('Invalid data format');
    }
  } else {
    throw Exception('Failed to load questions');
  }
}

class QuizScreen extends StatefulWidget {
  final topic;
  // final String email;
  const QuizScreen({
    Key? key,
    required this.topic,
  });

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  int? selectedAnswerIndex;
  int questionIndex = 0;
  int score = 0;
  late Timer _timer;
  int _secondsRemaining = 15;
  late List<Question> questions = [];

  @override
  void initState() {
    super.initState();
    getQuestionsAndStartTimer();
  }

  Future<void> getQuestionsAndStartTimer() async {
    questions = await fetchQuestions(widget.topic);
    startTimer();
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }

  void startTimer() {
    _timer = Timer.periodic(Duration(seconds: 1), (timer) {
      setState(() {
        if (_secondsRemaining > 0) {
          _secondsRemaining--;
        } else {
          _timer.cancel();
          goToNextQuestion();
        }
      });
    });
  }

  void resetTimer() {
    setState(() {
      _secondsRemaining = 15;
    });
    _timer.cancel(); // Cancel the existing timer before starting a new one
    startTimer();
  }

  void pickAnswer(int value) {
    resetTimer();
    selectedAnswerIndex = value;
    final question = questions[questionIndex];
    if (selectedAnswerIndex == question.correctAnswerIndex) {
      score++;
    }
    setState(() {});
  }

  void goToNextQuestion() {
    resetTimer();
    if (questionIndex < questions.length - 1) {
      questionIndex++;
      selectedAnswerIndex = null;
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    if (questions.isEmpty) {
      return Center(child: CircularProgressIndicator());
    }

    final question = questions[questionIndex];
    bool isLastQuestion = questionIndex == questions.length - 1;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Quiz App'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Text(
              question.question,
              style: const TextStyle(
                fontSize: 21,
              ),
              textAlign: TextAlign.center,
            ),
            Text(
              '$_secondsRemaining seconds remaining',
              style: const TextStyle(
                fontSize: 16,
                color: Colors.red,
              ),
            ),
            ListView.builder(
              shrinkWrap: true,
              itemCount: question.options.length,
              itemBuilder: (context, index) {
                return GestureDetector(
                  onTap: selectedAnswerIndex == null
                      ? () => pickAnswer(index)
                      : null,
                  child: AnswerCard(
                    currentIndex: index,
                    question: question.options[index],
                    isSelected: selectedAnswerIndex == index,
                    selectedAnswerIndex: selectedAnswerIndex,
                    correctAnswerIndex: question.correctAnswerIndex,
                  ),
                );
              },
            ),
            isLastQuestion
                ? RectangularButton(
                    onPressed: () {
                      // Inside QuizScreen
                      Navigator.of(context).pushReplacement(
                        MaterialPageRoute(
                          builder: (_) => ResultScreen(
                            score: score,
                            totalQuestions: questions.length,
                            //email:widget.email, // Pass the total number of questions
                          ),
                        ),
                      );
                    },
                    // onPressed: () {
                    //   /* Navigator.push(
                    //       context,
                    //       MaterialPageRoute(
                    //           builder: (context) => ResultScreen(score: score, totalQuestions: questions.length,))); */
                    // },
                    label: 'Finish',
                  )
                : RectangularButton(
                    onPressed:
                        selectedAnswerIndex != null ? goToNextQuestion : null,
                    label: 'Next',
                  ),
          ],
        ),
      ),
    );
  }
}

class VoiceIntro extends StatefulWidget {
  const VoiceIntro({super.key,});
  // final int score;
  // final int questionlength;

  @override
  State<VoiceIntro> createState() => _VoiceIntroState();
}

class _VoiceIntroState extends State<VoiceIntro> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Audio Evaulation"),
          centerTitle: true,
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
        floatingActionButton: FloatingActionButton(
          onPressed: (){
              Navigator.push(context, MaterialPageRoute(builder: (context)=>TextToSpeechScreen()));
          },
          child: Icon(Icons.mic),

        ),
        body: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(22.0),
              child: Container(
                  height: 60,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    color: Colors.grey.shade200,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(12.0),
                    child: Text("Communication Test",style: TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 18,
                    ),),
                  ),),
            ),
            
            Padding(
              padding: const EdgeInsets.all(25.0),
              child: Container(
                  height: 100,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    color: Color.fromARGB(255, 215, 252, 218),
                    borderRadius: BorderRadius.circular(12)
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text("Herman is Just like that th rest of us. Everybody he has to mamke all kin ",style: TextStyle(
                      fontSize: 20,
                      wordSpacing: 10
                    ),),
                  )),
            ),
            SizedBox(
              height: 10,
            ),
          ],
        ));
  }
}

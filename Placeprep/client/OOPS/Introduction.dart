import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:placeprep/mcq/models/question.dart';
import 'package:placeprep/widgets/customwidget.dart';

class Introduction extends StatefulWidget {
  const Introduction({Key? key}) : super(key: key);

  @override
  State<Introduction> createState() => _IntroductionState();
}

class _IntroductionState extends State<Introduction> {
  @override
  Widget build(BuildContext context) {
    return CustomWidget(
      text: "Introduction",
      topic: "Introduction",
      link: 'https://www.javatpoint.com/what-is-object-oriented-programming',
      //hacklink: 'https://www.hackerrank.com/challenges/classes-objects/problem',
       // Pass the fetchQuestions function
    );
  }
}

class Class extends StatefulWidget {
  const Class({Key? key}) : super(key: key);

  @override
  State<Class> createState() => _ClassState();
}

class _ClassState extends State<Class> {
  @override
  Widget build(BuildContext context) {
    return CustomWidget(
      text: "Class",
      topic: "classobj",
      link: 'https://www.geeksforgeeks.org/classes-objects-java/',
      //hacklink: 'https://www.hackerrank.com/challenges/classes-objects/problem',
       // Pass the fetchQuestions function
    );
  }
}

class Inheritance extends StatefulWidget {
  const Inheritance({Key? key}) : super(key: key);

  @override
  State<Inheritance> createState() => _InheritanceState();
}

class _InheritanceState extends State<Inheritance>{
  @override
  Widget build(BuildContext context) {
    return CustomWidget(
      text: "Inheritance",
      topic: "inheritance",
      link: 'https://www.geeksforgeeks.org/inheritance-in-java/',
      //hacklink: 'https://www.hackerrank.com/challenges/classes-objects/problem',
    );
  }
}


class Cpolymorphism extends StatefulWidget {
  const Cpolymorphism({Key? key}) : super(key: key);

  @override
  State<Cpolymorphism> createState() => _CpolymorphismState();
}

class _CpolymorphismState extends State<Cpolymorphism> {
  @override
  Widget build(BuildContext context) {
    return CustomWidget(
      text: "Compile Polymorphism",
      topic: "cpolymorphism",
      link: 'https://www.javatpoint.com/compile-time-polymorphism-in-java',
      //hacklink: 'https://www.hackerrank.com/challenges/classes-objects/problem',

    );
  }
}

class Rpolymorphism extends StatefulWidget {
  const Rpolymorphism({Key? key}) : super(key: key);

  @override
  State<Rpolymorphism> createState() => _RpolymorphismState();
}

class _RpolymorphismState extends State<Rpolymorphism> {
  @override
  Widget build(BuildContext context) {
    return CustomWidget(
      text: "Runtime Polymorphism",
      topic: "rpolymorphism",
      link: 'https://www.javatpoint.com/compile-time-polymorphism-in-java',
      //hacklink: 'https://www.hackerrank.com/challenges/classes-objects/problem',

    );
  }
}

class Abstraction extends StatefulWidget {
  const Abstraction({Key? key}) : super(key: key);

  @override
  State<Abstraction> createState() => _AbstractionState();
}

class _AbstractionState extends State<Abstraction> {

  @override
  Widget build(BuildContext context) {
    return CustomWidget(
      text: "Abstraction",
      topic: "abstraction",
      link: 'https://www.javatpoint.com/abstract-class-in-java',
      

    );
  }
}

class Encapsulation extends StatefulWidget {
  const Encapsulation({Key? key}) : super(key: key);

  @override
  State<Encapsulation> createState() => _EncapsulationState();
}

class _EncapsulationState extends State<Encapsulation> {
  @override
  Widget build(BuildContext context) {
    return CustomWidget(
      text: "Encapsulation",
      topic: "encapsulation",
      link: 'https://www.javatpoint.com/encapsulation',
     
    );
  }
}

// Similarly, update other classes like Abstraction, Encapsulation, Inheritance, etc.

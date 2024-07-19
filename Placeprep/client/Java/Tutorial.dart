import 'package:flutter/material.dart';
import 'package:placeprep/Authentication/config.dart';
import 'package:placeprep/widgets/customwidget.dart';
import 'package:webview_flutter/webview_flutter.dart';

class Tutorial extends StatefulWidget {
  const Tutorial({super.key});

  @override
  State<Tutorial> createState() => _TutorialState();
}

class _TutorialState extends State<Tutorial> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Tutorial",
        link: 'https://www.geeksforgeeks.org/java/', );
  }
}


//Abstraction
class Array extends StatefulWidget {
  const Array({super.key});

  @override
  State<Array> createState() => _ArrayState();
}

class _ArrayState extends State<Array> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
      text: "Array",
      topic: "arrayjava",
      link: 'https://www.geeksforgeeks.org/arrays-in-java/?ref=lbp',
      // topic: "abstraction",
    );
  }
}

//Encapsulation
class Abstraction extends StatefulWidget {
  const Abstraction({super.key});

  @override
  State<Abstraction> createState() => _AbstractionState();
}

class _AbstractionState extends State<Abstraction> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Abstraction",
        link: 'https://www.geeksforgeeks.org/abstraction-in-java-2/',

    );
  }
}

//Inheritance
class Compile_Polymorphism extends StatefulWidget {
  const Compile_Polymorphism({super.key});

  @override
  State<Compile_Polymorphism> createState() => _Compile_PolymorphismState();
}

class _Compile_PolymorphismState extends State<Compile_Polymorphism> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
      text: "Compile time polymorphism",
      topic: "ctpolymorphism",
      link: 'https://www.geeksforgeeks.org/compile-time-polymorphism-in-java/',
      // topic: "inheritance",
    );
  }
}

//Compile Polymorphism
class Controlstatements extends StatefulWidget {
  const Controlstatements({super.key});

  @override
  State<Controlstatements> createState() => _ControlstatementsState();
}

class _ControlstatementsState extends State<Controlstatements> {
  @override
  Widget build(BuildContext context) {
    return CustomWidget(
        text: "Control Statements",
        topic: "controlstatements",
        link: 'https://www.geeksforgeeks.org/decision-making-javaif-else-switch-break-continue-jump/', );
  }
}

//Runtime Polymorphism

class Encapsulation extends StatefulWidget {
  const Encapsulation({super.key});

  @override
  State<Encapsulation> createState() => _EncapsulationState();
}

class _EncapsulationState extends State<Encapsulation> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Encapsulation",
      topic: "encapsulation1",
        link: 'https://www.geeksforgeeks.org/encapsulation-in-java/', );
  }
}

class Inheritance extends StatefulWidget {
  const Inheritance({super.key});

  @override
  State<Inheritance> createState() => _InheritanceState();
}

class _InheritanceState extends State<Inheritance> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Inheritance",
        topic: "inheritance1",
        link: 'https://www.geeksforgeeks.org/inheritance-in-java/', );
  }
}

class Objectandclasses extends StatefulWidget {
  const Objectandclasses({super.key});

  @override
  State<Objectandclasses> createState() => _ObjectandclassesState();
}

class _ObjectandclassesState extends State<Objectandclasses> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Objectandclasses",
        topic: "object1",
        link: 'https://www.geeksforgeeks.org/classes-objects-java/', );
  }
}

class Runtime_Polymorphism extends StatefulWidget {
  const Runtime_Polymorphism({super.key});

  @override
  State<Runtime_Polymorphism> createState() => _Runtime_Polymorphism();
}

class _Runtime_Polymorphism extends State<Runtime_Polymorphism> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Runtime polymorphism",
        topic: "rtpolymorphism",
        link: 'https://www.geeksforgeeks.org/difference-between-compile-time-and-run-time-polymorphism-in-java/', );
  }
}
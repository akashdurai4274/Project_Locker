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
        link: 'https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/?ref=shm', );
  }
}


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
      link: 'https://www.geeksforgeeks.org/array-data-structure/?ref=lbp',
      topic: "array1",
    );
  }
}

//Encapsulation
class Graph extends StatefulWidget {
  const Graph({super.key});

  @override
  State<Graph> createState() => _GraphState();
}

class _GraphState extends State<Graph> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Graph",
        link: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/?ref=lbp',
        topic: "graph1",
    );
  }
}

//Inheritance
class Hashing extends StatefulWidget {
  const Hashing({super.key});

  @override
  State<Hashing> createState() => _HashingState();
}

class _HashingState extends State<Hashing> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
      text: "Hashing",
      link: 'https://www.geeksforgeeks.org/hashing-data-structure/?ref=lbp',
      topic: "hashing1",
    );
  }
}

//Compile Polymorphism
class Heap extends StatefulWidget {
  const Heap({super.key});

  @override
  State<Heap> createState() => _HeapState();
}

class _HeapState extends State<Heap> {
  @override
  Widget build(BuildContext context) {
    return CustomWidget(
        text: "Heap",
        topic:"heap1",
        link: 'https://www.geeksforgeeks.org/heap-data-structure/?ref=lbp', );
  }
}

//Runtime Polymorphism

class LinkedList extends StatefulWidget {
  const LinkedList({super.key});

  @override
  State<LinkedList> createState() => _LinkedListState();
}

class _LinkedListState extends State<LinkedList> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "LinkedList",
        topic: "linkedlist1",
        link: 'https://www.geeksforgeeks.org/data-structures/linked-list/?ref=lbp', );
  }
}

class Matrix extends StatefulWidget {
  const Matrix({super.key});

  @override
  State<Matrix> createState() => _MatrixState();
}

class _MatrixState extends State<Matrix> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Matrix",
        topic: "matrix1",
        link: 'https://www.geeksforgeeks.org/matrix/', );
  }
}

class Queue extends StatefulWidget {
  const Queue({super.key});

  @override
  State<Queue> createState() => _QueueState();
}

class _QueueState extends State<Queue> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Queue",
        topic: "queue1",
        link: 'https://www.geeksforgeeks.org/queue-data-structure/?ref=lbp', );
  }
}

class StackDSA extends StatefulWidget {
  const StackDSA({super.key});

  @override
  State<StackDSA> createState() => _StackDSA();
}

class _StackDSA extends State<StackDSA> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Stack",
        topic: "stack1",
        link: 'https://www.geeksforgeeks.org/stack-data-structure/?ref=lbp', );
  }
}

class Tree extends StatefulWidget {
  const Tree({super.key});

  @override
  State<Tree> createState() => _TreeState();
}

class _TreeState extends State<Tree> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Tree",
        topic: "tree1",
        link: 'https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/', );
  }
}

class StringDSA extends StatefulWidget {
  const StringDSA({super.key});

  @override
  State<StringDSA> createState() => _StringDSAState();
}

class _StringDSAState extends State<StringDSA> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "StringDSA",
        topic: "string1",
        link: 'https://www.geeksforgeeks.org/string-data-structure/?ref=lbp', );
  }
}
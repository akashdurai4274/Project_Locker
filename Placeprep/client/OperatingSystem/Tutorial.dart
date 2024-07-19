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
        link: 'https://www.geeksforgeeks.org/operating-systems/', );
  }
}


//Abstraction
class Deadlocks extends StatefulWidget {
  const Deadlocks({super.key});

  @override
  State<Deadlocks> createState() => _DeadlocksState();
}

class _DeadlocksState extends State<Deadlocks> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
      text: "Deadlocks",
      link: 'https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/',
      topic: "deadlock1",
    );
  }
}


class FileManagement extends StatefulWidget {
  const FileManagement({super.key});

  @override
  State<FileManagement> createState() => _FileManagementState();
}

class _FileManagementState extends State<FileManagement> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
      text: "FileManagement",
      link: 'https://www.geeksforgeeks.org/file-systems-in-operating-system/',
      topic: "filemanagement1",
    );
  }
}

//Inheritance
class MemoryManagement extends StatefulWidget {
  const MemoryManagement({super.key});

  @override
  State<MemoryManagement> createState() => _MemoryManagementState();
}

class _MemoryManagementState extends State<MemoryManagement> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
      text: "Memory management",
      link: 'https://www.geeksforgeeks.org/memory-management-in-operating-system/',
      topic: "memorymanagement1",
    );
  }
}

//Compile Polymorphism
class Misc extends StatefulWidget {
  const Misc({super.key});

  @override
  State<Misc> createState() => _MiscState();
}

class _MiscState extends State<Misc> {
  @override
  Widget build(BuildContext context) {
    return CustomWidget(
        text: "Misc",
        topic: "misc1",
        link: 'https://docs.python.org/3/library/os.html', );
  }
}


class ProcessManagement extends StatefulWidget {
  const ProcessManagement({super.key});

  @override
  State<ProcessManagement> createState() => _ProcessManagementState();
}

class _ProcessManagementState extends State<ProcessManagement> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "ProcessManagement",
        topic: "processmanagement1",
        link: 'https://www.geeksforgeeks.org/introduction-of-process-management/', );
  }
}

class Synchronization extends StatefulWidget {
  const Synchronization({super.key});

  @override
  State<Synchronization> createState() => _SynchronizationState();
}

class _SynchronizationState extends State<Synchronization> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Matrix",
        topic: "synch1",
        link: 'https://www.geeksforgeeks.org/introduction-of-process-synchronization/', );
  }
}
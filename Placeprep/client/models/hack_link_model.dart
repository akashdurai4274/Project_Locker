import 'package:flutter/material.dart';

class HackLinkModel extends ChangeNotifier {
  String? _hacklink;

  // Getter for hacklink
  String? get hacklink => _hacklink;

  // Method to update hacklink and notify listeners
  void updateHacklink(String newLink) {
    _hacklink = newLink;
    notifyListeners();
  }
}

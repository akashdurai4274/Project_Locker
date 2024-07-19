import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:placeprep/mcq/screens/quiz_screen.dart';
import 'package:placeprep/models/hack_link_model.dart';
import 'package:placeprep/theme/color.dart';
import 'package:provider/provider.dart';
import 'package:webview_flutter/webview_flutter.dart';

class CustomWidget extends StatefulWidget {
  final String text;
  final dynamic link;
  final  topic;
  const CustomWidget({super.key, required this.text, required this.link, this.topic});

  @override
  State<CustomWidget> createState() => _CustomWidgetState();
}

class _CustomWidgetState extends State<CustomWidget> {
  late Future<bool> pageLoaded;
  late WebViewController controller;
  bool _hackLinkUpdated = false;

  @override
  void initState() {
    super.initState();
    controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.disabled)
      ..loadRequest(Uri.parse(widget.link));
    pageLoaded = Future.value(false); // Initially, page is not loaded
    controller.currentUrl().then((currentUrl) {
      if (currentUrl == widget.link) {
        setState(() {
          pageLoaded =
              Future.value(true); // Set pageLoaded to true when page is loaded
        });
      }
    });
    
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(90.0),
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(15.0),
            child: AppBar(
              leading: Builder(
                builder: (context) => InkWell(
                  child: Icon(Icons.menu),
                  onTap: () {
                    Scaffold.of(context).openDrawer();
                  },
                ),
              ),
              title: Text(widget.text),
              titleSpacing: 0.0,
              centerTitle: true,
              toolbarHeight: 60.0,
              toolbarOpacity: 0.8,
              shape: const RoundedRectangleBorder(
                borderRadius: BorderRadius.only(
                  topRight: Radius.circular(30),
                  topLeft: Radius.circular(30),
                  bottomRight: Radius.circular(30),
                  bottomLeft: Radius.circular(30),
                ),
              ),
              elevation: 1.0,
              shadowColor: Colors.grey,
              backgroundColor: Colors.white60,
            ),
          ),
        ),
      ),
      body: Stack(
        children: [
          Center(
            child: WebViewWidget(controller: controller),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => QuizScreen(topic:widget.topic,)),
          );
        },
        icon: Icon(Icons.assignment),
        label: Text("Take Test"),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(30.0)),
        ),
        elevation: 2.0,
        extendedPadding: EdgeInsets.all(40),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        splashColor: Colors.grey,
        highlightElevation: 8.0, // Adjust the size as needed
      ),
    );
  }
}

Widget buildMenuItem(String title, VoidCallback onTap) {
  return Card(
    elevation: 1, // Add elevation for shadow effect
    color: Colors.white,
    shadowColor: Colors.grey.withOpacity(0.9), // Customize shadow color
    margin: EdgeInsets.fromLTRB(25, 15, 0, 15), // Add margin for spacing
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.only(
        topLeft: Radius.circular(30),
        bottomLeft: Radius.circular(30),
      ),
      // Set border radius to 20
    ),
    child: ListTile(
      title: Center(child: Text(title)),
      onTap: onTap,
    ),
  );
}

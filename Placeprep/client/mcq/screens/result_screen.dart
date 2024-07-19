import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter_speed_dial/flutter_speed_dial.dart';
import 'package:image_gallery_saver/image_gallery_saver.dart';
import 'package:image_picker/image_picker.dart';
import 'package:placeprep/mcq/screens/voice_screen.dart';

class ResultScreen extends StatelessWidget {
  const ResultScreen({
    Key? key,
    required this.score,
    required this.totalQuestions,
  }) : super(key: key);

  final int score;
  final int totalQuestions; // Receive the total number of questions

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Result Screen'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          const SizedBox(width: 1000),
          const Text(
            'Your Score: ',
            style: TextStyle(
              fontSize: 34,
              fontWeight: FontWeight.w500,
            ),
          ),
          Stack(
            alignment: Alignment.center,
            children: [
              SizedBox(
                height: 250,
                width: 250,
                child: CircularProgressIndicator(
                  strokeWidth: 10,
                  value: score / totalQuestions, // Use totalQuestions here
                  color: Colors.green,
                  backgroundColor: Colors.white,
                ),
              ),
              Column(
                children: [
                  Text(
                    score.toString(),
                    style: const TextStyle(fontSize: 80),
                  ),
                  const SizedBox(height: 10),
                  Text(
                    '${(score / totalQuestions * 100).round()}%',
                    style: const TextStyle(fontSize: 25),
                  )
                ],
              ),
            ],
          ),
        ],
      ),
  
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => const WebViewScreen(url: 'https://www.hackerrank.com/dashboard'),
            ),
          );
        },
        tooltip: 'Hacklink',
        child: const Icon(Icons.link),
      ),
    );
  }
}

class WebViewScreen extends StatelessWidget {
  final String url;

  const WebViewScreen({Key? key, required this.url}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Hacklink'),
      ),
      body: Stack(
        children: [
          InAppWebView(
            initialUrlRequest: URLRequest(
              url: WebUri(url),
            ),
          ),
          const Positioned(
            bottom: 16,
            right: 16,
            child: FinishTestBar(),
          ),
        ],
      ),
    );
  }
}

class FinishTestBar extends StatelessWidget {
  const FinishTestBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SpeedDial(
      icon: Icons.check,
      activeIcon: Icons.close,
      backgroundColor: Colors.blue,
      activeBackgroundColor: Colors.red,
      spacing: 10,
      children: [
        SpeedDialChild(
          child: const Icon(Icons.cloud_upload),
          backgroundColor: Colors.blue,
          label: 'Upload Screenshot',
          onTap: () async {
            final ImagePicker _picker = ImagePicker();
            final XFile? image = await _picker.pickImage(source: ImageSource.gallery);
            if (image != null) {
              final imageBytes = await image.readAsBytes();
              final result = await ImageGallerySaver.saveImage(Uint8List.fromList(imageBytes));
              if (result['isSuccess']) {
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                  content: Text('Screenshot uploaded and saved successfully'),
                ));
              } else {
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                  content: Text('Failed to save uploaded screenshot'),
                ));
              }
            } else {
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                content: Text('No image selected for upload'),
              ));
            }
          },
        ),
      ],
    );
  }
}

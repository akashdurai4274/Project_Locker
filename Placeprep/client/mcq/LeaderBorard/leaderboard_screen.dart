
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:placeprep/Authentication/config.dart';

class LeaderBoard extends StatefulWidget {
  LeaderBoard({Key? key}) : super(key: key);

  @override
  State<LeaderBoard> createState() => _LeaderBoardState();
}

class _LeaderBoardState extends State<LeaderBoard> {


  void loadlead() async {
  try {
    var response = await http.get(Uri.parse(leaders));
    if (response.statusCode == 200) {
      // If the server returns a 200 OK response, parse the JSON
      print(jsonDecode(response.body));
    } else {
      // If the server returns an error response, throw an exception
      throw Exception('Failed to load leaderboard');
    }
  } catch (error) {
    // Handle errors that occur during the HTTP request
    print('Error loading leaderboard: $error');
  }
}


  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    loadlead();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200], // Background color
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0.0,
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            children: [
              // Region selector
              Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20.0),
                  color: Colors.grey[300], // Background color
                  boxShadow: [
                    const BoxShadow(
                      color: Colors.white,
                      blurRadius: 15,
                      offset: Offset(-8, -8),
                    ),
                    BoxShadow(
                      color: Colors.grey[400]!,
                      blurRadius: 15,
                      offset: const Offset(8, 8),
                    ),
                  ],
                ),
                child: Padding(
                  padding: const EdgeInsets.all(20.0),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            'Leaders Of The League',
                            style: TextStyle(
                              color: Colors.grey[800], // Text color
                              fontWeight: FontWeight.bold,
                              fontSize: 16.0,
                            ),
                            textAlign: TextAlign.center,
                          )
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 30.0),
              // Winner containers
              const Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  NeumorphicContainer(
                    winnerName: "test",
                    rank: "1",
                  ),
                  NeumorphicContainer(
                    winnerName: "asdfg",
                    height: 170,
                    rank: "2",
                    width: 120,
                  ),
                  NeumorphicContainer(
                    winnerName: "qwert",
                    rank: "3",
                  ),
                ],
              ),
              const SizedBox(height: 30.0),

              // Contestant list
              const Padding(
                padding: EdgeInsets.all(2.0),
                child: Column(
                  children: [
                    ContestantList(),
                    ContestantList(),
                    ContestantList(),
                    ContestantList(),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class NeumorphicContainer extends StatelessWidget {
  final bool isFirst;
  final double? height;
  final double? width;
  final String? rank;
  final String? winnerName;

  const NeumorphicContainer({
    Key? key,
    this.isFirst = false,
    this.winnerName,
    this.height,
    this.width,
    this.rank,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Image.asset(
          //'assets/images/crown.png',
          'assets/images/crown.png',
          height: 70.0,
          width: 100.0,
        ),
        Container(
          height: height ?? 150.0,
          width: width ?? 100,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20.0),
            color: Colors.grey[300], // Background color
            boxShadow: [
              const BoxShadow(
                color: Colors.white,
                blurRadius: 15,
                offset: Offset(-8, -8),
              ),
              BoxShadow(
                color: Colors.grey[400]!,
                blurRadius: 15,
                offset: Offset(8, 8),
              ),
            ],
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const SizedBox(height: 10.0),
              CircleAvatar(
                radius: 30,
                backgroundColor: Colors.grey[300], // Background color
                child: const CircleAvatar(
                  radius: 28,
                  backgroundImage: AssetImage("assets/images/person.png"),
                ),
              ),
              const SizedBox(height: 10.0),
              Text(
                winnerName ?? "Akash",
                style: TextStyle(
                  color: Colors.grey[800], // Text color
                  fontSize: 12.0,
                  fontWeight: FontWeight.w600,
                ),
                textAlign: TextAlign.center,
              ),
              Text(
                rank ?? "2245",
                style: TextStyle(
                  color: Colors.grey[800], // Text color
                  fontSize: 16.0,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

class ContestantList extends StatelessWidget {
  const ContestantList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10.0),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(15.0),
          color: Colors.grey[300], // Background color
          boxShadow: [
            const BoxShadow(
              color: Colors.white,
              blurRadius: 15,
              offset: Offset(-8, -8),
            ),
            BoxShadow(
              color: Colors.grey[400]!,
              blurRadius: 15,
              offset: const Offset(8, 8),
            ),
          ],
        ),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              CircleAvatar(
                radius: 30,
                backgroundColor: Colors.grey[300], // Background color
                child: const CircleAvatar(
                  radius: 28,
                  backgroundImage: AssetImage("assets/images/person.png"),
                ),
              ),
              const SizedBox(
                width: 15,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Name",
                    style: TextStyle(
                      color: Colors.grey[800], // Text color
                    ),
                  ),
                  Text(
                    "@Name",
                    style: TextStyle(
                      color: Colors.grey[800], // Text color
                    ),
                  ),
                ],
              ),
              const SizedBox(
                width: 150,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(
                    "1234",
                    style: TextStyle(
                      color: Colors.grey[800], // Text color
                    ),
                  ),
                  const Icon(
                    Icons.favorite,
                    color: Colors.red,
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

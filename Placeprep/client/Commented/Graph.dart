// import 'package:flutter/material.dart';
// import 'package:online_course/ComputerNetworking/Tutorial.dart';
// import 'package:online_course/DSA/Array.dart';
// import 'package:online_course/DSA/Graph.dart';
// import 'package:online_course/DSA/Hashing.dart';
// import 'package:online_course/DSA/Heap.dart';
// import 'package:online_course/DSA/LinkedList.dart';
// import 'package:online_course/DSA/Matrix.dart';
// import 'package:online_course/DSA/Queue.dart';
// import 'package:online_course/DSA/StackDSA.dart';
// import 'package:online_course/DSA/StringDSA.dart';
// import 'package:online_course/DSA/Tree.dart';
// import 'package:webview_flutter/webview_flutter.dart';
//
// class AppColor {
//   static const MaterialColor primary1 = Colors.blue; // Replace with your desired color
// }
//
// // import 'package:webview_flutter/webview_flutter.dart';
// class Graph extends StatefulWidget {
//   const Graph({super.key});
//
//   @override
//   State<Graph> createState() => _InheritanceState();
// }
//
// class _InheritanceState extends State<Graph> {
//   bool isLoading = true;
//   Future<void> simulateloading() async{
//     await Future.delayed(Duration(seconds: 6));
//
//     setState(() {
//       isLoading=false;
//     });
//   }
//   @override
//   void initState() {
//     // TODO: implement initState
//     super.initState();
//     simulateloading();
//   }
//   final controller = WebViewController()
//     ..setJavaScriptMode(JavaScriptMode.disabled)
//     ..loadRequest(Uri.parse('https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/?ref=lbp'));
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: PreferredSize(
//         preferredSize: Size.fromHeight(90.0),
//         child: SafeArea(
//           child: Padding(
//             padding: const EdgeInsets.all(15.0),
//             child: AppBar(
//               leading: Builder(
//                 builder: (context) => InkWell(
//                   child: Icon(Icons.menu),
//                   onTap: () {
//                     Scaffold.of(context).openDrawer();
//                   },
//                 ),
//               ),
//               title: const Text("Graph"),
//               titleSpacing: 0.0,
//               centerTitle: true,
//               toolbarHeight: 60.0,
//               toolbarOpacity: 0.8,
//               shape: RoundedRectangleBorder(
//                 borderRadius: BorderRadius.only(
//                   topRight: Radius.circular(30),
//                   topLeft: Radius.circular(30),
//                   bottomRight: Radius.circular(30),
//                   bottomLeft: Radius.circular(30),
//                 ),
//               ),
//               elevation: 1.0,
//               shadowColor: Colors.grey,
//               backgroundColor: Colors.white,
//             ),
//           ),
//         ),
//       ),
//       body:Stack(
//         children: [
//           // Content of your page
//           Center(
//             child:
//             WebViewWidget(controller: controller),
//           ),
//           // Circular progress indicator
//           if (isLoading)
//             Center(
//               child: CircularProgressIndicator(),
//             ),
//         ],
//       ),
//       drawer: buildMenu(context),
//     );
//   }
// }
//
// Widget buildMenu(BuildContext context) {
//   return Drawer(
//     child: Container(
//       color: AppColor.primary1,
//       child: ListView(
//         padding: EdgeInsets.zero,
//         children: [
//           Container(
//             color: AppColor.primary1,
//             height: 250,
//             child: DrawerHeader(
//               decoration: BoxDecoration(
//                 color: AppColor.primary1,
//               ),
//               child: Column(
//                 crossAxisAlignment: CrossAxisAlignment.center,
//                 children: [
//                   // CircleAvatar(
//                   //   radius: 60,
//                   //   backgroundImage: AssetImage('assets/images/icon0.png'), // Replace with your image asset
//                   // ),
//                   Positioned(
//                     top: 20,
//                     right: 14,
//                     child: Container(
//                       width: 100,
//                       height: 100,
//                       decoration: BoxDecoration(
//                         border: Border.all(color: Colors.blue, width: 3),
//                         shape: BoxShape.circle,
//                         color: Colors.white,
//                         boxShadow: [
//                           BoxShadow(
//                             color: Colors.grey.withOpacity(0.5),
//                             spreadRadius: 2,
//                             blurRadius: 3,
//                             offset: Offset(0, 2),
//                           ),
//                         ],
//                       ),
//                       child: ClipOval(
//                         child: Image.asset(
//                           'assets/images/icon0.png',
//                           fit: BoxFit.cover,
//                           height: 25,
//                         ),
//                       ),
//                     ),
//                   ),
//                   SizedBox(
//                     height: 15,
//                   ),
//                   Text(
//                     'Graph',
//                     style: TextStyle(
//                         color: Colors.white,
//                         fontSize: 20,
//                         fontWeight: FontWeight.bold
//                     ),
//                   ),
//                   SizedBox(height: 15),
//                 ],
//               ),
//             ),
//           ),
//           buildMenuItem('Tutorial', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Tutorial()),
//             );
//           }),
//           buildMenuItem('Array', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Array()),
//             );
//           }),
//           buildMenuItem('Hashing', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Hashing()),
//             );
//           }),
//           buildMenuItem('Heap', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Heap()),
//             );
//           }),
//           buildMenuItem('Linked List', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => LinkedList()),
//             );
//           }),
//           buildMenuItem('Matrix', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Matrix()),
//             );
//           }),
//           buildMenuItem('Queue', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Queue()),
//             );
//           }),
//           buildMenuItem('Stack', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => StackDSA(children: [],)),
//             );
//           }),
//           buildMenuItem('String', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => StringDSA(children: [],)),
//             );
//           }),
//           buildMenuItem('Tree', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Tree(children: [],)),
//             );
//           }),
//           // Add other menu items similarly
//         ],
//       ),
//     ),
//   );
// }
//
// Widget buildMenuItem(String title, VoidCallback onTap) {
//   return Card(
//     elevation: 1, // Add elevation for shadow effect
//     color: Colors.white,
//     shadowColor: Colors.grey.withOpacity(0.9), // Customize shadow color
//     margin: EdgeInsets.fromLTRB(25,15,0,15), // Add margin for spacing
//     shape: RoundedRectangleBorder(
//       borderRadius: BorderRadius.only(
//
//         topLeft: Radius.circular(30),
//
//         bottomLeft: Radius.circular(30),
//       ),
//       // Set border radius to 20
//     ),
//     child: ListTile(
//       title: Center(child: Text(title)),
//       onTap: onTap,
//     ),
//   );
// }
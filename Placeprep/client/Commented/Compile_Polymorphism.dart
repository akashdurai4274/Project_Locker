// import 'package:flutter/material.dart';
// import 'package:online_course/ComputerNetworking/Tutorial.dart';
// import 'package:online_course/DSA/Array.dart';
// import 'package:online_course/Java/Abstraction.dart';
// import 'package:online_course/Java/Compile_Polymorphism.dart';
// import 'package:online_course/Java/Controlstatements.dart';
// import 'package:online_course/Java/Encapsulation.dart';
// import 'package:online_course/Java/Inheritance.dart';
// import 'package:online_course/Java/Objectandclasses.dart';
// import 'package:online_course/Java/Runtime_Polymorphism.dart';
// import 'package:webview_flutter/webview_flutter.dart';
//
// class AppColor {
//   static const MaterialColor primary1 = Colors.blue; // Replace with your desired color
// }
//
// // import 'package:webview_flutter/webview_flutter.dart';
// class Compile_Polymorphism extends StatefulWidget {
//   const Compile_Polymorphism({super.key});
//
//   @override
//   State<Compile_Polymorphism> createState() => _InheritanceState();
// }
//
// class _InheritanceState extends State<Compile_Polymorphism> {
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
//     ..loadRequest(Uri.parse('https://www.geeksforgeeks.org/compile-time-polymorphism-in-java/'));
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
//               title: const Text("Compile_Polymorphism"),
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
//                     'Compile_Polymorphism',
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
//           ),buildMenuItem('Introduction', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Tutorial()),
//             );
//           }),
//           buildMenuItem('Inheritance', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Inheritance()),
//             );
//           }),
//           buildMenuItem('Array', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Array()),
//             );
//           }),
//           buildMenuItem('polymorphism2', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Runtime_Polymorphism()),
//             );
//           }),
//           buildMenuItem('ClassandObject', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Objectandclasses()),
//             );
//           }),
//           buildMenuItem('Encapsulation', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Encapsulation()),
//             );
//           }),
//           buildMenuItem('Data Abstraction', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Abstraction()),
//             );
//           }),
//           buildMenuItem('Control Statements', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Controlstatements()),
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
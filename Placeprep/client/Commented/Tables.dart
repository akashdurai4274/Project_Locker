// import 'package:flutter/material.dart';
// import 'package:online_course/SQL/AggregateFunctions.dart';
// import 'package:online_course/SQL/Clauses.dart';
// import 'package:online_course/SQL/CreateDatabase.dart';
// import 'package:online_course/SQL/DataConstraints.dart';
// import 'package:online_course/SQL/Functions.dart';
// import 'package:online_course/SQL/Indexes.dart';
// import 'package:online_course/SQL/JoiningData.dart';
// import 'package:online_course/SQL/Operators.dart';
// import 'package:online_course/SQL/Queries.dart';
// import 'package:online_course/SQL/SQLBasics.dart';
// import 'package:online_course/SQL/Tables.dart';
// import 'package:online_course/SQL/Views.dart';
// import 'package:webview_flutter/webview_flutter.dart';
//
// class AppColor {
//   static const MaterialColor primary1 = Colors.blue; // Replace with your desired color
// }
//
// // import 'package:webview_flutter/webview_flutter.dart';
// class Tables extends StatefulWidget {
//   const Tables({super.key});
//
//   @override
//   State<Tables> createState() => _InheritanceState();
// }
//
// class _InheritanceState extends State<Tables> {
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
//     ..loadRequest(Uri.parse('https://www.geeksforgeeks.org/sql-create-table/?ref=lbp'));
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
//               title: const Text("Tables"),
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
//                     'Tables',
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
//           buildMenuItem('SQL Basics', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => SQLBasics()),
//             );
//           }),
//           buildMenuItem('Aggregate Functions', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => AggregateFunctions()),
//             );
//           }),
//           buildMenuItem('Clauses', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Clauses()),
//             );
//           }),
//           buildMenuItem('Create Database', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => CreateDatabase()),
//             );
//           }),
//           buildMenuItem('Data Constraints', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => DataConstraints()),
//             );
//           }),
//           buildMenuItem('Functions', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Functions()),
//             );
//           }),
//           buildMenuItem('Indexes', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Indexes()),
//             );
//           }),
//           buildMenuItem('Joining Data', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => JoiningData()),
//             );
//           }),
//           buildMenuItem('Operators', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Operators()),
//             );
//           }),
//           buildMenuItem('Queries', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Queries()),
//             );
//           }),
//           buildMenuItem('Views', () {
//             Navigator.pop(context); // Close the drawer
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => Views()),
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
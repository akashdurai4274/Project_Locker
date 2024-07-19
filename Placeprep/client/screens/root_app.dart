import 'package:flutter/material.dart';
import 'package:placeprep/mcq/LeaderBorard/leaderboard_screen.dart';
import 'package:placeprep/mcq/screens/voice_screen.dart';
import 'package:placeprep/screens/account.dart';
import 'package:placeprep/screens/chat.dart';
import 'package:placeprep/theme/color.dart';
import 'package:placeprep/utils/constant.dart';
import 'package:placeprep/widgets/bottombar_item.dart';
import '../mcq/screens/quiz_screen.dart';
import 'home.dart';
import 'package:jwt_decoder/jwt_decoder.dart';

class RootApp extends StatefulWidget {
  final String token;
  final String userId; // Add userId parameter
  const RootApp({required this.token, required this.userId, Key? key}) : super(key: key);

  @override
  _RootAppState createState() => _RootAppState();
}

class _RootAppState extends State<RootApp> with TickerProviderStateMixin {
  int _activeTab = 0;
  late List _barItems;
  late final AnimationController _controller = AnimationController(
    duration: const Duration(milliseconds: ANIMATED_BODY_MS),
    vsync: this,
  );
  late final Animation<double> _animation = CurvedAnimation(
    parent: _controller,
    curve: Curves.fastOutSlowIn,
  );
  late String email;

  @override
  void initState() {
    super.initState();
    Map<dynamic, dynamic> jwtDecodedToken = JwtDecoder.decode(widget.token);
    email = jwtDecodedToken['email'];
    print(email);
    _controller.forward();

    _barItems = [
      {
        "icon": "assets/icons/home.svg",
        "active_icon": "assets/icons/home.svg",
        "page": HomePage(),
      },
      {
        "icon": "assets/icons/chat.svg",
        "active_icon": "assets/icons/chat.svg",
        "page":LeaderBoard(),
      },
      {
        "icon": "assets/icons/profile.svg",
        "active_icon": "assets/icons/profile.svg",
        "page": AccountPage(loginusername: email, userId: widget.userId), // Pass userId here
      },
    ];
  }

  @override
  void dispose() {
    _controller.stop();
    _controller.dispose();
    super.dispose();
  }

  _buildAnimatedPage(page) {
    return FadeTransition(child: page, opacity: _animation);
  }

  void onPageChanged(int index) {
    _controller.reset();
    setState(() {
      _activeTab = index;
    });
    _controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColor.appBgColor,
      bottomNavigationBar: _buildBottomBar(),
      body: _buildPage(),
    );
  }

  Widget _buildPage() {
    return IndexedStack(
      index: _activeTab,
      children: List.generate(
        _barItems.length,
            (index) => _buildAnimatedPage(_barItems[index]["page"] ?? Container()),
      ),
    );
  }

  Widget _buildBottomBar() {
    return Padding(
      padding: const EdgeInsets.all(10.0),
      child: Container(
        height: 65,
        width: double.infinity,
        decoration: BoxDecoration(
          color: AppColor.bottomBarColor,
          borderRadius: BorderRadius.circular(40),
          boxShadow: [
            BoxShadow(
              color: AppColor.shadowColor.withOpacity(0.1),
              blurRadius: 1,
              spreadRadius: 1,
              offset: Offset(1, 1),
            )
          ],
        ),
        child: Padding(
          padding: const EdgeInsets.only(
            left: 25,
            right: 25,
            bottom: 5,
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: List.generate(
              _barItems.length,
                  (index) => BottomBarItem(
                _barItems[index]["icon"],
                isActive: _activeTab == index,
                activeColor: AppColor.primary,
                onTap: () {
                  onPageChanged(index);
                },
              ),
            ),
          ),
        ),
      ),
    );
  }
}

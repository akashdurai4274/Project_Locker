const UserService = require("../Services/userServices");
const userModel = require('../Models/userModel');

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const successRes = await UserService.userRegister(email, password);

        res.json({ status: true, success: "User Registered Successfully" });

    } catch (error) {
        console.error("Error occurred during user registration:", error.message);
        res.status(500).json({ status: false, error: "Internal Server Error" });
    }
}

// Login user
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await UserService.checkuser(email);
        if (!user) {
            return res.status(404).json({ status: false, error: "User Doesn't Exist" });
        }

        // Match Password
        const isMatch = await user.comparepassword(password);

        if (!isMatch) {
            return res.status(401).json({ status: false, error: "Password is Wrong" });
        }

        // Generate Token
        let tokenData = { _id: user._id, email: user.email };
        const token = await UserService.generateToken(tokenData, "secretkey", '1h');

        // Pass token and status code in response
        res.status(200).json({ status: true, token: token });
    } catch (error) {
        console.error("Error occurred during user login:", error.message);
        res.status(500).json({ status: false, error: "Internal Server Error" });
    }
}

// Function to fetch and display leaderboard
exports.displayLeaderboard = async (req, res, next) => {
    try {
        // Fetch users and sort them based on mcqscore in descending order
        const users = await userModel.find().sort({ mcqscore: -1 });

        // Display the top 3 users
        const topUsers = users.slice(0, 3).map((user, index) => ({
            position: index + 1,
            email: user.email,
            mcqscore: user.mcqscore
        }));

        res.status(200).json({ status: true, leaderboard: topUsers });
    } catch (error) {
        console.error("Error occurred while fetching leaderboard:", error.message);
        res.status(500).json({ status: false, error: "Internal Server Error" });
    }
}

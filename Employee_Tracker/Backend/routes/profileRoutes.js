const express = require('express');
const { getUserProfile } = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(authMiddleware, getUserProfile).put(authMiddleware, updateUserProfile);


module.exports = router;

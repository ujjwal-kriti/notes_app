const express = require('express');
const {
    register,
    login,
    getMe,
    logout
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const router = express.Router();
router.post('/signup', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/logout', protect, logout); // Add this line

module.exports = router;

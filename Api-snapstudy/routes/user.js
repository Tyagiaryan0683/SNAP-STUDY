const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/auth');

// Public Routes (No Authentication Required)
router.post('/signup', userController.signup);
router.post('/login', userController.login);

// Protected Routes (Authentication Required)
router.get('/users', authenticateToken, userController.getAllUser);

module.exports = router;

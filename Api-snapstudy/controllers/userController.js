const User = require('../models/User');
const bcrypt = require('bcrypt');
const { generateAuthToken } = require('../middlewares/auth');
require('dotenv').config();

// Signup 
async function signup(req, res) {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(400).json({ message: 'User  already exists.' });
    const user = new User(req.body);
    await user.save();
    const token = generateAuthToken(user);
    res.status(201).json({ message: 'Signup successful.', token });
  } catch (error) {
    res.status(500).json({ message: `Error during signup: ${error.message}` });
  }
};

// Login
async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User  not found.' });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials.' });
    const token = generateAuthToken(user);
    res.json({ message: 'Login successful.', token });
  } catch (error) {
    res.status(500).json({ message: `Error during login: ${error.message}` });
  }
};

// Protected route example
async function getAllUser(req, res) {
  try {
    const users = await User.find({});
    res.json({ message: 'All users fetched.', data: users });
  } catch (error) {
    res.status(500).json({ message: `Error fetching users: ${error.message}` });
  }
};

module.exports = {
  signup,
  login,
  getAllUser
};
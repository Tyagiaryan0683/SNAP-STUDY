const jwt = require('jsonwebtoken');

// Function to generate JWT token
const generateAuthToken = (user) => {
    return jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token){ 
        return res.status(401).json({ message: 'Access denied. No token provided.' }); 
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = { 
    generateAuthToken,
    authenticateToken 
};
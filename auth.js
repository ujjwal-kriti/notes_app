// middleware/auth.js
const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ success: false, error: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        req.user = decoded; // Add decoded user info to request
        next();
    } catch (error) {
        res.status(401).json({ success: false, error: 'Not authorized, token failed' });
    }
};

module.exports = { protect };

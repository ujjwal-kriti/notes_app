const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' }); // Ensure this path is correct

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }
        
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://Admin:Admin123@georgia.xetsq.mongodb.net/academic-writing?retryWrites=true&w=majority&appName=Georgia';

const testConnection = async () => {
    try {
        // Connect to the database
        await mongoose.connect(MONGODB_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    } finally {
        // Close the connection
        await mongoose.connection.close();
    }
};

testConnection();

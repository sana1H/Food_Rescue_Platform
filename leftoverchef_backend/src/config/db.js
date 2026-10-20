// a file to establish connection with db 
const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        process.exit(1);  // stops the app, 1 means exited with an error
    }
};
module.exports = connectDB; // make fun available to other files
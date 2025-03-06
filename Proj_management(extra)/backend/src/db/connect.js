import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB");
        await mongoose.connect(process.env.MONGO_URI, {});  
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Failed to connect to MongoDB", error.message);
        process.exit(1);
    }
};
export default connectDB;
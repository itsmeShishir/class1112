import mongoose from "mongoose";

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.LOCAL_URL);
        console.log("Database connected", process.env.LOCAL_URL);
    } catch (error) {
        console.log("Database connection failed", error.message);
    }
};

export default ConnectDb;
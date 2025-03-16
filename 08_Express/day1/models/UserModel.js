// username, email, password, role, createdAt, updatedAt, isVerified, 
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    }, 
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
// username, email, password, role, createdAt, updatedAt, isVerified, 
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    }, 
    image:{
        type: String,
        required: true,
    },
}, {timestamps: true});

const categoryModel = mongoose.model("category", categorySchema);

export default categoryModel;
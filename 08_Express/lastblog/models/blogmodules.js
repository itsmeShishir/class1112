import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    }, 
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    user:{
        type: String,
        required: false,
        // enum: ["admin", "user"],
        // default: "user",
    },
    
})

const blogModel = mongoose.model('blog', blogSchema);
export default blogModel
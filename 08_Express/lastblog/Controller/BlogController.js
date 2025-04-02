import blogModel from "../models/blogmodules.js";
import { uploadProductImage } from "../middleware/upload.js";
import path from "path";

// function like creat blog, read all blog, read single blog, update blog, delete blog
const createBlogController = async (req, res) => {
    try{
        // multer image 
        const {title, description, category, user} = req.body;
        const imagge = req.file ? req.file.path : ""; 
        const blog = new blogModel({
            title, 
            description, 
            image:imagge,  
            category, 
            user
        });
        await blog.save();
        res.status(200).json({
            success: true,
            message: "Blog created successfully",
            blog: blog,
        })
    }catch(e){
        res.status(500).json({
            success: false,
            message: e.message,
        })
    }
    
}
const getAllBlogController = async (req, res) => {
    try{
        const blogs = await blogModel.find();
        res.status(200).json({
            success: true,
            message: "Blogs fetched successfully",
            blogs: blogs,
        })
    }catch(e){
        res.status(500).json({
            success: false,
            message: e.message,
        })
    }
}
const getSingleBlogController = async (req, res) => {
    try{
        const {id} = req.params;
        const blogs = await blogModel.findById(id);
        res.status(200).json({
            success: true,
            message: "Blogs fetched successfully",
            blogs: blogs,
        })
    }catch(e){
        res.status(500).json({
            success: false,
            message: e.message,
        })
    }
}
const updateBlogController = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description, image, category, user} = req.body;
        const blog = await blogModel.findByIdAndUpdate(id, {title, description, image, category, user}, {new: true});
        if(!blog){
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            })
        }
        res.status(200).json({
            success: true,
            message: "Blog created successfully",
            blog: blog,
        })
    }catch(e){
        res.status(500).json({
            success: false,
            message: e.message,
        })
    }
    
}
const deleteBlogController = async (req, res) => {
    try{
        const {id} = req.params;
        const singleblog = await blogModel.findById(id);
        if(!singleblog){
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            })
        }
        const blog = await blogModel.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Blog delete successfully",
            blog: blog,
        })
    }catch(e){
        res.status(500).json({
            success: false,
            message: e.message,
        })
    }
}

export {
    createBlogController,
    getAllBlogController,
    getSingleBlogController,
    updateBlogController,
    deleteBlogController
}
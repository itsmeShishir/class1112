import express from "express";
import {
    createBlogController,
    getAllBlogController,
    getSingleBlogController,
    updateBlogController,
    deleteBlogController
} from "../Controller/BlogController.js";
import { uploadProductImage } from "../middleware/upload.js"
const route = express.Router();

route.get("/get-blogs", getAllBlogController);
route.post("/create-blog",uploadProductImage, createBlogController);
route.get("get-blog/:id", getSingleBlogController);
route.put("update-blog/:id", updateBlogController);
route.delete("delete-blog/:id", deleteBlogController);


export default route
import categoryModel from "../models/CategoryModel.js";
import productModel from "../models/ProductModel.js";

const CreateProductController = async(req, res)=>{
    try{
        const {name, image, price, qty, description, category} = req.body;
        const product = new productModel({name, image, price, qty, description, category});
        await product.save();
        res.status(200).json(
            {
                success: true,
                message: "Product created successfully",
                product: product
            }
        )
    }
    catch(e){
        res.status(400).json(
            {
                success: false, 
                message: e.message
            }
        )
    }
}

const getAllProductController = async(req, res)=>{
    try{
        const product = await productModel.find();
        res.status(200).json({
            success: true,
            products:product,
            message: "Product fetched successfully"
        })
    }
    catch(e){
        res.status(400).json(
            {
                success: false, 
                message: e.message
            }
        )
    }
}

const UpdateProductController = async(req, res)=>{
    try{
        const {id} = req.params;
        const {name, image, price, qty, description, category} = req.body;
        const product = await productModel.findByIdAndUpdate(id, {name, image, price, qty, description, category}, {new: true});
        res.status(200).json(
            {
                success: true,
                message: "Product updated successfully",
                product: product
            }
        )
    }
    catch(e){
        res.status(400).json(
            {
                success: false, 
                message: e.message
            }
        )
    }
}

const DeleteProductController = async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await productModel.findByIdAndDelete(id);
        res.status(200).json(
            {
                success: true,
                message: "Product deleted successfully",
            }
        )
    }
    catch(e){
        res.status(400).json(
            {
                success: false, 
                message: e.message
            }
        )
    }
}

const GetSingleProductController = async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await productModel.findById(id);
        res.status(200).json(
            {
                success: true,
                message: "Product fetched successfully",
                product: product
            }
        )
    }
    catch(e){
        res.status(400).json(
            {
                success: false, 
                message: e.message
            }
        )
    }
}

export {
    GetSingleProductController,
    DeleteProductController,
    UpdateProductController,
    getAllProductController,
    CreateProductController
}
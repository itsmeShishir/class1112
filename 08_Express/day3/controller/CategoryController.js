import categoryModel from "../models/CategoryModel.js";

const CreateCategoryController = async (req, res) => {
    try{
        const {name, image} = req.body
        const category = new categoryModel({name, image});
        await category.save();
        res.status(200).json(
            {
                success: true,
                message: "Category created successfully",
                category: category,
            }
        );
    }catch(e){
       res.status(400).json(
          {
            success: false,
            message: e.message
          }
       );
    }
}

const getAllCategoryController = async (req, res) => {
    try{
        const category = await categoryModel.find();
        res.status(200).json({
            success: true,
            categorys: category,
          });
        console.log(category);
    }catch(e){
       res.status(400).json(
           {
                success: false,
                message: e.message
           }
    );
    }
}

const UpdateCategoryController = async (req, res) => {
    try{
        let {id} = req.params;
        let {name, image} = req.body;
        const category = await categoryModel.findByIdAndUpdate(id, {name, image}, {new: true});
        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            category: category,
        });
    }catch(e){
        res.status(400).json({
            success: false,
            message: e.message,
        });
    }
}

const DeleteCategoryController = async (req, res) => {
    try{
        const {id} = req.params;
        const category = await categoryModel.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Category deleted successfully",
            category: category,
        });

    }catch(e){
       res.status(400).json({
           success: false,
           message: e.message,
       });
    }
}

export {
    CreateCategoryController,
    getAllCategoryController,
    UpdateCategoryController,
    DeleteCategoryController
};
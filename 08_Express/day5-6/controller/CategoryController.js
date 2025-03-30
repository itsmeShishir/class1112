import categoryModel from '../models/CategoryModel.js';

const CreateCategoryController = async (req, res) => {
  try {
    const { name, image } = req.body;

    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: 'Category name already exists',
      });
    }

    const category = new categoryModel({ name, image });
    await category.save();

    res.status(201).json({
      success: true,
      message: 'Category created successfully',
      category,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const getAllCategoryController = async (req, res) => {
  try {
    const categories = await categoryModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      categories,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const UpdateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const value = req.body;

    const category = await categoryModel.findByIdAndUpdate(id, value, {
      new: true,
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Category updated successfully',
      category,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const DeleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Category deleted successfully',
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

export {
  CreateCategoryController,
  getAllCategoryController,
  UpdateCategoryController,
  DeleteCategoryController,
};

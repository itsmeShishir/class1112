import express from 'express';
import {
  CreateCategoryController,
  getAllCategoryController,
  UpdateCategoryController,
  DeleteCategoryController,
} from '../controller/CategoryController.js';
import checkAdmin from '../middleware/adminMiddleware.js';

const router = express.Router();

router.post('/create-category', checkAdmin, CreateCategoryController);
router.get('/get-category', getAllCategoryController);
router.put('/update-category/:id', checkAdmin, UpdateCategoryController);
router.delete('/delete-category/:id', checkAdmin, DeleteCategoryController);

export default router;

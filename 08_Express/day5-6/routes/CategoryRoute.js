import { CreateCategoryController, 
    getAllCategoryController , 
    UpdateCategoryController, 
    DeleteCategoryController} from "../controller/CategoryController.js";
import checkAdmin from "../middleware/adminMiddleware.js";

import express from "express";
const router = express.Router();

router.post("/create-category/", CreateCategoryController);
router.get("/get-category", getAllCategoryController);
router.put("/update-category/:id",  checkAdmin, UpdateCategoryController);
router.delete("/delete-category/:id",  checkAdmin, DeleteCategoryController);

export default router;
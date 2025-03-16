import { CreateCategoryController, 
    getAllCategoryController , 
    UpdateCategoryController, 
    DeleteCategoryController} from "../controller/CategoryController.js";
import express from "express";
const router = express.Router();

router.post("/create-category", CreateCategoryController);
router.get("/get-category", getAllCategoryController);
router.put("/update-category/:id", UpdateCategoryController);
router.delete("/delete-category/:id", DeleteCategoryController);

export default router;
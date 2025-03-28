import { CreateProductController, 
    DeleteProductController, 
    getAllProductController, 
    GetSingleProductController, 
    UpdateProductController 
} from "../controller/ProductController.js";
import { uploadProductImage } from "../middleware/multer.js";
import checkAdmin from "../middleware/adminMiddleware.js";
import express from "express";
const router = express.Router();

router.post("/create-product", uploadProductImage,  CreateProductController);
router.get("/get-products", getAllProductController);
router.put("/update-product/:id",  uploadProductImage, checkAdmin, UpdateProductController);
router.delete("/delete-product/:id",  checkAdmin, DeleteProductController);
router.get("/get-product/:id", GetSingleProductController);

export default router;

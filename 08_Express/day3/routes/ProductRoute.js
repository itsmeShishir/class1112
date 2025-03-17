import { CreateProductController, 
    DeleteProductController, 
    getAllProductController, 
    GetSingleProductController, 
    UpdateProductController 
} from "../controller/ProductController.js";
import upload from "../middleware/multer.js";
import express from "express";
const router = express.Router();

router.post("/create-product", upload.single("image"), CreateProductController);
router.get("/get-producs", getAllProductController);
router.put("/update-product/:id", upload.single("image"), UpdateProductController);
router.delete("/delete-product/:id", DeleteProductController);
router.get("/get-product/:id", GetSingleProductController);

export default router;

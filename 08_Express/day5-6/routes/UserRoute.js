import { RegisterController, ProfileController, UpdateProfileController,  LoginContoller,GooogleLoginController, UpdatePasswordController } from "../controller/UserController.js";
import express from "express";
import { userMiddleware } from "../middleware/userMiddleware.js";
const router = express.Router();

router.post("/register", RegisterController);
router.post("/login", LoginContoller);
router.get("/profile", userMiddleware, ProfileController)
router.post("/google-login", GooogleLoginController);
router.put("/change-password", userMiddleware , UpdatePasswordController);
router.put("/update-profile", userMiddleware,  UpdateProfileController)
export default router;
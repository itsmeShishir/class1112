import { RegisterController, LoginContoller,GooogleLoginController } from "../controller/UserController.js";

import express from "express";
const router = express.Router();

router.post("/register", RegisterController);
router.post("/login", LoginContoller);
router.post("/google-login", GooogleLoginController);

export default router;
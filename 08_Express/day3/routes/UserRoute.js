import { RegisterController, LoginContoller } from "../controller/UserController.js";

import express from "express";
const router = express.Router();

router.post("/register", RegisterController);
router.post("/login", LoginContoller);

export default router;
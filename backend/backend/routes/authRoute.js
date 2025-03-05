import express from "express";
import {
  loginController,
  registerController,
} from "../controller/authController.js";

//router object
const router = express.Router();

//register
router.post("/register", registerController);

//login
router.post("/login", loginController);

//export
export default router;

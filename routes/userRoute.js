import express from "express";
import { getUserController } from "../controller/userController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//routes
// get user
router.get("/getUser", requireSignIn, getUserController);

export default router;

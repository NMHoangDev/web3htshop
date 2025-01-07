import express from "express";
const router = express.Router();
import { login, register, sendEmail } from "../controller/UserController.js";

router.post("/login", login);
router.post("/register", register);
router.post("/send-email", sendEmail);

export default router;

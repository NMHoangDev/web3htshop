import express from "express";
const router = express.Router();
import { getAllOrder } from "../controller/OrderController.js";

router.get("/get-all-order", getAllOrder);

export default router;

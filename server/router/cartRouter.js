import express from "express";
const router = express.Router();
import {
  addProductInCart,
  deleteProductInCart,
  getProductInCart,
  payMent,
  updateCheckedProductInCart,
  updateQuantityProductInCart,
} from "../controller/CartController.js";

router.post("/add-product-in-cart", addProductInCart);
router.get("/get-all-cart", getProductInCart);
router.post("/update-quantity-cart", updateQuantityProductInCart);
router.post("/update-ckecked-cart", updateCheckedProductInCart);
router.delete("/delete-item-cart", deleteProductInCart);
router.get("/payment", payMent);

export default router;

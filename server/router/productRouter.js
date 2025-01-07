import express from "express";
const router = express.Router();
import {
  getAllProduct,
  addProduct,
  deleteProduct,
  findProductById,
  updateProduct,
  sortByPrice,
  sortByType,
  pagination,
  sortByMaterial,
} from "../controller/ProductController.js";

router.get("/get-all-product", getAllProduct);
router.post("/add-product", addProduct);
router.delete("/delete-product", deleteProduct);
router.get("/get-product/", findProductById);
router.get("/sort-by-price", sortByPrice);
router.get("/sort-by-type", sortByType);
router.get("/sort-by-material", sortByMaterial);
router.get("/panigation", pagination);
router.patch("/update-product", updateProduct);

export default router;

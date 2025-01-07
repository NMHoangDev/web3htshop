import express from "express";
const router = express.Router();
import {
  deleteOneProduct,
  deleteUser,
  getAllUsers,
  updateUserById,
  editProducts,
} from "../controller/AdminController.js";

router.get("/get-all-users", getAllUsers);
router.delete("/delete-user-by-id", deleteUser);
router.delete("/delete-product-by-id", deleteOneProduct);
router.patch("/update-user-by-id", updateUserById);
router.patch("/update-product-by-id", editProducts);

export default router;

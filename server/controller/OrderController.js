import Order from "../model/Order.js";
import { StatusCodes } from "http-status-codes";
import Product from "../model/Product.js";
import User from "../model/User.js";
import CartItem from "../model/CartItem.js";

const getAllOrder = async (req, res) => {
  const idUser = req.query.userId;
  try {
    const orders = await Order.find();

    const countOrder = await Order.find({
      user: idUser,
    }).countDocuments();

    res.status(StatusCodes.OK).json({ orders, countOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Đã xảy ra lỗi" });
  }
};
export { getAllOrder };

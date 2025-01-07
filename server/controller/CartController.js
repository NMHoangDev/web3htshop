import BadRequest from "../erorr/bad-request.js";
import CartItem from "../model/CartItem.js";
import { StatusCodes } from "http-status-codes";
import CircularJSON from "circular-json";
import mongoose from "mongoose";
import Order from "../model/Order.js";
const addProductInCart = async (req, res, next) => {
  try {
    const { productId, quantity, userId } = req.body;
    // console.log(req.query);

    const cartItem = await CartItem.findOne({
      product: productId,
      user: userId,
    });
    let newCartItem = undefined;
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      newCartItem = await CartItem.create({
        product: productId,
        quantity: 1,
        isCheck: false,
        user: userId,
      });
      await newCartItem.save();
    }
    if (newCartItem) {
      res.status(StatusCodes.OK).json({ newCartItem });
    } else {
      res.status(StatusCodes.OK).json({ cartItem });
    }
  } catch (error) {
    next(error);
  }
};
const getProductInCart = async (req, res) => {
  const idUser = req.query.userId;
  try {
    const cartItems = await CartItem.find({
      user: idUser,
      paid: false,
    })
      .populate("product")
      .exec();
    const countItems = await CartItem.find({
      user: idUser,
      paid: false,
    }).countDocuments();

    res.status(StatusCodes.OK).json({ cartItems, countItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Đã xảy ra lỗi" });
  }
};
const updateQuantityProductInCart = async (req, res, next) => {
  try {
    const { productId, quantity, userId } = req.body;

    const cartItem = await CartItem.findOne({
      product: productId,
      user: userId,
    });

    cartItem.quantity = quantity;

    await cartItem.save();

    const countItems = await CartItem.find({ user: userId }).countDocuments();

    const cartItems = await CartItem.find({ user: userId })
      .populate("product")
      .exec();

    res.status(StatusCodes.OK).json({ cartItems, countItems });
  } catch (error) {
    next(error);
  }
};
const updateCheckedProductInCart = async (req, res, next) => {
  try {
    const { productId, isCheck, userId } = req.body;

    const cartItem = await CartItem.findOne({
      product: productId,
      user: userId,
    });

    cartItem.isCheck = isCheck;

    await cartItem.save();

    const countItems = await CartItem.CartItem.find({
      user: userId,
    }).countDocuments();

    const cartItems = await CartItem.find({ user: userId })
      .populate("product")
      .exec();
    //
    res.status(StatusCodes.OK).json({ cartItems, countItems });
  } catch (error) {
    next(error);
  }
};
const deleteProductInCart = async (req, res, next) => {
  try {
    const { productId, userId } = req.body;
    console.log(req.body);
    await CartItem.deleteOne({
      product: productId,
      user: userId,
    });
    const countItems = await CartItem.find({
      product: productId,
      user: userId,
    }).countDocuments();
    const cartItems = await CartItem.find({
      user: userId,
    })
      .populate("product")
      .exec();
    res.status(StatusCodes.OK).json({ cartItems, countItems });
  } catch (error) {
    next(error);
  }
};
const payMent = async (req, res, next) => {
  const userId = req.query.userId;
  try {
    const cartItems = await CartItem.find({
      user: userId,
      isCheck: true,
      paid: false,
    })
      .populate("product")
      .exec();

    let payMent = 0;
    cartItems.map((cartItem) => {
      payMent = cartItem.product.price * cartItem.quantity;
    });
    const newOrder = await Order.create({
      cartItems: cartItems,
      user: userId,
      price: payMent,
    });
    const result = await CartItem.updateMany(
      { user: userId, isCheck: true },
      { $set: { paid: true } }
    );

    const countItems = await CartItem.find({
      user: userId,
      isCheck: true,
      paid: false,
    }).countDocuments();

    res
      .status(StatusCodes.OK)
      .json({ payMent: payMent, countItems, newOrder, cartItems });
  } catch (error) {
    next(error);
  }
};
const createOrder = async (req, res, next) => {
  const userId = req.query.userId;
  try {
    const cartItems = await CartItem.find({
      user: userId,
      isCheck: true,
      paid: false,
    })
      .populate("product")
      .exec();

    let payMent = 0;
    cartItems.map((cartItem) => {
      payMent = cartItem.product.price * cartItem.quantity;
    });
    const result = await CartItem.updateMany(
      { user: userId, isCheck: true },
      { $set: { paid: true } }
    );

    const countItems = await CartItem.find({
      user: userId,
      isCheck: true,
      paid: false,
    }).countDocuments();

    res
      .status(StatusCodes.OK)
      .json({ payMent: payMent, result, countItems, cartItems });
  } catch (error) {
    next(error);
  }
};

export {
  addProductInCart,
  getProductInCart,
  updateQuantityProductInCart,
  deleteProductInCart,
  updateCheckedProductInCart,
  payMent,
  createOrder,
};

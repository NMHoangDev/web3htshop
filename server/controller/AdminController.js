import { StatusCodes } from "http-status-codes";
import Product from "../model/Product.js";
import User from "../model/User.js";

const createProduct = async (req, res, next) => {
  try {
    const { name, urlImg, desc, price, material, quantity, type } = req.body;
    console.log(req.body);
    if (
      !name ||
      !urlImg ||
      !desc ||
      !price ||
      !material ||
      !quantity ||
      !type
    ) {
      // throw BadRequest("Vui lòng nhập đầy đủ thông tin của sản phẩm");
    }
    const product = await Product.create({
      name,
      urlImg,
      desc,
      price,
      material,
      quantity,
      type,
    });
    product.save();
    res.status(StatusCodes.OK).json({ product });
  } catch (error) {
    next(error);
  }
};
const editProducts = async (req, res) => {
  const { name, urlImg, desc, price, material, quantity, type, idProduct } =
    req.body;

  try {
    const product = await Product.findOne({ _id: idProduct });
    product.name = name;
    product.urlImg = urlImg;
    product.desc = desc;
    product.price = price;
    product.material = material;
    product.quantity = quantity;
    product.type = type;
    product.save();
    res.status(StatusCodes.OK).json({ product });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
const deleteOneProduct = async (req, res) => {
  const { idProduct } = req.body.idProduct;
  try {
    console.log(idProduct);
    const result = await Product.deleteOne({ _id: idProduct });
    res.status(StatusCodes.OK).json({ result, message: "Đã xóa thành công" });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
const countProduct = async (req, res) => {
  res.send(" Count");
};

// Controller for User
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(StatusCodes.OK).json({ users });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER).json({ error });
  }
};
const deleteUser = async (req, res) => {
  try {
    const idUserDelete = req.query.id;
    console.log(idUserDelete);
    const result = await User.deleteOne({ _id: idUserDelete });
    res
      .status(StatusCodes.NO_CONTENT)
      .json({ message: "User deleted successfully", result });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER).json({ error });
  }
};
const updateUserById = async (req, res) => {
  try {
    const { id, name, password } = req.body;
    console.log(id);
    // Tìm người dùng theo ID
    const user = await User.findOne({ _id: id });

    // Kiểm tra xem người dùng có tồn tại không
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User not found" });
    }

    // Cập nhật thông tin người dùng
    user.name = name;
    user.password = password;

    // Lưu thay đổi
    await user.save();

    // Trả về phản hồi thành công
    res.status(StatusCodes.OK).json({ message: "Update successful" });
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
};
export {
  createProduct,
  editProducts,
  deleteOneProduct,
  countProduct,
  getAllUsers,
  deleteUser,
  updateUserById,
};

import BadRequest from "../erorr/bad-request.js";
import Product from "../model/Product.js";
import { StatusCodes } from "http-status-codes";

const getAllProduct = async (req, res, next) => {
  try {
    const product = await Product.find();
    // const productObject = JSON.parse(product);
    res.status(StatusCodes.OK).json({ product });
  } catch (error) {
    next(error);
  }
};
const addProduct = async (req, res, next) => {
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

const sortByPrice = async (req, res, next) => {
  const price = req.query.priceSort;
  const priceNumber = parseInt(price);

  const page = parseInt(req.query.page) || 1; // Lấy trang hiện tại từ query string
  // const page = 1; /
  const pageSize = 6; // Lấy số lượng mục trên mỗi trang từ query string

  try {
    const skipAmount = (page - 1) * pageSize; // Số lượng mục cần bỏ qua

    const totalProducts = await Product.find({
      price: { $gt: priceNumber, $lt: priceNumber + 500000 },
    }).countDocuments(); // Tính tổng số sản phẩm

    const totalPages = Math.ceil(totalProducts / pageSize); // Tính tổng số trang

    const products = await Product.find({
      price: { $gt: priceNumber, $lt: priceNumber + 500000 },
    })
      .skip(skipAmount)
      .limit(pageSize); // Truy vấn và giới hạn số lượng sản phẩm

    res.status(StatusCodes.OK).json({
      products,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const sortByType = async (req, res, next) => {
  const type = req.query.type;
  // const type = req.body.type;
  const page = parseInt(req.query.page) || 1; // Lấy trang hiện tại từ query string
  // const page = 1; /
  const pageSize = 9; // Lấy số lượng mục trên mỗi trang từ query string

  try {
    const skipAmount = (page - 1) * pageSize; // Số lượng mục cần bỏ qua

    const totalProducts = await Product.find({ type: type }).countDocuments(); // Tính tổng số sản phẩm

    const totalPages = Math.ceil(totalProducts / pageSize); // Tính tổng số trang

    const products = await Product.find({ type: type })
      .skip(skipAmount)
      .limit(pageSize); // Truy vấn và giới hạn số lượng sản phẩm

    res.status(StatusCodes.OK).json({
      products,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const sortByMaterial = async (req, res, next) => {
  const material = req.query.material;
  // const material = req.body.material;

  const page = parseInt(req.query.page) || 1;
  // const page = 1;
  const pageSize = 9; // Lấy số lượng mục trên mỗi trang từ query string

  try {
    const skipAmount = (page - 1) * pageSize; // Số lượng mục cần bỏ qua

    const totalProducts = await Product.find({
      material: material,
    }).countDocuments(); // Tính tổng số sản phẩm

    const totalPages = Math.ceil(totalProducts / pageSize); // Tính tổng số trang

    const products = await Product.find({ material: material })
      .skip(skipAmount)
      .limit(pageSize); // Truy vấn và giới hạn số lượng sản phẩm
    console.log(products);
    res.status(StatusCodes.OK).json({
      products,
      totalPages,
      currentPage: page,
      dataCheck: true,
    });
  } catch (error) {
    next(error);
  }
};
const pagination = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1; // Lấy trang hiện tại từ query string
  // const page = 1; /
  const pageSize = 9; // Lấy số lượng mục trên mỗi trang từ query string

  try {
    const skipAmount = (page - 1) * pageSize; // Số lượng mục cần bỏ qua

    const totalProducts = await Product.countDocuments(); // Tính tổng số sản phẩm

    const totalPages = Math.ceil(totalProducts / pageSize); // Tính tổng số trang

    const products = await Product.find().skip(skipAmount).limit(pageSize); // Truy vấn và giới hạn số lượng sản phẩm

    res.status(StatusCodes.OK).json({
      products,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const updateProduct = (req, res) => {
  res.send("updateProduct");
};
const deleteProduct = (req, res) => {
  res.send("deleteProduct");
};
const findProductById = (req, res) => {
  res.send("findProductById");
};
export {
  getAllProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  findProductById,
  sortByPrice,
  sortByType,
  pagination,
  sortByMaterial,
};

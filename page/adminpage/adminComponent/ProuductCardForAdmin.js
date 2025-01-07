import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames/bind";
import styles from "./ProductCardForAdmin.module.scss";

import { useAppContext } from "../../../context/appContext";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(styles);

function ProductCardForAdmin({
  name,
  desc,
  material,
  price,
  urlImg,
  id,
  quantity,
  type,
}) {
  const { addProductInCart, getAllCart, user, deleteProductById } =
    useAppContext();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClick = async function (e) {
    e.preventDefault();
    console.log(user);
    if (user) {
      const currentProduct = { productId: id, quantity: 1, userId: user._id };
      addProductInCart(currentProduct);
      console.log(typeof id);
      getAllCart();
    } else {
      navigate("/sign-up");
    }
  };
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    const productDelete = { idProduct: id };
    await deleteProductById(productDelete);
  };
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("main-content")}>
        <div
          className={cx("product-img")}
          onMouseEnter={(e) => {
            setShow(true);
          }}
          onMouseLeave={(e) => {
            setShow(false);
          }}
        >
          <img src={urlImg} alt="Hinhf anhr" />
        </div>
        <h1 className={cx("product-name")}>{name}</h1>
        <h5 className={cx("product-desc")}>{desc}</h5>
        <h5 className={cx("product-price")}>
          {formatNumberWithCommas(price)} VND
        </h5>
        <h5 className={cx("product-price")}>quantity: {quantity}</h5>
        <h5 className={cx("product-price")}>Material: {material} </h5>
        <div className={cx("btns")}>
          <button
            className={cx("btn-action")}
            onClick={(e) => handleDeleteProduct(e)}
          >
            Xóa
          </button>
          <button
            className={cx("btn-action")}
            onClick={(e) => {
              handleUpdateProduct(e);
            }}
          >
            Sửa
          </button>
        </div>
      </div>
      <span className={cx("type")}>{type}</span>
    </div>
  );
}

export default ProductCardForAdmin;

import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./ProductModel.module.scss";
import { useAppContext } from "../../context/appContext";

const cx = classnames.bind(styles);

function ProductModel({ name, urlImg, quantity, totalCost, price, id }) {
  const [values, setValues] = useState(parseFloat(quantity));

  const [previousValue, setPreviousValue] = useState(parseFloat(quantity + 1));
  const {
    updateCartItems,
    deleteCartItems,
    getAllCart,
    updateCheckCartItems,
    user,
  } = useAppContext();
  const quantityNumber = parseInt(quantity);
  const priceNumber = parseInt(price);
  useEffect(() => {
    const updateCheckProduct = { productId: id, isCheck: false };
    updateCheckCartItems(updateCheckProduct);
  }, []);
  const handleChangeNumberInput = async (e) => {
    const currentValue = e.target.valueAsNumber;

    const updateProduct = {
      productId: id,
      quantity: currentValue,
      userId: user._id,
    };
    updateCartItems(updateProduct);
    await getAllCart();

    setPreviousValue(currentValue);
    setValues(currentValue);
    // Cập nhật giá trị trước đó
  };
  const handleChangeCheck = async (e) => {
    console.log(e.target.value);
    const updateCheckProduct = {
      productId: id,
      isCheck: e.target.checked,
      userId: user._id,
    };
    await updateCheckCartItems(updateCheckProduct);
    await getAllCart();
  };
  const handleDeleteCartItem = async (e) => {
    e.preventDefault();
    console.log(id);
    const deleteCartItem = { productId: id, userId: user._id };
    await deleteCartItems(deleteCartItem);
    await getAllCart();
  };
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // console.log(id);
  return (
    <div className={cx("container")}>
      <div className={cx("nameProduct")}>
        <div className={cx("back")} id={cx("cartImage")}>
          <input
            className={cx("cb")}
            type="checkbox"
            onChange={(e) => handleChangeCheck(e)}
          />
          <img
            className={cx("product-img")}
            title={name}
            alt="Bộ ba - bộ 3 hũ mận vẽ hoa mai đỏ MNV-QT09 quà tết"
            src={urlImg}
          />
        </div>

        <a
          href="/khay-hop-mut-son-mai/bo-ba-bo-3-hu-man-ve-hoa-mai-do-mnv-qt09-qua-tet-2-myngheviet.vn/"
          id={cx("product_name")}
        >
          {name}
        </a>

        {/* <span className={cx("alert-text", "bold")}></span> */}
      </div>
      <div className={cx("cartUnitDisplay")}>
        {formatNumberWithCommas(price)}{" "}
      </div>
      <div className={cx("cartQuantity")}>
        <span
          onClick={() => {
            if (values > 1) {
              setValues((prev) => prev - 1);
              handleChangeNumberInput({
                target: { valueAsNumber: values - 1 },
              });
            }
          }}
        >
          -
        </span>
        <input
          type="number"
          className={cx("inputQuantity")}
          value={values}
          name="quantityInput"
          min={1}
          onChange={(e) => handleChangeNumberInput(e)}
        />
        <span
          onClick={() => {
            setValues((prev) => prev + 1);
            handleChangeNumberInput({ target: { valueAsNumber: values + 1 } });
          }}
        >
          +
        </span>
      </div>
      <div className={cx("cartQuantityUpdate")}>
        <input
          className={cx("change")}
          type="image"
          rel="2"
          title="Thay đổi số lượng"
          alt=""
          src="https://quatetmynghe.com/www/images/refresh.png"
        />
      </div>
      <div className={cx("cartTotalDisplay")}>
        {formatNumberWithCommas(priceNumber * quantityNumber)} VND
      </div>
      <div
        className={cx("cartRemoveItemDisplay")}
        onClick={(e) => handleDeleteCartItem(e)}
      >
        <a href="/product/del/2">
          <img
            className={cx("remove-product-img")}
            title=" Xóa sản phẩm "
            alt=""
            src="https://quatetmynghe.com/www/images/cross.png"
          />
        </a>
      </div>
    </div>
  );
}

export default ProductModel;

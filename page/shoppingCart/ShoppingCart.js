import React from "react";
import styles from "./ShoppingCart.module.scss";
import classnames from "classnames/bind";
import Shoppingcart from "../../component/shoppingcart/Shoppingcart.js";

const cx = classnames.bind(styles);
function ShoppingCart() {
  return (
    <div className={cx("wrapper")}>
      <Shoppingcart />
    </div>
  );
}

export default ShoppingCart;

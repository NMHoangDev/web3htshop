import React from "react";
import classnames from "classnames/bind";
import styles from "./Coupon.module.scss";
import { useAppContext } from "../../context/appContext";

const cx = classnames.bind(styles);

function Coupon({ name, percent, remain, cost }) {
  const { setPriceSales } = useAppContext();
  const handleOnClick = (e) => {
    e.preventDefault();
    setPriceSales(percent, name);
  };
  return (
    <div
      className={cx("element-voucher")}
      onClick={(e) => {
        handleOnClick(e);
      }}
    >
      <div className={cx("left-coupon", "coupon")}></div>
      <div className={cx("right-coupon")}>
        <div className={cx("coupon-title")}>
          {name}
          <span>
            <i> (Còn {remain})</i>
          </span>
        </div>
        <div className={cx("coupon-decription")}>
          Giảm {percent}% cho đơn hàng từ {cost}K
        </div>
      </div>
    </div>
  );
}

export default Coupon;

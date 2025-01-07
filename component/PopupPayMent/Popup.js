import React from "react";
import classnames from "classnames/bind";
import styles from "./Popup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { useAppContext } from "../../context/appContext.js";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(styles);

function Popup({}) {
  const { totalCost, quantityOfItemInCart, totalItemPayment, clearAlert } =
    useAppContext();
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const navigate = useNavigate();

  return (
    <div className={cx("wrapper")}>
      <div className={cx("icon")}>
        <div className={cx("success-icon")}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
      <div className={cx("text")}>Chúc mừng</div>
      <div className={cx("text-error")}>
        Bạn đã thanh toán thành công {formatNumberWithCommas(totalCost)}đ
      </div>
      <button
        className={cx("close-btn")}
        onClick={(e) => {
          e.preventDefault();

          navigate("/products");
        }}
      >
        Tiếp tục mua sắm
      </button>
    </div>
  );
}

export default Popup;

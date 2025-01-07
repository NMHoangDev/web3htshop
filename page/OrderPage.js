import React from "react";
import styles from "./OrderPage.module.scss";
import classnames from "classnames/bind";
import Navbar from "../component/navbar/Navbar.js";
import Olders from "../component/olders_info/Olders.js";
import Footer from "../component//Footer/Footer.js";
import CartPay from "../component/Cart_Pay/Cart_Pay.js";
import Cart_transport from "../component/Cart_Information_Transport/Cart_transport.js";
import Voucher from "../component/voucher/Voucher.js";
import Popup from "../component/PopupPayMent/Popup.js";
import { useAppContext } from "../context/appContext.js";
const cx = classnames.bind(styles);

function PayMentPage() {
  const { showMessagePayment, payment } = useAppContext();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("navigation")}>
        <Navbar />
      </div>
      <div className={cx("order")}>
        <Olders />
      </div>
    </div>
  );
}

export default PayMentPage;

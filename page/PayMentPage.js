import React from "react";
import styles from "./PayMent.module.scss";
import classnames from "classnames/bind";
import Navbar from "../component/navbar/Navbar.js";

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
      {showMessagePayment && (
        <div className={cx("pop-up")}>
          <Popup />
        </div>
      )}
      <div className={cx("main-=content")}>
        <Cart_transport />
      </div>
      <div className={cx("main-=content-1")}>
        <CartPay />
      </div>
      <div className={cx("main-=content-voucher")}>
        <Voucher />
      </div>

      <div className={cx("footer")}>
        <Footer />
      </div>
    </div>
  );
}

export default PayMentPage;

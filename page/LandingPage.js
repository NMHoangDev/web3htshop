import React from "react";
import styles from "./LandingPage.module.scss";
import classnames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
const cx = classnames.bind(styles);
function LandingPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("coating")}></div>
      <div className={cx("content")}>
        <h1>WELCOM TO 3HT SHOP</h1>
        <h4>
          <FontAwesomeIcon icon={faHandHoldingHeart} />
        </h4>
        <h2> THỦ CÔNG MỸ NGHỆ</h2>
        <div></div>
        <h3>NÂNG TẦM BÀN TAY VIỆT</h3>
      </div>
      <div className={cx("btn")}>
        <button className={cx("btn-login")}>SIGN IN</button>
        <button className={cx("btn-sign-up")}>SIGN UP</button>
      </div>
    </div>
  );
}

export default LandingPage;

import React from "react";
import styles from "./Notification.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

function Notification() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("icon")}>
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
      <h1>Sản phẩm đã được thêm vào giỏ hàng</h1>
    </div>
  );
}

export default Notification;

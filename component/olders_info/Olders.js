import React from "react";
import classnames from "classnames/bind";
import styles from "./Olders.module.scss";
import Older from "./Older";
const cx = classnames.bind(styles);
function Olders() {
  return (
    <div className={cx("wrapper")}>
      <Older />
    </div>
  );
}

export default Olders;

import React from "react";
import classnames from "classnames/bind";
import styles from "./GlobalStyles.module.scss";

const cx = classnames.bind(styles);

function GlobalStyles({ children }) {
  return <div className={cx("wrapper")}>{children}</div>;
}

export default GlobalStyles;

import React from "react";
import classnames from "classnames/bind";
import styles from "./Chart3.module.scss";
const cx = classnames.bind(styles);
function Chart3() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}></h1>
      <div className={cx("simple-bar-chart")}>
        <div className={cx("item")} style={{ "--clr": "#5EB344", "--val": 80 }}>
          <div className={cx("label")}>Tháng 1</div>
          <div className={cx("value")}>80%</div>
        </div>
        <div className={cx("item")} style={{ "--clr": "#FCB72A", "--val": 50 }}>
          <div className={cx("label")}>Tháng 2</div>
          <div className={cx("value")}>50%</div>
        </div>
        <div
          className={cx("item")}
          style={{ "--clr": "#F8821A", "--val": 100 }}
        >
          <div className={cx("label")}>Tháng 3</div>
          <div className={cx("value")}>100%</div>
        </div>
        <div className={cx("item")} style={{ "--clr": "#E0393E", "--val": 15 }}>
          <div className={cx("label")}>Tháng 4</div>
          <div className={cx("value")}>15%</div>
        </div>
        <div className={cx("item")} style={{ "--clr": "#963D97", "--val": 1 }}>
          <div className={cx("label")}>Tháng 5</div>
          <div className={cx("value")}>1%</div>
        </div>
        <div className={cx("item")} style={{ "--clr": "#069CDB", "--val": 90 }}>
          <div className={cx("label")}>Tháng 6</div>
          <div className={cx("value")}>90%</div>
        </div>
      </div>
    </div>
  );
}

export default Chart3;

import React from 'react'
import classnames from "classnames/bind";
import styles from "./Chart2.module.scss";
const cx = classnames.bind(styles);
function Chart2() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("year-stats")}>
                <div className={cx("month-group")}>
                    <div className={cx("bar", "h-100")}></div>
                    <p className={cx("month")}>Th1</p>
                </div>
                <div className={cx("month-group")}>
                    <div className={cx("bar", "h-50")}></div>
                    <p className={cx("month")}>Th2</p>
                </div>
                <div className={cx("month-group")}>
                    <div className={cx("bar", "h-75")}></div>
                    <p className={cx("month")}>Th3</p>
                </div>
                <div className={cx("month-group")}>
                    <div className={cx("bar", "h-25")}></div>
                    <p className={cx("month")}>Th4</p>
                </div>
                <div className={cx("month-group", "selected")}>
                    <div className={cx("bar", "h-100")}></div>
                    <p className={cx("month")}>Th5</p>
                </div>
                <div className={cx("month-group")}>
                    <div className={cx("bar", "h-50")}></div>
                    <p className={cx("month")}>Th6</p>
                </div>
                <div className={cx("month-group")}>
                    <div className={cx("bar", "h-75")}></div>
                    <p className={cx("month")}>Th7</p>
                </div>
                <div className={cx("month-group")}>
                    <div className={cx("bar", "h-25")}></div>
                    <p className={cx("month")}>Th8</p>
                </div>
                <div className={cx("month-group")}>
                    <div className={cx("bar", "h-50")}></div>
                    <p className={cx("month")}>Th9</p>
                </div>
                <div className={cx("month-group")}>
                    <div className={cx("bar", "h-75")}></div>
                    <p className={cx("month")}>Th10</p>
                </div>
                <div className={cx("month-group")}>
                    <div className={cx("bar", "h-25")}></div>
                    <p className={cx("month")}>Th11</p>
                </div>
                <div className={cx("month-group")}>
                    <div className={cx("bar", "h-100")}></div>
                    <p className={cx("month")}>Th12</p>
                </div>
            </div>
            <div className={cx("wrapper-stats-info")}>
                <div className={cx("stats-info")}>
                    <div className={cx("graph-container")}>
                        <div className={cx("percent")}>
                            <svg viewBox="0 0 36 36" className={cx("circular-chart")}>
                                <path className={cx("circle")} stroke-dasharray="100, 100" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className={cx("circle")} stroke-dasharray="85, 100" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className={cx("circle")} stroke-dasharray="60, 100" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className={cx("circle")} stroke-dasharray="30, 100" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                        </div>
                        <p>Tổng: 5.600.000VND</p>
                    </div>

                    <div className={cx("info")}>
                        <p>Sản phẩm bán chạy nhất: <br /><span>Gốm Tùng & Bát Minh Hoàng</span></p>
                        <p>Số sản phẩm được thêm: <span>2</span></p>
                        <p>Số sản phẩm bán ra: <span>2854</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Chart2

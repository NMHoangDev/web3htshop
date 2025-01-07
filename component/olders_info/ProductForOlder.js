import React from "react";
import classnames from "classnames/bind";
import styles from "./ProductForOlder.module.scss";
const cx = classnames.bind(styles);

function ProductForOlder() {
    return (
        <div className={cx("container")}>
           <div className={cx("main_container")}>
                <div className={cx("nameProduct")} >
                    <div className={cx("back")} id={cx("cartImage")}>

                        <img className={cx("product-img")}
                            title=" Bộ ba - bộ 3 hũ mận vẽ hoa mai đỏ MNV-QT09 quà tết "
                            alt="Bộ ba - bộ 3 hũ mận vẽ hoa mai đỏ MNV-QT09 quà tết"
                            src="https://quatetmynghe.com/www/uploads/images/3(15).jpg" />
                    </div>

                    <a href="/khay-hop-mut-son-mai/bo-ba-bo-3-hu-man-ve-hoa-mai-do-mnv-qt09-qua-tet-2-myngheviet.vn/" id={cx("product_name")}>
                        Bộ ba - bộ 3 hũ mận vẽ hoa mai đỏ MNV-QT09 quà tết
                    </a>

                    {/* <span className={cx("alert-text", "bold")}></span> */}
                </div>
                <div className={cx("cartUnitDisplay")}>720.000 VNĐ </div>
                <div className={cx("cartQuantity")}>
                     2
                    <span className={cx("alert-text", "bold")}></span>
                </div>

                <div className={cx("cartTotalDisplay")}>720.000 VNĐ</div>
           </div>
        </div>
    );
}

export default ProductForOlder;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames/bind";
import styles from "./Product.module.scss";
const cx = classnames.bind(styles);

function Product() {
  const [show, setShow] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("main-content")}>
        <div
          className={cx("product-img")}
          onMouseEnter={(e) => {
            setShow(true);
          }}
          onMouseLeave={(e) => {
            setShow(false);
          }}
        >
          {show && (
            <div className={cx("overlay")}>
              <button>
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          )}
        </div>
        <h1 className={cx("product-name")}>AIRBRUSH MATTE</h1>
        <h5 className={cx("product-desc")}>
          Skin-perfecting bronzed filter for the face
        </h5>
        <button className={cx("view-product")}>Xem sản phẩm</button>
      </div>
      <span className={cx("type")}>FEATURED</span>
    </div>
  );
}

export default Product;

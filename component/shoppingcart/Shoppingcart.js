import React, { useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./Shoppingcart.module.scss";
import ProductForCart from "../productforcart/ProductForCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { useAppContext } from "../../context/appContext";
import { Link } from "react-router-dom";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
const cx = classnames.bind(styles);

function Shoppingcart() {
  const { totalCost, quantityOfItemInCart, totalItemPayment, user } =
    useAppContext();
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={cx("baoboc")}>
      <Navbar />
      <header className={cx("header")}>
        <div className={cx("container2")}>
          <div className={cx("row")}>
            <div className={cx("col-12")}>
              <div className={cx("inner-head")}>
                <div className={cx("inner-left")}>
                  <div className={cx("contact")}>
                    Kết nối
                    <a className={cx("icon-color", "ic")} href="#">
                      <i className={cx("fa-brands fa-facebook")}></i>
                    </a>
                    <a className={cx("icon-color", "ig")} href="#">
                      <i className={cx("fa-brands fa-instagram")}></i>
                    </a>
                  </div>
                </div>

                <div className={cx("inner-right")}>
                  {/* <p className={cx("inner-box")}>
                    <a className={cx("info")} href="#">
                      <i className={cx("fa-solid fa-bell")}></i>
                      Thông báo 2
                    </a>
                  </p>
                  <p className={cx("inner-box")}>
                    <a className={cx("info")} href="#">
                      <i className={cx("fa-regular fa-circle-question")}></i>
                      Hỗ trợ
                    </a>
                  </p>
                  <p className={cx("inner-box")}>
                    <a className={cx("info")} href="#">
                      <i className={cx("fa-solid fa-user")}></i>
                      {user.name}
                    </a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("col-12")}>
              <div className={cx("inner-main")}>
                <a href="">
                  <div className={cx("inner-logo")}>
                    <img
                      className={cx("product-img")}
                      title=" Bộ ba - bộ 3 hũ mận vẽ hoa mai đỏ MNV-QT09 quà tết "
                      alt="Bộ ba - bộ 3 hũ mận vẽ hoa mai đỏ MNV-QT09 quà tết"
                      src="https://quatetmynghe.com/www/uploads/images/3(15).jpg"
                    />
                  </div>
                  <p className={cx("inner-desc")}>Giỏ hàng</p>
                </a>
                <form action="" style={{ display: "flex" }}>
                  <div className={cx("inner-search")}>
                    <input type="text" placeholder="Search" />
                  </div>
                  <button className={cx("search-btn")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={cx("  ")}>
        <div>
          <ProductForCart />
        </div>
        <br className={cx("clearBoth")} />
      </div>

      <div className={cx("footer")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-12")}>
              <div className={cx("inner-content")}>
                <div className={cx("inner-left")}>
                  <Link to="/products">
                    <div className={cx("row", "row-sm", "bt-order")}>
                      <a
                        className={cx(
                          "btn",
                          "btn-danger",
                          "btn-block",
                          "btn-blue"
                        )}
                        href="#"
                      >
                        {" "}
                        Tiếp tục mua{" "}
                      </a>
                    </div>
                  </Link>
                </div>
                <div className={cx("inner-right")}>
                  <div className={cx("BV92a")} role="region">
                    <div className={cx("DScaTh")}>
                      <div className={cx("znJ7TE")}>
                        <div className={cx("CoYXUV")}>
                          Tổng thanh toán ({totalItemPayment} sản phẩm):
                        </div>
                        <div className={cx("mketV9")}>
                          {formatNumberWithCommas(totalCost)}
                        </div>
                      </div>
                    </div>
                    <div className={cx("unV7eM")}></div>
                  </div>
                  <Link to="/payment">
                    <div
                      className={cx("row", "row-sm", "bt-order", "btn-shop")}
                    >
                      <a
                        className={cx(
                          "btn",
                          "btn-danger",
                          "btn-block",
                          "btn-red"
                        )}
                        href="/product/checkout"
                      >
                        {" "}
                        Đặt mua{" "}
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Shoppingcart;

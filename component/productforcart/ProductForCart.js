import React, { useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./ProductForCart.module.scss";
import ProductModel from "../productmodel/ProductModel";
import { useAppContext } from "../../context/appContext";
const cx = classnames.bind(styles);

function ProductForCart() {
  const { getAllCart, itemOnCart, totalCost } = useAppContext();
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  useEffect(() => {
    getAllCart();
  }, []);
  return (
    <div className={cx("container")}>
      <div id={cx("centercontent-wrapper")}>
        <div id="shoppingCartDefault" className={cx("centerColumn")}>
          <header>
            <h1 id={cx("cartDefaultHeading")}>Giỏ hàng</h1>
          </header>
          <div className={cx("table-wrapper")}>
            <div className={cx("table-responsive")}>
              <table
                cellspacing="0"
                cellpadding="0"
                id={cx("cartContentsDisplay")}
                className={cx("table", "table-hover")}
              >
                <tbody>
                  <tr className={cx("tableHeading")}>
                    <th id={cx("scProductsHeading")}>Sản phẩm</th>
                    <th className={cx("tbl-center")} id={cx("scUnitHeading")}>
                      Giá tiền
                    </th>
                    <th
                      className={cx("tbl-center")}
                      id={cx("scQuantityHeading")}
                    >
                      SL
                    </th>
                    <th
                      className={cx("tbl-center")}
                      id={cx("scUpdateQuantity")}
                    ></th>

                    <th className={cx("tbl-center")} id={cx("scTotalHeading")}>
                      Tổng số tiền
                    </th>
                    <th
                      className={cx("tbl-center")}
                      id={cx("scRemoveHeading")}
                    ></th>
                  </tr>
                </tbody>
              </table>
              <div id={cx("container")}>
                {itemOnCart.map((item) => {
                  return (
                    <div className={cx("cardForCard")}>
                      <ProductModel
                        name={item.product.name}
                        price={item.product.price}
                        quantity={item.quantity}
                        urlImg={item.product.urlImg}
                        id={item.product._id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div id={cx("cartSubTotal")}>
              Tổng tiền thanh toán: {formatNumberWithCommas(totalCost)} VNĐ
            </div>
          </div>

          <br className={cx("clearBoth")} />
        </div>
      </div>
    </div>
  );
}
export default ProductForCart;

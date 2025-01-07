import React from "react";
import classnames from "classnames/bind";
import styles from "./Voucher.module.scss";
import Coupon from "./Coupon";
import { useAppContext } from "../../context/appContext";

const cx = classnames.bind(styles);
function Voucher() {
  const { totalCost, vouchers, priceSales, code, payment, user } =
    useAppContext();
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className={cx("wrapper")}>
      <div className={cx("voucher-available")}>
        {vouchers.map((voucher) => {
          return (
            <Coupon
              name={voucher.code}
              percent={voucher.percent}
              remain={voucher.remaining}
              cost={voucher.cost}
            />
          );
        })}
        {/* <Coupon />
        <Coupon />
        <Coupon /> */}
      </div>
      <div className={cx("input-voucher")}>
        <input type="text" placeholder="Nhập mã giảm giá" value={code}></input>
        {/* <button>Áp dụng</button> */}
      </div>
      <div className={cx("divider")}></div>
      <div className={cx("pricing-info")}>
        <div className={cx("item")}>
          <p>Tạm tính</p>
          <p className={cx("sub")}>
            <span>{formatNumberWithCommas(totalCost)}đ</span>
            <span className={cx("saving")}>
              <i>
                (tiết kiệm <span className={cx("text-primary")}>99k)</span>
              </i>
            </span>
          </p>
        </div>
        <div className={cx("item")}>
          <p>Giảm giá</p>
          <p>
            <span className={cx("price-text")}>
              {formatNumberWithCommas(priceSales)}đ
            </span>
          </p>
        </div>
        <div className={cx("item")}>
          <p>Phí giao hàng</p>
          <p>
            <span>+25.000đ</span>
          </p>
        </div>
        <div className={cx("divider")}></div>
        <div className={cx("item", "total")}>
          <p className={cx("total-title")}>Tổng</p>
          <p className={cx("sub")}>
            <span className={cx("total-amount")}>
              {formatNumberWithCommas(totalCost + 25000 - priceSales)}đ
            </span>
            <span className={cx("discount-r")}>
              (Đã giảm {formatNumberWithCommas(priceSales)} trên giá gốc)
            </span>
          </p>
        </div>
        <div className={cx("divider")}></div>
        <div className={cx("item")}>
          <p className={cx("coolcash-refund")}>Hoàn tiền CoolCash</p>
          <p className={cx("text-primary")}>
            <span>+2.000</span>
          </p>
        </div>
      </div>
      <div className={cx("done")}>
        <p className={cx("cart-return-text")}>
          Nếu không hài lòng? Bạn hoàn toàn có thể trả lại sản phẩm. Tìm hiểu
          thêm
          <span>
            <b> tại đây.</b>
          </span>
        </p>
        <button
          className={cx("checkout-btn")}
          onClick={(e) => {
            e.preventDefault();
            const order = {
              userId: user._id,
            };
            payment(order);
          }}
        >
          Thanh toán{" "}
          <span>
            {formatNumberWithCommas(totalCost + 25000 - priceSales)}đ{" "}
          </span>{" "}
          <span> (COD) </span> <span> - Đổi trả 60 ngày</span>
        </button>
      </div>
    </div>
  );
}

export default Voucher;

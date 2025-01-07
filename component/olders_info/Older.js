import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./Older.module.scss";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import ProductForOlder from "./ProductForOlder";
const cx = classnames.bind(styles);
function Older() {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main-older")}>
        <div className={cx("info_older")}>
          <div className={cx("topic_older")}>
            <div className={cx("icon")}>
              <FiShoppingCart />
            </div>
            <div id={cx("topic")}>
              Thông Tin Đớn Hàng
              <div id={cx("boder")}></div>
            </div>
          </div>

          <div className={cx("infor_tranf")}>
            <div>
              <p>
                Mã đơn hàng: <span>HOS826</span>
              </p>
              <p>
                Ngày đặt hàng: <span>23/5/2024</span>
              </p>
              <p>
                Dự kiến giao hàng: <span>26/5/2024</span>
              </p>
            </div>
            <div className={cx("older_status")}>
              <p>Đang trong quá trình vận chuyển</p>
              <p>
                Vị trị hiện tại: <span>Kho vận chuyển Ngũ Hành Sơn</span>
              </p>
            </div>
          </div>
        </div>
        <div className={cx("btn_detail_older")}>
          <button className={cx("button")} type="button" onClick={handleClick}>
            <span className={cx("text")}>Chi tiết đơn hàng</span>
            <span className={cx("icon")}>
              <div className={cx("cg")}>
                {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </span>
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className={cx("detail_older")}>
          <div className={cx("header-detail")}>
            <div className={cx("product")}>Sản phẩm</div>
            <div className={cx("unit-price")}>Đơn giá</div>
            <div className={cx("quantity")}>Số lượng</div>
            <div className={cx("total")}>Thành giá</div>
          </div>
          <ProductForOlder />
          <ProductForOlder />
          <div id={cx("cartSubTotal")}>
            {/* Tổng tiền thanh toán: 123456 VNĐ <span>Đã thanh toán</span> */}
            <div id={cx("text")}>Tổng tiền thanh toán:</div>
            <div id={cx("value")}>
              1.440.000 VNĐ <span>(Đã thanh toán)</span>
            </div>
            {/* //  <div id={cx("dathanhtoan")}>(Đã thanh toán)</div> */}
          </div>
          <div className={cx("receiver_info")}>
            <div className={cx("topic_user")}>
              <div className={cx("icon")}>
                <FaUser />
              </div>
              <div id={cx("topic")}>
                Thông tin người nhận <div id={cx("boder")}></div>
              </div>
            </div>
            <p>
              Số điện thoại: <span>(+84) 379147397</span>
            </p>
            <p>
              Họ và tên người nhận: <span>Nguyễn Văn Hoàng</span>
            </p>
            <p>
              Địa chỉ:{" "}
              <span>
                352 Mai Đăng Chơn, phường Hòa Quý, quận Ngũ Hành Sơn, thành phố
                Đà Nẵng
              </span>
            </p>
            <p>
              Ghi chú: <span>sản phẩm có giá trị</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Older;

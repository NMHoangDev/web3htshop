import React from "react";
import classnames from "classnames/bind";
import styles from "./IntroduceAll.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);

function IntroduceAll() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left-side")}>
        <div className={cx("main-text")}>
          <h1>
            Tinh hoa<br></br> Việt Nam
          </h1>
          <div className={cx("gachngang")}></div>
          <p className={cx("main-content")}>
            3HT Shop đến với trang web bán đồ thủ công mỹ nghệ của chúng tôi!
            Đây là nơi tuyệt vời để khám phá và mua sắm những tác phẩm nghệ
            thuật tuyệt đẹp, được tạo ra bằng tay bởi các nghệ nhân tài ba.
          </p>

          <Link to="/introduce">
            <button>
              KHÁM PHÁ NGAY <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </Link>
        </div>
      </div>
      <div className={cx("right-side")}>
        <div className={cx("main-text")}>
          <h1>
            3HT SHOP<br></br> là gì?
          </h1>
          <div className={cx("gachngang")}></div>
          <p className={cx("main-content")}>
            Trang web của chúng tôi được thiết kế nhằm tạo ra một nền tảng trực
            tuyến để giới thiệu và quảng bá các sản phẩm thủ công Việt, kết nối
            các nghệ nhân và người mua hàng trên toàn quốc và trên thế giới. Cùng
            tìm hiểu chúng tôi đã làm gì nào!!!
          </p>
          <Link to="/introduce">
            <button>
              TÌM HIỂU NGAY <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroduceAll;

import React from "react";
import classnames from "classnames/bind";
import styles from "./Chart4.module.scss";
const cx = classnames.bind(styles);
function Chart4() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("text")}>
        <p id={cx("text")}>biểu đồ phân bổ sản phẩm </p>
      </div>
      <section id={cx("skills")} className={cx("toad-fullscreen")}>
        <article className={cx("skills")}>
          <div className={cx("t-6")}>
            <p>
              Chén bát<span></span>
              <span className={cx("skills")}></span>
            </p>
          </div>
          <div className={cx("t-6")}>
            <p>
              Nồi niêu<span></span>
              <span className={cx("skills")}></span>
            </p>
          </div>

          <div className={cx("t-6")}>
            <p>
              Rổ & Rá<span></span>
              <span className={cx("skills")}></span>
            </p>
          </div>
          <div className={cx("t-6")}>
            <p>
              Bàn ghế<span></span>
              <span className={cx("skills")}></span>
            </p>
          </div>

          <div className={cx("t-6")}>
            <p>
              Kệ tủ<span></span>
              <span className={cx("skills")}></span>
            </p>
          </div>
          <div className={cx("t-6")}>
            <p>
              Đồ trang trí<span></span>
              <span className={cx("skills")}></span>
            </p>
          </div>

          <div className={cx("t-6")}>
            <p>
              Đồ gia dụng<span></span>
              <span className={cx("skills")}></span>
            </p>
          </div>
          <div className={cx("t-6")}>
            <p>
              Đồ nội thất<span></span>
              <span className={cx("skills")}></span>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Chart4;

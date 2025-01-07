import React from "react";
import classnames from "classnames/bind";
import styles from "./Introduceweb.module.scss";
const cx = classnames.bind(styles);

function Introduce2() {
  return (
    <div className={cx("container")}>
      <div className={cx("text-box")}>
        <h1 className={cx("text-title")}>
          3HT mang <span className={cx("highlight1")}>Sứ mệnh</span> và{" "}
          <span className={cx("highlight2")}>Trách nhiệm</span> gìn sự văn hóa
          làng nghề của Việt Nam.
        </h1>
        <p>
          Description Product tell me how to change playlist height size like
          600px in html5 player. player good work now check this link
        </p>
        <button className={cx("btn-more")}>Tìm hiểu thêm</button>
      </div>
      <div className={cx("image-box")}>
        <img
          className={cx("photo-intro")}
          src="https://nhatrovanminh.com/_next/image?url=%2Fimages%2Fbanner-v2.jpg&w=1920&q=100"
          alt="Phòng trọ Văn Minh"
        />
      </div>
    </div>
  );
}

export default Introduce2;

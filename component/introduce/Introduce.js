import React from 'react'
import classnames from "classnames/bind";
import styles from "./Introduce.module.scss";
const cx = classnames.bind(styles);

function Introduce() {
  return (
    <div className={cx("container")}>
      <div className={cx("welcome")}>Welcome</div>
      <div className={cx("header")}>
        <h1 className={cx("title-1")}>CHÀO MỪNG ĐẾN VỚI 3HT</h1>
        <h3 className={cx("title-2")}>Sứ mệnh của chúng tôi:
          <br />
          Mỹ nghệ cho tình yêu, từ thiện cho cuộc sống
        </h3>
        <p className={cx("sub-title")}>Hiện nay, chúng tôi tận tâm mang đến những sản phẩm thủ công mỹ nghệ độc đáo, từ đó tạo
          cơ
          hội hỗ trợ từ
          thiện và phát triển cộng đồng. Mua sắm tại đây không chỉ là trải nghiệm độc đáo mà còn là cách để bạn
          lan
          tỏa tình yêu thương đến những người cần giúp đỡ</p>
        <div className={cx("readmore")}>
          <button className={cx('animated-button')}>
            <svg viewBox="0 0 24 24" className={cx('arr-2')} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className={cx('text')}>XEM RÕ HƠN</span>
            <span className={cx('circle')}></span>
            <svg viewBox="0 0 24 24" className={cx('arr-1')} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Introduce
import React from 'react'
import classnames from "classnames/bind";
import styles from "./Card.module.scss";
import 'bootstrap/dist/css/bootstrap.css';
const cx = classnames.bind(styles);

function Card({ img, title, num_type, num_source }) {
    return (
        <div className={cx("card",)}>
            <div className={cx("content")}>
                <h3 className={cx("title")}>
                    Sản phẩm cho <br /><span>{title}</span>
                </h3>
                <p className={cx("text")}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?
                </p>
                <a href="#" className={cx("link")}>
                    <span>Đi đến sản phẩm</span>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </a>
            </div>
            <div className={cx("extra")}>
                <h4>Tổng <span>{num_type}</span> loại sản phẩm  <br /> Với <span>{num_source}</span> nhà cung cấp</h4>
            </div>
            <img
                src={img}
                alt=""
            />
        </div>
    )
}
export default Card;


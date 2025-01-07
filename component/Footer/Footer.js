import React from 'react';
import styles from "./Footer.module.scss";

import classnames from "classnames/bind"

import imgvietnam from './IMAGE/banDoVietNam1.png';
import imglogo from './IMAGE/logobwd.png';

import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";

const cx = classnames.bind(styles);

function Footer() {
    return (
        <div className={cx("Footer")}>
            <div className={cx("Footer_information")}>
                <div className={cx("imgVietNam")}>
                    <img src={imgvietnam} alt="hình ảnh" id={cx("bando")} />
                </div>
                <div className={cx("Topic_Read_Icon")}>
                    <div className={cx("Topic")}><img src={imglogo} alt="hình ảnh" /></div>
                    <div className={cx("Read")}>
                        <div>
                            Được chế tác tỉ mỉ với tình yêu và sự cống hiến, mỗi sản phẩm hỗ
                            trợ các dự án từ thiện trong lĩnh vực giáo dục, chăm sóc sức khỏe
                            và phát triển cộng đồng. Hãy mua sắm cùng chúng tôi để tạo ra tác động tích cực.
                        </div>
                    </div>
                    <div className={cx("Icon")}>
                        <div><FaFacebookF id={cx("icon")} /></div>
                        <div><IoLogoInstagram id={cx("icon")} /></div>
                        <div><FaXTwitter id={cx("icon")} /></div>
                        <div><IoLogoYoutube id={cx("icon")} /></div>
                        <div><FaPinterestP id={cx("icon")} /></div>
                    </div>
                </div>
                <div className={cx("Contact")}>
                    <div className={cx("Topic_Contact")}>
                        <div id={cx("text")}>THÔNG TIN LIÊN HỆ</div>
                        <div id={cx("hr")}></div>
                    </div>
                    <div className={cx("Information_contact")}>
                        <div className={cx("icon")}>
                            <div id={cx("address")}><GrLocation id={cx("icon")} /></div>
                            <div><HiOutlinePhone id={cx("icon")} /></div>
                            <div><HiOutlineMailOpen id={cx("icon")} /></div>
                            <div><IoMdTime id={cx("icon")} /></div>
                        </div>
                        <div className={cx("information")}>
                            <div id={cx("address")}><a>Location : </a> 470 Trần Đại Nghĩa, Q. Ngũ Hành Sơn, Tp. Đà Nẵng</div>
                            <div><a>Phone number : </a> +84 987 654 321</div>
                            <div><a>Email address : </a> 3htteam@gmail.com</div>
                            <div><a>Mon-Fri : </a> 7:30 - 22:00</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={cx("text")}>Sản phẩm của tình thân - Sản phẩm của văn hóa Việt Nam - 3HT - Best Web Design 2024 </div>
        </div>
    );
}

export default Footer;
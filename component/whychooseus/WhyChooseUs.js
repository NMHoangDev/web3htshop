import React, { useState } from 'react'
import classnames from "classnames/bind";
import styles from "./WhyChooseUs.module.scss";
import { FaRegLightbulb } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShield } from '@fortawesome/free-solid-svg-icons';
import { AiFillLike } from "react-icons/ai";
import { IoIosChatbubbles } from "react-icons/io";
const cx = classnames.bind(styles);
function WhyChooseUs() {
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const handlePlayClick = () => {
        setIsVideoVisible(true);
    }
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains(cx('video-overlay'))) {
            setIsVideoVisible(false);
        }
    };
    return (
        <div className={cx("container")}>
            <div className={cx("header")}>
                <h2>Tại sao nên chọn 3HT?</h2>
                <p>  Chúng tôi đã làm được những gì? </p>
            </div>
            <div className={cx("main-content")}>
                <div className={cx("left-content", "main")}>
                    {/* ----- */}
                    <div className={cx("element-content", "list-wrap")} >
                        <div className={cx("description")}>
                            <h4>Nhận thức về xã hội</h4>
                            <p>Chúng tôi đã nỗ lực nâng cao nhận thức về các vấn đề xã hội quan trọng thông qua các chiến dịch truyền thông, sự kiện và chương trình giáo dục.</p>
                        </div>
                        <div className={cx("icon")}>
                            <FaRegLightbulb />
                        </div>
                    </div>
                    <div className={cx("element-content", "list-wrap")} >
                        <div className={cx("description")}>
                            <h4>Dự án từ thiện</h4>
                            <p>Chúng tôi đã đóng góp cho các quỹ từ thiện và tổ chức phi lợi nhuận để hỗ trợ các dự án quan trọng và tạo ra sự khác biệt thực sự.</p>
                        </div>
                        <div className={cx("icon")}>
                            <FaHandHoldingHeart />
                        </div>
                    </div>
                    <div className={cx("element-content", "list-wrap")} >
                        <div className={cx("description")}>
                            <h4>Cải thiện cuộc sống</h4>
                            <p>Chúng tôi đã làm việc để cải thiện cuộc sống của người dân thông qua các chương trình hỗ trợ, dịch vụ và cơ hội giáo dục.</p>
                        </div>
                        <div className={cx("icon")}>
                            <FontAwesomeIcon icon={faChartLine} />
                        </div>
                    </div>

                    {/* ----- */}
                </div>
                <div className={cx("center-content", "main")}>
                    {/* <img src={hinh1} alt="" /> */}

                    {!isVideoVisible && (<svg id={cx('play')} viewBox="0 0 163 163" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" onClick={handlePlayClick} style={{ cursor: 'pointer' }}>
                        <g fill="none">
                            <g transform="translate(2.000000, 2.000000)" strokeWidth="3">
                                <path d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11" id={cx('lineOne')} stroke="#00c8e2"></path>
                                <path d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z" id={cx('triangle')} stroke="#A3CD3A"></path>
                                <path d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159" id={cx('lineTwo')} stroke="#A5CB43"></path>
                            </g>
                        </g>
                    </svg>)}
                    {isVideoVisible && (
                        <div className={cx("video-overlay")} onClick={handleOverlayClick}>
                            <div className={cx("video-container")}>
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/zzcC1M2bSlY?si=WeULQxIwTqPdz5sm"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx("right-content", "main")}>
                    <div className={cx("element-content", "list-wrap")} data-aos="fade-up" data-aos-delay="100">
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faShield} />
                        </div>
                        <div className={cx('description')}>
                            <h4>Bảo tồn giá trị văn hóa</h4>
                            <p>Là dịch vụ góp phần bảo tồn và phát huy những ngành nghề thủ công truyền thống, tránh nguy cơ mai một.</p>
                        </div>
                    </div>
                    <div className={cx("element-content", "list-wrap")} data-aos="fade-up" data-aos-delay="100">
                        <div className={cx('icon')}>
                            <IoIosChatbubbles />
                        </div>
                        <div className={cx('description')}>
                            <h4>Trải nghiệm văn hóa</h4>
                            <p>Mang đến trải nghiệm văn hóa độc đáo, cho phép khám phá và tìm hiểu về phong tục tập quán, đời sống của người dân địa phương.</p>
                        </div>
                    </div>
                    <div className={cx("element-content", "list-wrap")} data-aos="fade-up" data-aos-delay="100">
                        <div className={cx('icon')}>
                            <AiFillLike />
                        </div>
                        <div className={cx('description')}>
                            <h4>Thúc đẩy phát triển bền vững</h4>
                            <p>Hỗ trợ bán hàng truyền thống góp phần phát triển kinh tế bền vững, hướng đến tương lai xanh cho thế hệ mai sau.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs

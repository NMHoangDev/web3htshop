import React from 'react';
import styles from "./Introduct_Function.module.scss";

import { CiShoppingCart } from "react-icons/ci";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbShoppingCartSearch } from "react-icons/tb";
import { TfiCommentAlt } from "react-icons/tfi";
import { GiEarthAmerica } from "react-icons/gi";
import { MdOutlineVolunteerActivism } from "react-icons/md";


import classnames from "classnames/bind"


const cx = classnames.bind(styles);

function Introduct_Function() {
    return (
        <div className={cx("Introduct_Function")}>
            <div className={cx("topic")}>
                <div className={cx("text-back")}>SERVICES</div>
                <div className={cx("text-front")}>DỊCH VỤ</div>
            </div>
            <div className={cx("services")}>
                <div className={cx("containner_services")}>
                    <div className={cx("container")}>
                        <div className={cx("icon")}><CiShoppingCart /></div>
                        <div className={cx("topic_services")}>Mua Sắm</div>
                        <div className={cx("text")}>
                            Trang wed mang lại trải nghiệm mua sắm tuyệt vời cho người dùng với hàng
                            loạt các sản phẩm mang thương hiệu văn hóa Việt Nam. Những sản phẩm vô cùng
                            đa dạng và phong phú.
                        </div>
                    </div>
                </div>
                <div className={cx("containner_services")}>
                    <div className={cx("container")}>
                        <div className={cx("icon")}><FaMoneyBillTransfer /></div>
                        <div className={cx("topic_services")}>Chuyển Khoản</div>
                        <div className={cx("text")}>
                            Ứng dụng sẽ hổ trợ trong việc thanh toán qua nhiều hình thức khác nhau.
                            Tạo ra sự tiện lợi nhất cho khách hàng.
                        </div>
                    </div>
                </div>
                <div className={cx("containner_services")}>
                    <div className={cx("container")}>
                        <div className={cx("icon")}><TbShoppingCartSearch /></div>
                        <div className={cx("topic_services")}>Tìm Kiếm Sản Phẩm</div>
                        <div className={cx("text")}>
                            Khách hàng có thể dễ dang tìm kiếm những sản phẩm mà mình muốn.
                            Ứng dụng được thiết lập với bộ lọc chính xác. Đem đến trái nghiệm tốt cho
                            khách hàng.
                        </div>
                    </div>
                </div>
                <div className={cx("containner_services")}>
                    <div className={cx("container")}>
                        <div className={cx("icon")}><GiEarthAmerica /></div>
                        <div className={cx("topic_services")}>Giới Thiệu Sản Phẩm</div>
                        <div className={cx("text")}>
                            Sản phẩm được cập nhập thông tin chính xác và đầy đủ.
                            Mỗi sản phẩm là một câu chuyện để đi đến trái tim của khách hàng.
                        </div>
                    </div>
                </div>
                <div className={cx("containner_services")}>
                    <div className={cx("container")}>
                        <div className={cx("icon")}><TfiCommentAlt /></div>
                        <div className={cx("topic_services")}>Đáng Giá và Nhận Xét</div>
                        <div className={cx("text")}>
                            Khách hàng có thể đánh giá sản phẩm mà mình mua cũng như đưa ra lời nhận xét về sản phẩm đó.
                            Điều này giúp cho khách hàng có thể đưa ra sự lựa chọn một cách chính xác.
                        </div>
                    </div>
                </div>
                <div className={cx("containner_services")}>
                    <div className={cx("container")}>
                        <div className={cx("icon")}><MdOutlineVolunteerActivism /></div>
                        <div className={cx("topic_services")}>Chương Trình Tình Nguyện</div>
                        <div className={cx("text")}>
                            Ứng dụng sẽ trích phần trăm lợi nhuận của mỗi sản phẩm để
                            thực hiện các chương trình tình nguyện, đến các vùng khó khăn.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Introduct_Function;

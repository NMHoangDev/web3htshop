import React from 'react';
import styles from "./Cart_Pay.module.scss";
import classnames from "classnames/bind";

import img_vanchuyen from "./IMG/icon_vanchuyen.png";
import img_zalopay from "./IMG/icon_zalopay.png";
import img_momo from "./IMG/icon_momo.png";
import img_vnpay from "./IMG/icon_vnpay.png";

const cx = classnames.bind(styles);

function CartPay() {
    return (
        <div className={cx("Cart_Pay")}>
            <div className={cx("topic")}>Thông tin vận chuyển</div>
            <div className={cx("pay")}>
                <div className={cx("pay_1")}>
                    <div id={cx("radio")}>
                        <input id={cx("input_radio")} type='radio' name='pay' />
                    </div>
                    <div id={cx("img")}>
                        <img src={img_vanchuyen} />
                        
                    </div>
                    <div id={cx("text")}>
                        <div className={cx("name_text")}>COD</div>
                        <div className={cx("text")}>Thanh toán khi nhận hàng</div>
                    </div>
                </div>
                <div className={cx("pay_2")}>
                    <div id={cx("radio")}><input id={cx("input_radio")} type='radio' name='pay' /></div>
                    <div id={cx("img")}>
                        <img src={img_zalopay} />
                    </div>
                    <div id={cx("text")}>
                        <div className={cx("name_text")}>Vĩ điện tử ZaloPay</div>
                        <div className={cx("text")}>Thẻ ATM/ Thẻ tín dụng(Credit card)/ Thẻ ghi nợ(Debit card)</div>
                    </div>
                </div>
                <div className={cx("pay_3")}>
                    <div id={cx("radio")}><input id={cx("input_radio")} type='radio' name='pay' /></div>
                    <div id={cx("img")}>
                        <img src={img_momo} />
                    </div>
                    <div id={cx("text")}>
                        <div className={cx("name_text")}>Thanh toán Momo</div>
                    </div>
                </div>
                <div className={cx("pay_4")}>
                    <div id={cx("radio")}><input id={cx("input_radio")} type='radio' name='pay' /></div>
                    <div id={cx("img")}>
                        <img src={img_vnpay} />
                    </div>
                    <div id={cx("text")}>
                        <div className={cx("name_text")}>Quét mã QR & Thanh toán bằng ứng dụng ngân hàng</div>
                        <div className={cx("text")}>Chuyển tiền qua vĩ điện tử(MoMo, ZaloPay,...)</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPay;
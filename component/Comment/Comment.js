import React from "react";
import styles from "./Comment.module.scss";
import classnames from "classnames/bind";
import avata1 from "./IMG/avata1.jpg";
import avata2 from "./IMG/avata2.jpg";
import avata3 from "./IMG/avata3.jpg";
import avata4 from "./IMG/avata4.jpg";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
const cx = classnames.bind(styles);

function Comment() {
  return (
    <div className={cx("Comment")}>
      <div className="account">
        <div className="account_img">
          <img src={avata2} alt="hình ảnh" />
        </div>
        <div class="account_comment">
          <div className="name">
            Tùng siêu nhân Hồng
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div>
            <div>
              <a id="a1">Chất liệu : </a>
              <a id="a2">Gỗ</a>
            </div>
            <div>
              <a id="a1">Kích thước: </a>
              <a id="a2">25cm</a>
            </div>
            <div>
              <a id="a1">Màu sắc : </a>
              <a id="a2">Hồng xinh xinh</a>
            </div>
          </div>
          <div>
            Hàng rất đẹp, rất thích hợp với siêu nhân Hồng. Tiếng trống có thể
            đánh tan mọi kẻ địch, làm run sợ Boss. Shop tu vấn rất nhiệt tình.
            Mãi iu Shop.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;

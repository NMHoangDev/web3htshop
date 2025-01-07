import React from "react";

import anhquochoang from "./img/anhquochoang.jpg";
import anhvanhoang from "./img/vanhoang.png";
import anhthanhtung from "./img/thanhtung.jpg";
import anhminhhoang from "./img/anhminhhoang.jpg";
import classNames from "classnames/bind";
import styles from "./TeamMember.module.scss";
const cx = classNames.bind(styles);

const TeamMember = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-md-12", "header")}>
            <div className={cx("section-title")}>
              <h2>Thành viên chủ chốt</h2>
            </div>
          </div>
          {[
            { img: anhminhhoang, name: "Nguyễn Minh Hoàng", title: "23IT086" },
            { img: anhvanhoang, name: "Nguyễn Văn Hoàng", title: "23IT088" },
            { img: anhthanhtung, name: "Nguyễn Thanh Tùng ", title: "23IT301" },
            { img: anhquochoang, name: "Nguyễn Quốc Hoàng", title: "23IT087" },
          ].map((member, index) => (
            <div
              className={cx("col-lg-3", "col-md-6", "element-member")}
              key={index}
            >
              <div className={cx("single-team-box")}>
                <div className={cx("team-image")}>
                  <img
                    src={member.img}
                    alt="team img"
                    style={{
                      backgroundSize: "cover",
                      width: 100 + "%",
                      height: 450 + "px",
                      objectFit: "cover",
                    }}
                  />
                  <div className={cx("team-social-icon")}>
                    <a href="fb.com/vcoch2711" className={cx("social-color-1")}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/vcoch_27/"
                      className={cx("social-color-2")}
                    >
                      <i className={cx("fab", "fa-instagram")}></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ho%C3%A0ng-nguy%E1%BB%85n-v%C4%83n-76100b2ab/"
                      className={cx("social-color-3")}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className={cx("team-info")}>
                  <h3>{member.name}</h3>
                  <span>{member.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

import React, { useRef } from "react";
import classnames from "classnames/bind";
import styles from "./About.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import about1 from "./img/about1.jpg";
import about2 from "./img/about2.jpg";
import { useAppContext } from "../../context/appContext";

const cx = classnames.bind(styles);

function Introduce() {
  const ref = useRef(null);
  const { showTitle, existTitle } = useAppContext();

  window.onscroll = function () {
    var navbarScroll = window.scrollY;

    if (navbarScroll > 730) {
      existTitle();
    }
  };
  return (
    <div className={cx("container")}>
      <div className={cx("row", "bg")}>
        <div className={cx("col-sm", "box-img-about")}>
          <div className={cx("main-img-about")}>
            <img src={about1} alt="About img" className={cx("img-style")} />
          </div>
          <div className={cx("sub-img-about")}>
            <div className={cx("press-img-about")}>
              <img src={about2} alt="About img" />
            </div>
          </div>
        </div>
        <div
          className={cx(
            "col-sm",
            "d-flex",
            "align-items-center",
            "justify-content-center"
          )}
        >
          <section className={cx("page-section", "content-about")}>
            <div className={cx("container", "px-4", "px-lg-5")}>
              <div
                className={cx(
                  "row",
                  "gx-4",
                  "gx-lg-5",
                  "justify-content-center"
                )}
              >
                <div className={cx("col-lg-12", "box-content-about")}>
                  <div className={cx("title-animation")}>
                    {showTitle && (
                      <div>
                        <h2 ref={ref}>
                          <span>TINH</span>
                          <span>HOA</span>
                          <span>LÀNG</span>
                          <span>NGHỀ</span>
                          <span>VIỆT</span>
                        </h2>
                      </div>
                    )}
                  </div>
                  {/* <h2 className={cx("text-black", "mt-0")}>VĂN HÓA SẢN PHẨM VIỆT</h2> */}
                  <hr className={cx("hr-style")} />
                  <p className={cx("text-white-75", "mb-4", "about-text")}>
                    Tại sao chúng ta phải chi trả rất nhiều cho sản phẩm nhập
                    khẩu cùng loại từ các nước khác như từ Trung Quốc, Thái
                    Lan,… trong khi những người thợ thủ công Việt đã tạo ra rất
                    nhiều sản phẩm tinh tế, mang đậm bản sắc văn hóa Việt và
                    xuất khẩu đi rất nhiều nước ở Châu Âu, Mỹ và Nhật Bản?
                  </p>
                  <p className={cx("text-white-75", "mb-4", "about-text")}>
                    Chúng tôi chuyên cung cấp đa dạng các mặt hàng thủ công mỹ
                    nghệ được sản xuất bởi những nghệ nhân tài hoa tại các làng
                    nghề truyền thống nổi tiếng trên khắp Việt Nam.
                  </p>
                  <a
                    className={cx("btn", "btn-light", "btn-xl")}
                    href="#services"
                  >
                    Get Started!
                  </a>
                  <a
                    className={cx("btn", "btn-light", "btn-xl")}
                    href="#services"
                  >
                    Get Started!
                  </a>
                  <a
                    className={cx("btn", "btn-light", "btn-xl")}
                    href="#services"
                  >
                    Get Started!
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Introduce;

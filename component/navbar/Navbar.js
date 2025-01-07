import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames/bind";
import styles from "./Navbar.module.scss";
import logo from "./img/logobwd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FaShoppingCart } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";

import { FaBars } from "react-icons/fa";
import { useAppContext } from "../../context/appContext";
const cx = classnames.bind(styles);

function Navbar() {
  const { quantityOfItemInCart, getAllCart, user, logOut } = useAppContext();
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    window.onscroll = function () {
      var navbarScroll = window.scrollY;

      if (navbarScroll > 0) {
        ref.current.style.background =
          "linear-gradient(to top, rgb(82, 66, 24) 10%, rgb(48, 48, 48) 70%)";
        ref.current.style.transition = "all 0.3s ease-in-out";
        ref.current.style.height = "80px";
      } else {
        ref.current.style.background =
          "linear-gradient(to top, rgba(0, 0, 0, 0) 10%, rgba(27, 15, 0, 0.973) 90%)";
        ref.current.style.transition = "all 0.3s ease-in-out";
        ref.current.style.height = "100px";
      }
    };
  }, []);

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const handleMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
    setShowDiv(!showDiv);
  };
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    getAllCart({ userId: user._id });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={cx("header-container")} ref={ref}>
      <nav className={cx("sidebar", { visible: showDiv })}>
        <ul className="minisidebar">
          <li>
            <a
              href="https://www.facebook.com/vcoch2711"
              className={cx("taget")}
            >
              Trang chủ
            </a>
          </li>
          <li>
            <Link to="/introduce">
              <a>Giới thiệu</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/products">
              <a>Sản phẩm</a>
            </Link>
          </li>
          <li>
            <Link to="/news">
              <a>Tin tức</a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <a>Liên hệ</a>
            </Link>
          </li>
          <li>
            <a href="https://www.facebook.com/vcoch2711">Tài khoản</a>
          </li>
        </ul>
      </nav>
      <a href="/" className={cx("logo")}>
        <img src={logo} alt="" />
      </a>

      <nav className={cx("navbar")}>
        <Link to="/" className={cx("selection")}>
          <div>Trang chủ</div>
        </Link>
        <Link to="/introduce" className={cx("selection")}>
          <div> Giới thiệu</div>
        </Link>
        <Link to="/products" className={cx("selection")}>
          <div>Sản phẩm</div>
        </Link>
        <Link to="/contact" className={cx("selection")}>
          {" "}
          <div>Liên hệ</div>
        </Link>
      </nav>

      <div className={cx("container-box")}>
        <div className={cx("box-search")}>
          <input type="text" placeholder="Tìm kiếm..." />
          <a href="https://www.facebook.com/vcoch2711">
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#DDDDDD" />
          </a>
        </div>
      </div>

      <div className={cx("login-box")}>
        <div className={cx("cart-like-container")}>
          <div className={cx("icon-container")}>
            <Link to="/cart">
              <FaShoppingCart size={30} />
              {quantityOfItemInCart > 0 && (
                <div className={cx("notification-count")}>
                  {quantityOfItemInCart}
                </div>
              )}
            </Link>
          </div>

          <Link to="/cartpage">
            <IoMdHeartEmpty size={30} id={cx("favourite")} />
          </Link>
        </div>
        {/* <div className={cx("user")}><FontAwesomeIcon icon={faUser} /></div> */}
        <div className={cx("box-account")}>
          {user ? (
            <div className={cx("user-element")}>
              <div className={cx("name-user")}>{user.name}</div>
              <button
                className={cx("log-out-btn")}
                onClick={(e) => {
                  e.preventDefault();
                  logOut();
                  navigate("/sign-in");
                }}
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </button>
            </div>
          ) : (
            <Link to="/sign-in">
              <a
                href="https://www.facebook.com/vcoch2711"
                className={cx("account")}
              >
                Đăng nhập
              </a>
            </Link>
          )}
        </div>
      </div>

      <div className={cx("empty-element")}></div>

      <div className={cx("logo", "menu")} onClick={handleMenuClick}>
        {/* <div className={cx("logo", "menu")} > */}

        <FaBars size={40} color="#DDDDDD" />
      </div>
    </div>
  );
}
export default Navbar;

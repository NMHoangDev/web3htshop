import React, { useEffect, useRef, useState } from 'react';
import classnames from "classnames/bind";
import styles from "./Navbar.module.scss";
import logo from './img/logobwd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"
import { IoMdHeartEmpty } from "react-icons/io";




import { FaBars } from "react-icons/fa";
const cx = classnames.bind(styles);


function Navbar() {
    const [itemCount] = useState(3);
    const ref = useRef(null);
    window.onscroll = function () {
        var navbarScroll = window.scrollY;

        if (navbarScroll > 0) {
            ref.current.style.background = "linear-gradient(to top, rgb(82, 66, 24) 10%, rgb(48, 48, 48) 70%)";
            ref.current.style.transition = "all 0.3s ease-in-out";
            ref.current.style.height = "80px";

        } else {
            ref.current.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0) 10%, rgba(27, 15, 0, 0.973) 90%)";
            ref.current.style.transition = "all 0.3s ease-in-out";
            ref.current.style.height = "100px";
        }
    };

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
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    }, []);


    return (

        <div className={cx("header-container")} ref={ref}>
            <nav className={cx('sidebar', { 'visible': showDiv })}>

                <ul className="minisidebar">
                    <li><a href="https://www.facebook.com/vcoch2711" >Trang chủ</a></li>
                    <li><a href="https://www.facebook.com/vcoch2711">Giới thiệu</a></li>
                    <li> <a href="https://www.facebook.com/vcoch2711">Sản phẩm</a></li>
                    <li><a href="https://www.facebook.com/vcoch2711">Tin tức</a></li>
                    <li><a href="https://www.facebook.com/vcoch2711">Liên hệ</a></li>
                    <li><a href="https://www.facebook.com/vcoch2711">Tài khoản</a></li>
                </ul>
            </nav>
            <a href="https://www.facebook.com/vcoch2711" className={cx("logo")}>
                <img src={logo} alt="" />
            </a>



            <nav className={cx('navbar')}>
                <Link to="/" className={cx("selection", "taget")}><div >Trang chủ</div></Link>
                <Link to="/introduce" className={cx("selection")}><div> Giới thiệu</div></Link>
                <Link to="/products" className={cx("selection")}><div  >Sản phẩm</div></Link>
                <Link to="/cartpage" className={cx("selection")}><div>Tin tức</div></Link>
                <Link to="/contactpage" className={cx("selection")}> <div >Liên hệ</div></Link>
            </nav >



            <div className={cx("container-box")}>
                <div className={cx("box-search")}>
                    <input type="text" placeholder='Tìm kiếm...' />
                    <a href="https://www.facebook.com/vcoch2711"><FontAwesomeIcon icon={faMagnifyingGlass} color="#DDDDDD" />
                    </a>
                </div>
            </div>

            <div className={cx("login-box")}>
                <div className={cx("cart-like-container")}>

                    <div className={cx("icon-container")}>
                        <Link to="/cart">
                            <FaShoppingCart size={30} />
                            {itemCount > 0 && <div className={cx("notification-count")}>{itemCount}</div>}
                        </Link>
                    </div>

                    <Link to="/cart"><IoMdHeartEmpty size={30} id={cx("favourite")} /></Link>

                </div>
                {/* <div className={cx("user")}><FontAwesomeIcon icon={faUser} /></div> */}
                <div className={cx("box-account")}>
                    <Link to="/sign-up" className={cx("account")}>Đăng nhập</Link>
                </div>

            </div>

            <div className={cx("empty-element")}>

            </div>

            <div className={cx("logo", "menu")} onClick={handleMenuClick}>
                {/* <div className={cx("logo", "menu")} > */}

                <FaBars size={40} color="#DDDDDD" />
            </div>

        </div >

    )
}
export default Navbar;
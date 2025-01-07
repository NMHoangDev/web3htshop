// import React from 'react';
import React, { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import classnames from "classnames/bind";

import img1 from "./IMAGE/hinhanh_amtra.webp";
import img2 from "./IMAGE/hinhanh_caidia.jpg";
import img3 from "./IMAGE/hinhanh_cocaro.webp";

import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const cx = classnames.bind(styles);

function Contact() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 50000);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [currentImageIndex]);
  //new update
  //khi kích thước nhỏ từ 390 thì xuống hàng email cả nó tràn
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={cx("Contact")}>
      <div className={cx("Information_contact")}>
        <div className={cx("phone_email_address_social")}>
          <div className={cx("New_york")}>3HT SHOP</div>
          <div className={cx("information")}>
            <div className={cx("phone_email")}>
              <div className={cx("topic_phone")}>PHONES</div>
              <div className={cx("information_phone")}>
                0123-456-789
                <br />
                0987-654-321
              </div>

              <div className={cx("topic_email")}>EMAIL</div>
              {isMobile && <br />}
              <div className={cx("information_email")}>cocdien@gmail.com</div>
            </div>
            <div className={cx("address_social")}>
              <div className={cx("topic_address")}>ADDRESS</div>
              <div className={cx("information_address")}>
                470 Trần Đại Nghĩa,
              </div>
              <div className={cx("topic_social")}>SOCIAL NETWORKS</div>
              <div className={cx("information_social")}>
                <FaFacebookSquare className={cx("icon")} />
                <FaSquareXTwitter className={cx("icon")} />
                <BsInstagram className={cx("icon")} />
                <IoLogoYoutube className={cx("icon")} />
                <FaPinterestSquare className={cx("icon")} />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("iframe_address")}>
          <iframe
            className={cx("map")}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22021.58130733725!2d108.24971626275637!3d15.97955000424595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108997dc971f%3A0x1295cb3d313469c9!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiB2w6AgVHJ1eeG7gW4gdGjDtG5nIFZp4buHdCAtIEjDoG4!5e0!3m2!1svi!2s!4v1715083892085!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <div className={cx("Text_contact")}>
        <div className={cx("img")}>
          <img
            src={img1}
            alt="IMG 1"
            className={cx(styles.img, currentImageIndex === 0 && styles.active)}
          />
          <img
            src={img2}
            alt="IMG 2"
            className={cx(styles.img, currentImageIndex === 1 && styles.active)}
          />
          <img
            src={img3}
            alt="IMG 3"
            className={cx(styles.img, currentImageIndex === 2 && styles.active)}
          />
        </div>
        {/* <div className="main-contact"> */}
        <div className={cx("Text")}>
          <div className={cx("Send_your")}>SEND YOUR QUESTION</div>
          <div className={cx("text")}>
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Your email" />
            <textarea placeholder="Your message"></textarea>
          </div>
          <button className={cx("send")} value="gửi">
            S E N D
          </button>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

export default Contact;

import React from "react";
import styles from "./Contact.module.scss";
import classnames from "classnames/bind";
import Navbar from "../component/navbar/Navbar.js";
import Contact from "../component/Contact/Contact.js";
import Footer from "../component//Footer/Footer.js";
const cx = classnames.bind(styles);

function ContactPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("navigation")}>
        <Navbar />
      </div>
      <div className={cx("main-content")}>
        <Contact />
      </div>
      <div className={cx("footer")}>
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage;

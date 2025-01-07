import React from "react";
import styles from "./IntroducePage.module.scss";
import classnames from "classnames/bind";
import Navbar from "../component/navbar/Navbar.js";
import Contact from "../component/Contact/Contact.js";
import Introduct_Function from "../component/Introduct_Function/Introduct_Function.js";
import Footer from "../component//Footer/Footer.js";
import IntroduceAll from "../component/introducAll/IntroduceAll.js";
import WhyChooseUs from "../component/whychooseus/WhyChooseUs.js";
import TeamMember from "../component/teamMember/TeamMember.js";
import Introduceweb from "../component/introduceweb/Introduceweb.js";
import Introduce from "../component/introduce/Introduce.js";
const cx = classnames.bind(styles);

function IntroducePage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("navigation")}>
        <Navbar />
      </div>
      <Introduce />
      <div className={cx("why-choose")}>
        <WhyChooseUs />
      </div>
      <div className={cx("introduce-function")}>
        <Introduct_Function />
      </div>
      <div className={cx("footer")}>
        <Footer />
      </div>
    </div>
  );
}

export default IntroducePage;

import React from "react";
import styles from "./HomePage.module.scss";
import classnames from "classnames/bind";
import Navbar from "../component/navbar/Navbar.js";
import Slider from "../component/slider/Slider.js";

import Highlight from "../component/highlight/Highlight.js";
import Statistics from "../component/statistics/Statistics.js";
import Footer from "../component/Footer/Footer.js";
import IntroduceAll from "../component/introducAll/IntroduceAll.js";
const cx = classnames.bind(styles);
function HomePage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("navigation")}>
        <Navbar />
      </div>
      <div className={cx("slider")}>
        <Slider />
      </div>
      <div className={cx("introduce")}>
        <IntroduceAll />
      </div>
      <div className={cx("highlight")}>
        <Highlight />
      </div>
      <div className={"statistic"}>
        <Statistics />
      </div>
      <div className={cx("footer")}>
        <Footer />
      </div>{" "}
    </div>
  );
}

export default HomePage;

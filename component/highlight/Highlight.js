import React, { Component } from "react";
import classnames from "classnames/bind";
import styles from "./Highlight.module.scss";
import Card from "./components/Card";
import Anh1 from "./img/img1.png";
import Anh2 from "./img/img2.png";
import Anh3 from "./img/img3.png";
import Anh4 from "./img/img4.png";
import Anh5 from "./img/vai.jpg";

const cx = classnames.bind(styles);

class Highlight extends Component {
  render() {
    return (
      // <div className={cx("main")}>
      <div className={cx("container")}>
        <Card img={Anh1} title={"Lưu niệm"} num_type={84} num_source={12} />
        <Card img={Anh2} title={"Nghệ thuật"} num_type={124} num_source={22} />
        <Card img={Anh3} title={"Đồ gỗ"} num_type={240} num_source={34} />
        <Card img={Anh4} title={"Kim hoàng"} num_type={40} num_source={8} />
        <Card img={Anh5} title={"Vải - Tơ tằm"} num_type={84} num_source={12} />
        <Card img={Anh2} title={"Đồ gốm"} num_type={124} num_source={22} />
        <Card img={Anh3} title={"Đồ chơi"} num_type={240} num_source={34} />
        <Card img={Anh4} title={"Phục trang"} num_type={40} num_source={8} />
      </div>
    );
  }
}

export default Highlight;

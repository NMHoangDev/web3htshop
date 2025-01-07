import React from "react";
import classNames from "classnames/bind";
import styles from "./Stats.module.scss";
const cx = classNames.bind(styles);

function Stats({ name, data, imageUrl }) {
  return (
    <div className={cx("box", "box1")}>
      <div className={cx("text")}>
        <h2 className={cx("topic-heading")}>{data}</h2>
        <h2 className={cx("topic")}>{name}</h2>
      </div>

      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
        alt="Views"
      />
    </div>
  );
}

export default Stats;

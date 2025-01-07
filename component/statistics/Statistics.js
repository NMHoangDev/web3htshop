import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./Statistics.module.scss";
import Chart1 from "../../component/statistics/chart/Chart1.js";
import Chart2 from "../../component/statistics/chart/Chart2.js";
import Chart3 from "../../component/statistics/chart/Chart3.js";
import Chart4 from "../../component/statistics/chart/Chart4.js";
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
document.head.appendChild(link);
const cx = classnames.bind(styles);

function Statistics() {
  const [isActiveCpn, setActiveCpn] = useState(1);


  return (
    <div className={cx("view")}>
      <div className={cx("inner-chart")}>
        <div className={cx("container", "container-select-chart")}>
          <div className={cx("wrap")}>
            <div
              className={cx("inner-box", "box-f")}
              onClick={(e) => setActiveCpn(1)}
              key={1}
              style={
                isActiveCpn === 1
                  ? { border: "2px solid rgb(255, 0, 0)" }
                  : { border: "2px solid rgb(217, 211, 211)" }
              }
            >
              <div className={cx("inner-title", "sales", "fs")}>Sales</div>
              <div className={cx("inner-desc", "sales2", "fs")}>Last Year</div>
              <figure className={cx("chart")}>
                <img
                  src="https://raw.githubusercontent.com/pichukov/PublicAssets/master/curvedOffsetChart.png"
                  alt=""
                  className={cx("w-max", "img1")}
                />
              </figure>
              <div className={cx("inner-value", "sales3")}>
                <span>175k</span>
                <span className={cx("span-red", "fs")}>16.2%</span>
              </div>
            </div>
            <div
              className={cx("inner-box", "box-f")}
              onClick={(e) => setActiveCpn(2)}
              key={2}
              style={
                isActiveCpn === 2
                  ? { border: "2px solid rgb(255, 0, 0)" }
                  : { border: "2px solid rgb(217, 211, 211)" }
              }
            >
              <div className={cx("inner-title", "fs")}>Sessions</div>
              <div className={cx("inner-desc", "fs")}>Last Month</div>
              <figure className={cx("chart2")}>
                <img
                  src="https://static.wixstatic.com/media/e83229_ba3f33e11d8f41ed9d1867259ef2879d~mv2.gif"
                  alt=""
                  className={cx("w-max", "img2")}
                />
              </figure>
              <div className={cx("inner-value", "section")}>
                <span>45.1k</span>
                <span className={cx("span-green", "fs")}>+12.6%</span>
              </div>
            </div>
            <div
              className={cx("inner-box", "box-f", "box-none-repon")}
              onClick={(e) => setActiveCpn(3)}
              key={3}
              style={
                isActiveCpn == 3
                  ? { border: "2px solid rgb(255, 0, 0)" }
                  : { border: "2px solid rgb(217, 211, 211)" }
              }
            >
              <div className={cx("inner-icon")}>
                <i className={cx("fa-solid fa-dollar-sign", "i1")}></i>
              </div>
              <div className={cx("box-body")}>
                <div className={cx("inner-title", "fs")}>Total Profit</div>
                <div className={cx("inner-desc", "fs")}>Last week</div>
                <div className={cx("inner-v1", "fs")}>1.28k</div>
                <div className={cx("inner-v2", "fs")}>
                  <span> -12.2%</span>
                </div>
              </div>
            </div>
            <div
              className={cx("inner-box", "box-f", "box-none-repon")}
              onClick={(e) => setActiveCpn(4)}
              key={4}
              style={
                isActiveCpn == 4
                  ? { border: "2px solid rgb(255, 0, 0)" }
                  : { border: "2px solid rgb(217, 211, 211)" }
              }
            >
              <div className={cx("inner-icon", "inner-pad")}>
                <i className={cx("fa-solid fa-chart-simple", "i2")}></i>
              </div>
              <div className={cx("box-body")}>
                <div className={cx("inner-title", "fs")}>Total Sales</div>
                <div className={cx("inner-desc", "fs")}>Last week</div>
                <div className={cx("inner-v1", "fs")}>$4,673</div>
                <div className={cx("inner-v2", "fs")}>
                  <span> +25.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------x2-------------- */}
        <div className={cx("container", "repon-container")}>
          <div className={cx("wrap")}>
            <div
              className={cx("inner-box", "box-f")}
              onClick={(e) => setActiveCpn(3)}
              key={3}
              style={
                isActiveCpn == 3
                  ? { border: "2px solid rgb(255, 0, 0)" }
                  : { border: "2px solid rgb(217, 211, 211)" }
              }
            >
              <div className={cx("inner-icon")}>
                <i className={cx("fa-solid fa-dollar-sign", "i1")}></i>
              </div>
              <div className={cx("box-body")}>
                <div className={cx("inner-title", "fs")}>Total Profit</div>
                <div className={cx("inner-desc", "fs")}>Last week</div>
                <div className={cx("inner-v1", "fs")}>1.28k</div>
                <div className={cx("inner-v2", "fs")}>
                  <span> -12.2%</span>
                </div>
              </div>
            </div>
            <div
              className={cx("inner-box", "box-f")}
              onClick={(e) => setActiveCpn(4)}
              key={4}
              style={
                isActiveCpn == 4
                  ? { border: "2px solid rgb(255, 0, 0)" }
                  : { border: "2px solid rgb(217, 211, 211)" }
              }
            >
              <div className={cx("inner-icon", "inner-pad")}>
                <i className={cx("fa-solid fa-chart-simple", "i2")}></i>
              </div>
              <div className={cx("box-body")}>
                <div className={cx("inner-title", "fs")}>Total Sales</div>
                <div className={cx("inner-desc", "fs")}>Last week</div>
                <div className={cx("inner-v1", "fs")}>$4,673</div>
                <div className={cx("inner-v2", "fs")}>
                  <span> +25.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("inner-map")}>
        <div className={cx("container")}>
          <div className={cx("inner-box")}>
            <div className={cx("inner-content")}>
              {isActiveCpn === 1 && <Chart1 />}
              {isActiveCpn === 2 && <Chart2 />}
              {isActiveCpn === 3 && <Chart3 />}
              {isActiveCpn === 4 && <Chart4 />}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Statistics;

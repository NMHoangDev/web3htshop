import React from "react";
import classnames from "classnames/bind";
import styles from "./Chart1.module.scss";
const cx = classnames.bind(styles);

function Chart1() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <p className={cx("name-chart")}>Biểu đồ doanh thu theo loại sản phẩm</p>

        <svg
          className={cx("container-chugiai")}
          width="100px"
          height="100px"
          viewBox="30 27 529 286"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id={cx("y_axis")}
            fontSize="30"
            fontFamily=".HelveticaNeueDeskInterface-Regular, .Helvetica Neue DeskInterface"
            fill="#FFFFFF"
            opacity="0.4"
            fontWeight="normal"
          >
            <text id={cx("0")}>
              <tspan x="-150" y="50">
                Sản phẩm gỗ
              </tspan>
            </text>
            <text id={cx("200")}>
              <tspan x="-150" y="125">
                Sản phẩm tre
              </tspan>
            </text>
            <text id={cx("400")}>
              <tspan x="-150" y="201">
                Sản phẩm gốm
              </tspan>
            </text>
          </g>

          <g
            className={cx("graph-copy-cg")}
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            transform="translate(30.000000, 27.000000)"
          >
            <g
              id={cx("GRAPHS")}
              transform="translate(64.000000, 16.000000)"
              strokeLinecap="round"
              strokeWidth="8"
              strokeLinejoin="round"
            >
              <polyline
                id={cx("Banks")}
                stroke="#5BCAC1"
                className={cx("line")}
                points="0 0 400 0"
              />
              <polyline
                id={cx("Bridge")}
                stroke="#81DEFF"
                className={cx("line")}
                points="0 150 400 150"
              />
              <polyline
                id={cx("PayPal")}
                stroke="#F6F5A6"
                className={cx("line")}
                points="0 75 400 75"
              />
            </g>
          </g>
        </svg>
      </div>
      <svg
        className={cx("container")}
        width="500px"
        height="330px"
        viewBox="30 27 529 286"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          className={cx("graph-copy")}
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          transform="translate(30.000000, 27.000000)"
        >
          <g
            id={cx("y_axis")}
            fontSize="11.0833333"
            fontFamily=".HelveticaNeueDeskInterface-Regular, .Helvetica Neue DeskInterface"
            fill="#FFFFFF"
            opacity="0.4"
            fontWeight="normal"
          >
            <text id={cx("0")}>
              <tspan x="25.3008249" y="264.333333">
                0
              </tspan>
            </text>
            <text id={cx("200")}>
              <tspan x="12.7757572" y="232.666667">
                200
              </tspan>
            </text>
            <text id={cx("400")}>
              <tspan x="12.7757572" y="201">
                400
              </tspan>
            </text>
            <text id={cx("600")}>
              <tspan x="12.7757572" y="169.333333">
                600
              </tspan>
            </text>
            <text id={cx("800")}>
              <tspan x="12.7757572" y="137.666667">
                800
              </tspan>
            </text>
            <text id={cx("1000")}>
              <tspan x="6.51322328" y="106">
                1000
              </tspan>
            </text>
            <text id={cx("1200")}>
              <tspan x="6.51322328" y="74.3333333">
                1200
              </tspan>
            </text>
            <text id={cx("1400")}>
              <tspan x="6.51322328" y="42.6666667">
                1400
              </tspan>
            </text>
            <text id={cx("1600")}>
              <tspan x="6.51322328" y="11">
                1600
              </tspan>
            </text>
          </g>
          <g
            id={cx("GRAPHS")}
            transform="translate(64.000000, 16.000000)"
            strokeLinecap="round"
            strokeWidth="8"
            strokeLinejoin="round"
          >
            <polyline
              id={cx("Banks")}
              stroke="#5BCAC1"
              className={cx("line")}
              points="0 1 88.0438662 1 128.985782 137 180.170616 137 224.189573 182 256.947867 91 301.990521 137 346.009479 91 392.087202 91 429.952607 179"
            ></polyline>
            <polyline
              id={cx("Bridge")}
              stroke="#81DEFF"
              className={cx("line")}
              points="2.04739336 183 54.2559242 227 96.2274882 47 133.080569 1 302.018438 1 346.680361 44.6280822 386.957346 0 427.905213 43"
            ></polyline>
            <polyline
              id={cx("PayPal")}
              stroke="#F6F5A6"
              className={cx("line")}
              points="2.04739336 180 53.273159 180 99.2985782 91 137.175355 47 219.077488 47 256.947867 90 301.990521 47 349.080569 137 398.228672 137 432 91"
            ></polyline>
          </g>
          <g
            id={cx("x_axis")}
            transform="translate(71.974046, 271.541667)"
            fontSize="11.0833333"
            fontFamily=".HelveticaNeueDeskInterface-Regular, .Helvetica Neue DeskInterface"
            fill="#FFFFFF"
            opacity="0.4"
            fontWeight="normal"
          >
            <text id={cx("1")}>
              <tspan x="0.396183206" y="11">
                1
              </tspan>
            </text>
            <text id={cx("2")}>
              <tspan x="39.2603361" y="11">
                2
              </tspan>
            </text>
            <text id={cx("3")}>
              <tspan x="78.8786567" y="11">
                3
              </tspan>
            </text>
            <text id={cx("4")}>
              <tspan x="118.496977" y="11">
                4
              </tspan>
            </text>
            <text id={cx("5")}>
              <tspan x="158.115298" y="11">
                5
              </tspan>
            </text>
            <text id={cx("6")}>
              <tspan x="197.733619" y="11">
                6
              </tspan>
            </text>
            <text id={cx("7")}>
              <tspan x="237.351939" y="11">
                7
              </tspan>
            </text>
            <text id={cx("8")}>
              <tspan x="276.97026" y="11">
                8
              </tspan>
            </text>
            <text id={cx("9")}>
              <tspan x="316.58858" y="11">
                9
              </tspan>
            </text>
            <text id={cx("10")}>
              <tspan x="359.229833" y="11">
                10
              </tspan>
            </text>
            <text id={cx("11")}>
              <tspan x="400.036703" y="11">
                11
              </tspan>
            </text>
            <text id={cx("12")}>
              <tspan x="438.466474" y="11">
                12
              </tspan>
            </text>
          </g>
          <g
            id={cx("grid")}
            transform="translate(46.618321, 4.750000)"
            stroke="#FFFFFF"
            strokeLinecap="square"
            opacity="0.0800000057"
          >
            <path
              d="M0.396183206,1.1875 L478.991396,1.1875"
              id={cx("Line")}
            ></path>
            <path
              d="M0.396183206,32.8541667 L478.991396,32.8541667"
              id={cx("Line")}
            ></path>
            <path
              d="M0.396183206,64.5208333 L478.991396,64.5208333"
              id={cx("Line")}
            ></path>
            <path
              d="M0.396183206,96.1875 L478.991396,96.1875"
              id={cx("Line")}
            ></path>
            <path
              d="M0.396183206,127.854167 L478.991396,127.854167"
              id={cx("Line")}
            ></path>
            <path
              d="M0.396183206,159.520833 L478.991396,159.520833"
              id={cx("Line")}
            ></path>
            <path
              d="M0.396183206,191.1875 L478.991396,191.1875"
              id={cx("Line")}
            ></path>
            <path
              d="M0.396183206,222.854167 L478.991396,222.854167"
              id={cx("Line")}
            ></path>
            <path
              d="M0.396183206,254.520833 L478.991396,254.520833"
              id={cx("Line")}
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Chart1;

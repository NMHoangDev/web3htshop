import React from "react";
import classnames from "classnames/bind";
import styles from "./Popup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { useAppContext } from "../../context/appContext.js";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(styles);

function Popup({ type, text }) {
  const { clearAlert } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className={cx("wrapper")}>
      <div className={cx("icon")}>
        {type == "error" && (
          <div className={cx("error-icon")}>
            <FontAwesomeIcon icon={faFaceSadTear} />
          </div>
        )}
        {type === "success" && (
          <div className={cx("success-icon")}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
        )}
      </div>
      <div className={cx("text")}>
        {type === "error" && "Opps..."}
        {type === "success" && "Chúc mừng"}
      </div>
      <div className={cx("text-error")}>{text}</div>
      <button
        className={cx("close-btn")}
        onClick={(e) => {
          e.preventDefault();
          if (type === "success") {
            navigate("/");
          } else if (type === "error") {
            clearAlert();
          }
        }}
      >
        OK
      </button>
    </div>
  );
}

export default Popup;

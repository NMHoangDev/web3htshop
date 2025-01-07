import React from "react";
import classNames from "classnames/bind";
import styles from "./ItemOnTable.module.scss";
import axios from "axios";
import { useAppContext } from "../../../context/appContext";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function ItemsOnTable({ name, email, password, id }) {
  const { deleteUserByUser, setUserUpdate, currentUserUpdate } =
    useAppContext();
  const navigate = useNavigate();
  const handleUpdateUser = async () => {
    await setUserUpdate({
      name: name,
      email: email,
      password: password,
      id: id,
    });
    navigate("/edit-user-page");
  };
  const handleDeleteUser = async () => {
    deleteUserByUser(id);

    alert("DELETE SUCCESSFULL");
  };
  return (
    <div className={cx("item1")}>
      <h3 className={cx("t-op-nextlvl")}>{name}</h3>
      <h3 className={cx("t-op-nextlvl")}>{email}</h3>
      <h3 className={cx("t-op-nextlvl")}>{password}</h3>
      <h3 className={cx("t-op-nextlvl", "label-tag")}>
        <button
          style={{ color: "red" }}
          className={cx("btn")}
          onClick={(e) => {
            handleDeleteUser(e);
          }}
        >
          Xóa
        </button>
        <button
          style={{ color: "blue" }}
          className={cx("btn")}
          onClick={(e) => {
            handleUpdateUser(e);
          }}
        >
          Sửa
        </button>
      </h3>
    </div>
  );
}

export default ItemsOnTable;

import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import Navbar from "../../../component/navbar/Navbar";
import Stats from "../adminComponent/Stats";
import ItemsOnTable from "../adminComponent/ItemsOnTable";
import axios from "axios";
import { useAppContext } from "../../../context/appContext.js";
import EditUserPageAdmin from "../editPageAdmin/EditUserPageAdmin.js";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Dashboard = () => {
  const { getAllUsers, users } = useAppContext();
  useEffect(() => {
    const fetchData = () => {
      getAllUsers();
    };
    fetchData();
  }, [users]);

  return (
    <div style={{ marginTop: "250px" }} className={cx("wrapper")}>
      <div>
        {" "}
        <Navbar />
      </div>

      <header className={cx("wrapper_main")}>
        <div className={cx("main-container")}>
          {/* <EditUserPageAdmin /> */}
          <div className={cx("navcontainer")}>
            <nav className={cx("nav")}>
              <div className={cx("nav-upper-options")}>
                <div className={cx("nav-option", "option1")}>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                    className={cx("nav-img")}
                    alt="dashboard"
                  />
                  <Link to="/adimpage">
                    <h3> Dashboard</h3>
                  </Link>
                </div>

                <div className={cx("option2", "nav-option")}>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                    className={cx("nav-img")}
                    alt="articles"
                  />
                  <Link to="/product-admin">
                    <h3> Products</h3>
                  </Link>
                </div>

                <div className={cx("nav-option", "option3")}>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                    className={cx("nav-img")}
                    alt="report"
                  />
                  <h3> Orders</h3>
                </div>

                <div className={cx("nav-option", "option4")}>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                    className={cx("nav-img")}
                    alt="institution"
                  />
                  <h3> Orders</h3>
                </div>

                <div className={cx("nav-option", "option5")}>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                    className={cx("nav-img")}
                    alt="blog"
                  />
                  <h3> Profile</h3>
                </div>

                <div className={cx("nav-option", "option6")}>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                    className={cx("nav-img")}
                    alt="settings"
                  />
                  <h3> Settings</h3>
                </div>

                <div className={cx("nav-option", "logout")}>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                    className={cx("nav-img")}
                    alt="logout"
                  />
                  <h3>Logout</h3>
                </div>
              </div>
            </nav>
          </div>
          <div className={cx("main")}>
            <div className={cx("searchbar2")}>
              <input type="text" placeholder="Search" />
              <div className={cx("searchbtn")}>
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                  className={cx("icn", "srchicn")}
                  alt="search-button"
                />
              </div>
            </div>

            <div className={cx("box-container")}>
              <Stats name={"Users"} data={150} />
              <Stats name={"Products"} data={"65.5K"} />
              <Stats name={"Orders"} data={"20.8K"} />
              <Stats name={"Statistic"} data={"27.8K"} />
            </div>

            <div className={cx("report-container")}>
              <div className={cx("report-header")}>
                <h1 className={cx("recent-Articles")}>Users</h1>
                <button className={cx("view")}>View All</button>
              </div>

              <div className={cx("report-body")}>
                <div className={cx("report-topic-heading")}>
                  <h3 className={cx("t-op")}>Name</h3>
                  <h3 className={cx("t-op")}>Email</h3>
                  <h3 className={cx("t-op")}>Password</h3>
                  <h3 className={cx("t-op")}>Actions</h3>
                </div>
                <div>
                  {users.map((user) => {
                    return (
                      <ItemsOnTable
                        name={user.name}
                        email={user.email}
                        password={user.password}
                        id={user._id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;

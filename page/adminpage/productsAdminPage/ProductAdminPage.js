import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProductAdminPage.module.scss";
import Navbar from "../../../component/navbar/Navbar";
import Stats from "../adminComponent/Stats";
import ItemsOnTable from "../adminComponent/ItemsOnTable.js";
import axios from "axios";
import { useAppContext } from "../../../context/appContext.js";
import EditUserPageAdmin from "../editPageAdmin/EditUserPageAdmin.js";
import { Link } from "react-router-dom";
import Product from "../../../component/Product/productCard/Product.js";
import ProductCardForAdmin from "../adminComponent/ProuductCardForAdmin.js";

const cx = classNames.bind(styles);

const ProductAdminPage = () => {
  const { getAllUsers, users, getAllProduct, products } = useAppContext();
  useEffect(() => {
    const fetchData = async () => {
      await getAllUsers();
      await getAllProduct();
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
                  />{" "}
                  <h3>
                    <Link
                      to="/adminpage"
                      style={{ color: "#000", textDecoration: "none" }}
                    >
                      Dashboard
                    </Link>
                  </h3>
                </div>

                <div className={cx("option2", "nav-option")}>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                    className={cx("nav-img")}
                    alt="articles"
                  />

                  <h3>
                    {" "}
                    <Link
                      to="/product-admin"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Products
                    </Link>
                  </h3>
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
                <h1 className={cx("recent-Articles")}>Products</h1>
                <button className={cx("view")}>View All</button>
              </div>

              <div className={cx("report-body")}>
                {products.map((product, index) => {
                  return (
                    <ProductCardForAdmin
                      urlImg={product.urlImg}
                      name={product.name}
                      desc={product.desc}
                      price={product.price}
                      material={product.material}
                      quantity={product.quantity}
                      id={product._id}
                      type={product.type}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ProductAdminPage;

import React, { useEffect, useState } from "react";

import classnames from "classnames/bind";
import styles from "./Products.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faList } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../component/navbar/Navbar.js";
import Product from "../../component/Product/productCard/Product.js";
import { useAppContext } from "../../context/appContext.js";
import Footer from "../../component/Footer/Footer.js";
import Notification from "../../component/notification/Notification.js";
const cx = classnames.bind(styles);

function Products() {
  const [rangeValue, setRangeValue] = useState(0);
  const [isSortValue, setIsSort] = useState({
    isSort: true,
    isSortMaterial: true,
    sortType: "",
    sortMaterial: "",
  });
  const [isCheckedValues, setIsChecked] = useState({
    banghe: false,
    rovara: false,
    chenbat: false,
    ketu: false,
    aodai: false,
    go: false,
    gom: false,
    tre: false,
    vai: false,
  });
  const [optionValue, setOptionValue] = useState("1");
  const {
    products,
    getAllProduct,
    sortProductByPrice,
    panigation,
    sortProductByType,
    sortProductByMaterials,
    currentPage,
    totalPages,
    isSortType,
    setSort,
    isSortPrice,
    setSortPrice,
    setSortMaterial,
    isSortMaterial,
    isDisplayCartNotification,
    setSortType,
  } = useAppContext();
  useEffect(() => {
    panigation({ page: 1 });
  }, []);
  const handleOnClickChangePage = (e, page) => {
    e.preventDefault();
    console.log(rangeValue);
    const priceSortNumber = parseFloat(rangeValue);

    if (
      isSortType === true &&
      isSortPrice === false &&
      isSortMaterial === false
    ) {
      sortProductByType({ type: isSortValue.sortType, page: page });
      console.log("sortProductByType");
    } else if (
      isSortType === false &&
      isSortPrice === true &&
      isSortMaterial === false
    ) {
      sortProductByPrice({ priceSort: priceSortNumber * 1000000, page: page });
      console.log("sortProductByPrice");
    } else if (
      isSortType === false &&
      isSortPrice === false &&
      isSortMaterial === true
    ) {
      console.log(isSortValue.sortMaterial);
      sortProductByMaterials({
        material: isSortValue.sortMaterial,
        page: page,
      });
      console.log("sortProductByMaterials");
    } else if (
      isSortType === false &&
      isSortPrice === false &&
      isSortMaterial === false
    ) {
      panigation({ page: page });
    }
  };
  const handlePreviosClick = (e) => {
    e.preventDefault();
    const priceSortNumber = parseFloat(rangeValue);
    console.log(isSortValue.sortMaterial);
    if (currentPage != 1) {
      if (isSortType) {
        sortProductByType({
          type: isSortValue.sortType,
          page: currentPage - 1,
        });
      } else if (isSortPrice) {
        sortProductByPrice({
          priceSort: priceSortNumber * 1000000,
          page: currentPage - 1,
        });
      } else if (isSortMaterial) {
        sortProductByMaterials({
          material: isSortValue.sortMaterial,
          page: currentPage - 1,
        });
      } else if (
        isSortPrice == false &&
        isSortType == false &&
        isSortMaterial == false
      ) {
        panigation({ page: currentPage - 1 });
      }
    }
  };
  const handleNextClick = (e) => {
    e.preventDefault();
    const priceSortNumber = parseFloat(rangeValue);

    console.log(totalPages, rangeValue);
    console.log(currentPage);
    if (currentPage < totalPages.length) {
      if (isSortType) {
        sortProductByType({
          type: isSortValue.sortType,
          page: currentPage + 1,
        });
      } else if (isSortPrice) {
        sortProductByPrice({
          priceSort: priceSortNumber * 1000000,
          page: currentPage + 1,
        });
      } else if (isSortMaterial) {
        sortProductByMaterials({
          material: isSortValue.sortMaterial,
          page: currentPage + 1,
        });
      } else if (
        isSortPrice == false &&
        isSortType == false &&
        isSortMaterial == false
      ) {
        panigation({ page: currentPage + 1 });
      }
    }
  };

  const handleRangeChange = async (event) => {
    const valuePriceSort = event.target.value;
    setRangeValue(valuePriceSort);
    // console.log(valuePriceSort);
    const priceSortNumber = parseInt(rangeValue);
    console.log(priceSortNumber);
    try {
      event.preventDefault();
      const rangeValueNumber = parseFloat(valuePriceSort);
      if (rangeValueNumber === 0) {
        panigation({ page: 1 });
        setSortPrice();
      } else {
        // const priceSort = { price: rangeValueNumber * 1000000 };
        // console.log(priceSort);
        const result = await sortProductByPrice({
          priceSort: rangeValueNumber * 1000000,
          page: 1,
        });
        console.log(result, "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelectChange = (e) => {
    setOptionValue(e.target.value);
  };
  const handleSubmitSortPrice = async (e) => {
    console.log(rangeValue);
    try {
      e.preventDefault();
      const rangeValueNumber = parseInt(rangeValue);
      if (rangeValueNumber === 0) {
        getAllProduct();
      } else {
        const priceSort = { price: rangeValueNumber * 1000000 };
        console.log(priceSort);
        const result = await sortProductByPrice(priceSort);
        // console.log(result, "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // -------------------
  const handleCheckChangeChenBat = async (e) => {
    e.preventDefault();
    const isCheck = isCheckedValues.chenbat;

    console.log(e.target.checked);

    try {
      if (isCheckedValues.chenbat === false) {
        setIsSort({ isSort: true, sortType: "chenbat" });

        sortProductByType({ type: e.target.name, page: 1 });
      } else {
        setIsSort({ sortType: "", isSort: false });
        panigation({ page: 1 });
        setSort();
      }
      setIsChecked({
        banghe: false,
        rovara: false,
        aodai: false,
        ketu: false,
        chenbat: !isCheck,
      });
    } catch (error) {
      alert(error.message);
    }
    console.log(e.target.checked);
  };
  const handleCheckChangeRovaRa = async (e) => {
    e.preventDefault();
    const isCheck = isCheckedValues.rovara;

    try {
      if (isCheckedValues.rovara === false) {
        setIsSort({ isSort: true, sortType: "rovara" });

        sortProductByType({ type: e.target.name, page: 1 });
      } else {
        setIsSort({ sortType: "", isSort: false });
        panigation({ page: 1 });
        setSort();
      }
      setIsChecked({
        banghe: false,
        chenbat: false,
        ketu: false,
        rovara: !isCheck,
        aodai: false,
      });
    } catch (error) {
      alert(error.message);
    }
    console.log(e.target.checked);
  };
  const handleCheckChangeBanGhe = async (e) => {
    e.preventDefault();
    const isCheck = isCheckedValues.banghe;
    try {
      if (isCheckedValues.banghe === false) {
        setIsSort({ isSort: true, sortType: "banghe" });

        sortProductByType({ type: e.target.name, page: 1 });
      } else {
        setIsSort({ sortType: "", isSort: false });
        panigation({ page: 1 });
        setSort();
      }
      setIsChecked({
        banghe: !isCheck,
        chenbat: false,
        ketu: false,
        rovara: false,
        aodai: false,
      });
    } catch (error) {
      alert(error.message);
    }
    console.log(e.target.checked);
  };
  const handleCheckChangeKeTu = async (e) => {
    e.preventDefault();

    const isCheck = isCheckedValues.ketu;
    console.log(isCheckedValues.ketu);
    try {
      if (isCheckedValues.ketu === false) {
        setIsSort({ isSort: true, sortType: "ketu" });

        sortProductByType({ type: e.target.name, page: 1 });
      } else {
        setIsSort({ sortType: "", isSort: false });
        panigation({ page: 1 });
        setSort();
      }
      setIsChecked({
        banghe: false,
        chenbat: false,
        ketu: !isCheck,
        aodai: false,
        rovara: false,
      });
      console.log(isCheckedValues.ketu);
    } catch (error) {
      alert(error.message);
    }
  };
  const handleCheckChangeAoDai = async (e) => {
    e.preventDefault();

    const isCheck = isCheckedValues.aodai;
    console.log(isCheckedValues.aodai);
    try {
      if (isCheckedValues.aodai === false) {
        setIsSort({ isSort: true, sortType: "aodai" });

        sortProductByType({ type: e.target.name, page: 1 });
      } else {
        setIsSort({ sortType: "", isSort: false });
        panigation({ page: 1 });
        setSort();
      }
      setIsChecked({
        banghe: false,
        chenbat: false,
        ketu: false,
        rovara: false,
        aodai: !isCheck,
      });
      console.log(isCheckedValues.ketu);
    } catch (error) {
      alert(error.message);
    }
  };
  const handleCheckChangeGo = async (e) => {
    e.preventDefault();
    const isCheck = isCheckedValues.go;

    console.log(e.target.name);

    try {
      if (isCheckedValues.go === false) {
        setIsSort({ ...isSortValue, isSort: true, sortMaterial: "go" });

        sortProductByMaterials({ material: e.target.name, page: 1 });
      } else {
        setIsSort({ ...isSortValue, sortMaterial: "", isSort: false });
        panigation({ page: 1 });
        setSortMaterial();
      }
      setIsChecked({
        banghe: false,
        rovara: false,
        ketu: false,
        chenbat: false,
        tre: false,
        go: !isCheck,
        gom: false,
        vai: false,
      });
    } catch (error) {
      alert(error.message);
    }
    console.log(e.target.checked);
  };

  const handleCheckChangeGom = async (e) => {
    e.preventDefault();
    const isCheck = isCheckedValues.gom;

    console.log(e.target.name);

    try {
      if (isCheckedValues.gom === false) {
        setIsSort({ ...isSortValue, isSort: true, sortMaterial: "gom" });

        sortProductByMaterials({ material: e.target.name, page: 1 });
      } else {
        setIsSort({ ...isSortValue, sortMaterial: "", isSort: false });
        panigation({ page: 1 });
        setSortMaterial();
      }
      setIsChecked({
        banghe: false,
        rovara: false,
        ketu: false,
        chenbat: false,
        go: false,
        gom: !isCheck,
        tre: false,
        vai: false,
      });
    } catch (error) {
      alert(error.message);
    }
    console.log(e.target.checked);
  };
  const handleCheckChangeTre = async (e) => {
    e.preventDefault();
    const isCheck = isCheckedValues.tre;

    console.log(e.target.name);

    try {
      if (isCheckedValues.gom === false) {
        setIsSort({ ...isSortValue, isSort: true, sortMaterial: "tre" });

        sortProductByMaterials({ material: e.target.name, page: 1 });
      } else {
        setIsSort({ ...isSortValue, sortMaterial: "", isSort: false });
        panigation({ page: 1 });
        setSortMaterial();
      }
      setIsChecked({
        banghe: false,
        rovara: false,
        ketu: false,
        chenbat: false,
        go: false,
        gom: false,
        tre: !isCheck,
        vai: false,
      });
    } catch (error) {
      alert(error.message);
    }
    console.log(e.target.checked);
  };
  const handleCheckChangeVaiLua = async (e) => {
    e.preventDefault();
    const isCheck = isCheckedValues.vai;

    console.log(e.target.name);

    try {
      if (isCheckedValues.vai === false) {
        setIsSort({ ...isSortValue, isSort: true, sortMaterial: "vai" });

        sortProductByMaterials({ material: e.target.name, page: 1 });
      } else {
        setIsSort({ ...isSortValue, sortMaterial: "", isSort: false });
        panigation({ page: 1 });
        setSortMaterial();
      }
      setIsChecked({
        banghe: false,
        rovara: false,
        ketu: false,
        chenbat: false,
        aodai: false,
        go: false,
        gom: false,
        tre: false,
        vai: !isCheck,
      });
    } catch (error) {
      alert(error.message);
    }
    console.log(e.target.checked);
  };
  return (
    <div className={cx("wrapper")}>
      {isDisplayCartNotification && (
        <div className={cx("notify")}>
          <Notification />
        </div>
      )}
      <div className={cx("nav-bar")}>
        <Navbar />
      </div>
      <div className={cx("slider-shop")}>
        <h1>SHOP</h1>
      </div>
      <div className={cx("main-shop")}>
        <div className={cx("categories")}>
          {/* Start Categories */}
          <h1 className={cx("title")}>DANH MỤC SẢN PHẨM</h1>
          <div className={cx("gach-ngang")}></div>
          <div className={cx("type-categories")}>
            <div className={cx("type-element")}>
              <input
                type="checkbox"
                className={cx("checkbox")}
                name="chenbat"
                checked={isCheckedValues.chenbat}
                onChange={(e) => handleCheckChangeChenBat(e)}
              />
              <label htmlFor="chenbat"> Chén bát & Nồi niêu</label>
              <span>[20]</span>
            </div>
            <div className={cx("type-element")}>
              <input
                type="checkbox"
                className={cx("checkbox")}
                name="rovara"
                checked={isCheckedValues.rovara}
                onChange={(e) => handleCheckChangeRovaRa(e)}
              />
              <label htmlFor="rovara"> Rổ & Rá</label>
              <span>[20]</span>
            </div>
            <div className={cx("type-element")}>
              <input
                type="checkbox"
                className={cx("checkbox")}
                name="banghe"
                checked={isCheckedValues.banghe}
                onChange={(e) => handleCheckChangeBanGhe(e)}
              />
              <label htmlFor="banghe"> Bàn ghế </label>
              <span>[20]</span>
            </div>
            <div className={cx("type-element")}>
              <input
                type="checkbox"
                className={cx("checkbox")}
                name="ketu"
                checked={isCheckedValues.ketu}
                onChange={(e) => handleCheckChangeKeTu(e)}
              />
              <label htmlFor="ketu"> Kệ Tủ </label>
              <span>[20]</span>
            </div>
            <div className={cx("type-element")}>
              <input
                type="checkbox"
                className={cx("checkbox")}
                name="aodai"
                checked={isCheckedValues.aodai}
                onChange={(e) => handleCheckChangeAoDai(e)}
              />
              <label htmlFor="aodai"> Áo Dài </label>
              <span>[20]</span>
            </div>
          </div>
          {/* End Categories */}
          {/* --------------------------- */}
          {/* Start Price */}
          <h1 className={cx("title")}>GIÁ TIỀN</h1>
          <div className={cx("gach-ngang")}></div>
          <div className={cx("price-categories")}>
            <form
              className={cx("price-element")}
              onSubmit={(e) => handleSubmitSortPrice(e)}
            >
              <input
                type="range"
                className={cx("price-range")}
                name="priceRange"
                min={0}
                step={0.5}
                max={10}
                value={rangeValue}
                onChange={handleRangeChange}
              />
              <label htmlFor="priceRange">
                Tầm giá: {rangeValue == 0 && <span>0</span>}
                {rangeValue != 0 && Number.isInteger(rangeValue) && (
                  <span>{rangeValue}.000.000 VND</span>
                )}
                {rangeValue != 0 && !Number.isInteger(rangeValue) && (
                  <span>{rangeValue * 10}00.000 VND</span>
                )}
              </label>
              <button className={cx("filter_Btn")} type="submit">
                Lọc
              </button>
            </form>
          </div>
          {/* End Price */}
          {/* ----------- */}
          {/* Start material */}
          <h1 className={cx("title")}>CHẤT LIỆU</h1>
          <div className={cx("gach-ngang")}></div>
          <div className={cx("type-categories")}>
            <div className={cx("type-element")}>
              <input
                type="checkbox"
                className={cx("checkbox")}
                name="go"
                checked={isCheckedValues.go}
                onChange={(e) => handleCheckChangeGo(e)}
              />
              <label htmlFor="go"> Gỗ trầm & Gỗ hương</label>
              <span>[20]</span>
            </div>
            <div className={cx("type-element")}>
              <input
                type="checkbox"
                className={cx("checkbox")}
                name="gom"
                checked={isCheckedValues.gom}
                onChange={(e) => handleCheckChangeGom(e)}
              />
              <label htmlFor="wood"> Gốm sứ</label>
              <span>[20]</span>
            </div>
            <div className={cx("type-element")}>
              <input
                type="checkbox"
                className={cx("checkbox")}
                name="vai"
                checked={isCheckedValues.vai}
                onChange={(e) => handleCheckChangeVaiLua(e)}
              />
              <label htmlFor="wood"> Vải lụa </label>
              <span>[20]</span>
            </div>
            <div className={cx("type-element")}>
              <input
                type="checkbox"
                className={cx("checkbox")}
                name="tre"
                checked={isCheckedValues.tre}
                onChange={(e) => handleCheckChangeTre(e)}
              />
              <label htmlFor="wood"> Tre & Trúc </label>
              <span>[20]</span>
            </div>
          </div>
          {/* End material */}
        </div>
        <div className={cx("list-Products")}>
          <div className={cx("sort-Bar")}>
            <button className={cx("grid-btn")}>
              <FontAwesomeIcon icon={faTableCells} />
            </button>
            <button className={cx("lists-btn")}>
              <FontAwesomeIcon icon={faList} />
            </button>
            <h1>
              Chúng tôi tìm tìm thấy
              {optionValue == "1" && <span>24</span>}
              {optionValue == "2" && <span>12</span>}
              {optionValue == "3" && <span>10</span>}
              {optionValue == "4" && <span>19</span>} sản phẩm phù hợp
            </h1>
            <div className={cx("wrapper-select")}>
              <label>
                Lọc theo :
                <select
                  className={cx("sort-select")}
                  value={optionValue}
                  onChange={(e) => handleSelectChange(e)}
                >
                  <option value="1">Chất liệu</option>
                  <option value="2">Mới nhất</option>
                  <option value="3">Cũ nhất</option>
                  <option value="4">Bán chạy nhất</option>
                </select>
              </label>
            </div>
          </div>
          <div className={cx("product-Item-list")}>
            {products.map((product) => {
              return (
                <Product
                  name={product.name}
                  urlImg={product.urlImg}
                  desc={product.desc}
                  price={product.price}
                  id={product._id}
                />
              );
            })}
          </div>
          <div className={cx("controller-Page")}>
            <button
              style={{
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
              onClick={(e) => {
                handlePreviosClick(e);
                console.log(1);
              }}
            >
              Previos
            </button>
            {totalPages.map((page) => {
              return (
                <button
                  key={page}
                  name={page}
                  onClick={(e) => {
                    const pageCurrent = e.target.name;
                    console.log(pageCurrent);
                    handleOnClickChangePage(e, pageCurrent);
                    // console.log(currentPage);
                  }}
                  style={{
                    backgroundColor:
                      currentPage === page ? "#393e46" : "#f7f7f8",
                    color: currentPage === page ? "#f7f7f8" : "#393e46",
                  }}
                >
                  {page}
                </button>
              );
            })}
            <button
              style={{
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
              onClick={(e) => handleNextClick(e)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className={cx("footer")}>
        <Footer />
      </div>
    </div>
  );
}
export default Products;

import React, { useContext, useReducer } from "react";
import reducer from "./reducer.js";
import axios from "axios";

import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  SHOW_ALERT,
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  IS_DISPLAY,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  SORT_PRODUCT_BY_PRICE,
  SORT_PRODUCT_BY_TYPE,
  PANIGATION,
  PRIVIOUS_PAGE,
  CHECK_SORT,
  CHECK_PANIGATION,
  GET_CART_ITEMS,
  CHECK_SORT_PRICE,
  CHECK_SORT_MATERIAL,
  SORT_PRODUCT_BY_MATERIAL,
  UPDATE_PRODUCT_IN_CART,
  DELETE_PRODUCT_IN_CART,
  ADD_CART_ITEMS_SUCCESS,
  UPDATE_CHECK_PRODUCT_IN_CART,
  SET_VOUCHER,
  PAYMENT,
  LOG_OUT,
  GET_ALL_USERS,
  SET_USER_UPDATE,
} from "./action.js";
const user = localStorage.getItem("user");
const initialState = {
  user: user ? JSON.parse(user) : null,
  showAlert: false,
  textMessage: "Bạn đã gặp lỗi gì đó",
  typeMessage: "error",
  isLoading: false,
  showMessage: false,
  showTitle: false,
  products: [],
  currentPage: 0,
  totalPages: [],
  isSortType: false,
  itemOnCart: [],
  totalCost: 0,
  quantityOfItemInCart: 0,
  isSortMaterial: false,
  isSortPrice: false,
  isDisplayCartNotification: false,
  totalItemPayment: 0,
  vouchers: [
    { code: "KM23", percent: 10, remaining: 102, cost: 99 },
    { code: "KMGPQ22", percent: 5, remaining: 11, cost: 100 },
    { code: "KMSP214", percent: 20, remaining: 10, cost: 500 },
  ],
  priceSales: 0,
  code: "",
  showMessagePayment: false,
  users: [],
  currentUserUpdate: {
    name: "",
    email: "",
    password: "",
    id: "",
  },
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [states, dispatch] = useReducer(reducer, initialState);
  const addUsertoLocalSpace = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  const removeUsertoLocalSpace = () => {
    localStorage.removeItem("user");
  };
  const register = async function (currentUser) {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        currentUser
      );

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: response.data.user,
      });
      console.log(response.data);
      addUsertoLocalSpace(response.data.user);
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
  const login = async function (currentUser) {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        currentUser
      );

      console.log(response.data);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response.data.user,
      });
      console.log(response.data);
      addUsertoLocalSpace(response.data.user);
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: LOGIN_USER_ERROR,
        // payload: { msg: error.response.data.msg },
      });
    }
  };
  const logOut = async () => {
    dispatch({ type: LOG_OUT });
    removeUsertoLocalSpace();
  };
  const showErrorMessage = () => {
    dispatch({
      type: SHOW_ALERT,
    });
  };

  const clearAlert = () => {
    dispatch({
      type: CLEAR_ALERT,
    });
  };
  const existTitle = () => {
    dispatch({ type: IS_DISPLAY });
  };
  const addProduct = async (currentProduct) => {
    console.log(currentProduct);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/add-product",
        currentProduct
      );
      const { product } = response.data;
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllProduct = async () => {
    dispatch({ type: GET_PRODUCT_BEGIN });
    try {
      const response = await axios.get(
        "http://localhost:5000/api/product/get-all-product"
      );

      dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data.product });
    } catch (error) {}
  };
  const sortProductByPrice = async ({ priceSort, page }) => {
    try {
      // console.log(priceSort);
      const response = await axios.get(
        "http://localhost:5000/api/product/sort-by-price",
        { params: { priceSort, page } }
      );
      const pageArray = [];

      for (let i = 1; i <= response.data.totalPages; i++) {
        pageArray.push(i);
      }
      // console.log(response.data.products);
      dispatch({
        type: SORT_PRODUCT_BY_PRICE,
        payload: {
          data: response.data.products,
          currentPage: response.data.currentPage,
          total: pageArray,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const sortProductByType = async ({ type, page }) => {
    try {
      // console.log(type);
      const response = await axios.get(
        "http://localhost:5000/api/product/sort-by-type",
        { params: { type, page } }
      );

      const pageArray = [];

      for (let i = 1; i <= response.data.totalPages; i++) {
        pageArray.push(i);
      }
      dispatch({
        type: SORT_PRODUCT_BY_TYPE,
        payload: {
          data: response.data.products,
          currentPage: response.data.currentPage,
          total: pageArray,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const sortProductByMaterials = async ({ material, page }) => {
    try {
      console.log({ material });
      const response = await axios.get(
        "http://localhost:5000/api/product/sort-by-material",
        { params: { material, page } }
      );
      console.log(response);
      const pageArray = [];

      for (let i = 1; i <= response.data.totalPages; i++) {
        pageArray.push(i);
      }
      dispatch({
        type: SORT_PRODUCT_BY_MATERIAL,
        payload: {
          data: response.data.products,
          currentPage: response.data.currentPage,
          total: pageArray,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const panigation = async ({ page }) => {
    try {
      // console.log(type);
      const response = await axios.get(
        "http://localhost:5000/api/product/panigation",
        { params: { page } }
      );

      const pageArray = [];
      for (let i = 1; i <= response.data.totalPages; i++) {
        pageArray.push(i);
      }

      dispatch({
        type: PANIGATION,
        payload: {
          data: response.data.products,
          currentPage: response.data.currentPage,
          total: pageArray,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const setSort = async () => {
    try {
      dispatch({ type: CHECK_SORT });
    } catch (error) {
      console.log(error);
    }
  };

  const setSortPrice = async () => {
    try {
      dispatch({ type: CHECK_SORT_PRICE });
    } catch (error) {
      console.log(error);
    }
  };
  const setSortMaterial = async () => {
    try {
      dispatch({ type: CHECK_SORT_MATERIAL });
    } catch (error) {
      console.log(error);
    }
  };
  const setPanigation = async () => {
    try {
      dispatch({ type: CHECK_PANIGATION });
    } catch (error) {}
  };
  const addProductInCart = async (currentProduct) => {
    try {
      console.log(currentProduct);
      const response = await axios.post(
        "http://localhost:5000/api/cart/add-product-in-cart",
        currentProduct
      );
      dispatch({ type: ADD_CART_ITEMS_SUCCESS });
      setTimeout(() => clearAlert(), 5000);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCart = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/cart/get-all-cart",
        { params: { userId: states.user._id } }
      );
      const items = response.data.cartItems;
      let totalCost = 0;
      let totalItemPayment = 0;
      // console.log(response.data);
      console.log(response.data);
      {
        items.map((item) => {
          if (item.isCheck) {
            const price = parseInt(item.product.price);
            const quantity = parseInt(item.quantity);
            totalCost = price * quantity + totalCost;
            totalItemPayment++;
          }
        });
      }

      dispatch({
        type: GET_CART_ITEMS,
        payload: {
          data: response.data.cartItems,
          totalCost: totalCost,
          totalItems: response.data.countItems,
          totalItemPayment: totalItemPayment,
        },
      });
      // console.log(states.itemOnCart);
    } catch (error) {
      console.log(error);
    }
  };
  const updateCartItems = async (updateProduct) => {
    try {
      console.log(updateProduct);
      const response = await axios.post(
        "http://localhost:5000/api/cart/update-quantity-cart",
        updateProduct
      );
      const items = response.data.cartItems;
      let totalCost = 0;
      let totalItemPayment = 0;
      // console.log(response.data);
      console.log(items);
      {
        items.map((item) => {
          if (item.isCheck) {
            const price = parseInt(item.product.price);
            const quantity = parseInt(item.quantity);
            totalCost = price * quantity + totalCost;
            totalItemPayment++;
          }
        });
      }
      console.log(response.data);
      dispatch({
        type: UPDATE_PRODUCT_IN_CART,
        payload: {
          data: response.data.cartItems,
          totalCost: totalCost,
          totalItems: response.data.countItems,
          totalItemPayment: totalItemPayment,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const updateCheckCartItems = async (updateCheckProduct) => {
    try {
      console.log(updateCheckProduct);
      const response = await axios.post(
        "http://localhost:5000/api/cart/update-ckecked-cart",
        updateCheckProduct
      );
      const items = response.data.cartItems;
      let totalCost = 0;
      let totalItemPayment = 0;
      // console.log(response.data);
      console.log(response.data.countItems);
      {
        items.map((item) => {
          if (item.isCheck) {
            const price = parseInt(item.product.price);
            const quantity = parseInt(item.quantity);
            totalCost = price * quantity + totalCost;
            totalItemPayment++;
          }
        });
      }
      console.log(response.data);
      dispatch({
        type: UPDATE_CHECK_PRODUCT_IN_CART,
        payload: {
          data: response.data.cartItems,
          totalCost: totalCost,
          totalItems: response.data.countItems,
          totalItemPayment: totalItemPayment,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteCartItems = async (deleteCartItem) => {
    const id = deleteCartItem.productId;
    const userId = deleteCartItem.userId;

    console.log(id);
    try {
      const response = await axios.delete(
        "http://localhost:5000/api/cart/delete-item-cart",
        { data: { productId: id, userId: userId } }
      );
      const items = response.data.cartItems;
      let totalCost = 0;
      let totalItemPayment = 0;
      // console.log(response.data);
      console.log(response.data.countItems);
      {
        items.map((item) => {
          if (item.isCheck) {
            const price = parseInt(item.product.price);
            const quantity = parseInt(item.quantity);
            totalCost = price * quantity + totalCost;
            totalItemPayment++;
          }
        });
      }
      dispatch({
        type: DELETE_PRODUCT_IN_CART,
        payload: {
          data: response.data.cartItems,
          totalCost: totalCost,
          totalItems: response.data.countItems,
          totalItemPayment: totalItemPayment,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const setPriceSales = (percent, code) => {
    const percentNumber = parseFloat(percent);
    const priceSale = states.totalCost * (percentNumber / 100);
    dispatch({ type: SET_VOUCHER, payload: priceSale, code: code });
  };
  const payment = async (order) => {
    const userId = order.userId;

    const response = await axios.get("http://localhost:5000/api/cart/payment", {
      params: { userId: userId },
    });

    dispatch({
      type: PAYMENT,
    });
  };
  // Function For ADMIN
  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/get-all-users"
      );

      dispatch({ type: GET_ALL_USERS, payload: response.data.users });
    } catch (error) {
      console.error(error);
    }
  };
  const deleteUserByUser = async (id) => {
    try {
      await axios.delete("http://localhost:5000/api/admin/delete-user-by-id", {
        params: { id },
      });

      getAllUsers();
    } catch (error) {
      console.error(error);
    }
  };
  const updateUserbyId = async (userUpdate) => {
    try {
      const response = await axios.patch(
        "http://localhost:5000/api/admin/update-user-by-id",
        userUpdate
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const setUserUpdate = async (userUpdate) => {
    try {
      dispatch({ type: SET_USER_UPDATE, payload: userUpdate });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProductById = async (productDelete) => {
    try {
      await axios.delete(
        "http://localhost:5000/api/admin/delete-product-by-id",
        { data: { idProduct: productDelete } }
      );
      alert("Delete product successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateProductById = async (productUpdate) => {};

  return (
    <AppContext.Provider
      value={{
        ...states,
        register,
        showErrorMessage,
        logOut,
        login,
        existTitle,
        addProduct,
        getAllProduct,
        sortProductByPrice,
        sortProductByType,
        panigation,
        setSort,
        setPanigation,
        addProductInCart,
        getAllCart,
        setSortPrice,
        sortProductByMaterials,
        setSortMaterial,
        updateCartItems,
        deleteCartItems,
        clearAlert,
        updateCheckCartItems,
        setPriceSales,
        payment,
        getAllUsers,
        deleteUserByUser,
        updateUserbyId,
        setUserUpdate,
        deleteProductById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};
export { useAppContext, AppProvider };

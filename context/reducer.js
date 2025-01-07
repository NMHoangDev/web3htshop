import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  SHOW_ALERT,
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  ADD_PRODUCT_BEGIN,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  IS_DISPLAY,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  SORT_PRODUCT_BY_PRICE,
  SORT_PRODUCT_BY_TYPE,
  PANIGATION,
  CHECK_SORT,
  CHECK_PANIGATION,
  GET_CART_ITEMS,
  CHECK_SORT_PRICE,
  SORT_PRODUCT_BY_MATERIAL,
  CHECK_SORT_MATERIAL,
  UPDATE_PRODUCT_IN_CART,
  DELETE_PRODUCT_IN_CART,
  ADD_CART_ITEMS_SUCCESS,
  UPDATE_CHECK_PRODUCT_IN_CART,
  SET_VOUCHER,
  PAYMENT,
  LOG_OUT,
  GET_ALL_USERS,
  DELETE_USER_BY_ID,
  SET_USER_UPDATE,
  UPDATE_USER,
} from "./action";
const reducer = (states, action) => {
  switch (action.type) {
    case REGISTER_USER_BEGIN:
      return {
        ...states,
        isLoading: true,
      };
      break;
    case REGISTER_USER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        user: action.payload,
        showMessage: true,
        typeMessage: "success",
        textMessage: "Đăng kí thành công",
      };
      break;
    case REGISTER_USER_ERROR:
      return {
        ...states,
        showAlert: true,
        showMessage: true,
        typeMessage: "error",
        textMessage: action.payload.msg,
      };
      break;

    case LOGIN_USER_BEGIN:
      {
        return {
          ...states,
          isLoading: true,
        };
      }
      break;
    case LOGIN_USER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        user: action.payload,
        showMessage: true,
        typeMessage: "success",
        textMessage: "Đăng nhập thành công",
      };
      break;
    case LOGIN_USER_ERROR:
      return {
        ...states,
        showAlert: true,
        showMessage: true,
        typeMessage: "error",
        textMessage: action.payload.msg,
      };
      break;
    case LOG_OUT:
      return {
        ...states,
        user: null,
        showMessage: false,
        typeMessage: "",
        textMessage: "",
      };
      break;
    case SHOW_ALERT:
      return {
        ...states,
        showAlert: true,
        showMessage: true,
        typeMessage: "error",
        textMessage: "Vui lòng nhập đủ thông tin",
      };
      break;
    case CLEAR_ALERT:
      return {
        ...states,
        showAlert: false,
        showMessage: false,
        typeMessage: "",
        textMessage: "",
        isDisplayCartNotification: false,
      };
      break;
    case IS_DISPLAY:
      return {
        ...states,
        showTitle: true,
      };
      break;
    case ADD_PRODUCT_BEGIN:
      {
        return {
          ...states,
          isLoading: true,
        };
      }
      break;
    case ADD_PRODUCT_SUCCESS:
      {
        return {
          ...states,
          product: action.payload.product,
        };
      }
      break;
    case GET_PRODUCT_BEGIN:
      {
        return {
          ...states,
          isLoading: true,
        };
      }
      break;
    case GET_PRODUCT_SUCCESS:
      {
        return {
          ...states,
          products: action.payload,
        };
      }
      break;
    case GET_PRODUCT_ERROR:
      {
        return {
          ...states,
          // products: action.payload,
        };
      }
      break;
    case SORT_PRODUCT_BY_PRICE:
      {
        return {
          ...states,
          products: action.payload.data,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.total,
          isSortPrice: true,
        };
      }
      break;
    case SORT_PRODUCT_BY_TYPE:
      {
        return {
          ...states,
          products: action.payload.data,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.total,
          isSortType: true,
        };
      }
      break;
    case SORT_PRODUCT_BY_MATERIAL:
      {
        return {
          ...states,
          products: action.payload.data,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.total,
          isSortMaterial: true,
        };
      }
      break;
    case PANIGATION:
      {
        return {
          ...states,
          products: action.payload.data,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.total,
        };
      }
      break;
    case CHECK_SORT:
      {
        return {
          ...states,
          isSortType: false,
        };
      }
      break;
    case CHECK_SORT_PRICE:
      {
        return {
          ...states,

          isSortPrice: false,
        };
      }
      break;
    case CHECK_SORT_MATERIAL:
      {
        return {
          ...states,

          isSortMaterial: false,
        };
      }
      break;
    case CHECK_PANIGATION:
      {
        return {
          ...states,
          isSort: false,
        };
      }
      break;
    case GET_CART_ITEMS:
      {
        return {
          ...states,
          itemOnCart: action.payload.data,
          totalCost: action.payload.totalCost,
          quantityOfItemInCart: action.payload.totalItems,
          totalItemPayment: action.payload.totalItemPayment,
        };
      }
      break;
    case ADD_CART_ITEMS_SUCCESS: {
      return {
        ...states,
        isDisplayCartNotification: true,
      };
    }
    case UPDATE_PRODUCT_IN_CART: {
      return {
        ...states,
        itemOnCart: action.payload.data,
        totalCost: action.payload.totalCost,
        quantityOfItemInCart: action.payload.totalItems,
        totalItemPayment: action.payload.totalItemPayment,
      };
    }
    case UPDATE_CHECK_PRODUCT_IN_CART: {
      return {
        ...states,
        itemOnCart: action.payload.data,
        totalCost: action.payload.totalCost,
        quantityOfItemInCart: action.payload.totalItems,
        totalItemPayment: action.payload.totalItemPayment,
      };
    }
    case DELETE_PRODUCT_IN_CART: {
      return {
        ...states,
        itemOnCart: action.payload.data,
        totalCost: action.payload.totalCost,
        quantityOfItemInCart: action.payload.totalItems,
        totalItemPayment: action.payload.totalItemPayment,
      };
    }
    case SET_VOUCHER: {
      return {
        ...states,
        priceSales: action.payload,
        code: action.code,
      };
    }
    case PAYMENT: {
      return {
        ...states,
        showMessagePayment: true,
      };
    }
    case GET_ALL_USERS: {
      return {
        ...states,
        users: action.payload,
      };
    }
    case DELETE_USER_BY_ID: {
      return {
        ...states,
        users: action.payload,
      };
    }
    case SET_USER_UPDATE: {
      return {
        ...states,
        currentUserUpdate: action.payload,
      };
    }
  }
};
export default reducer;

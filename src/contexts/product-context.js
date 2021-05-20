import React, { createContext, useReducer, useEffect } from "react";
import reducer from "../reducers/products-reducer";
import { products_url as url } from "../utils/constants";
import { promotedProducts_url as promotedUrl } from "../utils/constants";
import axios from "axios";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PROMOTED_START,
  GET_PROMOTED_SUCCESS,
  GET_PROMOTED_ERROR,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_START,
} from "../actions";

export const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  promotedProducts: [],
  promoted_loading: false,
  promoted_error: false,
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_START });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchPromotedProducts = async (url) => {
    dispatch({ type: GET_PROMOTED_START });
    try {
      const res = await axios.get(url);
      const promotedProducts = res.data;
      dispatch({ type: GET_PROMOTED_SUCCESS, payload: promotedProducts });
    } catch (error) {
      dispatch({ type: GET_PROMOTED_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_START });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  useEffect(() => {
    fetchPromotedProducts(promotedUrl);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

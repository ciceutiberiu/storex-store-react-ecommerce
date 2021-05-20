import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let auxProducts = [...filtered_products];
    if (sort === "price-lowest") {
      auxProducts = auxProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      auxProducts = auxProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      auxProducts = auxProducts.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    if (sort === "name-z") {
      auxProducts = auxProducts.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }
    return { ...state, filtered_products: auxProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, price } = state.filters;
    let auxProducts = [...all_products];

    if (text) {
      auxProducts = auxProducts.filter((product) => {
        return product.title.toLowerCase().startsWith(text);
      });
    }
    if (category !== "all") {
      auxProducts = auxProducts.filter(
        (product) => product.category === category
      );
    }
    auxProducts = auxProducts.filter((product) => product.price <= price);
    return { ...state, filtered_products: auxProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        price: state.filters.max_price,
      },
    };
  }
  return state;
};

export default filter_reducer;

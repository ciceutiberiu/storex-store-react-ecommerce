import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  COUNT_CART_TOTALS,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, single_product } = action.payload;
    const auxProduct = state.cart.find((i) => i.id === id);

    if (auxProduct) {
      const auxCart = state.cart.map((cartProduct) => {
        if (cartProduct.id === id) {
          let newAmount = cartProduct.amount + amount;
          if (newAmount > 10) {
            newAmount = 10;
          }
          return { ...cartProduct, amount: newAmount };
        } else {
          return cartProduct;
        }
      });
      return { ...state, cart: auxCart };
    } else {
      const newItem = {
        id,
        amount,
        image: single_product.image,
        name: single_product.title,
        price: single_product.price,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const auxCart = state.cart.filter(
      (product) => product.id !== action.payload
    );
    return { ...state, cart: auxCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.total_items += amount;
        total.total_amount += price * amount;

        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const auxCart = state.cart.map((product) => {
      if (product.id === id) {
        if (value === "inc") {
          let newAmount = product.amount + 1;
          if (newAmount > 10) {
            newAmount = 10;
          }
          return { ...product, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = product.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...product, amount: newAmount };
        }
      }
      return product;
    });

    return { ...state, cart: auxCart };
  }
  return state;
};

export default cart_reducer;

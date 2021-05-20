import React, { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartColumns, CartItem, CartTotals } from "../components";

const CartContent = () => {
  const { cart, clearCart } = useContext(CartContext);
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((product) => {
        return <CartItem id={product.id} {...product} />;
      })}
      <hr />
      <div className="buttons-container">
        <Link to="products" className="btn">
          Continue Shopping
        </Link>
        <button type="button" className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .buttons-container {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .clear-btn {
    cursor: pointer;
    border: none;
    background: #dc143c;
    color: var(--white);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`;

export default CartContent;

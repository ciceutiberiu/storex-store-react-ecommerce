import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/cart-context";
import { Link } from "react-router-dom";
import { Hero, CartContent } from "../components";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Wrapper className="page">
        <div className="empty-cart">
          <h1>Your cart is currently empty</h1>
          <Link to="/products" className="btn">
            Start shopping
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <Hero page="Cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .empty-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;

    h1 {
      margin-top: 5rem;
      margin-bottom: 2.5rem;
    }
  }
`;

export default CartPage;

import React, { useContext } from "react";
import { Hero } from "../components";
import styled from "styled-components";
import { CartContext } from "../contexts/cart-context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  return (
    <main>
      <Hero page="Checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty-cart">
            <h2>Your cart is currently empty</h2>
            <Link to="/products" className="btn">
              Start shopping
            </Link>
          </div>
        ) : (
          "Will be added"
        )}
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
  }

  h2 {
    margin-top: 2.5rem;
    margin-bottom: 4rem;
  }
`;

export default CheckoutPage;

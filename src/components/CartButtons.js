import React, { useContext } from "react";
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../contexts/cart-context";
import { UserContext } from "../contexts/user-context";

const CartButtons = () => {
  const { total_items } = useContext(CartContext);
  const { loginWithRedirect, logout, myUser } = useContext(UserContext);
  return (
    <Wrapper className="wrapper-btns">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-count">{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          className="auth-btn"
          type="button"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .auth-btn {
    background: transparent;
    border: none;
    color: var(--white);
    font-size: 1.3rem;
    cursor: pointer;
    display: flex;
    letter-spacing: var(--letter-spacing);
    svg {
      margin-left: 5px;
      font-size: 1.4rem;
    }
  }

  .cart-btn {
    font-size: 1.3rem;
    display: flex;
    color: var(--white);
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-right: 1.3rem;
    letter-spacing: var(--letter-spacing);
  }

  .cart-container {
    position: relative;
    display: flex;
    margin-left: 5px;
    svg {
      font-size: 1.3rem;
    }
  }

  .cart-count {
    position: absolute;
    top: -16px;
    right: -17px;
    font-size: 1rem;
    background: var(--yellow);
    color: var(--white);
    border-radius: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    font-weight: 500;
  }
`;

export default CartButtons;

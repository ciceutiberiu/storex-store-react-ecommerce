import React, { useContext } from "react";
import { ProductsContext } from "../contexts/product-context";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaUserPlus,
  FaUserMinus,
  FaShoppingCart,
} from "react-icons/fa";
import { links } from "../utils/constants";
import styled from "styled-components";
import { CartContext } from "../contexts/cart-context";
import { UserContext } from "../contexts/user-context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(ProductsContext);
  const { total_items } = useContext(CartContext);
  const { loginWithRedirect, logout, myUser } = useContext(UserContext);

  return (
    <Wrapper>
      <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <h1>Storex</h1>
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="sidebar-links">
          <ul>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url} onClick={closeSidebar}>
                    {text}
                  </Link>
                </li>
              );
            })}
            {myUser && (
              <li>
                <Link to="/checkout" onClick={closeSidebar}>
                  checkout
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="cart">
          <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
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
            <button
              type="button"
              className="auth-btn"
              onClick={loginWithRedirect}
            >
              Login <FaUserPlus />
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    background: var(--dark-green);
    z-index: -1;
    transform: translate(-100%);
  }

  .sidebar.show-sidebar {
    transition: 0.4s ease-in-out;
    z-index: 10;
    transform: translate(0);
  }

  .sidebar-header {
    display: flex;
    width: 80vw;
    margin: 0 auto;
    margin-top: 2rem;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: var(--white);
      letter-spacing: var(--letter-spacing);
    }

    .close-btn {
      font-size: 1.8rem;
      border: none;
      background: transparent;
      color: var(--white);
      cursor: pointer;
      margin-top: 0.5rem;
    }
  }

  .sidebar-links ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    list-style: none;
    margin-top: 5rem;
    gap: 2rem;
    font-size: 1.3rem;
    letter-spacing: var(--letter-spacing);
  }
  .sidebar-links ul a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      color: var(--yellow);
    }
  }

  .cart {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
  }

  .cart-container {
    position: relative;
    display: flex;
    margin-left: 5px;
    svg {
      font-size: 1.3rem;
    }
  }

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
    padding: 2px;
    font-weight: 500;
  }
`;

export default Sidebar;

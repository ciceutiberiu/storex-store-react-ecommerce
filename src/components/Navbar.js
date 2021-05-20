import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { ProductsContext } from "../contexts/product-context";
import { UserContext } from "../contexts/user-context";

const Navbar = () => {
  const { openSidebar } = useContext(ProductsContext);
  const { myUser } = useContext(UserContext);

  return (
    <Wrapper>
      <div className="navbar-center">
        <div className="navbar-items">
          <Link to="/" className="logo">
            Storex
          </Link>
          <button type="button" className="navbar-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="navbar-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-green);

  .navbar-center {
    width: 80vw;
    margin: 0 auto;
  }

  .navbar-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-links {
    display: none;
  }

  .logo {
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--white);
  }

  .navbar-toggle {
    background: transparent;
    color: var(--white);
    font-size: 1.5rem;
    border: transparent;
    cursor: pointer;
  }

  .wrapper-btns {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .navbar-toggle {
      display: none;
    }

    .navbar-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .navbar-links {
      display: flex;
      justify-content: center;
      letter-spacing: var(--letter-spacing);
      li {
        margin: 0 0.5rem;
        list-style: none;
      }
      a {
        text-decoration: none;
        text-transform: capitalize;
        color: var(--white);
        padding: 0.5rem;
        font-size: 1.1rem;

        &:hover {
          border-bottom: 2px solid var(--white);
        }
      }
    }

    .wrapper-btns {
      display: grid;
    }
  }
`;

export default Navbar;

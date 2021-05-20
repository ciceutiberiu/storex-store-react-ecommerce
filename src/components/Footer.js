import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <div className="customer-service">
          <h3>Customer Service</h3>
          <ul className="footer-links">
            <li>30 days rights of return</li>
            <li>Payment by card</li>
            <li>Black Friday</li>
            <li>Service</li>
          </ul>
        </div>
        <div className="customer-orders">
          <h3>Orders and Delivery</h3>
          <ul className="footer-links">
            <li>My Storex account</li>
            <li>Delivery of orders</li>
            <li>Black Friday</li>
            <li>Payment Methods</li>
          </ul>
        </div>
        <div className="customer-support">
          <h3>Customer Support</h3>
          <ul className="footer-links">
            <li>Product repair form</li>
            <li>Product return form</li>
            <li>Terms of service</li>
            <li>Payment Methods</li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Social Media</h3>
          <ul className="footer-links">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <div className="media">
        <div className="media-container">
          <ul>
            <Link to="/products">Products</Link>
            <Link to="/about">About us</Link>
            <Link to="/login">Login</Link>
            <Link to="/cart">View Cart</Link>
          </ul>
        </div>
        <h5>
          &copy; {new Date().getFullYear()} <i>Storex</i>
        </h5>
        <h5>All rights reserved.</h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  height: 15rem;
  background: var(--dark-green);
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-container {
    width: 70vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;

    h3 {
      margin-bottom: 0.75rem;
      color: var(--white);
      letter-spacing: var(--letter-spacing);
    }
  }

  .footer-links {
    color: var(--white);
    list-style: none;

    li {
      letter-spacing: var(--letter-spacing);
      padding: 2px 0;
      cursor: pointer;
      outline: 0;

      &:hover {
        color: var(--yellow);
      }
    }
  }

  .media {
    display: none;
  }

  @media screen and (max-width: 992px) {
    height: 5rem;

    .footer-container {
      display: none;
    }

    .media {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: var(--white);
      letter-spacing: var(--letter-spacing);

      i {
        color: var(--yellow);
      }
    }
    .media-container ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 0.3rem;
      font-size: 1.1rem;
    }

    .media-container ul a {
      text-decoration: none;
      color: var(--white);
      letter-spacing: var(--letter-spacing);

      &:hover {
        color: var(--yellow);
      }
    }
  }
`;

export default Footer;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = ({ page, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h2>
          <Link to="/" className="hero-btn">
            HOME
          </Link>
          {product && (
            <Link to="/products" className="products-page">
              | Products
            </Link>
          )}
          | {page}
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 20vh;
  background: var(--main-green);
  opacity: 0.6;
  display: flex;
  align-items: center;

  .products-page {
    text-decoration: none;
    margin-right: 2rem;
    color: black;
  }

  .hero-btn {
    text-decoration: none;
    font-size: 1.2rem;
    border: 1px solid var(--main-green);
    padding: 0.5rem 2.5rem;
    border-radius: 5px;
    color: #111;
    background: var(--yellow);
    text-transform: uppercase;
    margin-right: 2rem;
    opacity: 1;

    &:hover {
      background: var(--dark-green);
      color: var(--white);
      transition: all 0.4s ease;
    }
  }
`;

export default Hero;

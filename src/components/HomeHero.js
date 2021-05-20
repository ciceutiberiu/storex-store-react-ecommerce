import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import homehero from "../utils/images/homehero.png";

const HomeHero = () => {
  return (
    <Wrapper className="section-center">
      <article className="hero-content">
        <h1>Storex everything online</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
          dignissimos doloremque maxime quis similique iste vel eaque cum ipsam
          at.
        </p>
        <Link to="/products" className="hero-btn">
          SHOP NOW
        </Link>
      </article>
      <article className="img-container">
        <img src={homehero} alt="" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  justify-content: center;

  .img-container {
    display: none;
  }

  .hero-content h1 {
    font-size: 1.5rem;
    letter-spacing: var(--letter-spacing);
    margin-bottom: 2rem;
  }

  .hero-content p {
    line-height: 2;
    margin-bottom: 2rem;
  }

  .hero-btn {
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem 2.5rem;
    background: var(--dark-green);
    color: var(--white);
    border-radius: 5px;
    text-transform: uppercase;
    margin-right: 2rem;
    font-weight: bolder;

    &:hover {
      background: var(--yellow);
      color: var(--dark-green);
      transition: 0.4s ease;
    }
  }

  @media screen and (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 7rem;
    .img-container {
      display: block;
    }

    .img-container img {
      height: 550px;
      object-fit: contain;
      width: 100%;
    }

    .hero-content p {
      font-size: 1.25rem;
    }

    .hero-content h1 {
      font-size: 2rem;
    }

    .hero-btn {
      padding: 0.5rem 1.5rem;
    }
  }
`;

export default HomeHero;

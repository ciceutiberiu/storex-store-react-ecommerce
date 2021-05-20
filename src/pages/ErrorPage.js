import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../utils/images/error.png";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="image-container">
        <img src={Image} alt="" />
      </div>
      <div className="error-footer">
        <h1>Page not found</h1>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: calc(100vh - 10rem);
  background-color: #fff;

  .image-container {
    margin: 0 auto;
  }

  .image-container img {
    width: 100%;
    height: calc(100vh - 30rem);
    margin: 0 auto;
    object-fit: contain;
  }

  .error-footer {
    text-align: center;
    margin-top: 2rem;
  }

  .error-footer h1 {
    color: var(--main-green);
    margin-bottom: 2rem;
  }

  .btn {
    text-decoration: none;
    font-size: 1.2rem;
    border: 1px solid var(--main-green);
    padding: 0.5rem 2.5rem;
    border-radius: 5px;
    color: var(--white);
    background: var(--dark-green);
    text-transform: uppercase;

    &:hover {
      opacity: 0.8;
      color: var(--white);
      transition: 0.3s ease;
    }
  }
`;

export default ErrorPage;

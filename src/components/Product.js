import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = ({ title, image, price, id }) => {
  return (
    <Wrapper>
      <div className="container">
        <Link to={`/products/${id}`} className="link">
          <img src={image} alt={title} className="image" />
        </Link>
      </div>
      <div className="product-footer">
        <h4>{title}</h4>
        <p className="price">${price}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .image {
    width: 100%;
    display: block;
    object-fit: contain;
  }

  .product-footer {
    margin: 2rem 2rem 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Product;

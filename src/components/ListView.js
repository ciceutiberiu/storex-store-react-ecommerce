import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListView = ({ filtered_products }) => {
  return (
    <Wrapper>
      {filtered_products.map((product) => {
        const { id, image, price, title, description } = product;
        return (
          <article>
            <img src={image} alt="" />
            <div>
              <h4>{title}</h4>
              <p className="price">${price}</p>
              <p className="desc">{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="details">
                View More
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 5rem;

  img {
    width: 100%;
    width: 300px;
    height: 200px;
    display: block;
    object-fit: contain;
  }

  h4 {
    margin-top: 1rem;
  }

  .price {
    width: 100px;
    text-align: center;
    margin-top: 1rem;
  }

  .desc {
    margin-top: 1rem;
  }

  .details {
    display: block;
    margin-top: 1rem;
    width: 125px;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: #111;
    background: var(--yellow);
    text-transform: uppercase;
    opacity: 1;

    &:hover {
      background: var(--dark-green);
      color: var(--white);
      transition: all 0.4s ease;
    }
  }

  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;

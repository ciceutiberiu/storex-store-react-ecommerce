import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/product-context";
import { singleProduct_url } from "../utils/constants";
import { Hero, Loading, Error, AddToCart } from "../components";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    fetchSingleProduct,
    single_product_error,
    single_product_loading,
    single_product,
  } = useContext(ProductsContext);

  useEffect(() => {
    fetchSingleProduct(`${singleProduct_url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (single_product_error) {
      setTimeout(() => {
        history.push("/");
      }, 4000);
    }
    // eslint-disable-next-line
  }, [single_product_error]);

  if (single_product_loading) {
    return <Loading />;
  }

  if (single_product_error) {
    return <Error />;
  }

  const { price, title, description, image } = single_product;
  return (
    <Wrapper>
      <Hero page={title} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          Back to Products
        </Link>
        <div className="product-center">
          <div className="img-container">
            <img src={image} alt="" />
          </div>
          <div className="product-content">
            <h2>{title}</h2>
            <p className="product-price">${price}</p>
            <p className="info">{description}</p>
            <hr />
            <AddToCart single_product={single_product} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 5rem;
  }

  .img-container img {
    height: 350px;
    width: 100%;
    object-fit: contain;
  }

  .info {
    line-height: 2;
    letter-spacing: var(--letter-spacing);
  }

  .product-content {
    h2,
    p {
      margin-top: 1.5rem;
    }

    p {
      margin-bottom: 1.5rem;
    }
    .product-price {
      font-weight: bold;
      letter-spacing: var(--letter-spacing);
      color: var(--dark-green);
      background: var(--white);
      border-radius: 5px;
      padding: 0.3rem 0.5rem;
      width: 150px;
      text-align: center;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`;

export default SingleProductPage;

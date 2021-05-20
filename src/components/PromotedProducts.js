import React, { useContext } from "react";
import { ProductsContext } from "../contexts/product-context";
import styled from "styled-components";

import Product from "./Product";
import Loading from "./Loading";
import Error from "./Error";

const PromotedProducts = () => {
  const { promotedProducts, promoted_error, promoted_loading } =
    useContext(ProductsContext);

  if (promoted_loading) {
    return <Loading />;
  }

  if (promoted_error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Promoted Products</h2>
        <hr className="line" />
      </div>
      <div className="section-center promoted">
        {promotedProducts.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .title {
    text-align: center;
  }

  .line {
    width: 80%;
    margin: 0 auto;
    margin-top: 4rem;
  }

  .promoted {
    display: grid;
    margin: 4rem auto;
    gap: 2.5rem;
    img {
      height: 250px;
    }
  }

  @media (min-width: 576px) {
    .promoted {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default PromotedProducts;

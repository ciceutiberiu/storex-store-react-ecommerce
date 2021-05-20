import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h4>Item</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4 className="subtotal">Subtotal</h4>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;

    .content {
      display: grid;
      grid-template-columns: 320px 1fr 1fr 0.4fr auto;
      justify-content: center;
      column-gap: 7.5rem;
    }
    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`;
export default CartColumns;

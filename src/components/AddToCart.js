import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "../contexts/cart-context";

const AddToCart = ({ single_product }) => {
  const [amount, setAmount] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { id } = single_product;

  const increase = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    } else {
      setAmount(10);
    }
  };

  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    } else setAmount(1);
  };

  return (
    <Wrapper>
      <div className="amount-buttons">
        <button type="button" onClick={decrease} className="amount-btn">
          <FaMinus />
        </button>
        <h2>{amount}</h2>
        <button type="button" onClick={increase} className="amount-btn">
          <FaPlus />
        </button>
      </div>
      <Link
        to="/cart"
        className="btn"
        onClick={() => {
          addToCart(id, amount, single_product);
        }}
      >
        Add To Cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;

  .amount-buttons {
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    align-items: center;
    width: 150px;
  }

  .amount-btn {
    text-align: center;
    border: none;
    background: #fff;
    cursor: pointer;
    margin-top: 2rem;
  }
`;

export default AddToCart;

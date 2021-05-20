import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/cart-context";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import CurrencyFormat from "react-currency-format";

const CartItem = ({ id, name, price, amount, image }) => {
  const [totalAmount, setTotalAmount] = useState(amount);
  const { removeItem, toggleAmount } = useContext(CartContext);

  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <h5 className="price-small">${price}</h5>
        </div>
      </div>
      <CurrencyFormat
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        className="price"
      />
      <div className="amount-buttons">
        <button type="button" onClick={decrease} className="amount-btn">
          <FaMinus />
        </button>
        <h2 className="total-amount">{amount}</h2>
        <button type="button" onClick={increase} className="amount-btn">
          <FaPlus />
        </button>
      </div>
      <h5 className="subtotal">
        {" "}
        <CurrencyFormat
          value={price * totalAmount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          className="price"
        />
      </h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
    color: #111;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .price-small {
    color: var(--dark-green);
  }
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

  .total-amount {
    margin-top: 1.5rem;
    margin-left: 0.5rem;
  }
  .remove-btn {
    color: var(--white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--leter-spacing);
    background: red;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--dark-green);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--dark-green);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }

    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
      color: #111;
    }
  }
`;
export default CartItem;

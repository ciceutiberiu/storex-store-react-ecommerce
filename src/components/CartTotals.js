import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../contexts/cart-context";
import { UserContext } from "../contexts/user-context";

const CartTotals = () => {
  const { total_amount } = useContext(CartContext);
  const { myUser, loginWithRedirect } = useContext(UserContext);

  return (
    <Wrapper>
      <div>
        <article>
          <h3>Total: ${total_amount}</h3>
          <hr />
          {myUser ? (
            <Link to="/checkout" className="total-btn">
              Proceed to checktout
            </Link>
          ) : (
            <button onClick={loginWithRedirect} className="btn" type="button">
              Login
            </button>
          )}
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  article {
    border: 1px solid var(--dark-green);
    padding: 2rem 6rem;
    border-radius: 5px;

    hr {
      margin-bottom: 2.5rem;
      margin-top: 1.5rem;
    }
  }

  .total-btn {
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
    border-radius: 5px;
    color: #111;
    background: var(--yellow);
    text-transform: uppercase;
    opacity: 1;
    cursor: pointer;

    &:hover {
      background: var(--dark-green);
      color: var(--white);
      transition: all 0.4s ease;
    }
  }

  .btn {
    text-decoration: none;
    font-size: 1rem;
    padding: 0.65rem 5rem;
    border-radius: 5px;
    color: #111;
    background: var(--yellow);
    text-transform: uppercase;
    margin-right: 2rem;
    opacity: 1;
    cursor: pointer;
    border: none;
  }

  .btn:hover {
    background: var(--dark-green);
    color: var(--white);
    transition: all 0.4s ease;
  }
`;

export default CartTotals;

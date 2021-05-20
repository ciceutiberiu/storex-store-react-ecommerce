import React, { useContext } from "react";
import { FilterContext } from "../contexts/filter-context";
import styled from "styled-components";

const Filters = () => {
  const {
    filters: { text, category, price, max_price, min_price },
    updateFilter,
    clearFilter,
    all_products,
  } = useContext(FilterContext);

  const uniqueValue = () => {
    let unique = all_products.map((item) => item["category"]);
    return ["all", ...new Set(unique)];
  };

  const categories = uniqueValue();

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="search-input"
              value={text}
              onChange={updateFilter}
            />
          </div>
          <div className="form-control">
            <h4>Category</h4>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilter}
                    name="category"
                    type="button"
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h4>Price</h4>
            <p className="price">${price}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilter}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilter}>
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h4 {
      margin-bottom: 0.5rem;
    }
    p {
      margin-bottom: 0.75rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--white);
    border-radius: 5px;
    border-color: transparent;
    letter-spacing: var(--letter-spacing);
    color: #111;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.3rem 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--letter-spacing);
    color: var(--dark-green);
    cursor: pointer;
    font-size: 0.9rem;
  }
  .active {
    border-color: var(--dark-green);
  }

  .clear-btn {
    background: red;
    color: var(--white);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
  }
`;

export default Filters;

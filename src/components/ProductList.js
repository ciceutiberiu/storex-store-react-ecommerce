import React, { useContext } from "react";
import { FilterContext } from "../contexts/filter-context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products, grid_view } = useContext(FilterContext);

  if (filtered_products < 1) {
    return <h4>No products matched your search, sorry...</h4>;
  }

  if (grid_view === false) {
    return <ListView filtered_products={filtered_products} />;
  }

  return (
    <div>
      <GridView filtered_products={filtered_products}>Product List</GridView>
    </div>
  );
};

export default ProductList;

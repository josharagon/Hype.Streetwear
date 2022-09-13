import React from "react";
import "./ProductContainer.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductContainer = ({ results, setCart, cart }) => {
  console.log(results);
  let allResults;
  if (results.length) {
    allResults = results.map((product) => {
      return (
        <ProductCard
          productInfo={product}
          key={product.uid}
          setCart={setCart}
          cart={cart}
        />
      );
    });
  }

  return (
    <>{allResults && <section id="productContainer">{allResults}</section>}</>
  );
};
export default ProductContainer;

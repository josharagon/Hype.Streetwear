import React from "react";
import "./ProductContainer.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductContainer = ({ results }) => {
  console.log(results);
  let allResults;
  if (results.length) {
    console.log(results, "here");
    allResults = results.map((product) => {
      return <ProductCard productInfo={product} />;
    });
  }
  // const allProducts = results.results ? (
  //   results.map((product) => {
  //     return (
  //       <ProductCard key={product.id} id={product.id} name={product.name} />
  //     );
  //   })
  // ) : (
  //   <p>Error loading products, try reloading your browser.</p>
  // );

  return (
    <>{allResults && <section id="productContainer">{allResults}</section>}</>
  );
};
export default ProductContainer;

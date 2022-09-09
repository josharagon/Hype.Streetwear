import React from "react";
import "./ProductContainer.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductContainer = (productData) => {
  console.log(productData);
  const allProducts = productData ? (
    productData.map((product) => {
      return (
        <ProductCard key={product.id} id={product.id} name={product.name} />
      );
    })
  ) : (
    <p>Error loading products, try reloading your browser.</p>
  );
  return <section className="card-container">{allProducts}</section>;
};
export default ProductContainer;

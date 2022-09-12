import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ productInfo, setCart, cart }) => {
  return (
    <div id="card">
      <div id="overlay">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p id="viewProduct">view</p>
        </Link>
        <p
          id="atc"
          onClick={() => {
            console.log(cart);
            setCart([...cart, productInfo]);
          }}
        >
          add to cart
        </p>
        <h4 id="price">
          ${productInfo.price}
          {productInfo.price < productInfo.msrp && (
            <span id="productMsrp">${productInfo.msrp}</span>
          )}
        </h4>
      </div>
      <img
        src={productInfo.thumbnailImageUrl}
        id="cardImage"
        alt={productInfo.name}
      />
    </div>
  );
};

export default ProductCard;

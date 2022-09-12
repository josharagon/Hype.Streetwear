import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ productInfo }) => {
  return (
    <div id="card">
      <div id="overlay">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p id="viewProduct">view</p>
        </Link>
        <p id="atc">add to cart</p>
        <h4 id="price">
          ${productInfo.price}
          {productInfo.price < productInfo.msrp && (
            <span id="msrp">${productInfo.msrp}</span>
          )}
        </h4>
      </div>
      <img
        src={productInfo.thumbnailImageUrl}
        id="cardImage"
        alt={`${productInfo.name} card`}
      />
      <div className="hover-message">
        {/* <h2>{props.name}</h2>
        <h4>{props.title}</h4> */}
      </div>
    </div>
  );
};

export default ProductCard;

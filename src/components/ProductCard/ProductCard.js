import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ productInfo }) => {
  return (
    <div id="card">
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ productInfo, setCart, cart }) => {
  const [addingToCart, setAddingToCart] = useState(false);

  return (
    <div id="card">
      <div id="overlay">
        {!addingToCart && (
          <Link
            to={`${productInfo.url}`}
            style={{ textDecoration: "none" }}
            state={{ product: productInfo }}
          >
            <p id="viewProduct">view</p>
          </Link>
        )}
        {addingToCart && (
          <p
            id="atc"
            onClick={() => {
              setAddingToCart(false);
            }}
          >
            X
          </p>
        )}
        {!addingToCart && (
          <p
            id="atc"
            onClick={() => {
              if (productInfo.size) {
                setAddingToCart(true);
              } else {
                setCart([...cart, { product: productInfo, size: "OS" }]);
              }
            }}
          >
            add to cart
          </p>
        )}
        {productInfo.size && (
          <div id="sizeContainer">
            {productInfo.size.map((name, i) => {
              return (
                <p
                  id="atc"
                  key={i}
                  style={{ display: !addingToCart ? "none" : "" }}
                  onClick={() => {
                    console.log(cart);
                    setAddingToCart(true);
                    setCart([...cart, { product: productInfo, size: name }]);
                  }}
                >
                  {name}
                </p>
              );
            })}
          </div>
        )}
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
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "/imgError.jpeg";
        }}
      />
    </div>
  );
};

export default ProductCard;

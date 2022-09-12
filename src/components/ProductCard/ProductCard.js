import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ productInfo, setCart, cart }) => {
  const [addingToCart, setAddingToCart] = useState(false);
  const location = useLocation();

  return (
    <div
      id="card"
      onMouseLeave={() => {
        setAddingToCart(false);
      }}
    >
      <div id="overlay">
        {!addingToCart && (
          <Link
            to={`${productInfo.url}`}
            style={{ textDecoration: "none" }}
            state={{ product: productInfo, prevPath: location.pathname }}
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
        {!addingToCart && !cart.some((cart) => cart["id"] === productInfo.uid) && (
          <p
            id="atc"
            onClick={() => {
              if (productInfo.size) {
                setAddingToCart(true);
              } else {
                setCart([
                  ...cart,
                  { product: productInfo, size: "OS", id: productInfo.uid },
                ]);
                setAddingToCart(false);
              }
            }}
          >
            add to cart
          </p>
        )}

        {!addingToCart && cart.some((cart) => cart["id"] === productInfo.uid) && (
          <p id="atc" onClick={() => {}}>
            in cart
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
                    setAddingToCart(true);
                    setCart([
                      ...cart,
                      { product: productInfo, size: name, id: productInfo.uid },
                    ]);
                    setAddingToCart(false);
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

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StoreHeader from "../StoreHeader/StoreHeader";
import "./SingleProductView.css";

const SingleProductView = ({ cart, setCart }) => {
  const location = useLocation();
  const { product, prevPath } = location.state;

  const [selectedSize, setSelectedSize] = useState("Small");

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <button
        onClick={() => {
          console.log(cart, product);
        }}
      >
        log cart
      </button>
      <StoreHeader />
      <article id="singleProductContainer">
        <img src={product.thumbnailImageUrl} />
        <div id="singleProductInfoContainer">
          <p id="prouctName">{product.name}</p>
          <p id="productColor">{product.color}</p>
          <p id="productDescription">{product.description}</p>
          <h4 id="productPrice">
            ${product.price}
            {product.price < product.msrp && (
              <span id="productMsrp">${product.msrp}</span>
            )}
          </h4>

          {cart.some((cart) => cart["id"] === product.uid) && (
            <button id="inCart">in cart</button>
          )}
          {!cart.some((cart) => cart["id"] === product.uid) && (
            <select
              id="sizeSelector"
              onChange={(e) => {
                setSelectedSize(e.target.value);
              }}
              value={selectedSize}
            >
              {product.size ? (
                product.size.map((size) => {
                  return (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  );
                })
              ) : (
                <option value="OneSize">One Size</option>
              )}
            </select>
          )}
          <div id="actionButtons">
            {!cart.some((cart) => cart["id"] === product.uid) && (
              <button
                className="atc-ks"
                onClick={() => {
                  setCart([
                    ...cart,
                    { product: product, size: selectedSize, id: product.uid },
                  ]);
                }}
              >
                add to cart
              </button>
            )}
            {cart.some((cart) => cart["id"] === product.uid) && (
              <button
                className="atc-ks"
                onClick={() => {
                  handleRemoveItem(product.uid);
                }}
              >
                remove
              </button>
            )}
            <Link to={prevPath} className="atc-ks">
              keep shopping
            </Link>
          </div>
          <p id="freeShip">* free shipping on all orders over $60</p>
        </div>
      </article>
    </>
  );
};

export default SingleProductView;

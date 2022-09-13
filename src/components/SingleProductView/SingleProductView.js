import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import StoreHeader from "../StoreHeader/StoreHeader";
import "./SingleProductView.css";

const SingleProductView = ({ cart, setCart }) => {
  const [selectedSize, setSelectedSize] = useState(
    product.size ? product.size[0] : "One Size"
  );

  const location = useLocation();
  const { product, prevPath } = location.state;

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <StoreHeader />
      <article id="singleProductContainer">
        <img
          src={product.thumbnailImageUrl}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/imgError.jpeg";
          }}
        />
        <div id="singleProductInfoContainer">
          <p id="prouctName">{product.name}</p>
          <p id="productColor">{product.color}</p>
          <p
            id="productDescription"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></p>
          <h4 id="productPrice">
            ${product.price}
            {product.price < product.msrp && (
              <span id="productRetail">${product.msrp}</span>
            )}
          </h4>

          {cart.some((cart) => cart["id"] === product.uid) && (
            <Link to={"/cart"}>
              <button id="inCart">in cart</button>
            </Link>
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
            <Link to={prevPath}>
              <button className="atc-ks">keep shopping</button>
            </Link>
          </div>
          <p id="freeShip">* free shipping on all orders over $60</p>
        </div>
      </article>
    </>
  );
};

export default SingleProductView;

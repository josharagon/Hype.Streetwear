import React from "react";
import StoreHeader from "../StoreHeader/StoreHeader";

const SingleProductView = ({ product }) => {
  console.log(product);
  return (
    <>
      <StoreHeader />
      <article>
        <div>
          <img src={product.thumbnailPhotoUrl} />
        </div>
        <p>{product.name}</p>
        <p>{product.color}</p>
        <p>{product.description}</p>
      </article>
    </>
  );
};

export default SingleProductView;

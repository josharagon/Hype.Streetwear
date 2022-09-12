import React from "react";
import StoreHeader from "../StoreHeader/StoreHeader";

const SingleProductView = (productObj) => {
  return (
    <>
      <StoreHeader />
      <article>
        <div>
          <img src={productObj.thumbnailPhotoUrl} />
        </div>
        <p>{productObj.name}</p>
        <p>{productObj.color}</p>
        <p>{productObj.description}</p>
      </article>
    </>
  );
};

export default SingleProductView;

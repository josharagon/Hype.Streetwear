import "./CartCard.css";

const CartCard = ({ product }) => {
  console.log(product);
  return (
    <article id="cardCard">
      <img id="cartCardImage" src={product.product.thumbnailImageUrl} />
      <div id="cardDetails">
        <div id="cardInfo">
          <p id="name">{product.product.name}</p>
          {/* <p>s</p> */}
          <p id="size">{product.size}</p>
        </div>
        <p>remove</p>
        <p id="price">{product.product.price}</p>
      </div>
    </article>
  );
};

export default CartCard;

import "./CartCard.css";

const CartCard = ({ product, cart, setCart }) => {
  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
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
        <button
          onClick={() => {
            handleRemoveItem(product.id);
          }}
        >
          remove
        </button>
        <p id="price">{product.product.price}</p>
      </div>
    </article>
  );
};

export default CartCard;

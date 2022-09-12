import StoreHeader from "../StoreHeader/StoreHeader";

import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <StoreHeader />
      <section id="cartMain">
        <div id="tabs">
          <h1 className="cart-tab tab-active">EDIT/VIEW CART</h1>
          <h1 className="cart-tab">SHIPPING / PAYMENT</h1>
          <h1 className="cart-tab">CONFIRMATION</h1>
        </div>
        <p id="cartCount">{cart.length} items in your cart.</p>
        <article id="cartMid">
          <div id="cartBody"></div>
          <div id="cartSubTotal"></div>
        </article>
        <footer id="cartFooter">
          <p id="shipNote">
            free shipping on all orders over $60, some exceptions may apply
          </p>
          <div>
            <button id="keepShopping">keep shopping</button>
            <button id="checkout">checkout now</button>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Cart;
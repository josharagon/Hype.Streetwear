import { Link } from "react-router-dom";

import CartCard from "../CartCard/CartCard";
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
          <div id="cartBody">
            {cart.map((item) => {
              return (
                <CartCard
                  product={item}
                  key={item.id}
                  cart={cart}
                  setCart={setCart}
                />
              );
            })}
          </div>
        </article>
        <div id="cartSubTotal">
          <p id="subtotal">hi</p>
        </div>
        <footer id="cartFooter">
          <p id="shipNote">
            free shipping on all orders over $60, some exceptions may apply
          </p>
          <div>
            <Link to="/">
              <button id="keepShopping">keep shopping</button>
            </Link>
            <button id="checkout">checkout now</button>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import "./App.css";
import { fetchSearchQuery } from "../../fetchAPI";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import ProductContainer from "../ProductContainer/ProductContainer";
import SearchBox from "../SearchBox/SearchBox";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import SingleProductView from "../SingleProductView/SingleProductView";
import Cart from "../Cart/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home cart={cart} />} />
        <Route
          exact
          path="/shop/:num"
          element={<Shop cart={cart} setCart={setCart} />}
        />
        <Route
          exact
          path="/shop/:id/:num"
          element={<Shop cart={cart} setCart={setCart} />}
        />
        <Route
          path="/product/:serial"
          element={<SingleProductView cart={cart} setCart={setCart} />}
        />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

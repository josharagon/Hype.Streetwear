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

const App = () => {
  //current search input
  const [searchValue, setSearchValue] = useState("");
  //returned items
  const [itemData, setItemData] = useState([]);
  const [randomItem, setRandomItem] = useState({});
  const [cart, setCart] = useState([]);
  const [currProduct, setCurrProduct] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home cart={cart} />} />
        <Route
          exact
          path="/shop/:num"
          element={
            <Shop cart={cart} setCart={setCart} currProduct={currProduct} />
          }
        />
        <Route
          exact
          path="/shop/:id/:num"
          element={
            <Shop cart={cart} setCart={setCart} currProduct={currProduct} />
          }
        />
        <Route
          path="/shop/:id/:num/product/:serial"
          element={
            <SingleProductView
              cart={cart}
              setCart={setCart}
              // currProduct={currProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import "./App.css";
import { fetchSearchQuery } from "../../fetchAPI";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import ProductContainer from "../ProductContainer/ProductContainer";
import SearchBox from "../SearchBox/SearchBox";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";

const App = () => {
  //current search input
  const [searchValue, setSearchValue] = useState("");
  //returned items
  const [itemData, setItemData] = useState([]);
  const [randomItem, setRandomItem] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import "./Shop.css";
import { fetchSearchQuery } from "../../fetchAPI";
import {
  Routes,
  Link,
  Route,
  BrowserRouter,
  useParams,
} from "react-router-dom";
import ProductContainer from "../ProductContainer/ProductContainer";
import SearchBox from "../SearchBox/SearchBox";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setResults(fetchSearchQuery(id, 1));
    }
    console.log(results);
  }, []);

  return (
    <section className="Store">
      <h1>Shop</h1>
    </section>
  );
};

export default Shop;

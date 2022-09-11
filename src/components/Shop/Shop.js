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
  const [results, setResults] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    if (id) {
      fetchSearchQuery(id, page).then((data) => {
        setResults(data);
        setLoaded(true);
      });
    }
  }, []);

  return (
    <section id="store">
      <header id="storeHead">
        <div id="headContent">
          <img src="/HYPE.png" />
          <time data-timezone-offset="-14400">
            <b>{new Date().toLocaleString() + ""}</b>
          </time>
        </div>
      </header>
      <div id="storeProducts">
        <aside>
          <h1>Filters here</h1>
        </aside>
        {!loaded && <h1>Loading...</h1>}
        {loaded && <ProductContainer results={results.results} />}
      </div>
    </section>
  );
};

export default Shop;

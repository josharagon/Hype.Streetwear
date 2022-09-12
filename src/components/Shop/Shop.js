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
  useNavigate,
} from "react-router-dom";
import ProductContainer from "../ProductContainer/ProductContainer";
import SearchBox from "../SearchBox/SearchBox";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [pageData, setPageData] = useState({});

  const { id, num } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchSearchQuery(id, num).then((data) => {
        setSearch(id);
        setResults(data);
        setPageData(data.pagination);
        setLoaded(true);
      });
    } else {
      fetchSearchQuery("", num).then((data) => {
        setResults(data);
        setPageData(data.pagination);
        setLoaded(true);
      });
    }
  }, [id, num]);

  const handleClick = (action) => {
    // 👇️ navigate programmatically

    console.log(`/shop ${id ? id : ""}/${pageData[action]}`);
    navigate({
      pathname: `/shop${id ? id : ""}/${pageData[action]}`,
    });
  };

  return (
    <section id="store">
      <header id="storeHead">
        <div id="headContent">
          <Link to="/">
            <img src="/HYPE.png" />
          </Link>
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
        {loaded && (
          <div>
            <div id="shopNav">
              {pageData.currentPage > 1 && (
                <p
                  className="page-nav"
                  onClick={() => handleClick("previousPage")}
                >
                  previous
                </p>
              )}
              {pageData.currentPage < pageData.totalPages && (
                <p className="page-nav" onClick={() => handleClick("nextPage")}>
                  next
                </p>
              )}
            </div>
            <ProductContainer results={results.results} />
            <p id="pageCounter">
              {pageData.currentPage} of {pageData.totalPages}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;

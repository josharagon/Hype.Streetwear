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
import StoreHeader from "../StoreHeader/StoreHeader";

const Shop = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [pageData, setPageData] = useState({});
  const [filters, setFilters] = useState([
    "all",
    "jackets",
    "shirts",
    "sweatshirts",
    "pants",
    "shorts",
    "t-shirts",
    "hats",
    "shoes",
  ]);

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
    navigate({
      pathname: `/shop/${id ? id + "/" : ""}${pageData[action]}`,
    });
  };

  const handleFilter = (filter) => {
    navigate({
      pathname: `/shop/${filter}/1`,
    });
  };

  return (
    <section id="store">
      <Link id="cart" to="/cart">
        CART({cart.length})
      </Link>
      <StoreHeader />
      <div id="storeProducts">
        <aside>
          <ul>
            {filters.map((filter) => {
              return (
                <li
                  key={filter}
                  style={{ fontWeight: id === filter ? "bold" : null }}
                  onClick={() => {
                    handleFilter(filter);
                  }}
                >
                  {filter}
                </li>
              );
            })}
            {/* <li
              style={{ fontWeight: id === "all" ? "bold" : null }}
              onClick={() => {
                handleFilter("all");
              }}
            >
              all
            </li>
            <li
              style={{ fontWeight: id === "jackets" ? "bold" : null }}
              onClick={() => {
                handleFilter("jackets");
              }}
            >
              jackets
            </li>
            <li
              style={{ fontWeight: id === "shirts" ? "bold" : null }}
              onClick={() => {
                handleFilter("shirts");
              }}
            >
              shirts
            </li>
            <li
              style={{ fontWeight: id === "sweatshirts" ? "bold" : null }}
              onClick={() => {
                handleFilter("all");
              }}
            >
              sweatshirts
            </li>
            <li style={{ fontWeight: id === "pants" ? "bold" : null }}>
              pants
            </li>
            <li style={{ fontWeight: id === "shorts" ? "bold" : null }}>
              shorts
            </li>
            <li style={{ fontWeight: id === "t-shirts" ? "bold" : null }}>
              t-shirts
            </li>
            <li style={{ fontWeight: id === "hats" ? "bold" : null }}>hats</li>
            <li style={{ fontWeight: id === "shoes" ? "bold" : null }}>
              shoes
            </li> */}
          </ul>
        </aside>
        {!loaded && <h1>Loading...</h1>}
        {loaded && (
          <div>
            <div style={{ textAlign: "center" }}>
              <SearchBox />
            </div>
            <div id="shopNav">
              <p
                className="page-nav"
                style={{
                  visibility: pageData.currentPage > 1 ? "" : "hidden",
                }}
                onClick={() => handleClick("previousPage")}
              >
                previous
              </p>

              <p
                className="page-nav"
                style={{
                  visibility:
                    pageData.currentPage < pageData.totalPages ? "" : "hidden",
                }}
                onClick={() => handleClick("nextPage")}
              >
                next
              </p>
            </div>
            <ProductContainer
              results={results.results}
              cart={cart}
              setCart={setCart}
            />
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

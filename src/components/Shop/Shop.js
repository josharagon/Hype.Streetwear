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
  const [pageSelector, setPageSelector] = useState(1);

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
        setPageSelector(pageData.currentPage);
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
                    if (filter !== id) {
                      handleFilter(filter);
                    }
                  }}
                >
                  {filter}
                </li>
              );
            })}
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
            <div id="pageSelectorContainer">
              <form
                id="pageSelectorForm"
                onChange={(e) => {
                  setPageSelector(e.target.value);
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate({
                    pathname: `/shop/${id}/${pageSelector}`,
                  });
                }}
              >
                <input
                  type="number"
                  id="pageSelector"
                  name="pageSelector"
                  min="1"
                  placeholder={num}
                  max={pageData.totalPages}
                ></input>
              </form>
              <p id="pageCounter">of {pageData.totalPages}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;

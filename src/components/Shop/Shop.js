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

    navigate({
      pathname: `/shop/${id ? id + "/" : ""}${pageData[action]}`,
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
          <h1>Filters here</h1>
        </aside>
        {!loaded && <h1>Loading...</h1>}
        {loaded && (
          <div>
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

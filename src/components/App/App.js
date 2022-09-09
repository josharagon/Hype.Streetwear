import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import "./App.css";
import { fetchSearchQuery } from "../../fetchAPI";
import ProductContainer from "../ProductContainer/ProductContainer";
import SearchBox from "../SearchBox/SearchBox";

function App() {
  //current search input
  const [searchValue, setSearchValue] = useState("");
  //returned items
  const [itemData, setItemData] = useState([]);
  const [randomItem, setRandomItem] = useState({});

  useEffect(() => {
    fetchSearchQuery("", Math.floor(Math.random() * 186)).then((result) => {
      console.log(result);
      getRandomItem(result.results);
    });
  }, []);

  const getRandomItem = (list) => {
    setRandomItem(list[Math.floor(Math.random() * list.length)]);
  };

  return (
    <section className="App">
      <header className="store-header">
        <img src="/HYPE.png" alt="image" id="navLogo" />
        <SearchBox />
        <a>SHOP</a>
      </header>
      <section id="homeMiddle">
        <article id="homeInspo">
          <h1 id="inspoHead">NEED INSPIRATION?</h1>
          <img
            src={randomItem.thumbnailImageUrl}
            id="inspoPic"
            alt={randomItem.name}
          />
          <h1 id="randomBrand">{randomItem.brand}</h1>
          <h2 id="randomName">{randomItem.name}</h2>
          <h3 id="price">
            ${randomItem.price}
            {randomItem.price < randomItem.msrp && (
              <span id="msrp">${randomItem.msrp}</span>
            )}
          </h3>
          <button id="gtsButton">GO TO SHOP</button>
        </article>
        <article id="ourPromise">
          <img src="/smiley.png" alt="smiley face emoji" id="smiley" />
          <p>
            We always try top do our best to serve a good material, experence,
            and product to our future customers.
          </p>
        </article>
      </section>
      <footer id="footer">
        <p>@2022</p>
      </footer>
    </section>
  );
}

export default App;

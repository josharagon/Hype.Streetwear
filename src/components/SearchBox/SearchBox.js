import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./SearchBox.css";

const SearchBox = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal) {
      navigate({
        pathname: `/shop/${searchVal}/1`,
      });
    }
  };

  return (
    <form onSubmit={(e) => handleSearch(e)} className="custom-search">
      <input
        className="custom-search-input"
        type="search"
        placeholder={"SEARCH"}
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      />
      <BsSearch
        className="custom-search-botton"
        color="black"
        onClick={(e) => handleSearch(e)}
      />
    </form>
  );
};

export default SearchBox;

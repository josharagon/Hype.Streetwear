import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBox.css";

const SearchBox = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchVal);
    if (searchVal) {
      navigate({
        pathname: `/shop/${searchVal}/1`,
      });
    }
  };

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input
        type="search"
        placeholder={"SEARCH"}
        onChange={(e) => {
          console.log(e.target.value);
          setSearchVal(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchBox;

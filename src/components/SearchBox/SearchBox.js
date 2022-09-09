import React from "react";
import "./SearchBox.css";

const SearchBox = (input) => {
  return (
    <form>
      <input
        // style={{ position: "relative" }}
        type="search"
        placeholder={"SEARCH"}
        // onChange={props.handleChange}
      />
    </form>
  );
};

export default SearchBox;

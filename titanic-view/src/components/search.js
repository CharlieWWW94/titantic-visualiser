import "./Search.css";
import React, { useState, useEffect } from "react";

function Search(props, searchTermObj) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const submitTermHandler = (event) => {
    event.preventDefault();
    props.onPassSearchTerm(searchTerm);
  };

  return (
    <div className="searchDiv">
      <form className="searchForm" onSubmit={submitTermHandler}>
        <input
          className="searchEntry"
          type="text"
          value={searchTerm}
          onChange={searchTermHandler}
        ></input>
        <input className="searchButton" type="submit" value="Search"></input>
      </form>
    </div>
  );
}

export default Search;
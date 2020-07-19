import React from "react";
import header from '../css/header.css'
import search from "../media/search.svg";
import ReactSearchBox from "react-search-box";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="headerTextWrapper">
        <h1 className="headerText">Police Violence Archive</h1>
      </div>

      <div className="searchBarWrapper">
        {/* <img className="searchIcon" src={search} /> */}
        <input
          className="searchBarInput"
          type="search"
          // value={}
          // onChange={}
        />

      </div>
    </div>
  );
};

export default Header;

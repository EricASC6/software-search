import React from "react";
import SearchTypes from "./SearchTypes";
import "../css/search-bar/SearchBar.css";

const SearchBar = ({
  searchTypes,
  type,
  changeType,
  handleChange,
  handleSubmit,
  toggleSearchTypes,
}) => {
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar-holder">
        <SearchTypes
          searchTypes={searchTypes}
          type={type}
          changeType={changeType}
          toggleSearchTypes={toggleSearchTypes}
        />
        <div className="searchbar-input">
          <input type="text" placeholder="Search" onChange={handleChange} />
        </div>
      </div>
      <button className="search-btn" type="submit">
        Go
      </button>
    </form>
  );
};

export default SearchBar;

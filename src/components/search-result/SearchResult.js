import React, { Component } from "react";
import ProfileCard from "./profile/ProfileCard";
import Repos from "./repos/Repos";
import Charts from "./charts/Charts";
import "../css/search-result/searchResult.css";

class SearchResult extends Component {
  render() {
    return (
      <div className="search-result">
        <div className="search-result-container container">
          <div className="search-top">
            <ProfileCard />
            <Repos />
          </div>
          <Charts />
        </div>
      </div>
    );
  }
}

export default SearchResult;

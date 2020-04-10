import React, { Component } from "react";
import ProfileCard from "./profile/ProfileCard";
import Repos from "./repos/Repos";
import Charts from "./charts/Charts";

class SearchResult extends Component {
  render() {
    return (
      <div className="search-result">
        <div className="search-result-container container">
          <ProfileCard />
          <Repos />
          <Charts />
        </div>
      </div>
    );
  }
}

export default SearchResult;

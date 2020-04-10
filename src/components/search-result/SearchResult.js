import React, { Component } from "react";
import ProfileView from "./profileView/ProfileView";
import Repos from "./repos/Repos";
import Charts from "./charts/Charts";

class SearchResult extends Component {
  render() {
    return (
      <div className="search-result">
        <div className="search-result-container container">
          <ProfileView />
          <Repos />
          <Charts />
        </div>
      </div>
    );
  }
}

export default SearchResult;

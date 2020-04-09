import React, { Component } from "react";
import ProfileView from "./profileView/ProfileView";

class SearchResult extends Component {
  render() {
    return (
      <div className="search-result">
        <div className="search-result-container container">
          <ProfileView />
        </div>
      </div>
    );
  }
}

export default SearchResult;

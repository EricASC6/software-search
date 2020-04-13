import React, { Component } from "react";
import ProfileCard from "./profile/ProfileCard";
import Repos from "./repos/Repos";
import Charts from "./charts/Charts";
import "../css/search-result/searchResult.css";

class SearchResult extends Component {
  state = {
    currentRepo: 0,
    numRepos: 6,
    repos: [1, 2, 3, 4, 5, 6],
  };

  moveToNextRepo = () => {
    this.setState({
      ...this.state,
      currentRepo:
        this.state.currentRepo === this.state.numRepos - 1
          ? 0
          : this.state.currentRepo + 1,
    });
  };

  moveToPrevRepo = () => {
    this.setState(
      {
        ...this.state,
        currentRepo:
          this.state.currentRepo === 0
            ? this.state.numRepos - 1
            : this.state.currentRepo - 1,
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div className="search-result">
        <div className="search-result-container container">
          <div className="search-top">
            <ProfileCard />
            <Repos
              repos={this.state.repos}
              numRepos={this.state.numRepos}
              currentRepo={this.state.currentRepo}
              moveToNextRepo={this.moveToNextRepo}
              moveToPrevRepo={this.moveToPrevRepo}
            />
          </div>
          <Charts />
        </div>
      </div>
    );
  }
}

export default SearchResult;

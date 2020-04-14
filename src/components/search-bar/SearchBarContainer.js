import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "../css/search-bar/SearchBarContainer.css";

class SearchBarContainer extends Component {
  state = {
    searchTypes: ["repo", "user", "org", "user-repo", "org-repo"],
    type: "repo",
    searchValue: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      searchValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { type, searchValue } = this.state;
    switch (type) {
      case "user":
        this.props.history.push(`/user/${searchValue}`);
        break;
      default:
        return;
    }
  };

  changeType = (type) => {
    this.setState({
      ...this.state,
      type: type,
    });
  };

  toggleSearchTypes = () => {
    this.setState({
      ...this.state,
      searchTypesVisible: this.state.searchTypesVisible ? false : true,
    });
  };

  render() {
    const { changeType, handleChange, handleSubmit, toggleSearchTypes } = this;
    const { type, searchTypes } = this.state;

    return (
      <div className="search">
        <div className="searchbar-container container">
          <div className="search-head">
            <h2>Your search for exciting software begins here.</h2>
          </div>
          <SearchBar
            type={type}
            searchTypes={searchTypes}
            changeType={changeType}
            toggleSearchTypes={toggleSearchTypes}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default SearchBarContainer;

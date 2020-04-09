import React, { Component } from "react";
import { icons } from "./configs/SearchTypesIcons";
import "../css/search-bar/SearchTypes.css";

class SearchTypes extends Component {
  state = {
    searchTypesVisible: false,
  };

  handleCaretClick = () => {
    this.setState({
      searchTypesVisible: this.state.searchTypesVisible ? false : true,
    });
  };

  render() {
    const { searchTypes, type, changeType } = this.props;
    const searchTypesList = searchTypes.map((type) => {
      const icon = icons[type];
      return (
        <li
          className="search-type"
          id={type}
          key={type}
          onClick={() => changeType(type)}
        >
          {icon}
        </li>
      );
    });

    const currentType = icons[type];
    const { searchTypesVisible } = this.state;
    return (
      <div className="search-types">
        <div className="current-type">
          {currentType}
          <i
            className={`fas fa-chevron-down search-type-caret ${
              searchTypesVisible && "active"
            }`}
            onClick={this.handleCaretClick}
          ></i>
        </div>
        <div
          className={`search-types-drop-down ${searchTypesVisible && "active"}`}
        >
          <ul className={`search-types-list ${searchTypesVisible && "active"}`}>
            {searchTypesList}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchTypes;

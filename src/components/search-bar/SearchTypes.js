import React from "react";
import "../css/search-bar/SearchTypes.css";

const SearchTypes = ({ searchTypes, type, changeType }) => {
  let icons = [];
  const searchTypesList = searchTypes.map((type) => {
    let icon;

    switch (type) {
      case "repo":
        icon = (
          <span className="search-icon" type="repo">
            <i className="fas fa-code"></i>
          </span>
        );
        break;
      case "user":
        icon = (
          <span className="search-icon" type="user">
            <i className="fas fa-user"></i>
          </span>
        );
        break;
      case "org":
        icon = (
          <span className="search-icon" type="org">
            <i className="fas fa-building"></i>
          </span>
        );
        break;
      case "user-repo":
        icon = (
          <span className="search-icon" type="user-repo">
            <i className="fas fa-user"></i>
            <i className="fas fa-code"></i>
          </span>
        );
        break;
      case "org-repo":
        icon = (
          <span className="search-icon" type="org-repo">
            <i className="fas fa-building"></i>
            <i className="fas fa-code"></i>
          </span>
        );
        break;
      default:
        icon = "";
    }

    icons.push(icon);

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

  const currentType = icons.find((icon) => icon.props.type === type);

  return (
    <div className="search-types">
      <div className="current-type">
        {currentType} <i className="fas fa-chevron-down search-type-caret"></i>
      </div>
      <div className="search-types-drop-down">
        <ul>{searchTypesList}</ul>
      </div>
    </div>
  );
};

export default SearchTypes;

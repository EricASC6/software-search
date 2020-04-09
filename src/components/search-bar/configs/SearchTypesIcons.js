import React from "react";

export const icons = {
  repo: (
    <span className="search-icon" type="repo">
      <i className="fas fa-code"></i>
    </span>
  ),
  user: (
    <span className="search-icon" type="user">
      <i className="fas fa-user"></i>
    </span>
  ),
  org: (
    <span className="search-icon" type="org">
      <i className="fas fa-building"></i>
    </span>
  ),
  "user-repo": (
    <span className="search-icon" type="user-repo">
      <i className="fas fa-user"></i>
      <i className="fas fa-code"></i>
    </span>
  ),
  "org-repo": (
    <span className="search-icon" type="org-repo">
      <i className="fas fa-building"></i>
      <i className="fas fa-code"></i>
    </span>
  ),
};

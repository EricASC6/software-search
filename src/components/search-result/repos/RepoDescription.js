import React from "react";
import "../../css/search-result/repos/RepoDescription.css";

const RepoDescription = ({ name, description }) => {
  return (
    <div className="repo-meta">
      <h2 className="repo-name">{name}</h2>
      <p className="repo-description">{description}</p>
    </div>
  );
};

export default RepoDescription;

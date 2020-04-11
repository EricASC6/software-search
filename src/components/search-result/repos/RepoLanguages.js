import React from "react";
import "../../css/search-result/repos/RepoLanguages.css";

const RepoLanguages = () => {
  return (
    <div className="repo-languages">
      <h2 className="repo-languages-head">Languages:</h2>
      <div className="languages-section">
        <div className="language">Javascript</div>
        <div className="language">Python</div>
      </div>
    </div>
  );
};

export default RepoLanguages;

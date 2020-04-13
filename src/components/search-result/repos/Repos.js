import React from "react";
import ReposSlider from "./ReposSlider";
import "../../css/search-result/repos/Repos.css";

const Repos = ({ currentRepo, repos, moveToNextRepo, moveToPrevRepo }) => {
  return (
    <div className="repos">
      <div className="repos-header">
        <h2>Top 6 Repos</h2>
      </div>
      <ReposSlider
        currentRepo={currentRepo}
        repos={repos}
        moveToNextRepo={moveToNextRepo}
        moveToPrevRepo={moveToPrevRepo}
      />
    </div>
  );
};

export default Repos;

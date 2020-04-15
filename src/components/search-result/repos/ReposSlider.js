import React from "react";
import RepoCard from "./RepoCard";
import "../../css/search-result/repos/ReposSlider.css";

const ReposSlider = ({
  currentRepo,
  repos,
  moveToNextRepo,
  moveToPrevRepo,
}) => {
  return (
    <div className="repos-slider">
      <div className="slider-wrapper">
        {repos &&
          repos.map((repo, i) => {
            return (
              <RepoCard
                active={i === currentRepo}
                repo={repo}
                key={repo.id}
                indx={i}
              />
            );
          })}
      </div>

      <div className="arrows">
        <div className="left arrow" onClick={moveToPrevRepo}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="right arrow" onClick={moveToNextRepo}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ReposSlider;

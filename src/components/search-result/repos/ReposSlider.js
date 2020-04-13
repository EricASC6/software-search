import React from "react";
import RepoCard from "./RepoCard";
import "../../css/search-result/repos/ReposSlider.css";

const ReposSlider = () => {
  return (
    <div className="repos-slider">
      <RepoCard active={true} />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />

      <div className="arrows">
        <div className="left arrow">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="right arrow">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ReposSlider;

import React from "react";
import ReposSlider from "./ReposSlider";
import "../../css/search-result/repos/Repos.css";

const Repos = () => {
  return (
    <div className="repos">
      <div className="repos-header">
        <h2>Top 6 Repos</h2>
      </div>
      <ReposSlider />
    </div>
  );
};

export default Repos;

import React from "react";
import "../../css/search-result/repos/RepoStatsCard.css";

const RepoStatsCard = ({ type }) => {
  return (
    <div className="repo-stat-card" id={type}>
      <h4 className="repo-stat-head">Watches</h4>
      <p className="repo-stat">45</p>
    </div>
  );
};

export default RepoStatsCard;

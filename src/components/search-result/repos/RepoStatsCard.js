import React from "react";
import "../../css/search-result/repos/RepoStatsCard.css";

const RepoStatsCard = ({ type, data }) => {
  return (
    <div className="repo-stat-card" id={type}>
      <h4 className="repo-stat-head">
        {type[0].toUpperCase() + type.substring(1)}
      </h4>
      <p className="repo-stat">{data}</p>
    </div>
  );
};

export default RepoStatsCard;

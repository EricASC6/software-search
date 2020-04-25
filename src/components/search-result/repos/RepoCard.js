import React from "react";
import "../../css/search-result/repos/RepoCard.css";

const RepoCard = ({ active, indx, repo }) => {
  const { name, stars, watches, forks, description } = repo;

  return (
    <div className={`repos-card ${active ? "active" : ""}`}>
      <h2>{indx + 1}</h2>
      <div className="repo-meta">
        <h2 className="repo-name">{name}</h2>
        <p className="repo-description">{description}</p>
      </div>
      <div className="repo-stats-cards">
        <div className="repo-stat-card" id="stars">
          <h4 className="repo-stat-head">Stars</h4>
          <p className="repo-stat">{stars}</p>
        </div>
        <div className="repo-stat-card" id="watches">
          <h4 className="repo-stat-head">Watches</h4>
          <p className="repo-stat">{watches}</p>
        </div>
        <div className="repo-stat-card" id="forks">
          <h4 className="repo-stat-head">Forks</h4>
          <p className="repo-stat">{forks}</p>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;

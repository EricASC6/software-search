import React from "react";
import RepoDescription from "./RepoDescription";
import RepoStatsCard from "./RepoStatsCard";
import "../../css/search-result/repos/RepoCard.css";

const RepoCard = ({ active, indx, repo }) => {
  const { name, stars, watches, forks, description } = repo;

  return (
    <div className={`repos-card ${active ? "active" : ""}`}>
      <h2>{indx + 1}</h2>
      <RepoDescription name={name} description={description} />
      <div className="repo-stats-cards">
        <RepoStatsCard type="watches" data={watches} />
        <RepoStatsCard type="forks" data={forks} />
        <RepoStatsCard type="stars" data={stars} />
      </div>
    </div>
  );
};

export default RepoCard;

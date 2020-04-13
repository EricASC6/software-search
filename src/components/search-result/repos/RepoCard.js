import React from "react";
import RepoDescription from "./RepoDescription";
import RepoStatsCard from "./RepoStatsCard";
import RepoLanguages from "./RepoLanguages";
import "../../css/search-result/repos/RepoCard.css";

const RepoCard = ({ active, indx }) => {
  return (
    <div className={`repos-card ${active ? "active" : ""}`}>
      <h2>{indx}</h2>
      <RepoDescription />
      <div className="repo-stats-cards">
        <RepoStatsCard type="watches" />
        <RepoStatsCard type="forks" />
        <RepoStatsCard type="stars" />
      </div>
      <RepoLanguages />
    </div>
  );
};

export default RepoCard;

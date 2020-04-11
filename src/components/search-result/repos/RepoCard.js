import React from "react";
import RepoDescription from "./RepoDescription";
import RepoStatsCard from "./RepoStatsCard";
import RepoLanguages from "./RepoLanguages";
import "../../css/search-result/repos/RepoCard.css";

const RepoCard = () => {
  return (
    <div className="repos-card">
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

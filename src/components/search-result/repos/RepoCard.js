import React from "react";
import RepoDescription from "./RepoDescription";
import RepoStatsCard from "./RepoStatsCard";
import RepoLanguages from "./RepoLanguages";

const RepoCard = () => {
  return (
    <div className="repos-slider">
      <RepoDescription />
      <RepoStatsCard />
      <RepoLanguages />
    </div>
  );
};

export default RepoCard;

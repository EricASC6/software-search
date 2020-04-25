import React, { Component } from "react";
import PieChart from "./PieChart";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import "../../css/search-result/charts/Charts.css";

class Charts extends Component {
  render() {
    // Languages Data
    const { repos, currentRepo } = this.props;
    const repo = repos && repos[currentRepo];

    const languages = repo && repo.languages;
    const languagesLabels = repo && Object.keys(languages);
    const languagesData = repo && Object.values(languages);

    // Repos Data
    const reposLabel = repos && repos.map((repo) => repo.name);
    const reposStars = repos && repos.map((repo) => repo.stars);

    // Commit Activity
    const commitsLabel =
      repo &&
      repo.commitActivity.map(
        (_, i) =>
          `${
            i + 1 === 1
              ? i + 1 + "st"
              : i + 1 === 2
              ? i + 1 + "nd"
              : i + 1 === 3
              ? i + 1 + "rd"
              : i + 1 + "th"
          } `
      );
    const commitsData = repo && repo.commitActivity;

    return (
      <div className="charts">
        <PieChart labels={languagesLabels} data={languagesData} />
        <LineGraph labels={commitsLabel} data={commitsData} />
        <BarGraph labels={reposLabel} data={reposStars} />
      </div>
    );
  }
}

export default Charts;

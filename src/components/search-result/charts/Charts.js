import React, { Component } from "react";
import PieChart from "./PieChart";
import LineGraph from "./LineGraph";
import "../../css/search-result/charts/Charts.css";

class Charts extends Component {
  render() {
    const { repos, currentRepo } = this.props;
    const repo = repos && repos[currentRepo];

    const languages = repo && repo.languages;
    const labels = repo && Object.keys(languages);
    const data = repo && Object.values(languages);
    console.log(labels, data);
    return (
      <div className="charts">
        <PieChart labels={labels} data={data} />
        <LineGraph />
        <LineGraph />
      </div>
    );
  }
}

export default Charts;

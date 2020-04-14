import React, { Component } from "react";
import PieChart from "./PieChart";
import LineGraph from "./LineGraph";
import "../../css/search-result/charts/Charts.css";

class Charts extends Component {
  render() {
    return (
      <div className="charts">
        <PieChart />
        <LineGraph />
        <LineGraph />
      </div>
    );
  }
}

export default Charts;

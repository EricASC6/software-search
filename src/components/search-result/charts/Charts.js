import React, { Component } from "react";
import PieChart from "./PieChart";
import LineGraph from "./LineGraph";

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

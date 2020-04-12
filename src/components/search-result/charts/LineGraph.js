import React, { Component } from "react";
import Chart from "chart.js";

class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext("2d");

    const data = [
      {
        x: 10,
        y: 20,
      },
      {
        x: 15,
        y: 10,
      },
    ];

    new Chart(ctx, {
      type: "line",
      data: data,
    });
  }

  render() {
    return (
      <div className="line-graph">
        <canvas
          ref={this.chartRef}
          id="myChart"
          width="350"
          height="350"
        ></canvas>
      </div>
    );
  }
}

export default LineGraph;

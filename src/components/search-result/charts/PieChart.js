import React, { Component } from "react";
import Chart from "chart.js";

class PieChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const chartCanvas = this.chartRef.current.getContext("2d");
    const data = {
      datasets: [
        {
          data: [10, 20, 30],
        },
      ],

      labels: ["Red", "Yellow", "Blue"],
    };
    new Chart(chartCanvas, {
      type: "pie",
      data: data,
    });
  }

  render() {
    return (
      <div className="pie-chart">
        <canvas
          id="myChart"
          width="400"
          height="400"
          ref={this.chartRef}
        ></canvas>
      </div>
    );
  }
}

export default PieChart;

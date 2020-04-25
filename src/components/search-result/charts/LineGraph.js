import React, { Component } from "react";
import Chart from "chart.js";

let chart;

class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const ctx = this.chartRef.current.getContext("2d");

    const { labels, data } = this.props;
    const dataset = {
      labels: labels,
      datasets: [
        {
          label: "Commit Activity Every Week",
          data: data,
          borderColor: "#4BC0C0",
          pointBorderColor: "#40a3a3",
          pointBackgroundColor: "#4BC0C0",
          fill: false,
        },
      ],
    };

    if (chart) chart.destroy();
    chart = new Chart(ctx, {
      type: "line",
      data: dataset,
      options: {
        title: {
          display: true,
          fontSize: "18",
          fontColor: "#2d2d2d",
          text: "Commit Activity in a Year",
        },
      },
    });
  };

  render() {
    return (
      <div className="line-graph chart">
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

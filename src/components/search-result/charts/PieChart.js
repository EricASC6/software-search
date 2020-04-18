import React, { Component } from "react";
import Chart from "chart.js";

let chart;

class PieChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const { labels, data } = this.props;
    const dataset = {
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#36A2EB",
            "#FF6384",
            "#FF9F40",
            "#FFCD56",
            "#4BC0C0",
            "#A258FD",
          ],
        },
      ],
      labels: labels,
    };

    const chartCanvas = this.chartRef.current.getContext("2d");
    if (chart) chart.destroy();
    chart = new Chart(chartCanvas, {
      type: "pie",
      data: dataset,
      options: {
        title: {
          display: true,
          fontSize: "18",
          fontColor: "#2d2d2d",
          text: "Languages",
        },
      },
    });
  };

  render() {
    return (
      <div className="pie-chart">
        <canvas
          id="myChart"
          width="350"
          height="350"
          ref={this.chartRef}
        ></canvas>
      </div>
    );
  }
}

export default PieChart;

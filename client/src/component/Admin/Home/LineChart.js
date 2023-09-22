// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["2018", "2019", "2020", "2021", "2022", "2023"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "No of projects created each year",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [2, 5, 6, 10, 15, 16, 16],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
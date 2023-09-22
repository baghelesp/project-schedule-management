// ./components/BarChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const labels = ["2018", "2019", "2020", "2021", "2022", "2023"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "No of Active Project",
        backgroundColor: "rgb(0, 210, 0)",
        borderColor: "rgb(255, 99, 132)",
        data: [2, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "No of Closed Project",
        backgroundColor: "rgb(0,0,255)",
        borderColor: "rgb(255, 99, 132)",
        data: [1, 11, 4, 6, 22, 29, 45],
      },
      {
        label: "No of delayed Project",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [2, 9, 6, 7, 21, 32, 40],
      },
    ],
  };
const BarChart = () => {
  
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
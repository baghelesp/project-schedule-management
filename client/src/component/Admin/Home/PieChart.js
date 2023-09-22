import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
export default function PieChart() {
  const data = {
    labels: ["Active", "Delayed", "Complete", "Outsourced"],
    datasets: [
      {
        label: "# of Votes",
        data: [35, 25, 22, 4],
        backgroundColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
           
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontFamily: "monospace" }}>
        Most Popular Programming languages to learn in 2022
      </h1>
      <Pie data={data}  />
    </div>
  );
}
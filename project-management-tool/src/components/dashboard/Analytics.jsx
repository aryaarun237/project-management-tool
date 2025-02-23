import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Analytics = () => {
  const data = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        label: "Tasks Overview",
        data: [10, 5, 7],
        backgroundColor: ["#4DA1A9", "#79D7BE", "#F6F4F0"], // Updated Colors
        borderColor: ["#4DA1A9", "#79D7BE", "#2E5077"], // Border Colors
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#F6F4F0", // Text Color
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#F6F4F0", // X-axis Label Color
        },
      },
      y: {
        ticks: {
          color: "#F6F4F0", // Y-axis Label Color
        },
        grid: {
          color: "#F6F4F0", // Grid Line Color
        },
      },
    },
  };

  return (
    <div className="mt-4 p-3" style={{ backgroundColor: "#2E5077", borderRadius: "10px", color: "#F6F4F0" }}>
      <h4>📊 Task Analytics</h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Analytics;

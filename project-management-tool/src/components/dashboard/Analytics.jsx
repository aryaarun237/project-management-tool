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
        backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
      },
    ],
  };

  return (
    <div className="mt-4">
      <h4>Task Analytics</h4>
      <Bar data={data} />
    </div>
  );
};

export default Analytics;

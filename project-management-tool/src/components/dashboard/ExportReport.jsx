import React from "react";
import { Button } from "react-bootstrap";
import jsPDF from "jspdf";
import { CSVLink } from "react-csv";

const tasks = [
  { id: 1, title: "Fix bugs", status: "In Progress" },
  { id: 2, title: "Deploy app", status: "Done" },
];

const ExportReport = () => {
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Task Report", 10, 10);
    tasks.forEach((task, index) => doc.text(`${index + 1}. ${task.title} - ${task.status}`, 10, 20 + index * 10));
    doc.save("task-report.pdf");
  };

  return (
    <div className="mt-3">
      <Button variant="primary" onClick={exportPDF}>Export as PDF</Button>
      <CSVLink data={tasks} filename="task-report.csv">
        <Button variant="secondary" className="ms-2">Export as CSV</Button>
      </CSVLink>
    </div>
  );
};

export default ExportReport;

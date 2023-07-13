import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { barData, barOptions } from "@data/dummy";

const LineChart = () => {
  return (
    <div>
      <Bar data={barData} height={300} options={barOptions} />
    </div>
  );
};

export default LineChart;

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function LineChart({ chartData }) {
  const data = {
    labels: chartData?.labels || [], // Set labels to an empty array if it's undefined
    datasets: chartData?.datasets || [], // Set datasets to an empty array if it's undefined
  };
  return (<Line data={data} />);
}



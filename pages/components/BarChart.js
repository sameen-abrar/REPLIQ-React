import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect } from "react";

export default function BarChart({ chartData }) {
  const data = {
    labels: chartData?.labels || [], // Set labels to an empty array if it's undefined
    datasets: chartData?.datasets || [], // Set datasets to an empty array if it's undefined
  };

  return (<Bar data={data} />);
}

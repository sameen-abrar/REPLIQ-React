import { Inter } from "next/font/google";
import React from "react";
import { useEffect, useState } from "react";
import BarChart from "../components/BarChart";


const inter = Inter({ subsets: ["latin"] });

export default function SalesCostChart() {
  const salesData = [120, 220, 180, 150, 200, 250, 190];
  const costData = [110, 120, 150, 150, 180, 200, 90];
  const [userData, setUserData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales Per Day",
        data: salesData,
        backgroundColor: "#EF4444",
      },
      {
        label: "Cost Per Day",
        data: costData,
        backgroundColor: "#EF9999",
      },
    ],
  });

  return (
    <>
      <div>
        <BarChart chartData={userData} />
      </div>
    </>
  );
}

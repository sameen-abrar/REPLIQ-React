import { Inter } from "next/font/google";
import SalesCostChart from "./SalesCostBarChart";
import SalesCostLineChart from "./SalesCostLineChart";
import SalesCostPieChart from "./SalesCostPieChart";
import AdminLayout from "../components/adminLayout";
import { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
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
      <div className="flex">
        <AdminLayout title={"Dashboard"} />
        <div className="flex-1 m1-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              {/* <SalesCostChart /> */}
              <BarChart chartData={userData} />
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <LineChart chartData={userData} />
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <PieChart chartData={userData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

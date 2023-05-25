import { Inter } from "next/font/google";
import SalesCostChart from "./SalesCostBarChart";
import SalesCostLineChart from "./SalesCostLineChart";
import SalesCostPieChart from "./SalesCostPieChart";
import AdminLayout from "../components/adminLayout";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard(data) {
  // useEffect(() => {
  //   async function fetchData() {
  //     console.log("cart with menu: ", data);
  //     setCart(data);
  //   }
  //   fetchData();
  // }, []);

  
  return (
    <>
      <div className="flex">
        <AdminLayout title={"Dashboard"} />
        <div className="flex-1 m1-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <SalesCostChart />
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <SalesCostLineChart />
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <SalesCostPieChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



import { Inter } from "next/font/google";
import AdminLayout from "../components/adminLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function CustomerList() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Sameen Abrar",
      email: "sameenabrar13@gmail.com",
      phone: 1739274384,
      no_of_returns: 3,
      userId: 1,
    },
    {
      id: 2,
      name: "Zahe",
      email: "Qak@gmail.c9m",
      phone: 12345234,
      no_of_returns: 8,
      userId: 2,
    },
    {
      id: 3,
      name: "Hasnain",
      email: "hasnain.poco@gmail.com",
      phone: 234123132,
      no_of_returns: 3,
      userId: 35,
    },
    {
      id: 5,
      name: "Sadia",
      email: "sadia@gmail.com",
      phone: 1798406965,
      no_of_returns: 4,
      userId: 37,
    },
  ]);

  return (
    <>
      <div className="flex">
        <AdminLayout title="Dashboard" />
        {customers.length > 0 ? (
          <div className="flex-1 m-4">
            <div>
              <Link
                href={"/admin/addcustomer"}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:shadow-lg"
              >
                Add customer
              </Link>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Phone</th>
                    <th className="py-2 px-4">Email</th>
                    <th className="py-2 px-4">Number of returns</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="border-b hover:bg-gray-100"
                    >
                      <td className="py-2 px-4">{customer.name}</td>
                      <td className="py-2 px-4 text-center">
                        {customer.phone}
                      </td>
                      <td className="py-2 px-4 text-center">
                        {customer.email}
                      </td>
                      <td className="py-2 px-4 text-center">
                        {customer.no_of_returns}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>...Loading</p>
        )}
      </div>
    </>
  );
}

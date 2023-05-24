import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Link from "next/link";
import axios from "axios";
import * as cookie from "cookie";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Cart({ data }) {
  console.log(data);
  const [cart, setCart] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // console.log("asdasd", data[0].orderedItems);

  useEffect(() => {
    async function fetchData() {
      console.log("cart with menu: ", data);
      setCart(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        // alert("are you sure?")
        const response = await axios.get(
          `https://flagrant-part-production.up.railway.app/api/coupons`
        );
        const data = await response.data;

        setCoupons(data);
      } catch (error) {
        console.log("Error fetching coupons data:", error);
      }
    }
    fetchData();
  }, []);

  // console.log("the thing is that: ", coupons);
  

  const handleIncrement = (item) => {
    setQuantity(quantity + 1);
    item.Amount += 1;
    console.log(item);
  };

  const handleDecrement = (item) => {
    if (item.Amount > 1) {
      setQuantity(quantity - 1);
      item.Amount -= 1;
      console.log(item);
    }
  };

  const handleRemove = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to remove the item?"
      );
      console.log(id);

      if (confirmed) {
        const res = await fetch(
          `https://flagrant-part-production.up.railway.app/api/cart/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        // handle successful delete
        console.log("Item deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };
  // console.log("cart with menu: ",cart);
  return (
    <>
      <Layout title="Cart" />
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cart ? (
        cart.map((item) => (
          <fieldset
            key={item.id}
            className="border border-gray-300 rounded-lg p-4 mb-4"
          >
            <legend className="text-lg font-medium mb-2">
              {item.menu.Food_Name}
            </legend>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {item.Amount !== null && (
                  <span className="text-gray-600">
                    {item.menu.Price * item.Amount}
                  </span>
                )}
              </span>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </div>
            <div className="flex items-center">
              <button
                className="px-2 py-1 bg-gray-300 text-white rounded-md"
                onClick={() => handleDecrement(item)}
              >
                -
              </button>
              <p className="mx-2">{item.Amount}</p>
              <button
                className="px-2 py-1 bg-gray-300 text-white rounded-md"
                onClick={() => handleIncrement(item)}
              >
                +
              </button>
            </div>
          </fieldset>
        ))
      ) : (
        <p>Cart is Empty</p>
      )}
      <br />
      <input
        type="submit"
        value={"Checkout"}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    "https://flagrant-part-production.up.railway.app/api/cart/customer/1"
  );
  const data = await response.data;

  console.log(data);

  return { props: { data } };
}

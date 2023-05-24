import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
// import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ data }) {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState({
    customerId: 1,
    Amount: 1,
    menuId: "",
  });
  const [searchResults, setSearchResults] = useState(data);

  useEffect(() => {
    const results = data.filter((item) =>
      item.Food_Name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [search]);

  const handleSearch = (event) => {
    // event.preventDefault();
    setSearch(event.target.value);
  };

  const AddToCart = async (item) => {
    try {
      // event.preventDefault();
      const confirmed = window.confirm(`Add ${item.Food_Name} to cart`);
      console.log("cart id 123: ", item);

      if (confirmed) {
        // cart.customerId = Cookies.get("Id");
        cart.menuId = item.id;
        console.log(cart);

        const response = await fetch(
          "https://flagrant-part-production.up.railway.app/api/cart/insert",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cart),
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Layout title="Home" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center my-8">
          <div className="w-full max-w-sm">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              // onSubmit={handleSearch}
            >
              <h2 className="mb-2 text-2xl font-bold">Search Food</h2>
              <h3 className="text-lg mb-6">Food that’s good for your heart.</h3>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Find a Food:
                </label>
                <input
                  type="text"
                  name="search"
                  placeholder="Enter category of food"
                  value={search}
                  onChange={handleSearch}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {searchResults.length === 0 ? (
          <div className="my-8 text-center">
            No results found for '{search}'
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((item) => (
              <div
                key={item.id}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <Image
                  src={`/${item.id}.jpg`}
                  alt={item.Food_Name}
                  width={640}
                  height={426}
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {item.Food_Name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    {item.Description}
                  </p>
                </div>
                <div className="px-4 py-3 sm:px-6">
                  <Link
                    href={`./menu/${item.id}`}
                    className="text-base font-medium text-red-600 hover:text-red-500"
                  >
                    View Details
                  </Link>
                  {"   "}
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => AddToCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="my-8 text-center">
          <Link
            href={"./chefs"}
            className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Meet Our Chefs
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // This is a nestJS api I created for a university project...
  // https://railway.app/project/8d3b6e7f-a9fa-4bbf-ba44-2b47a9cecaeb

  const response = await axios.get(
    `https://flagrant-part-production.up.railway.app/api/menu`
  );
  const data = await response.data;

  console.log(data);

  return { props: { data } };
}

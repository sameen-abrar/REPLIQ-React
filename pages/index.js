import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header title="Index" />
      <h1 className="text-center text-3xl font-bold mt-8 mb-4">Index</h1>

      <ul className="flex flex-col items-center space-y-2">
        <li>
          <Link href="/customers/login">
            <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">
              Login
            </p>
          </Link>
        </li>

        <li>
          <Link href="/customers/register">
            <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">
              Register
            </p>
          </Link>
        </li>

        <li>
          <Link href="/customers/register-userpass">
            <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">
              Register Userpass
            </p>
          </Link>
        </li>

        <li>
          <Link href="/customers/register-picture">
            <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">
              Upload Picture
            </p>
          </Link>
        </li>

        <li>
          <Link href="/customers/home">
            <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">
              Home
            </p>
          </Link>
        </li>

        <li>
          <Link href="/customers/cart">
            <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">
              Cart
            </p>
          </Link>
        </li>

        <li>
          <Link href="/customers/checkout">
            <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">
              Checkout
            </p>
          </Link>
        </li>
        <li>
          <Link href="/admin/dashboard">
            <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">
              Admin Dashboard
            </p>
          </Link>
        </li>
      </ul>
    </>
  );
}

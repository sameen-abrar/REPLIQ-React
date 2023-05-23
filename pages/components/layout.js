import Image from "next/image";
import Header from "./header";
import Link from "next/link";

export default function Layout(props) {
  return (
    <>
      <Header title={props.title} />
      <nav className="bg-red-500">
        <div className="flex justify-center items-center gap-4 py-4">
          <Link href="./home">
            <Image
              src="/feed hunger logo b.png"
              alt="me"
              width="200"
              height="120"
            />
          </Link>
          <Link href="/customers/home">
            <p className="text-white font-semibold hover:text-gray-300 transition duration-300 ease-in-out">
              Home
            </p>
          </Link>

          <Link href="./cart">
            <p className="text-white font-semibold hover:text-gray-300 transition duration-300 ease-in-out">
              Cart
            </p>
          </Link>
        </div>
      </nav>
      <main>{props.children}</main>
      {/* Add your footer here */}
    </>
  );
}

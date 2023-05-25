import Image from "next/image";
import Header from "./header";
import Link from "next/link";

export default function AdminLayout(props) {
  return (
    <>
      <Header title={props.title} />
      <div className="w-64 bg-gray-200 flex-col h-screen">
        <div className="border-t-4 border-l-4 border-gray-300 border-solid text-center">
          <Link href={"/admin/dashboard"}>
            <Image
              src="/feed hunger logo b.png"
              alt="me"
              width="200"
              height="120"
            />
          </Link>
        </div>
        <div className="border-t-4 border-l-4 border-gray-300 border-solid text-center hover:bg-red-200">
          <Link href={"/admin/dashboard"}>Dashboard</Link>
        </div>
        <div className="border-t-4 border-l-4 border-gray-300 border-solid text-center hover:bg-red-200">
          <Link href={"/admin/customerlist"}>Customer List</Link>
        </div>
        <div className="border-t-4 border-l-4 border-gray-300 border-solid text-center hover:bg-red-200">
          <button onClick={() => {window.alert("Not Implemented")}}>Settings</button>
        </div>
      </div>
    </>
  );
}

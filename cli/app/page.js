import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold block animate-slide-in-left text-gray-800">
          Welcome to ERP
        </h1>
        <h3 className="mt-5 text-2xl animate-slide-in-right">
          Manage your items
        </h3>
        <div className="animate-slide-in-bottom mt-7">
          <Link
            href="/"
            className="p-4 bg-blue-700 rounded-full hover:bg-blue-800 duration-150 text-gray-100  hover:ring-2 "
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}

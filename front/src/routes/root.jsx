import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="grid place-items-center h-full w-full">
        <div className=" flex flex-col gap-5 mx-auto justify-center items-center">
          <Link
            to={`/contacts/1`}
            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
            <span className="block border w-full border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
              Login
            </span>
          </Link>

          <Link
            to={`/contacts/2`}
            className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
          >
            <span className="absolute inset-0 border border-current"></span>
            <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              Sign-up
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

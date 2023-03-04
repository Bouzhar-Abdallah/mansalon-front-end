import React from "react";
import { Link } from "react-router-dom";

export default function Success(props) {
  /*  " {props.feedback.data.token} "
   */
  let menu = document.getElementById("menu");
  const showMenu = (flag) => {
    menu.classList.toggle("hidden");
  };

  return (
    <div className="relative flex justify-center items-center">
      <div
        id="menu"
        className="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
      >
        <div className="2xl:container  2xl:mx- auto py-48 px-4 md:px-28 flex justify-center items-center">
          <div className="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
            <div role="banner"></div>
            <div className="mt-12">
              <h1
                role="main"
                className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
              >
                account Created
              </h1>
            </div>
            <div className="mt">
              <p className="mt-6 sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800">
                Please, use this code to access your account :
                <span className="font-bold text-green-500"> {props.feedback.data.token} </span>
              </p>
            </div>
            <Link
              to={"/signin"}
              className="text-white w-full mx-auto max-w-sm rounded text-center bg-red-600 py-2 px-4 m-2 inline-flex items-center focus:outline-none md:float-right"
            >
              Sign-in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

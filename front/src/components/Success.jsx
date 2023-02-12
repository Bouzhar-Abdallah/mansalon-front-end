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
              className="w-full dark:text-gray-800 dark:hover:bg-gray-100 dark:bg-white sm:w-auto mt-14 text-base leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black"
            >
              Sign-in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

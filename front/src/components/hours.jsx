import React from "react";
import { Button, Badge } from "flowbite-react";
export default function Hour(props) {
  return props.hour_reserved ? (
    <div>
      <Button className="w-12" color="light">
        {props.hour}
      </Button>
    </div>
  ) : (
    <div className="text-gray-900 bg-red-400 border border-red-700 hover:bg-gray-100
     focus:ring-blue-300 disabled:hover:bg-white group flex h-min items-center justify-center 
       p-0.5 text-center font-medium focus:z-10 rounded-lg w-12">
      <span className="flex items-center rounded-md text-sm px-4 py-2">
        {props.hour}
      </span>
    </div>
  );
}

import React from "react";
import { Button, Badge, Tooltip } from "flowbite-react";
export default function Hour(props) {
  return props.hour_reserved ? (
    <div>
      <Button className="w-12" color="light">
        {props.hour}
      </Button>
    </div>
  ) : (
    <Tooltip
    content="Reserved"
    style="light"
  >
    
    <div className="text-gray-900 bg-red-400 border border-red-700 hover:bg-red-300
     focus:ring-blue-300 disabled:hover:bg-green-400 group flex h-min items-center justify-center 
     p-0.5 text-center font-medium focus:z-10 rounded-lg w-12">
      <span className="flex items-center rounded-md text-sm px-4 py-2">
        {props.hour}
      </span>
    </div>
           </Tooltip>
  );
}

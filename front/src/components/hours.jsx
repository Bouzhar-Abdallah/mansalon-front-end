import React, { useContext, useEffect, useState } from "react";
import { Button, Badge, Tooltip } from "flowbite-react";
import { UserContext } from "../utilities/UserContext";
import axios from "axios";
import ConfirmationModel from "./confirmationModel";
import Test from "./test";

export default function Hour(props) {
    let {user} = useContext(UserContext)
    
    let [showConfirmation, setConfirmation] = useState(false)
    
    const data = {
        "identifiant_utilisateur": user.identifiant,
        "date_jour": props.date_jour,
        "heure": props.hour
    }
        
    function confirmation() {
       setConfirmation(true)
    }

  return props.reserved ? (
    <Tooltip content="Reserved" style="light">
      <div
        className="text-gray-900 bg-red-400 border border-red-700 hover:bg-red-300
     focus:ring-blue-300 disabled:hover:bg-green-400 group flex h-min items-center justify-center 
     p-0.5 text-center font-medium focus:z-10 rounded-lg w-12"
      >
        <span className="flex items-center rounded-md text-sm px-4 py-2">
          {props.hour}
        </span>
      </div>
    </Tooltip>
  ) : (
    <>
    <Tooltip content="available" style="light">
    <div>
      <Button onClick={confirmation} className="w-12" color="light">
        {props.hour}
      </Button>
    </div>
    
    </Tooltip>
    {showConfirmation ? <ConfirmationModel show={showConfirmation} data={data} /> : <></>}
    
    </>
  );
}

import React from "react";
import { Button } from "flowbite-react";
export default function Hour(props) {
  
  
  
return props.reserved ? (
    <div>
      <Button className="w-12"  color="light">
        {props.hour}
      </Button>
    </div>
) : 
    (
        <div>
          <Button className="w-12"  color="failure">
            {props.hour}
          </Button>
        </div>
  )



}

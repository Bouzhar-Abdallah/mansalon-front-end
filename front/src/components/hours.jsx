import React from "react";
import { Button } from "flowbite-react";
export default function Hour(props) {
  
  console.log(props)
  
  let reserved = false
/*   reserved = props.reservedHours.map((hour) => {
    
    if (hour.heure == props.data){ 
        
        return true
}else return false
}); */
console.log(reserved)
  return (
        <div>
          <Button className="w-12" color={reserved ? "failure" : "light"}>
            {props.Hour}
          </Button>
        </div>
  );
}

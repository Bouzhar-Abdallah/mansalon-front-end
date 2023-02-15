import axios from "axios";
import { Accordion, Button, Breadcrumb } from "flowbite-react";
import { useEffect, useState } from "react";
import Hour from "./hours";

export default function Day(props) {
  const [availableHours, setAvailableHours] = useState(null);
  const [reservedHours, setReservedHours] = useState(null);
  const [workingHours, setWorkingHours] = useState(null);
  const [matainHours, setMatainHours] = useState([])
  const [midiHours, setMidiHours] = useState([])
  const [combinedHours, setCombinedHours] = useState([]);
  const data = {
    "jour": props.dayName,
    "date_jour": props.year + '-' + props.month + '-' +props.day 
  }
console.log(props)
  /* ********* */
  
/* useEffect(() => {
  axios.post(
    "http://localhost:8888/api/home/working_hours",
    data,
    { "Content-Type": "application/json" }
  ).then(response => {
    //setReservedHours(response.data.available_hours)
    // setWorkingHours(response.data)
   
    let matainHours = []
   for (let index = response.data.ouverture_matain; index < response.data.fermeture_matain; index++) {
    matainHours.push(index)

   }
   
    let midiHours = []
   for (let index = response.data.ouverture_midi; index < response.data.fermeture_midi; index++) {
    midiHours.push(index)

   }
   setMidiHours(midiHours)
   setMatainHours(matainHours)
   
  }) 

  
}, [])
*/
/* useEffect(() => {
  axios.post(
    "http://localhost:8888/api/home/reserved_Spots_Per_Day",
    data,
    { "Content-Type": "application/json" }
  ).then(response => {
    setReservedHours(response.data)
    
  })
}, [])
useEffect(() => {
  axios.post(
    "http://localhost:8888/api/home/available_Spots_Per_Day",
    data,
    { "Content-Type": "application/json" }
  ).then(response => {
    setAvailableHours(response.data.available_hours)
    
  })
}, []) */



  
  return (
    <>
      <details className="p-4 rounded-lg bg-white">
        <summary className="font-semibold flex items-center" >
          <div className="ml-2 flex flex-col">
            <span className="">{props.dayName}</span>
            <span className="font-thin text-xs">heures disponibles : {availableHours}</span>
          </div>
          <span className="ml-auto font-normal"> {props.day}</span>
          <span className="ml-2 font-normal">/</span>
          <span className="ml-2 font-normal">{props.month}</span>

        </summary>
        <div className="mt-3">
          <div className="text-sm leading-6 "></div>
          <div className="flex gap-10 justify-center bg-white py-4">
            <div className="flex flex-col">
              <div className="flex justify-center items-center mb-2">
                <h1 className="text-center">matain</h1>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
{/*  */}
              </div>
              {/* <div>
                    <Button className="w-12" color="success"></Button>
                  </div> */}
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center mb-2">
                <h1 className="text-center">apres midi</h1>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <div>
                  <Button className="w-12" color="light">
                    8
                  </Button>
                </div>
                <div>
                  <Button className="w-12" color="light">
                    9
                  </Button>
                </div>
                <div>
                  <Button className="w-12" color="failure">
                    10
                  </Button>
                </div>
                <div>
                  <Button className="w-12" color="light">
                    11
                  </Button>
                </div>
              </div>
              {/* <div>
                    <Button className="w-12" color="success"></Button>
                  </div> */}
            </div>
          </div>
        </div>
      </details>
    </>
  );
}

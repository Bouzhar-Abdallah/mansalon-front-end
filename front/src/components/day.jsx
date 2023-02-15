import axios from "axios";
import { Accordion, Button, Breadcrumb } from "flowbite-react";
import { useEffect, useState } from "react";
import Hour from "./hours";

export default function Day(props) {
  //console.log(props.day_data)

  const reserved_hours = props.day_data.reserved;
  const horaire = {
    matain: [],
    midi: [],
  };

  for (
    let i = props.day_data.working.ouverture_matain;
    i < props.day_data.working.fermeture_matain;
    i++
  ) {
    horaire.matain.push(i);
  }

  for (
    let i = props.day_data.working.ouverture_midi;
    i < props.day_data.working.fermeture_midi;
    i++
  ) {
    horaire.midi.push(i);
  }
  //console.log(horaire);
  //console.log(reserved_hours);
  return (
    <>
      <details className="p-4 rounded-lg bg-white">
        <summary className="font-semibold flex items-center">
          <div className="ml-2 flex flex-col">
            <span className="">{props.dayName}</span>
            <span className="font-thin text-xs">
              heures disponibles :{" "}
              {props.day_data.total_available.available_hours}
            </span>
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
                {
                  horaire.matain.map((hour)=>{
                    return reserved_hours.includes(hour) ? <Hour key={hour} hour={hour} reserved={false} /> : <Hour key={hour} hour={hour} reserved={true}/>
                    
                  })
                }
                
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
              {
                  horaire.midi.map((hour)=>{
                    return reserved_hours.includes(hour) ? <Hour key={hour} hour={hour} reserved={false} /> : <Hour key={hour} hour={hour} reserved={true}/>
                    
                  })
                }
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

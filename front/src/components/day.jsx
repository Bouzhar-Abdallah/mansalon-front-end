import axios from "axios";
import { Accordion, Button, Breadcrumb } from "flowbite-react";
import { useEffect, useState } from "react";
import Hour from "./hours";

export default function Day(props) {
  const data = {
    jour: props.dayName,
    date_jour: +props.year + "-" + props.month + "-" + props.day,
  };
  //console.log(data)

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
    horaire.matain.push({
      hour: i,
      reserved: reserved_hours.includes(i),
      date_jour: props.year + "-" + props.month + "-" + props.day,
    });
  }

  for (
    let i = props.day_data.working.ouverture_midi;
    i < props.day_data.working.fermeture_midi;
    i++
  ) {
    horaire.midi.push({
      hour: i,
      reserved: reserved_hours.includes(i),
      date_jour: props.year + "-" + props.month + "-" + props.day,
    });
  }
  //console.log(horaire);
  //console.log(reserved_hours);
  return (
    <>
      <details className="p-4 rounded-lg bg-white">
        <summary className="font-semibold flex items-center">
          <div className="ml-2 flex flex-col">
            <span className="">{props.dayName}</span>
          <div className="font-thin text-xs">
            <span className=""> {props.day}</span>
            <span className="ml-2 ">/</span>
            <span className="ml-2 ">{props.month}</span>
          </div>
          </div>
            <span className="ml-auto font-normal">
              heures disponibles :{" "}
              {props.day_data.total_available.available_hours}
            </span>
        </summary>
        <div className="mt-3">
          <div className="text-sm leading-6 "></div>
          <div className="flex gap-10 justify-center bg-white py-4">
            <div className="flex flex-col">
              <div className="flex justify-center items-center mb-2">
                <h1 className="text-center">matain</h1>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {horaire.matain.map((hour) => {
                  return <Hour key={hour.hour} {...hour} />;
                })}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center mb-2">
                <h1 className="text-center">apres midi</h1>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {horaire.midi.map((hour) => {
                  return <Hour key={hour.hour} {...hour} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </details>
    </>
  );
}

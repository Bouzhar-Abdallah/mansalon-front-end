import { Accordion, Button, Breadcrumb } from "flowbite-react";
import Day from "./day";

export default function reservations() {
  const weekday = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  const d = new Date();
  var days = [];

  for (var i = 0; i < 30; i++) {
    var date = new Date();
    date.setDate(date.getDate() + i);
    days.push(date);
  }

  days.forEach((day) => {
    let dayname = weekday[day.getDay()];
    //console.log(dayname);
  });

  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
      </Breadcrumb>

      <div className="p-5 ">
        <div className="lg:w-2/3 mx-auto bg-gray-300 p-4 border-t-2 bg-opacity-20 border-red-500 rounded-t">
         <h1 className="text-center my-4">hello</h1>
          <div className="w-full md:px-2 mx-auto space-y-2  p-2 border-t ">
            <details className="p-4 rounded-lg bg-green-300">
              <summary className="font-semibold">
                How to create Accordion (FAQ) in react ?
              </summary>
              <div className="mt-3">
                <div className="text-sm leading-6 ">
                  <Day />
                </div>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                How to create Accordion (FAQ) in react ?
              </summary>
              <div className="mt-3">
                <div className="text-sm leading-6 ">
                  <Day />
                </div>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                How to create Accordion (FAQ) in react ?
              </summary>
              <div className="mt-3">
                <div className="text-sm leading-6 ">
                  <Day />
                </div>
              </div>
            </details>
            <details className="p-4 rounded-lg">
              <summary className="font-semibold">
                How to create Accordion (FAQ) in react ?
              </summary>
              <div className="mt-3">
                <div className="text-sm leading-6 ">
                  <Day />
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}

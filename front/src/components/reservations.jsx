import { Accordion, Button, Breadcrumb } from "flowbite-react";
import Day from "./day";

export default function reservations() {
  const weekday = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];


  var days2 = [];
  for (var i = 0; i < 1; i++) {
    var date = new Date();
    date.setDate(date.getDate() + i);
    var jsonDate = { 
      id:i,
      year: date.getFullYear(), 
      month: date.getMonth() + 1, 
      day: date.getDate(),
      dayName: weekday[date.getDay()]
    };
    days2.push(jsonDate);
  }


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
            
            {days2.map((day)=>{
              return <Day key={day.id} {...day} />
            })}
                  
                
          </div>
        </div>
      </div>
    </>
  );
}

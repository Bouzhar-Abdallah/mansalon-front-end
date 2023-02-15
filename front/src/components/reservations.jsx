import { Accordion, Button, Breadcrumb } from "flowbite-react";
import axios from "axios";
import Day from "./day";
import { useEffect, useState } from "react";

export default function reservations() {
const [days, setDays] = useState()

  const weekday = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

useEffect(() => {
  const fetchData = async () => {
    const days = [];
    for (var i = 0; i < 30; i++) {
      var date = new Date();
      date.setDate(date.getDate() + i);
      var jsonDate = { 
        id:i,
        year: date.getFullYear(), 
        month: date.getMonth() + 1, 
        day: date.getDate(),
        dayName: weekday[date.getDay()],
        day_data: 0
      };
      
      const data = {
        "jour": jsonDate.dayName,
        "date_jour": jsonDate.year + '-' + jsonDate.month + '-' +jsonDate.day 
      }
      const response = await axios.post(
        "http://localhost:8888/api/home/available_Spots_Per_Day",
        data,
        { "Content-Type": "application/json" }
      );
      jsonDate.day_data = response.data
      days.push(jsonDate);
    }
    setDays(days);
  };

  fetchData();
}, []);



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
            
            {days && days.map((day)=>{
              
              return <Day key={day.id} {...day} />
            })}
                  
                
          </div>
        </div>
      </div>
    </>
  );
}

import { Accordion, Button, Breadcrumb } from "flowbite-react";

export default function Day(props) {
  


  
 
    //let dayname = weekday[props.day.getDay()];
    console.log(props.day)
  
  return (
    <>
      <details className="p-4 rounded-lg bg-white">
        <summary className="font-semibold" >
          <div className="w-48 flex ">
          <span className="ml-4 ">{props.day.dayName} </span>
          <span className="ml-auto">{props.day.day} </span>
          <span className="ml-4">{props.day.month} </span>
          </div>

        </summary>
        <div className="mt-3">
          <div className="text-sm leading-6 "></div>
          <div className="flex gap-10 justify-center bg-white py-4">
            <div className="flex flex-col">
              <div className="flex justify-center items-center mb-2">
                <h1 className="text-center">matain</h1>
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

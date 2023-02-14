import { Accordion, Button, Breadcrumb } from "flowbite-react";

export default function Day() {
  return (
    <>
 
           
 <div className="flex gap-10 justify-center">
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
              
        
    </>
  );
}

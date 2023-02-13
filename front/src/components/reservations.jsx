import { Accordion, Button, Breadcrumb } from "flowbite-react";

export default function reservations() {
  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" >
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
      </Breadcrumb>

      <div className="p-5">
        <div className="lg:w-2/3 mx-auto">
          <Accordion collapseAll={true}>
            <Accordion.Panel>
              <Accordion.Title>What is Flowbite?</Accordion.Title>
              <Accordion.Content>
                <Button.Group>
                  <Button color="gray">8</Button>
                  <Button color="gray">9</Button>
                  <Button color="gray">10</Button>
                  <Button color="gray">11</Button>

                  <Button color="gray">14</Button>
                  <Button color="gray">15</Button>
                  <Button color="gray">16</Button>
                  <Button color="gray">17</Button>
                </Button.Group>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>What is Flowbite?</Accordion.Title>
              <Accordion.Content>
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
                      <h1 className="text-center">soir</h1>
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
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </>
  );
}

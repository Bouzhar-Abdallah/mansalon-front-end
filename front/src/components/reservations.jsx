import { Accordion, Button, Breadcrumb } from "flowbite-react";
import Day from "./day";

export default function reservations() {
  const weekday = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

const d = new Date();
let day = weekday[d.getDay()];
  
  console.log(day)
  
  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
      </Breadcrumb>

      <div className="p-5">
        <div className="lg:w-2/3 mx-auto">
          <Accordion collapseAll={true}>
            
            <Accordion.Panel>
              <Accordion.Title>Vendredi 13/02</Accordion.Title>
              <Accordion.Content>
                <Day />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Vendredi 13/02</Accordion.Title>
              <Accordion.Content>
                <Day />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Vendredi 13/02</Accordion.Title>
              <Accordion.Content>
                <Day />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Vendredi 13/02</Accordion.Title>
              <Accordion.Content>
                <Day />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Vendredi 13/02</Accordion.Title>
              <Accordion.Content>
                <Day />
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </>
  );
}

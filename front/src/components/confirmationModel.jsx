import React, { useState } from "react";
import {Button, Modal, Flowbite} from "flowbite-react"
import axios from "axios";

export default function ConfirmationModel(props){
    
    let [reservation, setReservation] = useState()
    const [visible,setVisible]=useState(props.show)
    const makeReservation = async ()=>{
        const response = await axios.post(
            "http://localhost:8888/api/home/makeReservation",
            props.data,
            { "Content-Type": "application/json" }
          )
          setReservation(response)
          console.log(response.data)
          setVisible(false)
    }
    return(
        <React.Fragment>

  <Modal
    show={visible}
    size="md"
    popup={true}
    onClose={()=>{
        setVisible(false)
    }}
  >
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        
        <h3 className="mb-5 text-lg font-normal text-gray-500
         dark:text-gray-400">
          voulez vous confirmer ?
          <div>
          <span className="">le {props.data.date_jour}</span>
            <span className=""> a {props.data.heure}:00</span>
            </div>
        </h3>
        <div className="flex justify-center gap-4">
          <Button
            color="success"
            onClick={makeReservation}
          >
            oui confirmer
          </Button>
          <Button
            color="failure"
            onClick={()=>{
                setVisible(false)
            }}
          >
            annuller
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
</React.Fragment>
    )
}
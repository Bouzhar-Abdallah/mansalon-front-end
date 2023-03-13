import React, { useState } from "react";
import { Button, Modal, Flowbite } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Test from "./test";

export default function ConfirmationModel(props) {
  //let [reservation, setReservation] = useState();
  const [visible, setVisible] = useState(props.show);
  const reservationStr = localStorage.getItem("reservation");
  let reservation = null
  if (reservationStr !== null){
    reservation = JSON.parse(reservationStr)
  }
  //const reservation = localStorage.getItem('reservation');
  const notify = (string) => {
    if (string == "success") {
      toast.success("Reservation updated succesefully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (string == "failure") {
      toast.error("something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (string == "already") {
      toast.error(
        "you already have a pending reservation, please cancel or edit",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };
  const makeReservation = async () => {
    if (reservation) {
      console.log('defined')
      
      const response = await axios.post(
        "http://localhost:8888/api/home/updateReservation",
        
        {
          "new" : props.data,
          "old" : {"id":reservation.id, "identifiant_utilisateur" : reservation.identifiant_utilisateur}
        }
        ,
        { "Content-Type": "application/json" }
      );
      
      
      if (response.data.message == "reservation updated") {
        props.onreservation()
        notify("success");
      } else {
        notify("failure");
      }

      setVisible(false);
    } else {
      console.log('not defined')
      const response = await axios.post(
        "http://localhost:8888/api/home/makeReservation",
        props.data,
        { "Content-Type": "application/json" }
      );
      //console.log(response.data)
      if (response.data.message == "reservation created") {
        //localStorage.setItem('reservation', JSON.stringify(response.data.reservation));
        props.onreservation()
        notify("success");
      } else if (
        response.data.message == "you already has a pending reservation"
      ) {
        notify("already");
      } else {
        notify("failure");
      }

      setVisible(false);
    }
  };
  return (
    <>
      <ToastContainer />

      <React.Fragment>
        <Modal
          show={visible}
          size="md"
          popup={true}
          onClose={() => {
            setVisible(false);
          }}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <div
                className="mb-5 text-lg font-normal text-gray-500
         dark:text-gray-400"
              >
                {reservation ? (
                  <>
                    <h1>voulez vous changer :</h1>
                    <div>
                      <span className="">le {reservation.date_jour}</span>
                      <span className=""> a {reservation.heure}:00</span>
                    </div>
                    <h1>par :</h1>
                    <div>
                      <span className="">le {props.data.date_jour}</span>
                      <span className=""> a {props.data.heure}:00</span>
                    </div>
                  </>
                ) : (
                  <>
                    <h1>voulez vous confirmer ?</h1>
                    <div>
                      <span className="">le {props.data.date_jour}</span>
                      <span className=""> a {props.data.heure}:00</span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex justify-center gap-4">
                <Button color="success" onClick={makeReservation}>
                  oui confirmer
                </Button>
                <Button
                  color="failure"
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  annuller
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </>
  );
}

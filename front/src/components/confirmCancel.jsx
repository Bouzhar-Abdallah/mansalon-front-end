import React, { useContext, useState } from "react";
import { Button, Modal, Flowbite } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Test from "./test";
import { UserContext } from "../utilities/UserContext";
import { Navigate } from "react-router-dom";

export default function ConfirmCancel(props) {
  const { user } = useContext(UserContext);

  let [reservation, setReservation] = useState();
  let [visible, setVisible] = useState(true);
  let setParentShow = props.setShow
  
  const notify = (string) => {
    if (string == "success") {
      toast.success("Reservation canceled", {
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
    }
  };
  //console.log(user.identifiant)
  const cancelReservation = async () => {
    const response = await axios.post(
      "http://localhost:8888/api/home/cancelReservation",
      { identifiant_utilisateur: user.identifiant },
      { "Content-Type": "application/json" }
    );

    if (response.data.message == "deleted successefully") {
      notify("success");
    } else {
      notify("failure");
    }
    
    setVisible(false);
    setParentShow(false)
    //window.location.reload(false);
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
              <h3
                className="mb-5 text-lg font-normal text-gray-500
         dark:text-gray-400"
              >
                are you sure you wanna cancel this reservation ?
                <div>
                  <span className="">le {props.data.date_jour}</span>
                  <span className=""> a {props.data.heure}:00</span>
                </div>
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="success" onClick={cancelReservation}>
                  yes cancel
                </Button>
                <Button
                  color="failure"
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  ignore
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </>
  );
}

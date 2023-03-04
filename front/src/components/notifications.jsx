import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { useContext } from "react";
import { UserContext } from "../utilities/UserContext";
import ConfirmationModel from "./confirmationModel";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ConfirmCancel from "./confirmCancel";

export default function Notifications() {
  const [showConfirmation, setConfirmation] = useState(false);
  const [show, setShow] = useState(false);
  const [reservation, setReservation] = useState(null);
  const { user } = useContext(UserContext);

  const fetchData = async () => {
    const data = {
      identifiant_utilisateur: user.identifiant,
    };
    const response = await axios.post(
      "http://localhost:8888/api/home/getUserReservation",
      data,
      { "Content-Type": "application/json" }
    );
    if (response.data.message == "one record found") {
      setReservation(response.data);
    }
  };
  function handleCloseConfirmation() {
    setShow(false);
  }
  /* useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]); */
  /*  useEffect(() => {
    if(reservation){
      localStorage.setItem('reservation', JSON.stringify(reservation.data));
    }
  }, [reservation]); */

  const notify = (string) => {
    if (string == "success") {
      toast.success("please chose a new day and time !", {
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

  function edit() {
    if (reservation) {
      localStorage.setItem("reservation", JSON.stringify(reservation.data));
    }
    notify("success");
    setShow(false);
  }
  function confirmation() {
    setConfirmation(true);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function onClose() {
    setShow(false);
  }

  return (
    <>
      <ToastContainer />
      <button
      onClick={() => {
        fetchData();
        setShow(true);
      }}
        type="button"
        className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <span className="sr-only">View notifications</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
      </button>
     {/*  <button
        className=""
        onClick={() => {
          fetchData();
          setShow(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </button> */}

      <Modal show={show} onClose={onClose}>
        <Modal.Header>Votre prochain Rendez-vous: </Modal.Header>
        <Modal.Body>
          {reservation ? (
            <>
              {showConfirmation ? (
                <ConfirmCancel
                  setShow={handleCloseConfirmation}
                  show={showConfirmation}
                  data={reservation.data}
                />
              ) : (
                <></>
              )}
              <div className="space-y-6">
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                  <div className="border-t border-gray-200">
                    <dl>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          {user.nom} {user.prenom}
                        </dd>
                      </div>

                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Date
                        </dt>
                        <dd className="mt-1  text-gray-900 sm:col-span-2 sm:mt-0">
                          <span className="font-bold text-lg">
                            {reservation.data.date_jour}
                          </span>
                          <span className="ml-2">à</span>
                          <span className="mx-2 font-bold text-lg">
                            {reservation.data.heure}
                            :00
                          </span>
                          <span>heures</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <Modal.Footer>
                <button
                  onClick={edit}
                  type="button"
                  className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Edit
                </button>
                <button
                  onClick={confirmation}
                  type="button"
                  className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  Cancel
                </button>
              </Modal.Footer>
            </>
          ) : (
            <div>you have no reservation at the moment</div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

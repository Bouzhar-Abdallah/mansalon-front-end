import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { useContext } from "react";
import { UserContext } from "../utilities/UserContext";
import ConfirmationModel from "./confirmationModel";
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

  function confirmation() {
       
    setConfirmation(true)
    
 }
  useEffect(() => {
    fetchData();
  }, []);

  function onClose() {
    setShow(false);
  }

  return (
    <>
      <button
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
      </button>
      
      <Modal show={show} onClose={onClose}>
        <Modal.Header>Votre prochain Rendez-vous: </Modal.Header>
        <Modal.Body>
          {reservation ? (
            <>
            {showConfirmation ? <ConfirmCancel setShow={handleCloseConfirmation} show={showConfirmation} data={reservation.data} /> : <></>}
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
                  onClick={() => setShow(false)}
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

import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { useContext } from "react";
import { UserContext } from "../utilities/UserContext";
import axios from "axios";

export default function Notifications() {
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
    setReservation(response.data);
    console.log(reservation)
    console.log(user)
  };

  useEffect(() => {
    fetchData();
  }, []);

  function onClose() {
    setShow(false);
  }

  return (
    <>
      <Button onClick={() => setShow(true)}>Toggle modal</Button>
      <Modal show={show} onClose={onClose}>
        <Modal.Header>Votre prochain Rendez-vous: </Modal.Header>
        <Modal.Body>
          {reservation ? (
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
                        <span className="ml-2">
                             à 
                        </span>
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
          ) : (
            <div>Loading...</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setShow(false)}
            type="button"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Edit
          </button>
          <button
            onClick={() => setShow(false)}
            type="button"
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

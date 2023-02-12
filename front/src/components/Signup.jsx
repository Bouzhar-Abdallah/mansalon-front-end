import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Success from "./success";

function Signup() {
  const [errMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(true);
  const [accountCreated, setAcountCreated] = useState(false);
  
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8888/api/home/signup",
        data,
        { "Content-Type": "application/json" }
      );

      if (response.status === 201) {
        setErrorMsg("compte creé avec succes");
        console.log(response);
        setAcountCreated(response)
        //navigate("/signin");
      }
    } catch (error) {
      if (!error?.response) {
      } else if (error.response?.status === 409) {
        setErrorMsg("ce numero telefone existe deja dans la base de donnes");
        setSuccess(false);
      } else {
        setErrorMsg("registration failed");
        setSuccess(false);
      }
    }
  };
  return (
    <>
    
    {accountCreated && <Success feedback={accountCreated}/>}
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-10 bg-gray-100  bg-opacity-50 h-screen"
    >
      <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-red-500 rounded-t">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600">Creaction nouveau compte</h1>
            </div>
          </div>
          {success ? (
            <></>
          ) : (
            <div className="bg-red-300 flex items-center justify-center text-center border border-red-600 px-8 py-4">
              <p>{errMsg}</p>
            </div>
          )}
        </div>
        <div className="bg-white space-y-6">
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto">Account</h2>
            <div className="md:w-2/3 max-w-sm mx-auto">
              <label className="text-sm text-gray-400">Email</label>
              <div className="w-full inline-flex border">
                <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                  <svg
                    fill="none"
                    className="w-6 text-gray-400 mx-auto"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="email@example.com"
                  autoComplete="off"
                  {...register("email", {
                    required: "ce champ est obligatoire",
                    pattern: {
                      type: "email",
                      required: "ce champ est obligatoire",
                    },
                  })}
                />
              </div>
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>

          <hr />
          <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
              <div>
                <label className="text-sm text-gray-400">first name</label>
                <div className="w-full inline-flex border">
                  <div className="w-1/12 pt-2 bg-gray-100">
                    <svg
                      fill="none"
                      className="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder="entrez votre nom"
                    autoComplete="off"
                    {...register("prenom", {
                      required: "ce champ est obligatoire",
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "merci d'introduire des lettres selemon",
                      },
                    })}
                  />
                </div>
                {errors.prenom && <p>{errors.prenom.message}</p>}
              </div>
              <div>
                <label className="text-sm text-gray-400">last name</label>
                <div className="w-full inline-flex border">
                  <div className="w-1/12 pt-2 bg-gray-100">
                    <svg
                      fill="none"
                      className="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder="Nom"
                    autoComplete="off"
                    {...register("nom", {
                      required: "ce champ est obligatoire",
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "merci d'introduire des lettres selemon",
                      },
                    })}
                  />
                </div>
                {errors.nom && <p>{errors.nom.message}</p>}
              </div>
              <div>
                <label className="text-sm text-gray-400">Phone number</label>
                <div className="w-full inline-flex border">
                  <div className="pt-2 w-1/12 bg-gray-100">
                    <svg
                      fill="none"
                      className="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    name="numero_tel"
                    autoComplete="off"
                    {...register("numero_tel", {
                      required: "numero de tell est obligatoire",
                      pattern: {
                        value: /\d+/,
                        message: "ce numero de telephone n'est pas valid",
                      },
                      minLength: {
                        value: 10,
                        message: "ce numero trop court",
                      },
                      maxLength: {
                        value: 10,
                        message: "ce numero trop long",
                      },
                    })}
                  />
                </div>
                {errors.numero_tel && <p>{errors.numero_tel.message}</p>}
              </div>
            </div>
          </div>

          <hr />
          <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
            <div className="md:w-3/12 text-center md:pl-6 mx-auto">
              <button
                type="submit"
                className="text-white w-full mx-auto max-w-sm rounded text-center bg-red-600 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="w-4 text-white mr-2"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Submit
              </button>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </form>
    </>
  );
}

export default Signup;

import React from "react";
import ReactDOM from "react-dom";
import { useForm, ErrorMessage } from "react-hook-form";

import "./styles.css";

export default function Test() {
  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: "all"
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>ErrorMessage</h1>
      <input
        name="multipleErrorInput"
        ref={register({
          required: "This input is required.",
          pattern: {
            value: /\d+/,
            message: "This input is number only."
          },
          maxLength: {
            value: 10,
            message: "This input exceed maxLength."
          }
        })}
      />
      <ErrorMessage errors={errors} name="multipleErrorInput">
        {({ messages }) => {
          console.log(messages);
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage>

      <input type="submit" />
    </form>
  );
}



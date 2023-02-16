import React from 'react';
import {Alert} from 'flowbite-react';
export default function Test() {
  const [open, setOpen] = React.useState(true);

  return (
    <Alert
    color="success"
    onDismiss={function onDismiss(){return alert("Alert dismissed!")}}
  >
    <span>
      <span className="font-medium">
        Info alert!
      </span>
      {' '}Change a few things up and try submitting again.
    </span>
  </Alert>
  );
}

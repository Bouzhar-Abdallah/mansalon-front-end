import React from 'react';
import {Toast} from 'flowbite-react';
//import {HiCheck} from 'flowbite';
export default function Test() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="flex flex-col gap-4">
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

      </div>
      <div className="ml-3 text-sm font-normal">
        Item moved successfully.
      </div>
      <Toast.Toggle />
    </Toast>

  </div>
  );
}

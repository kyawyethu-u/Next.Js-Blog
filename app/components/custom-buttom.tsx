"use client";

import { useFormStatus } from "react-dom";

const CustomButton = ({label}: {label: string}) => {
    const {pending} = useFormStatus();
  return (
    <button className="border border-white p-2 block mt-2 disabled:border-grey-500 
   disabled: text-grey-500" disabled={pending}>{label || "Default"}</button>
  )
}

export default CustomButton

/*button is disabled when pending is true */
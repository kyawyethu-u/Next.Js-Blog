"use client";

import { useFormStatus } from "react-dom";

const CustomButton = ({label}: {label: string}) => {
    const {pending} = useFormStatus();
  return (
    <button className="border-2 border-blue-600 
    rounded-md text-white text-sm font-bold  
    p-2 block mt-2 disabled:border-grey-500 
   disabled: text-grey-500 bg-blue-600 disabled:bg-transparent" disabled={pending}>{label || "Default"}</button>
  )
}

export default CustomButton

/*button is disabled when pending is true */
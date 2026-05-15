"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  // 'pending' becomes true the moment the form is submitted, and false when the database finishes!
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      disabled={pending}
      className={`w-full p-4 font-bold rounded-lg transition ${
        pending 
          ? "bg-gray-500 cursor-not-allowed" 
          : "bg-blue-600 hover:bg-blue-500 text-white"
      }`}
    >
      {pending ? "Submitting..." : "Send Inquiry"}
    </button>
  );
}
"use client"; // Make sure your page has this at the very top!

import toast from "react-hot-toast";
import { submitInquiry } from "@/app/actions";
import GuestCounter from "../../components/GuestCounter";
import SubmitButton from "../../components/SubmitButton";

export default function Contact() {
  
  // 1. Create this interceptor function to handle the toast notification
  async function handleFormSubmit(formData: FormData) {
    // Wait for the backend Server Action to finish saving to the database
    await submitInquiry(formData);
    
    // Fire the success toast the moment the database is done!
    toast.success("Inquiry sent successfully!");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
      <p className="text-gray-400 mb-8">Let's plan your perfect event.</p>

      {/* 2. Update the action attribute to use your new interceptor function */}
      <form
        action={handleFormSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
        />

        <GuestCounter />

        {/* 3. Replace the old HTML button with your new Smart Component */}
        <SubmitButton />
      </form>
    </main>
  );
}
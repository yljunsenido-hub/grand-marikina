import { submitInquiry } from "@/app/actions";
import GuestCounter from "../../components/GuestCounter";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
      <p className="text-gray-400 mb-8">Let's plan your perfect event.</p>

      {/* 2. Add the action attribute to the form */}
      <form
        action={submitInquiry}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        {/* 3. Add name="name" and name="email" so the server can read them */}
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

        {/* Change button type to "submit" */}
        <button
          type="submit"
          className="bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition"
        >
          Send Inquiry
        </button>
      </form>
    </main>
  );
}

"use client";

import { useState } from "react";

export default function GuestCounter() {
    // 2. We use React 'state' to remember the current number of guests
  const [count, setCount] = useState(50); // Let's start with a minimum of 50 guests

  // 3. Functions to handle the math
  const increaseGuests = () => setCount(count + 10);
  const decreaseGuests = () => {
    if (count > 50) setCount(count - 10); // Prevent going below 50
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="text-gray-400 mb-2">Estimated Guest Count</label>
      <div className="flex items-center gap-4 bg-gray-800 p-2 rounded border border-gray-700">
        
        {/* Decrease Button */}
        <button 
          type="button" 
          onClick={decreaseGuests}
          className="bg-gray-700 text-white w-10 h-10 rounded hover:bg-gray-600 transition"
        >
          -
        </button>

        {/* Display the Current Count */}
        <span className="flex-1 text-center text-xl font-bold text-white">
          {count}
        </span>

        {/* NEW: The Hidden Input! */}
        <input type="hidden" name="guestTotal" value={count} />

        {/* Increase Button */}
        <button 
          type="button" 
          onClick={increaseGuests}
          className="bg-gray-700 text-white w-10 h-10 rounded hover:bg-gray-600 transition"
        >
          +
        </button>
        
      </div>
    </div>
  );
}
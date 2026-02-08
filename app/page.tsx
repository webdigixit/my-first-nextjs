"use client"; // <--- Required! Tells Next.js this code runs in the browser

import { useState } from "react";

export default function Home() {
  // Create state: the variable is count, and the function to update it is setCount
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">My Counter: {count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Click me to increase!
      </button>

      <button
        onClick={() => setCount(0)}
        className="mt-4 text-sm text-gray-500 underline"
      >
        Reset counter
      </button>

      <button
        onClick={() => setCount(count - 1)}
        className="mt-4 text-sm text-gray-500 underline"
      >
        Decrease number
      </button>
    </main>
  );
}

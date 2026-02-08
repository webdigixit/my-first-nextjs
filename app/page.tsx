"use client"; // <--- חובה! זה אומר ל-Next.js שהקוד הזה רץ בדפדפן

import { useState } from "react";

export default function Home() {
  // יצירת State: המשתנה הוא count, והפונקציה שמעדכנת אותו היא setCount
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">המונה שלי: {count}</h1>
      
      <button 
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        תלחץ עליי כדי להגדיל!
      </button>

      <button 
        onClick={() => setCount(0)}
        className="mt-4 text-sm text-gray-500 underline"
      >
        אפס מונה
      </button>

       <button 
        onClick={() => setCount(count - 1)}
        className="mt-4 text-sm text-gray-500 underline"
      >
       הורד מספר
      </button>
    </main>
  );
}
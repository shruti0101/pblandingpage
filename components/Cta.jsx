"use client";
import Enquire from "./Enquire";
import { useState } from "react";

export default function ContactSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#312e81] text-black md:py-8 md:px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 border border-gray-700 p-6 rounded-lg relative z-10">
        
        {/* Left Text */}
        <div className="text-center  text-white md:text-start md:ml-25 text-lg md:text-2xl font-medium max-w-xl">
          Transform Visions into Reality. Let’s create together.
        </div>

        {/* Middle Contact Info */}
        <div className="flex items-center gap-4">
          <div className="bg-blue-400 p-2 md:p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.52l.84 3.36a2 2 0 01-.45 1.86l-2.2 2.2a16.001 16.001 0 006.6 6.6l2.2-2.2a2 2 0 011.86-.45l3.36.84a2 2 0 011.52 1.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <div className="text-lg text-white font-bold">+91 7221848327</div>
            <div className="text-white text-sm">Call for Inquiry</div>
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-blue-400 to-purple-300 text-black font-semibold py-2 md:py-3 px-3 md:px-6 rounded hover:from-blue-300 cursor-pointer hover:to-purple-200 transition shadow-md"
        >
          CONTACT US
        </button>
      </div>

      {/* Waving Robot GIF */}
      <img
        src="/cta.gif"
        alt="Waving Robot"
        className="mx-auto md:absolute left-0 bottom-0 w-30 md:w-45 animate-bounce "
      />

      {/* Enquire Modal Outside Main Content */}
      {isFormOpen && (
        <Enquire isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </section>
  );
}

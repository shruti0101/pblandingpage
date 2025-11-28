"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#312e81] text-black md:py-8 md:px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 border border-gray-700 p-6 rounded-lg relative z-10">
        {/* Left Text */}
        <div className="text-center md:ml-20 text-white md:text-start text-lg md:text-2xl font-medium max-w-xl">
          Har Click Mein Growth — Let’s Advertise Smartly.
        </div>

        {/* Middle Contact Info */}
        <div className="flex items-center gap-4">
          <div className="bg-green-500 p-2 md:p-4 rounded-full">
            <FaWhatsapp className="text-lg md:text-2xl" />
          </div>
          <div>
            <div className="text-lg text-white font-bold">+91 7221848327</div>
            <div className="text-lg text-white font-bold">+91 9971700871</div>
          </div>
        </div>

        {/* Right Button */}
        <a
          href="https://wa.me/7221848327"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-400 to-purple-300 text-black font-semibold py-2 md:py-3 px-3 md:px-6 rounded hover:from-blue-300 hover:to-purple-200 transition shadow-md"
        >
          Whatsapp Now
        </a>
      </div>

      {/* Waving Robot GIF */}
      <div className="flex justify-center md:justify-start">
        <Image
          src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323988/cta_dezln7.gif"
          alt="Waving Robot"
          width={120}
          height={120}
          className="mx-auto md:absolute left-0 bottom-0 md:w-[140px] w-[100px] animate-bounce"
        />
      </div>
    </section>
  );
}

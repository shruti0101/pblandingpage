"use client";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200  px-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8 text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          Thank You!
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Your submission has been received. We will get back to you shortly.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

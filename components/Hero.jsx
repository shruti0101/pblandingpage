"use client";

import { useRef, useState } from "react";

export default function HeroSection() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const formData = new FormData(formRef.current);
      const res = await fetch(
        "https://formsubmit.co/ajax/info@promozionebranding.com", // ✅ AJAX endpoint
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (res.ok) {
        setSubmitted(true);
        formRef.current.reset(); // ✅ clears all fields
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <section>
        <div className="w-full flex justify-between items-center p-2 px-4 bg-white shadow-md">
          <img
            src="/logoo.webp"
            alt="Logo"
            className="w-[75px] rounded-full h-auto"
          />
          <a
            href="tel:+011 42603232"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-4 py-2 sm:px-4 sm:py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out text-sm sm:text-base"
          >
            📞 Call Now
          </a>
        </div>
      </section>

      {/* Hero + Form */}
      <section className="bg-[#063970] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-2xl md:text-5xl font-bold leading-tight">
              Digital Marketing Agency That Drives Revenue
            </h1>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              Not every digital marketing agency can seamlessly connect
              marketing activities to your bottom line. Request your
              personalized strategy proposal today to start driving ROI from
              digital marketing!
            </p>
            {/* <button className="mt-8 bg-white text-[#063970] font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Let's get started!
            </button> */}
          </div>

          {/* Right Form */}
          <div className="bg-[#0b4a8c] p-8 rounded-3xl shadow-lg">
            <h3 className="text-white text-xl font-semibold mb-6">
              Coffee or Beer? It's on us!
            </h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Hidden Config */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="🚀 New Lead from Website"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows="4"
                className="sm:col-span-2 w-full px-4 py-3 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <div className="sm:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
                >
                  Get Started Now
                </button>
              </div>
            </form>

            {/* Success/Error Message */}
            {submitted && (
              <p className="mt-4 text-green-300 text-center">
                ✅ Thank you! Your form has been submitted.
              </p>
            )}
            {error && (
              <p className="mt-4 text-red-300 text-center">
                ❌ {error}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

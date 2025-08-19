'use client'

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";


const GrowthPopup = () => {
  const [show, setShow] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      setStartCount(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/info@promozionebranding.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      form.reset();
      setSuccessMessage("Thanks! We'll contact you shortly.");
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (err) {
      setSuccessMessage("Something went wrong. Please try again.");
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0  bg-opacity-70 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* LEFT Section */}
        <div className="hidden md:block  bg-[#273B63] text-white p-6 flex flex-col justify-between">
          <div>
            <h6 className="font-bold mb-3 text-sm text-justify">
              Thank you to our amazing clients and dedicated team—these reviews are a reflection of your trust and unwavering dedication!
            </h6>
            <img
              src="/gmb.webp"
              alt="google review"
              className="w-56 h-auto mx-auto mb-3 rounded"
            />
            <p className="text-center text-xs">
              We have been recognized for our ability to deliver exceptional services in 2024!
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-between text-center mt-4 gap-2">
            <div className="bg-black text-white flex-1 py-3 rounded-md">
              <div className="font-bold text-lg">
                <CountUp end={150} duration={4} suffix=" +" start={startCount ? 0 : null} />
              </div>
              <small>Successful Projects</small>
            </div>
            <div className="bg-green-600 text-white flex-1 py-3 rounded-md">
              <div className="font-bold text-lg">
                <CountUp end={99} duration={4} suffix=" %" start={startCount ? 0 : null} />
              </div>
              <small>Project Success Score</small>
            </div>
            <div className="bg-red-600 text-white flex-1 py-3 rounded-md">
              <div className="font-bold text-lg">
                <CountUp end={200} duration={4} suffix=" +" start={startCount ? 0 : null} />
              </div>
              <small>Trusted Clients Globally</small>
            </div>
          </div>
        </div>

        {/* RIGHT Section */}
        <div className="bg-[#E40257] p-6 relative">
          {/* Close Button */}
          <button
            onClick={() => setShow(false)}
            className="absolute cursor-pointer top-3 right-3 text-white text-xl font-bold hover:text-gray-200"
          >
            ✕
          </button>

          <h3 className="font-bold text-center text-white text-xl mb-1">Let's Grow Together!</h3>
          <p className="text-center font-semibold text-white mb-3">Request a FREE Call!</p>

          {/* Success Message */}
          {successMessage && (
            <div className="bg-green-600 text-white text-center font-semibold py-2 rounded mb-3">
              {successMessage}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Growth Popup Submission" />

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-2 text-white rounded-md border border-white focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email ID"
              required
              className="w-full p-2 rounded-md text-white border border-white focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input 
              type="tel"
              name="phone"
              placeholder="Mobile No."
              className="w-full  p-2 rounded-md text-white border  border-white focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              rows="3"
              name="message"
              placeholder="Explain your requirements (minimum 50 characters)"
              required
              className="w-full p-2 rounded-md border border-white text-white focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-full transition"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GrowthPopup;

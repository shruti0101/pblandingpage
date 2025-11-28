"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ submitted: false, error: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, error: "" });

    try {
      const formData = new FormData(formRef.current);
      const res = await fetch("https://formsubmit.co/ajax/shubham@promozionebranding.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error();

      setStatus({ submitted: true, error: "" });
      formRef.current.reset();

      // ✅ Redirect after short delay
      setTimeout(() => router.push("/thank-you"), 1000);
    } catch {
      setStatus({ submitted: false, error: "Something went wrong. Please try again." });
    }
  };

  useEffect(() => {
    let vantaEffect;
    if (window.VANTA?.BIRDS) {
      vantaEffect = window.VANTA.BIRDS({
        el: "#bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        cohesion: 75,
      });
    }
    return () => vantaEffect?.destroy?.(); // ✅ Clean up effect on unmount
  }, []);

  return (
    <section
      id="bg"
      className="relative bg-[#07192F] flex items-center text-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Performance Marketing Partner That Drives Revenue
          </h1>
          <p className="mt-2 text-base text-white sm:text-lg leading-relaxed">
            Not every digital marketing firm can seamlessly connect marketing activities to your bottom line.
            Request your personalized strategy proposal today to start driving ROI from digital marketing!
          </p>

          <div className="hidden md:flex justify-start">
            <a
              href="tel:+917221848327"
              aria-label="Call Promozione Branding"
              className="bg-white text-black py-2 mt-4 sm:px-7 sm:py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition text-lg inline-block"
            >
              Get Free Consultancy
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="border border-gray-400 p-3 sm:p-8 rounded-2xl shadow-lg w-full">
          <h3 className="text-white text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">
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
            <input type="hidden" name="_subject" value="🚀 New Lead from Website" />
            <input type="hidden" name="_cc" value="shrutiguptacu@gmail.com" />
            <input type="hidden" name="_nosponsor" value="true" />

            {/* Inputs */}
            {[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number", pattern: "[0-9]{10}", maxLength: 10 },
              { name: "company", type: "text", placeholder: "Company Name" },
            ].map((input) => (
              <input
                key={input.name}
                {...input}
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows="4"
              className="sm:col-span-2 w-full px-4 py-3 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <div className="sm:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-white text-black font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-gray-200 transition cursor-pointer"
              >
                Get Started Now
              </button>
            </div>
          </form>

          {/* Feedback Messages */}
          {status.submitted && (
            <p className="mt-4 text-green-300 text-center text-sm sm:text-base">
              ✅ Thank you! Your form has been submitted.
            </p>
          )}
          {status.error && (
            <p className="mt-4 text-red-300 text-center text-sm sm:text-base">
              ❌ {status.error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

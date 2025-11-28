'use client'
import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
function Cta2() {
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef();
    const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(
        "https://formsubmit.co/info@promozionebranding.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      if (response.ok) {
        setShowToast(true);
        formRef.current.reset();
       setTimeout(() => {
          router.push("/thank-you");
        }, 1000);

      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#312e81] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-none">
            <Image
              src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323988/contactus_he0ojr.svg"
              alt="CTA Graphic"
              className="w-64 sm:w-80 md:w-[600px] lg:max-w-lg mx-auto animate-pulse"
        width={300}
        height={300}
            />
          </div>

          {/* Form */}
          <div className="order-2 lg:order-none">
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left">
              Coffee or Beer? It's on us!
            </h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base text-center lg:text-left">
              Let’s create something amazing together! Fill out the form below
              to get started.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New submission! from Home Page"
              />

              <input
                type="text"
                placeholder="Your name"
                name="name"
             
                required
                className="w-full rounded-md border border-white px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                required
                className="w-full rounded-md border border-white px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="number"
                maxLength={10}
              pattern="[0-9]{10}"
                required
                className="w-full rounded-md border border-white px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Company Name"
                name="company"
                className="w-full rounded-md border border-white px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                rows="4"
                placeholder="Tell us about your project"
                name="message"
                className="md:col-span-2 w-full rounded-md border border-white  px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-white cursor-pointer text-black px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition text-sm sm:text-base"
                >
                  Get Started Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-4 right-4 sm:bottom-5 sm:right-5 sm:left-auto z-50">
          <div className="bg-green-600 text-white px-4 py-3 rounded-md shadow-lg flex items-center justify-between gap-4 animate-bounce text-sm sm:text-base">
            <span>🎉 Form submitted successfully! We'll get back to you soon!</span>
            <button onClick={() => setShowToast(false)} className="text-white">
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cta2;

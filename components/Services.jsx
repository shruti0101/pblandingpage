"use client";

import React from "react";
import Link from "next/link";
const services = [
  {
    title: "PPC",
    description:
      "We build trust and visibility with custom PR strategies that position your brand as a leader.",
      link:"https://promozionebranding.com/services/google-adword-ppc-services"
  },
  {
    title: "Website Development",
    description:
      "We design fast, user-friendly websites built to convert visitors into customers.",
      link:"https://promozionebranding.com/services/b2b-web-development-services"
  },
  {
    title: "SEO",
    description:
      "We apply proven SEO tactics to rank your business higher and drive quality traffic.",
      link:"https://promozionebranding.com/services/digital-marketing-services"
  },

  {
    title: "Branding",
    description:
      "We create sleek, high-performing apps that boost user engagement and retention.",
      link:"https://promozionebranding.com/services/b2b-marketing-services"
  },
  {
    title: "Google Maps & Listings",
    description:
      "We optimize maps & listings to improve local presence and drive visits.",
      link:"https://promozionebranding.com/services/digital-marketing-services"
  },
  {
    title: "Social Media Management",
    description:
      "We turn followers into customers with content that engages and converts.",
      link:"https://promozionebranding.com/services/social-media-marketing"
  },
];

const Services = () => {
  return (
    <div className="relative bg-blue-900 py-10 px-5 overflow-hidden">
      {/* Branding text at top */}

      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <h1 className="text-5xl font-cinzel  tracking-wide  font-bold text-white mb-13 text-center">
          Our Services
        </h1>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link href={service.link}
              key={index}
              className="bg-blue-900/90 border border-stone-400 text-white p-10 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
              <p className="text-white text-md  leading-losse tracking-wide">
                {service.description}
              </p>
            </Link>
          ))}

          <div className="hidden md:block mt-5 absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0">
            <h1
              className="text-[100px] font-extrabold tracking-widest text-transparent bg-clip-text 
               bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 opacity-[0.18] whitespace-nowrap"
            >
              PromozioneBranding
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

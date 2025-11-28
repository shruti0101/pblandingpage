"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title:
      "B2B Marketing Services in India – Generate Quality Leads & Close Bigger Deals",
    desc: "B2B marketing is not about massive reach — it’s about reaching the right decision-makers at the right time. At Promozione Branding Pvt. Ltd., we specialize in B2B Marketing Services in India that help businesses create trust-based relationships, generate high-quality leads, and drive long-term growth.",
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323987/b2b_lba9et.webp",
    link: "/services/b2b-marketing",
  },
  {
    id: 2,
    title:
      "D2C Marketing Services in India – Scale Fast, Sell Direct, Grow Smart",
    desc: "Middleman hatao, customer se direct judo. That’s the D2C (Direct-to-Consumer) way – and we help you master it. At Promozione Branding Pvt. Ltd., we specialize in crafting full-funnel, ROI-driven D2C marketing strategies that help your brand build awareness, drive sales, and create loyal customers — all without relying on marketplaces. Launch. Scale. Repeat.",
    img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323990/d2c_olw5cd.webp",
    link: "/services/d2c-marketing",
  },
];

export default function MarketingServices() {
  return (
    <section className="w-full bg-[#F9FBFF] py-10 ">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 className="text-3xl mb-5 md:text-5xl font-bold text-center text-[#2548BD]">
          Our Marketing Services
        </h2>
        <div className="hidden md:block mx-auto mt-4 h-1 w-16 bg-blue-600"></div>

        {/* Services */}
        <div className="md:space-y-10 mt-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2  overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={500}
                  height={400}
                  className="object-contain w-full h-80 md:h-[420px]"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-5 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  {service.desc}
                </p>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

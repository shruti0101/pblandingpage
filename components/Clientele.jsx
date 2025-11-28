import React from "react";
import Image from "next/image";

const clients = [
  {  logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762334623/birla_gpg4f4.webp" },
  {  logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762334623/huniliver_r8bye3.webp" },
  {  logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762334623/wipro_zcud8d.webp" },
  {  logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762334623/nasle_1_okhqal.webp" },
  {  logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762334623/sumsung_royvfc.webp" },
  {  logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762334623/tata_j0q8is.webp" },
  {  logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762334623/sony_zdkv2l.webp" },
  {logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762334622/gimini_fgtxb8.webp" },
  {logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762334622/hcl-tech_obxwqm.webp" },
  {logo: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762334622/mahindra_h3mxrw.webp" },
];

export default function Clientele() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
          Our Premium Clients
        </h2>
     <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 mb-4 rounded"></div>
        <p className="text-black max-w-3xl mx-auto mb-10 text-sm sm:text-lg">
          Trusted by leading brands and organizations across industries — we’re
          proud to partner with businesses that believe in innovation and
          excellence.
        </p>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5  gap-4 place-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border  border-blue-400"
            >
              <div className="relative w-32 h-16 mx-auto flex items-center justify-center">
                <Image
                alt="Client Logo"
                  src={client.logo}
            
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

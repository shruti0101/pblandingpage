'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Clientele = () => {
  const clients = [
    "/clientele/arya.webp",
    "/clientele/barkat.webp",
    "/clientele/dpack.webp",
    "/clientele/ese.webp",
    "/clientele/exotic.webp",
    "/clientele/fullfun.webp",
    "/clientele/gaas.webp",
    "/clientele/iprint.webp",
      "/clientele/jeevan.webp",
        "/clientele/jsr.webp",
          "/clientele/K.s.webp",
            "/clientele/matrix.webp",
              "/clientele/Mk.webp",
              "/clientele/polyex.webp",
              "/clientele/proera.webp",
              "/clientele/rollick.webp",
              "/clientele/ruchita.webp",
               "/clientele/sbs.webp",
                "/clientele/skon.webp",
                 "/clientele/sparvit.webp",
                  "/clientele/well.webp",
  ];

  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-800">
          Our Clientele
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 mb-10 rounded"></div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000} // smooth continuous scroll
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {clients.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex items-center justify-center ">
                <img
                  src={src}
                  alt={`Client ${idx + 1}`}
                  className="max-h-34 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clientele;

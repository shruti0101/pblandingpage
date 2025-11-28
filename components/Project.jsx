"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper"; // ✅ core Swiper class
import { Autoplay, Pagination } from "swiper/modules"; // ✅ bring in modules
import "swiper/css";
import "swiper/css/pagination";

export default function CardCarousel() {
  const swiperRef = useRef(null);

  const slides = [
    { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323988/project1_tgq02h.webp", link: "https://matrixtissues.com/" },

    { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323988/project2_lhy3u3.webp", link: "http://sparvitsanitaryware.com/" },

    { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323991/project3_opn3en.webp", link: "https://sbsmachinery.in/" },

    { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323991/project4_zngy7c.webp", link: "https://cachintanagrawal.com/" },

    { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323993/project5_x54jbn.webp", link: "https://jsrglobalsales.com/" },

    { src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323993/project6_sewzxw.webp", link: "https://exoticcrate.com/" },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Autoplay, Pagination],
        loop: true,
        autoplay: { delay: 2000, disableOnInteraction: false },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 8,
        breakpoints: {
          768: { slidesPerView: 2 },
        },
      });
    }
  }, []);

  return (
    <div className="w-full relative mx-auto  my-9 px-9 ">
      {/* Heading */}
      <h2 className="text-3xl text-center leading-tight md:my-5 sm:text-4xl md:text-6xl font-extrabold mb-3">
        Our Projects
      </h2>

      {/* Decorative Line */}
      <div className="w-30 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded"></div>

      {/* Content under heading */}
      <p className="text-center max-w-3xl mx-auto text-sm md:text-xl text-black mb-10">
        Explore some of the amazing projects we’ve delivered for our clients.  
        From websites to digital solutions, our work reflects creativity, 
        performance, and results.
      </p>

      {/* Swiper Carousel */}
      <div ref={swiperRef} className="swiper">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide">
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-indigo-50   border-4 border-blue-900 h-full flex justify-center items-center shadow-md overflow-hidden rounded-lg">
                  <img
                    src={slide.src}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover "
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

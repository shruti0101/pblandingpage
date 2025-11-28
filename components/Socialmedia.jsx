"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper"; // ✅ core Swiper class for manual init
import { Autoplay, Pagination } from "swiper/modules"; // ✅ bring in modules
import "swiper/css";
import "swiper/css/pagination";


export default function CardCarousel() {
  const swiperRef = useRef(null);

  const slides = [
    [
      { id: 1, img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323993/social1_dh3ztq.webp", link: "https://exoticcrate.com/" },

      { id: 2, img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323994/social2_g5ofdz.webp", link: "https://www.instagram.com/ryka_restroom_cubicles/" },

      { id: 3, img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323994/social3_puzxiq.webp", link: "https://www.instagram.com/sparvit_sanitaryware/" },
    ],
    [
      { id: 4, img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323995/social4_m7uvhv.webp", link: "https://www.instagram.com/papyrusbymatrixtissues/" },

      { id: 5, img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323997/social5_qlfgcm.webp", link: "https://www.instagram.com/sbs_manufacturers/" },

      { id: 6, img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323996/social6_eewxdr.webp", link: "https://www.instagram.com/jsrglobalsales/" },
    ],
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
        spaceBetween: 20,
        breakpoints: {
          768: { slidesPerView: 3 },
        },
      });
    }
  }, []);

 return (

  <section className=" my-12 md:my-20">


  <div className="w-full relative max-w-7xl  mx-auto mb-5 px-10 md:px-0">
    <h2 className="text-3xl font-cinzel  text-center leading-tight my-6 sm:text-4xl md:text-5xl font-extrabold mb-3">
      Our Social Media <br /> Management Projects
    </h2>

    <div className="w-30 mb-7 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded"></div>

    {/* ✅ Added description */}
    <p className="text-center max-w-5xl mx-auto text-sm md:text-xl text-black mb-10">
      Take a look at some of the social media projects we have successfully managed for our clients.  
      From boosting brand presence to creating engaging content, our strategies deliver measurable results.
    </p>

    <div ref={swiperRef} className="swiper ">
      <div className="swiper-wrapper ">
        {slides.flat().map((slide) => (
          <div key={slide.id} className="swiper-slide">
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-indigo-50 border-3 border-blue-600 rounded-md h-full flex justify-center items-center shadow-md overflow-hidden">
                <img
                  src={slide.img}
                  alt={`Social ${slide.id}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="swiper-pagination mt-4"></div>
    </div>
  </div>
  </section>
);

}

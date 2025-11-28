"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const logos = [
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763098557/cropped-matrix-logo-Photoroom-2_pov8nn.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012515/client9_dnscbf.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012514/client8_itgctd.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012513/client7_rx3itv.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012511/client2_r6wne6.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012512/client5_zl3f4q.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763098935/exoticcrate_tzkahs.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012510/client1_uvcw9r.webp",
];

export default function Clientele() {
  return (
    <section className="relative  bg-gradient-to-b from-[#f0f8ff] via-white to-[#f5fbff] overflow-hidden">
    

      <div className="w-full mx-auto px-4 py-8 text-center">
        <h2 className="mb-4 font-bold text-2xl md:text-4xl cinzel tracking-wide">
          Our Premium Clients
        </h2>

              <div className="mx-auto mb-10  h-1 w-14 sm:w-16 bg-blue-600"></div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center">
                <div className="group w-full max-w-[180px] h-[110px] hover:shadow-2xl transition-all duration-500 flex items-center justify-center hover:-translate-y-2 ">
                  <img
                    src={logo}x
                    alt={`client-${i}`}
                    className="max-h-[80px] object-contain transition duration-500  "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Project from '@/components/Project';
import Newpopup from '@/components/Newpopup';
import { useState } from 'react';
import Whatsapp from '@/components/Whatsapp';
import Clientele from '@/components/Clientele';
const page = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);
const testimonials = [


  {
    name: "Rahul Sharma",
    role: "E-commerce Founder",
    text: "Outstanding performance marketing! Our ROAS improved significantly within just 2 months.",
  },
  {
    name: "Priya Verma",
    role: "Startup Owner",
    text: "Their SEO and PPC strategies helped us rank faster and generate quality leads.",
  },
  {
    name: "Amit Patel",
    role: "Brand Manager",
    text: "Very professional team with strong creative execution. Highly recommended!",
  },
];




  return (

    <>
    
    <div>
        <section className='bg-cover bg-center bg-no-repeat w-full h-[60vh] py-2' style={{backgroundImage:"url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764311163/10_1_ieb2bi.webp)"}}>




        </section>

    

      <Clientele></Clientele>






    {/* case studies */}

<div className="bg-[#e9f6ff] px-4 py-6">
  <h2 className="text-3xl font-semibold text-center mb-4">
    Case Studies
  </h2>

  <Swiper
    modules={[Pagination, Autoplay]}
    slidesPerView={1}
    spaceBetween={20}
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
  >

    {/* SLIDE 1 - TISSUE MANUFACTURER */}
    <SwiperSlide>
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <div className="flex justify-center mb-4">
          <img src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763098557/cropped-matrix-logo-Photoroom-2_pov8nn.webp" className="h-12" />
        </div>

        <p className="text-center text-sm text-gray-500 mb-6">
          Premium tissue paper manufacturer serving bulk & retail markets
        </p>

        <h4 className="text-blue-700 font-semibold mb-4">Results</h4>

        <div className="space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↗</span>
              <p className="font-bold text-lg">Leads: 1210%</p>
            </div>
            <p className="text-sm text-gray-600">
              Massive increase in wholesale and distributor enquiries
            </p>
            <hr className="mt-4" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↗</span>
              <p className="font-bold text-lg">Clicks: 980%</p>
            </div>
            <p className="text-sm text-gray-600">
              Improved visibility across high-intent keywords
            </p>
            <hr className="mt-4" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↘</span>
              <p className="font-bold text-lg">CPL: 41%</p>
            </div>
            <p className="text-sm text-gray-600">
              Reduced acquisition cost while scaling demand
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>


    {/* SLIDE 2 - EXOTIC CRATE (DATES SUPPLIER) */}
    <SwiperSlide>
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <div className="flex justify-center mb-4">
          <img src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763098935/exoticcrate_tzkahs.webp" className="h-12" />
        </div>

        <p className="text-center text-sm text-gray-500 mb-6">
          Premium importer & supplier of exotic dates and dry fruits
        </p>

        <h4 className="text-blue-700 font-semibold mb-4">Results</h4>

        <div className="space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↗</span>
              <p className="font-bold text-lg">Leads: 1540%</p>
            </div>
            <p className="text-sm text-gray-600">
              Surge in B2B enquiries from premium retailers
            </p>
            <hr className="mt-4" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↗</span>
              <p className="font-bold text-lg">Clicks: 1125%</p>
            </div>
            <p className="text-sm text-gray-600">
              High engagement from luxury food buyers
            </p>
            <hr className="mt-4" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↘</span>
              <p className="font-bold text-lg">CPL: 38%</p>
            </div>
            <p className="text-sm text-gray-600">
              Efficient targeting reduced cost per enquiry
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>


    {/* SLIDE 3 - BAR BENDING MACHINE MANUFACTURER */}
    <SwiperSlide>
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <div className="flex justify-center mb-4">
          <img src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764307764/logo_u3l0t3.webp" className="h-12" />
        </div>

        <p className="text-center text-sm text-gray-500 mb-6">
          Heavy-duty bar bending machine manufacturer for construction sector
        </p>

        <h4 className="text-blue-700 font-semibold mb-4">Results</h4>

        <div className="space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↗</span>
              <p className="font-bold text-lg">Leads: 1890%</p>
            </div>
            <p className="text-sm text-gray-600">
              Major rise in contractor & infrastructure leads
            </p>
            <hr className="mt-4" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↗</span>
              <p className="font-bold text-lg">Clicks: 1435%</p>
            </div>
            <p className="text-sm text-gray-600">
              Strong engagement from industrial buyers
            </p>
            <hr className="mt-4" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↘</span>
              <p className="font-bold text-lg">CPL: 44%</p>
            </div>
            <p className="text-sm text-gray-600">
              Improved ROI through optimized ad campaigns
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>


    {/* SLIDE 4 - PET BOTTLE MANUFACTURER */}
    <SwiperSlide>
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <div className="flex justify-center mb-4">
          <img src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764307764/logo-shree-balaji_fbdceh.webp" className="h-12" />
        </div>

        <p className="text-center text-sm text-gray-500 mb-6">
          PET bottle manufacturer for beverage & FMCG industries
        </p>

        <h4 className="text-blue-700 font-semibold mb-4">Results</h4>

        <div className="space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↗</span>
              <p className="font-bold text-lg">Leads: 1620%</p>
            </div>
            <p className="text-sm text-gray-600">
              Increased demand from manufacturers & distributors
            </p>
            <hr className="mt-4" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↗</span>
              <p className="font-bold text-lg">Clicks: 1308%</p>
            </div>
            <p className="text-sm text-gray-600">
              Growth in high-value enquiry traffic
            </p>
            <hr className="mt-4" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600 text-xl">↘</span>
              <p className="font-bold text-lg">CPL: 36%</p>
            </div>
            <p className="text-sm text-gray-600">
              Lowered costs while scaling production leads
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>

  </Swiper>
</div>


{/* industy */}
   <section className="w-full flex flex-col gap-4 bg-stone-100 pb-3">

      {/* Heading */}
      <div className="text-center py-2">
        <h2 className="text-[#155DFC] text-3xl font-semibold ">
          Industry Specific
        </h2>
        <h3 className="text-[#155DFC] text-3xl ">
          Expertise
        </h3>
      </div>

      {/* CARD 1 */}
      <div className="mx-3 bg-black border border-gray-700 rounded-md overflow-hidden ">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764234593/d2c_icglwy.webp"
            alt="D2C Performance"
            className="w-full h-[220px] object-cover "
          />
  <div className='absolute inset-0 bg-black/70'></div>
          {/* Overlay Text */}
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-white font-semibold text-sm leading-snug">
              Performance for
            </h4>
            <h4 className="text-white font-bold text-base">
              D2C & E-commerce
            </h4>

            <button     onClick={() => setIsFormOpen(true)} className="mt-2 border-2 border-[#155DFC] text-white text-xs px-3 py-1">
              EXPLORE
            </button>
          </div>
        </div>
      </div>


      {/* CARD 2 */}
      <div className="mx-3 bg-black border border-gray-700 rounded-md overflow-hidden">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764234604/2_p6iide.webp"
            alt="Social Commerce"
            className="w-full h-[220px] object-cover  "
          />

            <div className='absolute inset-0 bg-black/70'></div>

         {/* Overlay Text */}
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-white font-semibold text-sm leading-snug">
              Performance for
            </h4>
            <h4 className="text-white font-bold text-base">
              D2C & E-commerce
            </h4>

            <button  onClick={() => setIsFormOpen(true)} className="mt-2 border-2 border-[#155DFC] text-white text-xs px-3 py-1">
              EXPLORE
            </button>
          </div>
        </div>
      </div>

            {/* CARD 3 */}
      <div className="mx-3 bg-black border border-gray-700 rounded-md overflow-hidden">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764234592/3_imalr9.webp"
            alt="Social Commerce"
            className="w-full h-[220px] object-cover "
          />
  <div className='absolute inset-0 bg-black/70'></div>
            {/* Overlay Text */}
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-white font-semibold text-sm leading-snug">
              Performance for
            </h4>
            <h4 className="text-white font-bold text-base">
              D2C & E-commerce
            </h4>

            <button  onClick={() => setIsFormOpen(true)} className="mt-2 border-2 border-[#155DFC] text-white text-xs px-3 py-1">
              EXPLORE
            </button>
          </div>
        </div>
      </div>

            {/* CARD 4 */}
      <div className="mx-3 bg-black border border-gray-700 rounded-md overflow-hidden">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764234592/4_or5dls.webp"
            alt="Social Commerce"
            className="w-full h-[220px] object-cover "

          />
            <div className='absolute inset-0 bg-black/70'></div>

         {/* Overlay Text */}
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-white font-semibold text-sm leading-snug">
              Performance for
            </h4>
            <h4 className="text-white font-bold text-base">
              D2C & E-commerce
            </h4>

            <button  onClick={() => setIsFormOpen(true)} className="mt-2 border-2 border-[#155DFC] text-white text-xs px-3 py-1">
              EXPLORE
            </button>
          </div>
        </div>
      </div>

                 {/* CARD 5 */}
      <div className="mx-3 bg-black border border-gray-700 rounded-md overflow-hidden">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764234593/5_mbhdcf.webp"
            alt="Social Commerce"
            className="w-full h-[220px] object-cover "
          />
  <div className='absolute inset-0 bg-black/70'></div>
        {/* Overlay Text */}
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-white font-semibold text-sm leading-snug">
              Performance for
            </h4>
            <h4 className="text-white font-bold text-base">
              D2C & E-commerce
            </h4>

            <button  onClick={() => setIsFormOpen(true)} className="mt-2 border-2 border-[#155DFC] text-white text-xs px-3 py-1">
              EXPLORE
            </button>
          </div>
        </div>
      </div>



                 {/* CARD 6 */}
      <div className="mx-3 bg-black border border-gray-700 rounded-md overflow-hidden">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764234593/6_is23hy.webp"
            alt="Social Commerce"
            className="w-full h-[220px] object-cover "
          />

          <div className='absolute inset-0 bg-black/70'></div>

            {/* Overlay Text */}
          <div className="absolute bottom-3 left-3 right-3">
            <h4 className="text-white font-semibold text-sm leading-snug">
              Performance for
            </h4>
            <h4 className="text-white font-bold text-base">
              D2C & E-commerce
            </h4>

            <button  onClick={() => setIsFormOpen(true)} className="mt-2 border-2 border-[#155DFC] text-white text-xs px-3 py-1">
              EXPLORE
            </button>
          </div>
        </div>
      </div>



    </section>


{/* services */}

 <section className="w-full bg-gradient-to-b from-[#f4f7fb] to-[#e6e6e6] pb-10">

  {/* Heading */}
  <div className="text-center py-6">
    <h2 className="text-[#155DFC] text-2xl font-bold tracking-wide">
      360° Performance
    </h2>
    <h3 className="text-[#155DFC] text-2xl font-bold">
      Solutions
    </h3>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 relative">


    {/* PREMIUM CARD TEMPLATE */}
    {[
      {
        title: "PPC",
        desc: "We build trust and visibility with ROI-focused paid campaigns.",
        icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764237293/ppc_dt7iq4.webp",
        link: "https://promozionebranding.com/services/google-adword-ppc-services"
      },
      {
        title: "Website Development",
        desc: "websites built for speed, growth & performance.",
        icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764237293/webdev_ctrpon.webp",
        link: "https://promozionebranding.com/services/b2b-web-development-services"
      },
      {
        title: "SEO",
        desc: "Proven SEO strategies to rank higher and drive organic traffic.",
        icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764237293/seo_fhduad.webp",
        link: "https://promozionebranding.com/services/digital-marketing-services"
      },
      {
        title: "Branding",
        desc: "Powerful visual identities that make your brand unforgettable.",
        icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764237293/brand_aprypv.webp",
        link: "https://promozionebranding.com/services/b2b-marketing-services"
      },
      {
        title: "Google Maps & Listings",
        desc: "Local SEO optimisation to dominate maps and local searches.",
        icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764237293/google_rahap6.webp",
        link: "https://promozionebranding.com/services/digital-marketing-services"
      },
      {
        title: "Social Media Management",
        desc: "Content strategies that turn followers into loyal customers.",
        icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764237293/smm_lfk80y.webp",
        link: "https://promozionebranding.com/services/social-media-marketing"
      }
    ].map((card, index) => (
      <div key={index}>

        <Link href={card.link}>
          <div className="bg-white rounded-2xl p-2 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">

            {/* Subtle premium glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#155DFC10] to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            {/* Icon */}
            <div className="flex justify-center mb-2">
              <div className="w-14 h-14 rounded-full  flex items-center justify-center">
                <img src={card.icon} alt={card.title} className="h-14 w-14 object-contain" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#1a1a3c] mb-1 tracking-wide">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              {card.desc}
            </p>

            {/* CTA */}
            <span className="inline-block bg-[#155dfc] text-white text-xs px-6 py-2 rounded-full tracking-wide group-hover:bg-[#155DFC] transition">
              Explore →
            </span>
          </div>
        </Link>

     <div className="h-1.5 absolute bg-[#155DFC]  rounded-full "></div>

      </div>
    ))}
  </div>
</section>


{/* testimonials */}

 <section
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1764238778/performance_vxihcr.webp')",
  }}
  className="w-full relative bg-cover bg-center min-h-[50vh] py-10 px-4"
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content Wrapper */}
  <div className="relative z-10">
    <div className="text-center mb-6">
      <h2 className="text-white text-2xl font-semibold">
        What Our Clients Say
      </h2>
    </div>

    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="pb-8"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className=" border border-white rounded-2xl shadow-xl p-8 text-center max-w-sm mx-auto">
            
            {/* Avatar */}
            <div className="mb-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#155DFC]/20 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {item.name.charAt(0)}
                </span>
              </div>
            </div>

            {/* Testimonial */}
            <p className="text-white text-sm leading-relaxed mb-4">
              “{item.text}”
            </p>

            <h4 className="font-semibold text-white">
              {item.name}
            </h4>
            <span className="text-xs text-gray-300">
              {item.role}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>









    </div>





{/* project cards */}

<Project></Project>



{/* certificates */}


    <section className=' flex pt-3'>
            <Image src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763013962/Your_cwlz9a.webp" alt="Performance Marketing" width={200} height={200} >

            </Image>

            <Image src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763013962/Your_1_qohgd9.webp" alt="Performance Marketing"  width={200} height={200} >

            </Image>
        </section>



{/* bottom buttons */}
 <div className="fixed bottom-0 left-0 w-full z-50">
        <div className="flex">

          {/* CALL BUTTON */}
          <a href="tel:+917221848327"
            className="w-1/2 text-center py-3 text-base font-semibold text-white bg-blue-700 hover:bg-blue-700 transition"
          >
            Call us
          </a>

          {/* ENQUIRE BUTTON */}
          <button
           onClick={() => setIsFormOpen(true)}
            className="w-1/2 cursor-pointer text-base text-center py-3 font-semibold text-black bg-white hover:bg-gray-100 border-l border-gray-300 transition"
          >
            Enquire now
          </button>

        </div>
      </div>
 

      {isFormOpen && (
        <Newpopup
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}

      <Whatsapp></Whatsapp>
    </>
  )
}

export default page
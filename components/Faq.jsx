// src/components/FaqSection.jsx
"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    title: "Why is Promozione Branding considered one of the best digital marketing agencies in India?",
    content:
      "Promozione Branding is recognized as one of India’s most trusted digital marketing agencies because we deliver customized strategies that drive measurable results. Our expertise spans SEO (Search Engine Optimization Services), Social Media Marketing (SMM), Pay-Per-Click (PPC), Lead Generation, Web Development, and Performance Branding. By combining innovation with proven marketing tactics, we help businesses across India increase their online visibility, boost engagement, and achieve higher conversions.",
  },
  {
    title: "How does Promozione Branding help Indian businesses grow online?",
    content:
      "As a leading Indian digital marketing agency, we focus on data-driven strategies such as SEO, targeted social media campaigns, and paid advertising (Google Ads, Facebook Ads, Instagram Ads, and more). We ensure businesses across India gain maximum online exposure and connect with the right audience effectively.",
  },
  {
    title: "What industries do you serve in India?",
    content:
      "Our expertise spans multiple industries, including real estate, healthcare, e-commerce, education, IT, finance, retail, manufacturing, and startups. As a trusted digital marketing company in India, we craft tailored strategies that align with industry trends and audience behavior within the Indian market.",
  },
  {
    title: "What makes your SEO strategies unique compared to other agencies in India?",
    content:
      "Unlike many agencies, we take a data-first approach to SEO, incorporating keyword research, competitor analysis, technical SEO, and on-page and off-page optimization. We aim to rank businesses higher in competitive Indian markets, driving consistent traffic and quality leads.",
  },
  {
    title: "Can you improve my business’s local search ranking in India?",
    content:
      "Yes! We specialize in local SEO for Indian businesses. Whether you’re targeting Delhi, Mumbai, Bangalore, or any other city, we optimize Google Business Profiles, local citations, and geo-targeted keywords to improve visibility in local searches and Google Maps listings.",
  },
  {
    title: "How does Promozione Branding measure success for Indian clients?",
    content:
      "We track performance using Google Analytics, keyword ranking reports, lead conversion rates, and engagement metrics. Our transparent, data-driven reporting helps businesses in India evaluate campaign effectiveness and make informed decisions for growth.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="absolute top-5 left-5 w-32 h-32 rounded-xl bg-blue-500/20 shadow-md blur-md"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 rounded-xl bg-blue-500/20 shadow-md blur-md"></div>
          <Image
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1732323991/faq_ujdn6o.webp"
            alt="Frequently Asked Questions Illustration"
            width={500}
            height={500}
            className="relative z-10 rounded-xl md:max-w-md object-cover"
          />
        </div>

        {/* Right FAQ Section */}
        <div>
          <h2 className="text-3xl md:text-4xl mb-6 font-bold text-blue-600 text-center md:text-left">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-3">
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <span className="font-semibold text-gray-800 flex items-center">
                    <span className="text-blue-600 mr-2">Q.</span> {faq.title}
                  </span>
                  {openIndex === index ? (
                    <Minus className="text-blue-600 w-5 h-5" />
                  ) : (
                    <Plus className="text-blue-600 w-5 h-5" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-black leading-relaxed">
                    {faq.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

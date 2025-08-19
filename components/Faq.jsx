// src/components/FaqSection.jsx
"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    title: " Why is Promozione Branding considered one of the best digital marketing agencies in the USA, UK, and UAE?",
    content:
      "A1: Promozione Branding is recognized globally as a trusted digital marketing agency because we deliver customized strategies that drive measurable results. Our expertise spans SEO (Search Engine Optimization Services), Social Media Marketing (SMM), Pay-Per-Click (PPC), Lead Generation, Web Development, and Performance Branding. By combining innovation with proven marketing tactics, we help businesses in the United States, United Kingdom, United Arab Emirates, and across the globe increase their online visibility, boost engagement, and achieve higher conversions.",
  },
  {
    title: "How does Promozione Branding help businesses grow online internationally?",
    content:
      "A2: As a global digital marketing agency, we focus on data-driven strategies such as SEO, targeted social media campaigns, and paid advertising (Google Ads, Facebook Ads, Instagram Ads, and more). We ensure businesses in the USA, UK, UAE, and beyond gain maximum online exposure and connect with the right audience effectively.",
  },
  {
    title: " What industries do you serve in the USA?",
    content:
      "A3: Our expertise spans multiple industries, including real estate, healthcare, e-commerce, education, IT, finance, retail, manufacturing, and startups. As a trusted international digital marketing company, we craft tailored strategies that align with industry trends and audience behavior in global markets.",
  },
  {
    title: " What makes your SEO strategies unique compared to other international agencies?",
    content:
      "A4: Unlike many agencies, we take a data-first approach to SEO, incorporating keyword research, competitor analysis, technical SEO, on-page and off-page optimization, and international SEO strategies. We aim to rank businesses higher in competitive markets across the USA, UK, UAE, and worldwide.",
  },
  {
    title: " Can you improve my business’s local search ranking in the USA, UK, or UAE?",
    content:
      "A5: Yes! We specialize in both local and international SEO. Whether you’re targeting New York, London, Dubai, or any other city, we optimize Google Business Profiles, local citations, and geo-targeted keywords to improve visibility in local searches and Google Maps listings.",
  },
  {
    title: " How does Promozione Branding measure success for international clients?",
    content:
      "A6: We track performance using Google Analytics, keyword ranking reports, lead conversion rates, and engagement metrics. Our transparent, data-driven reporting helps businesses in the USA, UK, UAE, and other markets evaluate campaign effectiveness and make informed decisions for growth.",
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
        <div className="relative flex justify-center">
          <div className="absolute top-5 left-5 w-32 h-32 rounded-xl bg-blue-500 shadow-md"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 rounded-xl bg-blue-500 shadow-md"></div>
          <img
            src="/faq.webp"
            alt="FAQ Banner"
            className="relative z-10 rounded-xl md:max-w-md object-cover"
          />
        </div>

        {/* Right FAQ Section */}
        <div>
          <h2 className="text-3xl mb-5 font-bold text-blue-600 text-center md:text-left">
            FREQUENTLY ASKED QUESTIONS
          </h2>
       
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-3">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left"
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
                  <p className="mt-2 text-gray-600">{faq.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

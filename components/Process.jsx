"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Process = () => {
  const steps = [
    {
      image: "/approach/image1.jpg",
      id: 1,
      title: "Research & Discovery",
      desc: "We begin by understanding your business inside out — your brand, values, audience, competitors, and unique strengths. By asking the right questions and gathering insights, we uncover opportunities and build a clear, data-driven roadmap. This ensures every strategy aligns with your goals, resonates with your audience, and drives measurable success.",
    },

    {
      image: "/approach/image2.webp",
      id: 2,
      title: "Collaborative Planning",
      desc: "After finalizing the strategy, we create detailed mock-ups to visualize the project before execution. With your feedback at every step, we refine layouts, content, and functionality to ensure everything aligns with your brand and goals — giving you a clear preview and confidence in the final outcome.",
    },
    {
      image: "/approach/image3.webp",
      id: 3,
      title: "Design & Build",
      desc: "With your approval, we turn ideas into reality — blending creative design, smooth functionality, and strong performance. Through regular updates and feedback, we refine every detail to deliver a polished, high-quality result that looks great and drives real business impact.",
    },
    {
      image: "/approach/image4.webp",
      id: 4,
      title: "Live Reporting",
      desc: "Our 24/7 dashboards give you instant access to key metrics — from traffic and engagement to sales growth. Easy to use and always up to date, they provide clear insights to guide smarter decisions and keep you ahead of the competition.",
    },
    {
      image: "/approach/image5.webp",
      id: 5,
      title: "Return on Investment",
      desc: "We focus on delivering measurable results — from increased sales and quality leads to stronger ROI. Beyond execution, we continuously monitor, refine, and optimize strategies to sustain and accelerate your business growth.We track every outcome closely, making sure your investment works harder.As your brand presence grows, so does your customer base and revenue.Our goal: long-term success, not just short-term wins.",
    },
  ];

  const [activeId, setActiveId] = useState(1);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-6">
      {/* Background Text */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <h1 className="text-[60px] lg:text-[90px] font-extrabold tracking-widest bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text opacity-[0.08] whitespace-nowrap">
          OUR PROCESS
        </h1>
      </div>

      {/* Heading */}
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
          Our Process
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          We created a 5-step process to ensure an excellent service for every
          business we work with.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center relative z-10">
        {/* Text */}
        <div className="w-full md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-indigo-600">
                {steps[activeId - 1].title}
              </h2>
              <p className="text-gray-700  leading-relaxed text-sm sm:text-base">
                {steps[activeId - 1].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={steps[activeId - 1].image}
              src={steps[activeId - 1].image}
              alt={steps[activeId - 1].title}
              className="rounded-xl max-w-full sm:max-w-md  h-auto object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Timeline Navigation */}
  <div className="flex flex-wrap justify-center  sm:gap-6 mt-5 sm:mt-14 relative z-10 px-2">
  {steps.map((step) => (
    <div
      key={step.id}
      className={`flex flex-col items-center w-1/5 xs:w-1/5 sm:w-auto cursor-pointer group transition ${
        activeId === step.id
          ? "scale-105"
          : "opacity-75 hover:opacity-100"
      }`}
      onClick={() => setActiveId(step.id)}
    >
      {/* Thumbnail */}
      <div
        className={`w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shadow-md border-2 transition ${
          activeId === step.id
            ? "border-transparent ring-2 ring-indigo-500"
            : "border-gray-200"
        }`}
      >
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Step Title */}
      <p
        className={`mt-2 text-[10px] xs:text-xs sm:text-sm font-medium text-center leading-tight transition ${
          activeId === step.id ? "text-indigo-600" : "text-gray-600"
        }`}
      >
        {step.title}
      </p>

      {/* Animated underline */}
      {activeId === step.id && (
        <motion.div
          layoutId="activeStep"
          className="h-[2px] sm:h-[3px] w-5 sm:w-8 bg-gradient-to-r from-blue-500 to-purple-500 mt-1 rounded-full"
        />
      )}
    </div>
  ))}
</div>

    </section>
  );
};

export default Process;

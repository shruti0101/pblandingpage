"use client";

import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Research & Discovery",
    desc: `We begin by diving deep into understanding your business ecosystem — your brand’s core identity, values, target audience, and market competitors. 
    Through thorough research and insightful discussions, we identify your unique selling points and discover untapped opportunities. 
    This phase helps us establish a strong foundation by analyzing customer behavior, market trends, and key performance indicators. 
    The result is a clear, data-backed strategy that drives every decision moving forward.`,
  },
  {
    id: 2,
    title: "Collaborative Planning",
    desc: `Once the research phase is complete, we collaborate closely with your team to translate findings into actionable strategies. 
    This includes setting clear objectives, defining success metrics, and mapping out timelines for seamless execution. 
    We create detailed wireframes or mockups that help you visualize the structure and flow of your project before development begins. 
    Every decision is made collaboratively — ensuring the outcome aligns perfectly with your brand voice and long-term business vision.`,
  },
  {
    id: 3,
    title: "Design & Build",
    desc: `With the strategy and plan finalized, our creative and technical experts come together to bring ideas to life. 
    Our design team focuses on aesthetics, usability, and brand consistency — crafting interfaces that not only look great but also perform flawlessly. 
    Meanwhile, our developers ensure functionality, scalability, and speed are top-notch. 
    From responsive layouts to robust backend systems, every component is built with precision, ensuring a seamless experience across all devices.`,
  },
  {
    id: 4,
    title: "Live Reporting",
    desc: `Transparency is at the heart of our process. Once your project goes live, we set up interactive dashboards and performance tracking tools to provide you with real-time insights. 
    From user engagement metrics to conversion trends, every key indicator is monitored closely. 
    You’ll have 24/7 access to reports that empower smarter business decisions, highlight growth opportunities, and ensure accountability at every stage.`,
  },
  {
    id: 5,
    title: "Return on Investment",
    desc: `Our ultimate goal is to deliver measurable, long-term results. 
    We continuously evaluate campaign performance and fine-tune strategies for maximum effectiveness. 
    Whether it’s boosting lead generation, increasing conversions, or enhancing customer retention, every improvement contributes directly to your bottom line. 
    This iterative optimization process ensures your investment continues to deliver value — creating sustained growth and a powerful return on investment.`,
  },
];

export default function Process() {
  const [activeId, setActiveId] = useState(1);
  const activeStep = steps.find((step) => step.id === activeId);

  return (
    <section className="bg-gray-100 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
            Our Process
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 mb-4 rounded"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            A comprehensive 5-step approach crafted to deliver measurable growth
            and long-term success.
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-8 sm:mb-10">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveId(step.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full border text-sm sm:text-base font-medium transition-all duration-200
              ${
                activeId === step.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                  : "bg-white border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              <span
                className={`flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full ${
                  activeId === step.id
                    ? "bg-white text-blue-600"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {step.id}
              </span>
              {step.title}
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-md transition-all duration-300 hover:shadow-xl">
          <h2 className="text-xl sm:text-3xl font-bold text-[#1C398E] mb-4 text-center sm:text-left">
            {activeStep.title}
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-lg whitespace-pre-line text-center sm:text-left">
            {activeStep.desc}
          </p>
        </div>
      </div>
    </section>
  );
}

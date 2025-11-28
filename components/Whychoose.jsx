"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

// Move static lists outside the component so they aren't recreated on every render
const HIGHLIGHT_ITEMS = [
  "Get Ranked on Google in 6 Months – Guaranteed!",
  "Qualified Leads in Just 7 Days – No Waiting!",
  "360° Digital Solutions – From Website to Google Ads",
  "Dedicated Project Manager – Your personal growth partner",
  "100% Transparent Reporting – Know where every penny goes",
  "Turning SMEs into digital powerhouses without breaking the bank",
];

const STATS = [
  { number: 6, suffix: "m", label: "Rank on Google", sub: "Months - Guaranteed" },
  { number: 200, suffix: "+", label: "Industries Served", sub: "Optimized Campaign Execution" },
  { number: 360, suffix: "°", label: "Digital Services", sub: "Full Funnel Marketing" },
  { number: 100, suffix: "%", label: "Transparent Reports", sub: "% Visibility" },
];

export default function WhyChooseUs() {
  // Track when stats enter viewport so we only run CountUp then
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStatsInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  // Memoize mapped lists to avoid re-creating during renders
  const highlightList = useMemo(
    () =>
      HIGHLIGHT_ITEMS.map((item, i) => (
        <li
          key={i}
          className={`flex items-start gap-3 p-2 rounded-lg transition-all ${
            i === 0 ? "bg-blue-50 border-l-4 border-blue-600 shadow-sm" : "hover:bg-gray-50"
          }`}
        >
          <span className={`text-xl ${i === 0 ? "text-blue-600" : "text-green-500"}`}>✅</span>
          <span className={`${i === 0 ? "text-blue-900 font-semibold" : "text-black"}`}>{item}</span>
        </li>
      )),
    []
  );

  const statsCards = useMemo(
    () =>
      STATS.map((stat, i) => (
        <div
          key={i}
          className="bg-[#E7F0FF] p-4 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100 text-center"
        >
          <h4 className="text-3xl font-bold text-blue-600">
            {statsInView ? (
              <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
            ) : (
              `0${stat.suffix}`
            )}
          </h4>
          <p className="font-semibold text-gray-800">{stat.label}</p>
          <p className="text-gray-500 text-sm">{stat.sub}</p>
        </div>
      )),
    [statsInView]
  );

  return (
    <>
      <section className="bg-gradient-to-b from-green to-blue-50 py-5 md:py-10 px-9">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
          {/* Left Content */}
          <div>
            {/* Heading */}
            <h2 className="text-4xl font-cinzel md:text-5xl font-extrabold text-gray-900">
              Why Choose <span className="text-blue-600">Us?</span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl">
              We know what you're thinking — “Every agency makes big claims, why
              should I trust Promozione?”
            </p>

            <p className="mt-2 text-gray-600 max-w-xl">
              We don’t just make promises — we deliver{" "}
              <span className="font-semibold text-blue-600">100% Guaranteed Digital Success</span>.
            </p>

            {/* Highlight Box */}
            <div className="mt-6 bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-600">100% GUARANTEED DIGITAL SUCCESS</h3>
              <p className="text-black mt-2">Here’s why we’re different — we don’t just promise results.</p>

              <ul className="mt-4 text-left space-y-3">{highlightList}</ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center ">
            <div className="relative w-full max-w-lg">
              {/* lazy-load gif; consider replacing with optimized video or Lottie for much better perf */}
              <Image width={100} height={100} src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323998/android_n422oz.gif" alt="Android Animation" className="w-full" loading="lazy" decoding="async" />
              <div className="absolute inset-0 rounded-2xl bg-blue-200/30 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsCards}
        </div>
      </section>
    </>
  );
}
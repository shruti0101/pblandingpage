'use client'

import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuKey) => {
    if (window.innerWidth < 992) {
      setOpenMenus((prev) => ({
        ...prev,
        [menuKey]: !prev[menuKey],
      }));
    }
  };

  const renderDropdown = (key, title, items) => (
    <div className="w-full sm:w-1/2 lg:w-[18%] mb-6">
      <div
        className="flex justify-between items-center cursor-pointer lg:cursor-default"
        onClick={() => toggleMenu(key)}
      >
        <h3 className="text-[16px] font-bold text-white border-b-[3px] border-[#2548BD] pb-[5px]">
          {title}
        </h3>
        <span className="lg:hidden text-gray-300 ml-2 text-sm">
          {openMenus[key] ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      <ul
        className={`mt-3 space-y-2 ${
          openMenus[key] ? "block" : "hidden lg:block"
        }`}
      >
        {items.map((label, index) => (
          <li
            key={index}
            className="text-[14px] text-white transition-all duration-300 hover:translate-x-1 hover:text-[#0D6EFD]"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[#0B1720] text-white font-['Mona_Sans',sans-serif] px-5 md:px-10 py-10 text-[10px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Footer */}
        <div className="flex flex-wrap justify-between border-b border-gray-700 pb-10">
          {renderDropdown("web", "Website Development", [
            "B2B Web Development",
            "Custom Web Development",
            "PHP Website Development",
            "CMS Web Development",
            "React Web Development",
            "Shopify Web Designing",
            "SEO Web Designing",
            "Website Redesigning",
            "Landing Page Design",
            "Web Application Development",
            "WordPress Website",
          ])}

          {renderDropdown("revenue", "Revenue Marketing & CRO", [
            "B2B Lead Generation",
            "B2B Marketing",
            "B2C Marketing",
            "D2C Marketing",
            "AI Performance Marketing Services",
            "Ads Management",
            "Internet Marketing",
            "Demand Generation",
            "Performance Marketing",
            "AI SEO Services",
            "Enterprise SEO Services",
          ])}

          {renderDropdown("digital", "Digital Marketing", [
            "Content Marketing",
            "CRM Optimizations",
            "Email Marketing",
            "Video Marketing",
            "Microsoft/Bing Ads",
            "Google AdWords/PPC",
            "SMO",
            "SMM",
          ])}

          {renderDropdown("company", "Company Profile", [
            "Our Approach",
            "Who We Are",
            "Blogs",
            "Client Reviews",
            "Career",
            "Contact Us",
          ])}

       {renderDropdown("policies", "Policies", [
  <a
    key="privacy"
    href="https://promozionebranding.com/policies/privacy-policy"
    target="_blank"
    rel="noopener noreferrer"
  >
    Privacy Policy
  </a>,
  <a
    key="terms"
    href="https://promozionebranding.com/policies/terms&conditions"
    target="_blank"
    rel="noopener noreferrer"
  >
    Terms and Conditions
  </a>,
])}

        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-6 mt-8 mb-6 border-b border-gray-700 pb-6">
          {/* Phone */}
          <div className="flex items-start gap-4 flex-1">
            <FaPhone className="text-[#2548BD] text-2xl mt-1" />
            <div>
              <h5 className="text-[16px] font-semibold">+917221848327</h5>
              <p className="text-[13px] text-gray-400">
                Mon–Sat 9:30AM–6:30PM
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 flex-1">
            <FaEnvelope className="text-[#2548BD] text-2xl mt-1" />
            <div>
              <h5 className="text-[16px] font-semibold">
                info@promozionebranding.com
              </h5>
              <p className="text-[13px] text-gray-400">Online support</p>
            </div>
          </div>

          {/* Office 1 */}
          <div className="flex items-start gap-4 flex-1">
            <FaMapMarkerAlt className="text-[#2548BD] text-2xl mt-1" />
            <div>
              <h5 className="text-[16px] font-semibold">
                Promozione Branding Private Limited
              </h5>
              <p className="text-[13px] text-gray-400">
                Vardhman Plaza, Sector-3, Rohini, New Delhi
              </p>
            </div>
          </div>

          {/* Office 2 */}
          <div className="flex items-start gap-4 flex-1">
            <FaMapMarkerAlt className="text-[#2548BD] text-2xl mt-1" />
            <div>
              <h5 className="text-[16px] font-semibold">
                Promozione Branding Private Limited
              </h5>
              <p className="text-[13px] text-gray-400">
             Huda Market, Sector-56
Gurugram, Haryana - 122002
              </p>
            </div>
          </div>

          {/* Office 3 */}
          <div className="flex items-start gap-4 flex-1">
            <FaMapMarkerAlt className="text-[#2548BD] text-2xl mt-1" />
            <div>
              <h5 className="text-[16px] font-semibold">
                Promozione Branding Private Limited
              </h5>
              <p className="text-[13px] text-gray-400">
             Tower C, Bhutani Alphatum
Sector 90, Noida (U.P.)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t-2 border-[#2548BD] pt-5 text-center text-[14px]">
          <a href="https://www.promozionebranding.com/">
            © 2025 Promozione Branding Private Limited. All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

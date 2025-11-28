"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import Enquire from './Enquire'
 
import {
  LiaAngleDownSolid,
  LiaAngleUpSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";

export default function Navbar() {
  const [dropdownStates, setDropdownStates] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
   const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (name) => {
    setDropdownStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    setDropdownStates({});
  };

  const renderIcon = (name) =>
    dropdownStates[name] ? (
      <LiaAngleUpSolid className="ml-1 text-sm" />
    ) : (
      <LiaAngleDownSolid className="ml-1 text-sm" />
    );

  // ✅ External link dropdown item
  const renderDropdownItem = (label, href) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
    >
      {label}
      <LiaLongArrowAltRightSolid className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );

  const menuItems = [
    {
      name: "company",
      label: "Company Profile",
      items: [
        { label: "Our Approach", href: "https://promozionebranding.com/profile/OurApproach" },
        { label: "Who We Are", href: "https://promozionebranding.com/profile/whoweare" },
        // { label: "Blogs", href: "https://promozionebranding.com/blogs" },
        { label: "Client Reviews", href: "https://promozionebranding.com/profile/reviews" },
        { label: "Career", href: "https://promozionebranding.com/profile/career" },
        { label: "Contact Us", href: "https://promozionebranding.com/profile/Contact" },
      ],
    },
    {
      name: "website",
      label: "Website Development",
      items: [
        { label: "B2B Web Development", href: "https://promozionebranding.com/services/b2b-web-development-services" },
        { label: "Custom Web Development", href: "https://promozionebranding.com/services/custom-web-development-services" },
        { label: "PHP Website Development", href: "https://promozionebranding.com/services/php-website-development-services" },
        { label: "CMS Web Development", href: "https://promozionebranding.com/services/cms-web-development-services" },
        { label: "React Web Development", href: "https://promozionebranding.com/services/react-web-development-services" },
        { label: "Shopify Web Designing", href: "https://promozionebranding.com/services/shopify-web-designing-services" },
        { label: "SEO Web Designing", href: "https://promozionebranding.com/services/seo-web-designing-services" },
        { label: "Website Redesigning", href: "https://promozionebranding.com/services/website-redesigning-services" },
        { label: "Landing Page Design", href: "https://promozionebranding.com/services/landing-page-design-services" },
        { label: "Web Application Development", href: "https://promozionebranding.com/services/web-application-development-services" },
        { label: "WordPress Website", href: "https://promozionebranding.com/services/wordpress" },
      ],
    },
    {
      name: "revenue",
      label: "Revenue Marketing & CRO",
      items: [
        { label: "B2B Marketing", href: "https://promozionebranding.com/services/b2b-marketing-services" },
        { label: "B2C Marketing", href: "https://promozionebranding.com/services/b2c-marketing-services" },
        { label: "D2C Marketing", href: "https://promozionebranding.com/services/d2c-marketing-services" },
        { label: "AI Performance Marketing", href: "https://promozionebranding.com/services/ai-performance-marketing-services" },
        { label: "Ads Management", href: "https://promozionebranding.com/services/ads-management-services" },
        { label: "Internet Marketing", href: "https://promozionebranding.com/services/internet-marketing-services" },
        { label: "Demand Generation", href: "https://promozionebranding.com/services/demand-generation-services" },
        { label: "Performance Marketing", href: "https://promozionebranding.com/services/performance-marketing-services" },
      ],
    },
    {
      name: "digital",
      label: "Digital Marketing",
      items: [
        { label: "Content Marketing", href: "https://promozionebranding.com/services/content-marketing-services" },
        { label: "CRM Optimizations", href: "https://promozionebranding.com/services/crm-optimizations-services" },
        { label: "Email Marketing", href: "https://promozionebranding.com/services/email-marketing-services" },
        { label: "Video Marketing", href: "https://promozionebranding.com/services/video-marketing-services" },
        { label: "Microsoft/Bing Ads", href: "https://promozionebranding.com/services/microsoft-bing-ads-services" },
        { label: "Google AdWords/PPC", href: "https://promozionebranding.com/services/google-adword-ppc-services" },
        { label: "SMO", href: "https://promozionebranding.com/services/social-media-optimization" },
        { label: "SMM", href: "https://promozionebranding.com/services/social-media-marketing" },
      ],
    },
    {
      name: "seo",
      label: "Guaranteed SEO",
      items: [
        { label: "AI Digital Marketing", href: "https://promozionebranding.com/services/ai-digital-marketing-services" },
        { label: "Digital Marketing Services", href: "https://promozionebranding.com/services/digital-marketing-services" },
        { label: "Enterprise SEO", href: "https://promozionebranding.com/services/enterprise-seo-services" },
        { label: "AI SEO Services", href: "https://promozionebranding.com/services/ai-seo-services" },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between px-3 py-3">
        {/* Logo */}
        <div onClick={closeNavbar} className="flex items-center gap-2 cursor-pointer">
          <Image
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762323987/logoo_kf5otr.webp"
            alt="logo"
            width={55}
            height={55}
            className="rounded-full"
          />
        </div>

        {/* Desktop Nav + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6">
            {menuItems.map((menu) => (
              <li
                key={menu.name}
                className="relative group"
                onMouseEnter={() =>
                  !isMobile && setDropdownStates({ [menu.name]: true })
                }
                onMouseLeave={() =>
                  !isMobile && setDropdownStates({ [menu.name]: false })
                }
              >
                <button
                  onClick={() => isMobile && toggleDropdown(menu.name)}
                  className="flex items-center justify-between w-full lg:w-auto text-gray-800 hover:text-blue-600 font-medium py-2 lg:py-0"
                >
                  {menu.label}
                  {renderIcon(menu.name)}
                </button>

                {/* Dropdown */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isMobile
                      ? dropdownStates[menu.name]
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                      : dropdownStates[menu.name]
                      ? "lg:absolute lg:min-w-[220px] bg-white shadow-md pt-2 rounded-lg overflow-hidden z-50 text-sm"
                      : "hidden"
                  }`}
                >
                  <ul
                    className={`${
                      isMobile
                        ? "pl-4 space-y-2 bg-gray-50 rounded-md py-2"
                        : ""
                    }`}
                  >
                    {menu.items.map(({ label, href }) => (
                      <li key={label} className="group">
                        {renderDropdownItem(label, href)}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/7221848327"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white gap-2 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-green-600 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out text-sm sm:text-base"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp Now
          </a>
        </div>

      
       <a href="tel:+917221848327" className="block md:hidden capitalize  animate-pulse bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-2 py-2 rounded-xl text-md shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
  Get Free Consultancy
</a>

        <button
          className="lg:hidden p-2 border rounded-md focus:outline-none transition hover:bg-gray-100"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isNavbarOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 bg-white shadow rounded-lg p-4">
          {menuItems.map((menu) => (
            <li key={menu.name} className="relative">
              <button
                onClick={() => toggleDropdown(menu.name)}
                className="flex items-center justify-between w-full text-gray-800 hover:text-blue-600 font-medium py-2"
              >
                {menu.label}
                {renderIcon(menu.name)}
              </button>

              {/* Dropdown inside mobile */}
              {dropdownStates[menu.name] && (
                <ul className="pl-4 space-y-2 bg-gray-50 rounded-md py-2">
                  {menu.items.map(({ label, href }) => (
                    <li key={label}>{renderDropdownItem(label, href)}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA under mobile menu */}
        <div className="p-4">
          <a
            href="https://wa.me/9971700871"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white gap-2 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-green-600 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out text-sm sm:text-base"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp Now
          </a>
        </div>
      </div>
       {isFormOpen && <Enquire isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />}
    </nav>
  );
}

// WhatsAppChat.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";


const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/+919717220321"
      className="whatsapp-float"

      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Promozione Branding"
    >
      <FaWhatsapp size={29} />
    </a>
  );
};

export default Whatsapp;

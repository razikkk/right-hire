// whatsappicon.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = ({ size = 50, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg"
      style={{ width: size, height: size }}
    >
      <FaWhatsapp className="text-black" size={size * 0.6} />
    </div>
  );
};

export default WhatsappIcon;

import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const quickLinks = [
    { label: "Home" },
    { label: "About Us" },
    { label: "Contact Us" },
  ];
  
  const legalLinks = [{ label: "Terms Of Service" }, { label: "Privacy Policy" }];

const Footer = () => {
  return (
<footer className="w-full py-10 flex flex-col items-center gap-8 mt-40">

   <img
          className="w-full h-8 mt-[68px]"
          alt="Section separator"
          src="/section---separator.svg"
        /> 
    {/* BIG TEXT (small, full width, gray) */}
    <div className="w-full flex justify-center px-4">
      <h1
        className="
          font-semibold text-center text-white/10
          text-[70px] sm:text-[110px] md:text-[250px]
          leading-none tracking-tight
        "
      >
        RIGHT HIRE
      </h1>
    </div>
  
    {/* BOTTOM 3 TEXTS */}
    <div className="w-full max-w-6xl px-6 grid grid-cols-3 text-gray-400 text-xs sm:text-sm">
  <p className="text-left">© 2025 RightHire</p>
  
  <p className="text-center">
    Proudly based in Dubai, UAE
  </p>
  
  <p className="text-right">
    Privacy Policy
  </p>
</div>

  
  </footer>
  
  )
}

export default Footer
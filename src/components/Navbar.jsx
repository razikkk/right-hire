import React, { useState } from 'react'
import { BiLogoGmail } from 'react-icons/bi';
import { FaBars, FaInstagram, FaLinkedin, FaTimes, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:py-2 flex items-center justify-between">
        {/* LEFT - LOGO */}
        <div className="flex items-center -mt-14 md:mt-0"> {/* move up slightly on mobile */}
          <img
            src="/logo.png"
            alt="Logo"
            className="h-54 md:h-36 w-auto" // slightly bigger on mobile
          />
        </div>

        {/* MIDDLE - NAV LINKS (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-white text-small font-light hover:opacity-80 cursor-pointer">Home</Link>
          {/* <Link to="/vehicles" className="text-white text-small font-light hover:opacity-80 cursor-pointer">Vehicles</Link> */}
          <Link to="/about" className="text-white text-small font-light hover:opacity-80 cursor-pointer">About</Link>
        </div>

        {/* RIGHT - SOCIAL ICONS + BUTTON (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <FaInstagram className="text-white text-xl cursor-pointer hover:opacity-80" />
          <a
  href="https://wa.me/971552599760"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="text-white text-xl cursor-pointer hover:opacity-80" />
</a>
<a href="mailto:accounts@righthire.ae">
  <BiLogoGmail className="text-white text-xl cursor-pointer hover:opacity-80" />
</a>
          <Link to="/contact">
            <button className="text-white border border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition">
              Contact
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center -mt-14 md:mt-0"> {/* move up slightly on mobile */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden bg-black bg-opacity-90 w-full absolute top-full left-0 px-6 py-4 flex flex-col gap-4 overflow-hidden transition-all duration-300
        ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <Link to="/" className="text-white text-lg font-light hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        {/* <Link to="/vehicles" className="text-white text-lg font-light hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>Vehicles</Link> */}
        <Link to="/about" className="text-white text-lg font-light hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link to="/contact">
          <button className="text-white border border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition mt-2 w-full">
            Contact
          </button>
        </Link>
        <div className="flex items-center gap-6 mt-4">
          <FaInstagram className="text-white text-xl cursor-pointer hover:opacity-80" />
          <FaLinkedin className="text-white text-xl cursor-pointer hover:opacity-80" />
          <FaYoutube className="text-white text-xl cursor-pointer hover:opacity-80" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

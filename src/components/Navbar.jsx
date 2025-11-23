import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="w-full absolute top-0 left-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between">

      {/* LEFT - LOGO */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-36 w-auto"
        />
      </div>

      {/* MIDDLE - NAV LINKS */}
      <div className="hidden md:flex items-center gap-10">

  <Link
    to="/"
    className="text-white text-small font-light hover:opacity-80 cursor-pointer"
  >
    Home
  </Link>

  <Link
    to="/vehicles"
    className="text-white text-small font-light hover:opacity-80 cursor-pointer"
  >
    Vehicles
  </Link>

  <Link
    to="/about"
    className="text-white text-small font-light hover:opacity-80 cursor-pointer"
  >
    About
  </Link>

</div>

      {/* RIGHT - SOCIAL ICONS + BUTTON */}
      <div className="flex items-center gap-6">
        <FaInstagram className="text-white text-xl cursor-pointer hover:opacity-80" />
        <FaLinkedin className="text-white text-xl cursor-pointer hover:opacity-80" />
        <FaYoutube className="text-white text-xl cursor-pointer hover:opacity-80" />
    <Link to="/contact">
        <button className="text-white border border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition">
          Contact
        </button>
        </Link>
      </div>

    </div>
  </nav>
  )
}

export default Navbar
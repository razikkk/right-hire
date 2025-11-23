import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center text-center px-6">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-medium text-white">
        About RightHire
      </h1>

      {/* Paragraph */}
      <p className="text-gray-300 max-w-2xl mt-6 text-lg leading-relaxed">
        At Right Hire Car Rental LLC, we make renting a car easy and hassle free.
        <br />
        Reliable cars, clear pricing, and service you can trust every time.
      </p>

      {/* Button */}
      <Link to='/about'>
      <button className="mt-8 bg-white text-black px-7 py-3 rounded-full flex items-center gap-3 text-lg font-light hover:bg-gray-200 transition">
        About Us
        <FaArrowRight className="text-black text-sm" />
      </button>
      </Link>
    </section>
  );
};

export default AboutSection;

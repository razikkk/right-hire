import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import FadeInView from "../../components/FadeInView";

const HeroSectionHome = () => {
  return (
    
    
      
    <section className="w-full h-[100vh] relative">
  {/* Background Image */}
  <img
    src="/heroCar.jpg"
    alt="Hero"
    className="w-full h-full object-cover absolute top-0 left-0"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* CONTENT */}
  <div className="absolute bottom-20 left-10 md:left-20 flex flex-col items-start gap-4 max-w-xl">

    {/* Tag */}
    {/* <FadeInView delay={0.2}>
      <div className="flex items-center gap-3 bg-white text-black rounded-full px-5 py-2 shadow-lg">
        <FaRegStar className="text-small" />
        <span className="font-light">Chosen by 250+ clients</span>
      </div>
    </FadeInView> */}

    {/* Heading */}
    <FadeInView delay={0.5}>
      <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight">
        Premium Car Rental <br /> in Dubai
      </h1>
    </FadeInView>

    {/* Paragraph */}
    <FadeInView delay={0.8}>
      <p className="text-gray-200 text-small max-w-md">
        Experience unmatched comfort, style, and service wherever the road takes you.
      </p>
    </FadeInView>

    {/* Button */}
    <FadeInView delay={1.1}>
      <Link to='/'>
        <button className="bg-white text-black px-8 py-3 rounded-full text-small font-light hover:bg-gray-200 transition">
          Choose your car
        </button>
      </Link>
    </FadeInView>

  </div>
</section>

  );
};

export default HeroSectionHome;

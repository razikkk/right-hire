import React from "react";
import { Link } from "react-router-dom";
import FadeInView from "../../components/FadeInView";

const CtaSection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden mt-40">

  {/* Background Image */}
  <img
    src="/cta.jpg"
    alt="CTA Background"
    className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
  />

  {/* Top & Bottom Gradient */}
  <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent"></div>
  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Center Card */}
  <div className="relative bg-black border-4 border-white/80 
                  rounded-3xl pt-8 md:pt-10 pb-0 w-[90%] max-w-lg text-center overflow-hidden">

    {/* Text Content */}
    <div className="relative z-10 px-8 md:px-10 pb-8">

      <FadeInView delay={0.2}>
        <h1 className="text-white text-3xl md:text-4xl font-medium">
          Book a Visit at RightHire
        </h1>
      </FadeInView>

      <FadeInView delay={0.5}>
        <p className="text-gray-200 mt-3 text-sm md:text-base max-w-sm mx-auto">
          Schedule a visit and explore our premium fleet in person — 
          experience quality and service like never before.
        </p>
      </FadeInView>

      <FadeInView delay={0.8}>
        <Link to='/contact'>
          <button className="mt-6 bg-white text-black px-8 py-3 rounded-full font-light hover:bg-gray-200 transition cursor-pointer">
            Book Now
          </button>
        </Link>
      </FadeInView>
      
    </div>

    {/* FULL-WIDTH IMAGE — NO PADDING AROUND THIS */}
    <div className="relative w-full rounded-b-3xl overflow-hidden">
      <img
        src="/cta.jpg"
        alt="Fleet"
        className="w-full h-68 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent"></div>
    </div>

  </div>

</section>


  );
};

export default CtaSection;

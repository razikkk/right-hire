import React from "react";

const AboutHeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center px-6 py-40">

  {/* Gray Background Box (TEXT ONLY) */}
  <div className="w-full max-w-5xl bg-[#1b1c1e] rounded-3xl px-10 py-16 text-center">

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
      About Right Hire
    </h1>

    {/* Paragraph */}
    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
      At Right Hire, we believe renting a car should be simple, honest, and stress-free.
      We offer a wide range of vehicles from compact cars to SUVs and premium models
      all maintained to the highest standards. Our pricing is fully transparent, with 
      no hidden charges or complicated terms. For long-term customers, we also offer a 
      flexible Lease-to-Own program that helps you move toward car ownership easily.
    </p>

    {/* Tagline */}
    {/* <p className="text-white font-bold text-lg mt-8">
      Reliable cars. Clear pricing. A rental experience you can trust.
    </p> */}
  </div>

  {/* Cards OUTSIDE the gray box */}
  

</section>

  );
};

export default AboutHeroSection;

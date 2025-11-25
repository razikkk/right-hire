import React from "react";
import FadeInView from "../../components/FadeInView";

const AboutHeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center px-6 py-40">

  {/* Gray Background Box (TEXT ONLY) */}
  <div className="w-full max-w-5xl bg-[#1b1c1e] rounded-3xl px-10 py-16 text-center">

    {/* Heading */}
    <FadeInView delay={0.2}>
      <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
        About Right Hire
      </h1>
    </FadeInView>

    {/* Paragraph */}
    <FadeInView delay={0.5}>
      <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
        At Right Hire, we believe renting a car should be simple, honest, and stress-free.
        We offer a wide range of vehicles from compact cars to SUVs and premium models
        all maintained to the highest standards. Our pricing is fully transparent, with 
        no hidden charges or complicated terms. For long-term customers, we also offer a 
        flexible Lease-to-Own program that helps you move toward car ownership easily.
      </p>
    </FadeInView>

    {/* Tagline (Optional) */}
    {/* <FadeInView delay={0.8}>
      <p className="text-white font-bold text-lg mt-8">
        Reliable cars. Clear pricing. A rental experience you can trust.
      </p>
    </FadeInView> */}

  </div>

  {/* Cards OUTSIDE the gray box */}
  {/* You can wrap each card in FadeInView as well with incremental delay */}
  
</section>


  );
};

export default AboutHeroSection;

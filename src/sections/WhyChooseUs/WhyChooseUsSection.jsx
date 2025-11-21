import React from "react";

const WhyChooseUsSection = () => {
  const cards = [
    {
      image: "/1-choose.jpg",
      title: "Trusted Service",
      text: "Experience reliable rentals backed by complete transparency and a commitment to your satisfaction.",
      fade: "top",
    },
    {
      image: "/2-choose.jpg",
      title: "Flexible Options",
      text: "Pick from a range of flexible rental options tailored to match your lifestyle, trip, and comfort needs.",
      fade: "bottom",
    },
    {
      image: "/3-choose.jpg",
      title: "Affordable Rates",
      text: "Enjoy clear, upfront pricing with no hidden charges — premium service that fits your budget.",
      fade: "top",
    },
    {
      image: "/4-choose.jpg",
      title: "Wide Fleet Range",
      text: "Choose from a versatile fleet of SUVs, sedans, hatchbacks, and more — perfect for every kind of journey.",
      fade: "bottom",
    },
    {
      image: "/6-choose.jpg",
      title: "24/7 Support",
      text: "Our team is available 24/7 to assist you anytime, anywhere — ensuring a smooth and stress-free experience.",
      fade: "top",
      small: true,
    },
  ];

  return (
    <div className="w-full py-20 px-4 text-center">
      {/* Heading */}
      <h1 className="text-white text-4xl md:text-5xl font-medium">
        Why Choose RightHire
      </h1>

      {/* Paragraph */}
      <p className="text-gray-400 text-md max-w-xl mx-auto mt-4">
        Experience a seamless car-buying process built 
        on transparency, flexibility, and trust.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
        {cards.map((card, index) => (
        <div
        key={index}
        className={`relative overflow-hidden rounded-3xl border-4 border-white/80 shadow-[0_0_20px_#ffffff30] aspect-square
          ${index === 4 ? "sm:translate-x-70" : ""}
        `}
      >
        {/* Image */}
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />
      
        {/* Fade Overlay */}
        <div
          className={`absolute w-full px-5 py-6
            ${
              card.fade === "top"
                ? "top-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
                : "bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            }`}
        >
          <h3 className="text-white text-xl font-semibold text-left">
            {card.title}
          </h3>
          <p className="text-gray-300 text-sm text-left">
            {card.text}
          </p>
        </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;

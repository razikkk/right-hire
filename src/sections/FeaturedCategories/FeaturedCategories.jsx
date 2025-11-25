import React from "react";
import { Link } from "react-router-dom";
import FadeInView from "../../components/FadeInView";

const categories = [
  { name: "SUV", image: "/suv.jpg" },
  { name: "Sedan", image: "/sedan.jpg" },
  { name: "Compact", image: "/compact-cars.jpg" },
  { name: "Premium", image: "/premium-cars.jpg" }
];

const FeaturedCategories = () => {
  return (
    <section className="w-full py-60 flex flex-col items-center text-center px-6">

    {/* Heading */}
    <FadeInView delay={0.2}>
      <h1 className="text-3xl md:text-5xl font-medium text-white">
        Featured Categories
      </h1>
    </FadeInView>
  
    {/* Paragraph */}
    <FadeInView delay={0.5}>
      <p className="text-gray-400 max-w-xl mt-4">
        Explore our wide range of car categories designed to match every style,
        purpose, and comfort level.
      </p>
    </FadeInView>
  
    {/* Button */}
    <FadeInView delay={0.8}>
      <Link to='/'>
        <button className="mt-6 bg-white text-black px-7 py-3 rounded-full text-lg font-light hover:bg-gray-200 transition cursor-pointer">
          See All
        </button>
      </Link>
    </FadeInView>
  
    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 w-full max-w-5xl">
      {categories.map((cat, index) => (
        <FadeInView key={index} delay={1 + index * 0.2}>
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-5 border-white/80 shadow-xl group">
            {/* Background Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
  
            {/* Category Label */}
            <div className="absolute bottom-0 w-full py-6 px-4 bg-gradient-to-t from-black/80 via-black/80 to-transparent">
              <p className="text-white text-xl font-light text-left">
                {cat.name}
              </p>
            </div>
          </div>
        </FadeInView>
      ))}
    </div>
  </section>
  
  );
};

export default FeaturedCategories;

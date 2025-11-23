import React from 'react';

const VehicleCardSection = () => {
  // Example data for car cards
  const cars = [
    { id: 1, name: 'Car 1', image: '/car1.jpg' },
    { id: 2, name: 'Car 2', image: '/car2.jpg' },
    { id: 3, name: 'Car 3', image: '/car3.jpg' },
    { id: 4, name: 'Car 4', image: '/car4.jpg' },
    { id: 5, name: 'Car 5', image: '/car5.jpg' },
    { id: 6, name: 'Car 6', image: '/car6.jpg' },
  ];

  return (
    <div className="p-8 pt-44">
      {/* Heading */}
      <h1 className="text-5xl font-medium text-left mb-6 text-white ml-14">Our Vehicles</h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8 ml-14">
        {['All Vehicles', 'SUV', 'Sedan', 'Compact', 'Premium'].map((type) => (
          <button
            key={type}
            className="bg-white text-black font-light py-3 px-4 rounded-full border transition"
          >
            {type}
          </button>
        ))}
      </div>

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-10 mt-12 w-full px-4 md:px-14">
  {cars.map((car, index) => (
    <div
      key={index}
      className="relative w-full h-[420px] rounded-3xl overflow-hidden border-4 border-white/80 shadow-xl group"
    >
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute bottom-0 w-full py-6 px-4 bg-gradient-to-t from-black/80 via-black/80 to-transparent">
        <p className="text-white text-xl font-light text-left">
          {car.name}
        </p>
      </div>
    </div>
  ))}

</div>
 <div className="flex justify-center mt-28">
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-light hover:bg-black hover:text-white transition">
          See More
        </button>
      </div>

    </div>
  );
};

export default VehicleCardSection;

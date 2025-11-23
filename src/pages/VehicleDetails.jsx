import React from "react";
import Navbar from "../components/Navbar";
import FAQPage from "../sections/FAQ/FaqSection";
import CtaSection from "../sections/CTA/CtaSection";
import Footer from "../sections/FooterSection/Footer";

const VehicleDetails = () => {
  const specs = [
    { label: "Top Speed", value: "325 km/h" },
    { label: "Power", value: "631 hp" },
    { label: "0–100 km/h", value: "2.9 s" },
    { label: "Year", value: "2024" },
    { label: "Exterior", value: "Giallo Inti Yellow" },
    { label: "Interior", value: "Alcantara with carbon fiber accents" },
    { label: "Transmission", value: "7-Speed Dual-Clutch Automatic" },
    { label: "Drivetrain", value: "Rear-Wheel Drive" },
    { label: "Engine", value: "5.2L Naturally Aspirated V10" },
    { label: "Seats", value: "2" },
  ];

  return (
    <>
    <Navbar/>
    <div className="w-full px-6 md:px-20 py-36">

      {/* Category */}
      <div className="w-full flex justify-center mb-4">
        <span className="bg-white text-black px-6 py-4 rounded-full text-sm font-light shadow">
          Supercar
        </span>
      </div>

      {/* Car Name */}
      <h1 className="text-4xl md:text-5xl font-semibold text-center text-white mb-3">
        Lamborghini Huracán
      </h1>

      {/* Price */}
      <p className="text-xl text-center text-gray-300 mb-6">
        $265,000 <span className="text-gray-400 text-sm">(per day)</span>
      </p>

      {/* Contact Button */}
      <div className="flex justify-center mb-12">
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-light hover:bg-black hover:text-white transition">
          Contact
        </button>
      </div>

      {/* Big Car Image */}
      <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden mb-16 shadow-xl">
        <img
          src="/car1.jpg"
          alt="Car"
          className="w-full h-[450px] object-cover"
        />
      </div>

      {/* Key Specifications */}
      <h3 className="text-2xl font-semibold text-white mb-6">Key Specifications</h3>

      <div className="space-y-8 max-w-7xl">
        {specs.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-gray-300 text-lg">
              <span>{item.label}</span>
              <span className="font-medium text-white">{item.value}</span>
            </div>
            <hr className="border-gray-700 mt-4" />
          </div>
        ))}
      </div>
    </div>
    <FAQPage/>
    <CtaSection/>
    <Footer/>
    </>
  );
};

export default VehicleDetails;

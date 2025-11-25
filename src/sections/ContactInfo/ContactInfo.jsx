import React from "react";
import FadeInView from "../../components/FadeInView";

const ContactInfo = () => {
  return (
    <section className="w-full py-44 px-6 max-w-6xl mx-auto">
  
    {/* Heading + Subtext + Button */}
    <FadeInView delay={0.2}>
      <div className="mb-16 text-left">
        <h1 className="text-4xl md:text-7xl font-medium text-white mb-4">
          Contact RightHire
        </h1>
  
        <p className="text-gray-400 max-w-xl mb-6">
          Our team is here to assist you with test drives 
          <br/>
          and personalized support.
        </p>
  
        <button className="bg-white text-black font-light px-4 py-3 rounded-full hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>
    </FadeInView>
  
    {/* Contact Details Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      
      <FadeInView delay={0.4}>
        {/* Address */}
        <div>
          <h3 className="text-xl text-white font-medium mb-2">Address</h3>
          <p className="text-gray-400">Dubai, UAE</p>
        </div>
      </FadeInView>
  
      <FadeInView delay={0.6}>
        {/* Phone */}
        <div>
          <h3 className="text-xl text-white font-medium mb-2">Phone</h3>
          <p className="text-gray-400">
            <a href="tel:+971552599760" className="hover:underline">
              +971 55 259 9760
            </a>
          </p>
        </div>
      </FadeInView>
  
      <FadeInView delay={0.8}>
        {/* Email */}
        <div>
          <h3 className="text-xl text-white font-medium mb-2">Email</h3>
          <p className="text-gray-400">
            <a href="mailto:accounts@righthire.ae" className="hover:underline">
              accounts@righthire.ae
            </a>
          </p>
        </div>
      </FadeInView>
  
      <FadeInView delay={1}>
        {/* Opening Hours */}
        <div>
          <h3 className="text-xl text-white font-medium mb-2">Opening Hours</h3>
          <p className="text-gray-400">
            Mon – Sun: 9:00 AM – 9:00 PM
          </p>
        </div>
      </FadeInView>
  
    </div>
  </section>
  
  );
};

export default ContactInfo;

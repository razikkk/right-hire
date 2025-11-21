import React from "react";

const ContactInfo = () => {
  return (
    <section className="w-full py-44 px-6 max-w-6xl mx-auto">
      
      {/* Heading + Subtext + Button */}
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

      {/* Contact Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

        {/* Address */}
        <div>
          <h3 className="text-xl text-white font-medium mb-2">Address</h3>
          <p className="text-gray-400">
            123 Main Street, Kochi, Kerala, 682001
          </p>
        </div>

        {/* Phone */}
        <div>
          <h3 className="text-xl text-white font-medium mb-2">Phone</h3>
          <p className="text-gray-400">
            +91 98765 43210
          </p>
        </div>

        {/* Email */}
        <div>
          <h3 className="text-xl text-white font-medium mb-2">Email</h3>
          <p className="text-gray-400">
            support@righthire.com
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl text-white font-medium mb-2">Opening Hours</h3>
          <p className="text-gray-400">
            Mon – Sun: 9:00 AM – 9:00 PM
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;

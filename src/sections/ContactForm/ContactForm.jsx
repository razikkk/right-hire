import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="w-full py-24 px-14 flex flex-col md:flex-row justify-between gap-12">

      {/* LEFT SIDE TEXT */}
      <div className="flex-1">
  <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
    Send us a message
  </h1>

  <p className="text-gray-400 max-w-md mb-6">
    Have questions about renting a car? We’re here to help you with bookings,
    vehicle details, and anything else you need.
  </p>

  {/* Quick Enquiry Section */}
  <div className="mt-4">
    <p className="text-white font-medium mb-3">Have a quick enquiry?</p>

    <button className="flex items-center gap-2 bg-white text-black font-light py-3 px-5 rounded-full hover:opacity-90 transition">
    <FaWhatsapp className="h-5 w-5"/>

      WhatsApp
    </button>
  </div>
</div>


      {/* RIGHT SIDE FORM */}
      <form className="flex-1 flex flex-col gap-6">

  {/* Name */}
  <div className="flex flex-col gap-1">
    <label className="text-white text-sm">Your Name</label>
    <input
      type="text"
      placeholder="Name"
      className="w-full bg-[#1a1a1a] text-white placeholder-white px-4 py-3 rounded-xl outline-none"
    />
  </div>

  {/* Email */}
  <div className="flex flex-col gap-1">
    <label className="text-white text-sm">Email</label>
    <input
      type="email"
      placeholder="Email"
      className="w-full bg-[#1a1a1a] text-white placeholder-white px-4 py-3 rounded-xl outline-none"
    />
  </div>

  {/* Phone */}
  <div className="flex flex-col gap-1">
    <label className="text-white text-sm">Phone</label>
    <input
      type="text"
      placeholder="Phone"
      className="w-full bg-[#1a1a1a] text-white placeholder-white px-4 py-3 rounded-xl outline-none"
    />
  </div>

  {/* Message */}
  <div className="flex flex-col gap-1">
    <label className="text-white text-sm">Message</label>
    <textarea
      placeholder="Message"
      rows={5}
      className="w-full bg-[#1a1a1a] text-white placeholder-white px-4 py-3 rounded-xl outline-none"
    />
  </div>

  {/* Button */}
  <button
    type="submit"
    className="mt-2 bg-white text-black font-medium py-3 rounded-xl hover:opacity-90 transition"
  >
    Send Message
  </button>
</form>


    </section>
  );
};

export default ContactForm;

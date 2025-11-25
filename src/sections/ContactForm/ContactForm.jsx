import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "+971552599760"; // number without spaces or "+" in wa.me link

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello, my name is ${name}. Email: ${email}, Phone: ${phone}. Message: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); // opens WhatsApp in a new tab or app
  };

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
    <a href="https://wa.me/971552599760" target="_blank" rel="noopener noreferrer">
    <button className="flex items-center gap-2 bg-white text-black font-light py-3 px-5 rounded-full hover:opacity-90 transition">
    <FaWhatsapp className="h-5 w-5"/>

      WhatsApp
    </button>
    </a>
  </div>
</div>


      {/* RIGHT SIDE FORM */}
     <form className="flex-1 flex flex-col gap-6" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-white text-sm">Your Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-[#1a1a1a] text-white placeholder-white px-4 py-3 rounded-xl outline-none"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-white text-sm">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[#1a1a1a] text-white placeholder-white px-4 py-3 rounded-xl outline-none"
          required
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label className="text-white text-sm">Phone</label>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-[#1a1a1a] text-white placeholder-white px-4 py-3 rounded-xl outline-none"
          required
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label className="text-white text-sm">Message</label>
        <textarea
          placeholder="Message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-[#1a1a1a] text-white placeholder-white px-4 py-3 rounded-xl outline-none"
          required
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

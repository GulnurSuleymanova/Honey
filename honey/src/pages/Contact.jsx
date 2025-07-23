import React from 'react';
import bgImage from "../assets/slider4.webp";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaVimeoV,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      {/* Header Background */}
      <section
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl md:text-5xl font-medium tracking-wide uppercase">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <div className="grid max-w-screen-xl grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 mx-auto">
        {/* Info Section */}
        <div className="flex flex-col justify-between">
          <div className="space-y-5">
              <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHQ2OTI2eTJnMTd4eGswZGpqdXUyOHQ1cWlwNmtobzF4NTJkZnQzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XysxVxrjeZTF5C2fBY/giphy.gif"
            alt=""
            className="p-6 h-52 md:h-64"
          />
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start gap-2"><FaMapMarkerAlt className="text-[#3a1e0d]" size={18}/> <span>123 Suspendis matti, Visaosang Building VST District, NY Accums, North American</span></p>
              <p className="flex items-start gap-2"><FaEnvelope className="text-[#3a1e0d]" size={18}/> <span>support@domain.com</span></p>
              <p className="flex items-start gap-2"><FaPhone className="text-[#3a1e0d]" size={18}/> <span>(012)-345-67890</span></p>
              <p className="flex items-start gap-2"><FaClock className="text-[#3a1e0d]" size={18}/> <span>Open daily: 11:00 AM – 7:00 PM</span></p>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[#3a1e0d] hover:text-[#222]"><FaFacebookF size={20} /></a>
              <a href="#" className="text-[#3a1e0d] hover:text-[#222]"><FaTwitter size={20} /></a>
              <a href="#" className="text-[#3a1e0d] hover:text-[#222]"><FaVimeoV size={20} /></a>
              <a href="#" className="text-[#3a1e0d] hover:text-[#222]"><FaInstagram size={20} /></a>
              <a href="#" className="text-[#3a1e0d] hover:text-[#222]"><FaYoutube size={20} /></a>
            </div>
          </div>

        
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-[#f9f9f9] p-6 rounded-xl shadow-md">
          <div>
            <label htmlFor="name" className="text-sm text-gray-700">Full Name</label>
            <input id="name" type="text" className="w-full p-3 rounded border border-gray-300" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-gray-700">Email</label>
            <input id="email" type="email" className="w-full p-3 rounded border border-gray-300" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-gray-700">Message</label>
            <textarea id="message" rows="4" className="w-full p-3 rounded border border-gray-300"></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#3a1e0d] hover:bg-[#5b2f1a] text-white p-3 font-bold tracking-wide uppercase rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

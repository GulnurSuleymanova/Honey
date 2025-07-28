import React from 'react';
import bgFooter from '../assets/bg-footer4.webp';
import logo from '../assets/logo.png';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
      <section
        className="w-full py-12 px-4 md:px-8 bg-top bg-repeat"
        style={{ backgroundImage: `url(${bgFooter})`, backgroundSize: 'auto' }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Subscribe</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Sign in up for newsletter to receive special offers and exclusive news about Botanica products
          </p>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-white rounded-full border-2 border-dashed border-[#5B2800] pr-32 pl-5 py-3 h-[58px]"
              />
              <input
                type="submit"
                value="Subscribe"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#5B2800] hover:bg-[#251c14] text-white font-medium px-5 py-2 rounded-full text-sm h-[52px] uppercase tracking-wider cursor-pointer transition duration-300"
              />
            </div>
          </div>
        </div>
        <footer className="py-10 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="text-center md:text-left order-1">
                <p className="text-lg font-semibold mb-3">Shop</p>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-[#5B2800]">All Products</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">Best Sellers</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">Gifts</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">Wholesale</a></li>
                </ul>
              </div>

              <div className="flex flex-col items-center md:items-center order-2">
                <img src={logo} alt="Logo" className="w-32 mb-4" />
                <p className="text-sm text-center text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dui tempor eros porttitor tristique eget eu lectus. Sed auctor mi vitae velit aliquet, quis pharetra sem vestibulum. Nam vel lectus imperdiet.    </p>
              <div className="flex space-x-4 mt-10">
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5B2800] text-white hover:bg-[#251c14]"
  >
<FaInstagram />
  </a>
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5B2800] text-white hover:bg-[#251c14]"
  >
<FaXTwitter />
  </a>
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5B2800] text-white hover:bg-[#251c14]"
  >
<FaWhatsapp />
  </a>
</div>
              </div>

              <div className="text-center md:text-right order-3">
                <p className="text-lg font-semibold mb-3">Info</p>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-[#5B2800]">About Us</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">Contact</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">Blog</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">FAQs</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">Returns</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center text-sm text-gray-600 border-t pt-6">
                <span>© 2025 Gulnur</span>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;

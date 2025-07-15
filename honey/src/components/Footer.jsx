import React from 'react'
import bgFooter from '../assets/bg-footer4.webp';

const Footer = () => {
  return (
    <div>
      <section
        className="w-full py-12 px-4 md:px-8 bg-repeat bg-top"
        style={{ backgroundImage: `url(${bgFooter})`, backgroundSize: 'auto' }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Subscribe</h2>

          <p className="text-gray-600 mb-6">
            Sign up for newsletter to receive special offers and exclusive news about Botanica products
          </p>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                name="your-email"
                placeholder="Enter Your Email"
                className="w-full bg-white rounded-[58px] border-2 border-dashed pr-32 pl-5 py-3"
                style={{ borderColor: '#5B2800', height: '58px' }}
              />

              <input
                type="submit"
                value="Subscribe"
                className="absolute right-0.5 top-1/2 -translate-y-1/2 bg-[#5B2800] hover:bg-[#251c14] text-white font-medium  px-5 py-2 rounded-full transition duration-300 cursor-pointer text-sm h-[60px] uppercase tracking-wider"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

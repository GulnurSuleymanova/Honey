import React from 'react';
import icon1 from '../../assets/sectionone.webp';
import icon2 from '../../assets/icon-banner2.webp';
import icon3 from '../../assets/icon-banner3.png';

const WhyChooseUs = () => {
  return (
    <div className="pt-60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-[18px] font-medium tracking-wide">WHY CHOOSE US</p>
          <h5 className="text-[32px] font-medium tracking-wide">Why Choose Our Products
          </h5>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center md:gap-36 gap-12 pt-3 items-center">

          <div className="relative group max-w-sm w-full">
            <div className="absolute -top-3 -right-3 w-full h-full bg-[#F9BD17] rounded-tl-[80px] rounded-br-[80px] z-0"></div>
            <div className="absolute -top-[8px] -left-[20px] w-[calc(100%+30px)] h-[calc(100%+30px)] border border-dashed border-black rounded-tl-[80px] rounded-br-[80px] z-[-1]"></div>

            <div className="relative bg-amber-100 rounded-tl-[80px] rounded-br-[80px] shadow-[8px_10px_20px_#0000000d] px-6 py-8 min-h-[280px] text-left z-10">
              <div className="relative">
                <div className="absolute -top-4 -left-8 w-[70px] h-[70px] flex items-center justify-center border border-[#F9BD17] bg-white rounded-full p-3">
                  <img src={icon1} alt="Premium Quality" className="w-full h-auto" />
                </div>
                <h3 className="text-[24px] font-medium tracking-wide pl-[60px] text-amber-600">All-Natural and
                  Organic Honey</h3>
              </div>
              <p className="mt-4 pl-[60px] text-[16px] text-gray-600 font-medium tracking-wide">
                The use of natural honey as a nutraceutical agent is associated with nutritional benefits and therapeutic promises.              </p>
            </div>
          </div>

          <div className="relative group max-w-sm w-full">
            <div className="absolute -top-3 -right-3 w-full h-full bg-[#F9BD17] rounded-tl-[80px] rounded-br-[80px] z-0"></div>
            <div className="absolute -top-[8px] -left-[20px] w-[calc(100%+30px)] h-[calc(100%+30px)] border border-dashed border-black rounded-tl-[80px] rounded-br-[80px] z-[-1]"></div>

            <div className="relative bg-amber-100 rounded-tl-[80px] rounded-br-[80px] shadow-[8px_10px_20px_#0000000d] px-6 py-8 min-h-[280px] text-left z-10">
              <div className="relative">
                <div className="absolute -top-4 -left-8 w-[70px] h-[70px] flex items-center justify-center border border-[#F9BD17] bg-white rounded-full p-3">
                  <img src={icon2} alt="Trusted Process" className="w-full h-auto" />
                </div>
                <h3 className="text-[24px] font-medium tracking-wide pl-[60px] text-amber-600">Honey Traceability and
                  Authenticity Certification</h3>
              </div>
              <p className="mt-4 pl-[60px] text-[16px] text-gray-600 font-medium tracking-wide">
                Show shoppers that your honey has been independently verified for origin and tested for authenticity.              </p>
            </div>
          </div>

          <div className="relative group max-w-sm w-full">
            <div className="absolute -top-3 -right-3 w-full h-full bg-[#F9BD17] rounded-tl-[80px] rounded-br-[80px] z-0"></div>
            <div className="absolute -top-[8px] -left-[20px] w-[calc(100%+30px)] h-[calc(100%+30px)] border border-dashed border-black rounded-tl-[80px] rounded-br-[80px] z-[-1]"></div>

            <div className="relative bg-amber-100 rounded-tl-[80px] rounded-br-[80px] shadow-[8px_10px_20px_#0000000d] px-6 py-8 min-h-[280px] text-left z-10">
              <div className="relative">
                <div className="absolute -top-4 -left-8 w-[70px] h-[70px] flex items-center justify-center border border-[#F9BD17] bg-white rounded-full p-3">
                  <img src={icon3} alt="Customer Satisfaction" className="w-full h-auto" />
                </div>
                <h3 className="text-[24px] font-medium tracking-wide pl-[60px] text-amber-600">Professional
                  Beekeepers</h3>
              </div>
              <p className="mt-4 pl-[60px] text-[16px] text-gray-600 font-medium tracking-wide">
                The use of natural honey as a nutraceutical agent is associated with nutritional benefits and therapeutic promises.              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

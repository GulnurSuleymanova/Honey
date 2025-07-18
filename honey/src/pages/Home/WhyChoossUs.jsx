import React, { useState } from 'react';
import icon1 from '../../assets/sectionone.webp';
import icon2 from '../../assets/icon-banner2.webp';
import icon3 from '../../assets/icon-banner3.png';
import translations from '../../translation';

const WhyChooseUs = () => {
  const [lang] = useState('az');
  const t = (key) => translations[lang]?.whoose[key] || "";

  const cards = [
    { img: icon1, title: t(2), desc: t(3) },
    { img: icon2, title: t(2), desc: t(3) },
    { img: icon3, title: t(2), desc: t(3) },
  ];

  return (
    <div className="pt-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-[16px] font-medium text-[#5B2800]">{t(0)}</p>
          <h5 className="text-[24px] text-[#222222] font-semibold">{t(1)}</h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 pt-3">
          {cards.map((card, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -top-3 -right-3 w-full h-full bg-[#F9BD17] rounded-tl-[80px] rounded-br-[80px] z-0"></div>
              <div className="absolute -top-[8px] -left-[20px] w-[calc(100%+30px)] h-[calc(100%+30px)] border border-dashed border-black rounded-tl-[80px] rounded-br-[80px] z-[-1]"></div>

              <div className="relative bg-white rounded-tl-[80px] rounded-br-[80px] shadow-[8px_10px_20px_#0000000d] px-6 py-8 min-h-[280px] text-left z-10">
                <div className="relative">
                  <div className="absolute -top-4 -left-8 w-[70px] h-[70px] flex items-center justify-center border border-[#F9BD17] bg-white rounded-full p-3">
                    <img src={card.img} alt="" className="w-full h-auto" />
                  </div>
                  <h3 className="text-[16px] font-semibold pl-[60px]">{card.title}</h3>
                </div>
                <p className="mt-4 pl-[60px] text-[14px]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

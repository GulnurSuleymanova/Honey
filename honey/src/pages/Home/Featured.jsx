import React from 'react';
import border from '../../assets/border.png';
import category1 from '../../assets/category1.webp';
import category2 from '../../assets/category2.webp';
import category3 from '../../assets/category3.webp';
import bgBenefit from '../../assets/bg-benefits.webp';

const Featured = () => {
  return (
    <div
      className="py-20 bg-no-repeat bg-cover bg-center -mt-60"
      style={{ backgroundImage: `url(${bgBenefit})` }}
    >
      <div className="text-center mb-16 mt-36">
        <p className="text-[#5B2800] text-[37px] font-medium tracking-wide">Product Benefits</p>
        <h2 className="text-[48px] text-[#222] font-medium tracking-wide mt-4">Featured Categories</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 " data-aos="zoom-out-down" >
        <div className="w-[300px] text-center">
          <div className="relative w-[260px] h-[260px] mx-auto mb-8">
            <img src={border} alt="border" className="absolute inset-0 w-full h-full object-contain z-10" />
            <img
              src={category1}
              alt="Sunflower Honey"
              className="absolute inset-0 w-[60%] h-[60%] object-cover m-auto z-0 rounded-full"
            />
          </div>
          <h3 className="text-[28px] font-medium text-[#5B2800] tracking-wide mb-2">Sunflower Honey</h3>
          <p className="text-[15px] text-[#291c03] font-medium tracking-wide leading-relaxed mb-32">
            Sunflower Honey delivers the delight of the world’s happiest flowers with every spoonful. We proudly source this golden treasure from the beekeepers of Ukraine and Romania.
          </p>
        </div>

        <div className="w-[300px] text-center">
          <div className="relative w-[260px] h-[260px] mx-auto mb-8">
            <img src={border} alt="border" className="absolute inset-0 w-full h-full object-contain z-10" />
            <img
              src={category2}
              alt="Wildflower Honey"
              className="absolute inset-0 w-[60%] h-[60%] object-cover m-auto z-0 rounded-full"
            />
          </div>
          <h3 className="text-[28px] font-medium text-[#5B2800] tracking-wide mb-2">Wildflower Honey</h3>
          <p className="text-[15px] text-[#291c03] font-medium tracking-wide leading-relaxed mb-32">
            Wildflower Honey captures the natural aroma of mixed blossoms. Sourced from the most vibrant meadows of Europe, this honey brings a rich floral taste to your table.
          </p>
        </div>
        <div className="w-[300px] text-center">
          <div className="relative w-[260px] h-[260px] mx-auto mb-8">
            <img src={border} alt="border" className="absolute inset-0 w-full h-full object-contain z-10" />
            <img
              src={category3}
              alt="Acacia Honey"
              className="absolute inset-0 w-[60%] h-[60%] object-cover m-auto z-0 rounded-full"
            />
          </div>
          <h3 className="text-[28px] font-medium text-[#5B2800] tracking-wide mb-2">Acacia Honey</h3>
          <p className="text-[15px] text-[#291c03] font-medium tracking-wide leading-relaxed mb-32">
            Acacia Honey is known for its light color and mild flavor. Harvested from acacia trees, it is perfect for those who love delicate sweetness without overpowering taste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;

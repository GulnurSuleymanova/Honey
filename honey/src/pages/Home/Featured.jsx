import React from 'react';
import border from '../../assets/border.png';
import category1 from '../../assets/category1.webp';
import category2 from '../../assets/category2.webp';
import category3 from '../../assets/category3.webp';
import bgBenefit from '../../assets/bg-benefits.webp';

const Featured = () => {
  return (
    <div
      className="py-20 bg-no-repeat bg-cover bg-center -mt-10"
      style={{ backgroundImage: `url(${bgBenefit})` }}
    >
      <div className="text-center mb-10">
        <p className="text-[16px] font-medium text-[#5B2800]">Product Benefits</p>
        <h5 className="text-[28px] text-[#222222] font-semibold">Featured Categories</h5>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4">
        {/* Category 1 */}
        <div className="w-[300px] text-center relative">
          <div className="relative w-[300px] h-[300px] mx-auto mb-4">
            <img src={border} alt="border" className="absolute inset-0 w-full h-full object-contain z-10" />
            <img
              src={category1}
              alt="category"
              className="absolute inset-0 w-[60%] h-[60%] object-cover m-auto top-0 bottom-0 left-0 right-0 z-0 rounded-full"
            />
          </div>
          <h4 className="text-lg font-semibold text-[#222] mb-2">Sunflower Honey</h4>
          <p className="text-sm text-[#555]">
            Sunflower Honey delivers the delight of the world’s happiest flowers with every spoonful. We proudly source this golden treasure from the beekeepers of Ukraine and Romania.
          </p>
        </div>

        {/* Category 2 */}
        <div className="w-[300px] text-center relative">
          <div className="relative w-[300px] h-[300px] mx-auto mb-4">
            <img src={border} alt="border" className="absolute inset-0 w-full h-full object-contain z-10" />
            <img
              src={category2}
              alt="category"
              className="absolute inset-0 w-[60%] h-[60%] object-cover m-auto top-0 bottom-0 left-0 right-0 z-0 rounded-full"
            />
          </div>
          <h4 className="text-lg font-semibold text-[#222] mb-2">Wildflower Honey</h4>
          <p className="text-sm text-[#555]">
            Wildflower Honey captures the natural aroma of mixed blossoms. Sourced from the most vibrant meadows of Europe, this honey brings a rich floral taste to your table.
          </p>
        </div>

        {/* Category 3 */}
        <div className="w-[300px] text-center relative ">
          <div className="relative w-[300px] h-[300px] mx-auto mb-4">
            <img src={border} alt="border" className="absolute inset-0 w-full h-full object-contain z-10" />
            <img
              src={category3}
              alt="category"
              className="absolute inset-0 w-[60%] h-[60%] object-cover m-auto top-0 bottom-0 left-0 right-0 z-0 rounded-full"
            />
          </div>
          <h4 className="text-lg font-semibold text-[#222] mb-2">Acacia Honey</h4>
          <p className="text-sm text-[#555]">
            Acacia Honey is known for its light color and mild flavor. Harvested from acacia trees, it is perfect for those who love delicate sweetness without overpowering taste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;

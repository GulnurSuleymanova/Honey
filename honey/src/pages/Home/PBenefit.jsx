import React from 'react';
import img from '../../assets/specialityhoney1.webp';


const PBenefit = () => {
  return (
    <div className="py-5 relative">


      <div className="container mx-auto px-4">
        <div className="text-center">
          <h6 className="text-[#7A3E1C] text-[28px] font-semibold mt-3">Product Benefits
          </h6>
          <h5 className="text-[#222222] text-[45px] font-bold pt-3">Speciality of Honey

          </h5>
          <p className="pt-3 max-w-[600px] mx-auto text-base text-gray-700">
            Honey contains mostly sugar, as well as a mix of amino acids, vitamins, minerals, iron, zinc and antioxidants. In addition to its use as a natural sweetener, honey is used as an anti-inflammatory, antioxidant and antibacterial agent.          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start pt-10 gap-10">
          <div className="flex flex-col gap-20 w-full lg:w-1/3">
            <BenefitCard number="01" text="Honey is safer than Sugar" />
            <BenefitCard number="02" text="Honey Combats Skin and
Scalp Infections" />
            <BenefitCard number="03" text="Honey helps Children
Sleep Soundly" />
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src={img} alt="benefit" className="max-w-[300px] lg:max-w-full" />
          </div>

          <div className="flex flex-col gap-20 w-full lg:w-1/3">
            <BenefitCard number="01" text="Honey is Good for your Blood" />
            <BenefitCard number="02" text="Honey is good for Yoga
practitioners" />
            <BenefitCard number="03" text="Honey is Antibacterial
and Antiseptic" />
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitCard = ({ number, text }) => {
  return (
    <div className="pt-8">
      <div className="flex items-center gap-5">
        <p className="text-[#7A3E1C] text-[17px] font-bold text-right max-w-[200px] mb-0">{text}</p>
        <div className="relative w-[100px] h-[50px] bg-[#FCF5E5] flex items-center justify-center">
          <span className="text-[#5b2800] font-bold z-10">{number}</span>
          <div className="absolute top-[-25px] left-0 w-0 h-0 border-l-[50px] border-r-[50px] border-l-transparent border-r-transparent border-b-[25px] border-b-[#FCF5E5]" />
          <div className="absolute bottom-[-25px] left-0 w-0 h-0 border-l-[50px] border-r-[50px] border-l-transparent border-r-transparent border-t-[25px] border-t-[#FCF5E5]" />
        </div>
      </div>
    </div>
  );
};

export default PBenefit;

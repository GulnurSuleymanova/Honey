import React from 'react';
import img from '../../assets/specialityhoney1.webp';
import { useTranslation } from "react-i18next";

const PBenefit = () => {
  const { t } = useTranslation();
  const benefitsLeft = t("benefits.left", { returnObjects: true });
  const benefitsRight = t("benefits.right", { returnObjects: true });

  return (
    <div className="py-5 relative">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h6 className="text-[28px] font-semibold mt-3">{t("benefits.sectionTitle")}</h6>
          <h5 className="text-[45px] font-bold pt-3">{t("benefits.sectionSubtitle")}</h5>
          <p className="pt-3 max-w-[600px] mx-auto text-base">{t("benefits.description")}</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start pt-10 gap-10">
          <div className="flex flex-col gap-20 w-full lg:w-1/3">
            {benefitsLeft.map((item) => (
              <div key={item.number} className="pt-8 flex items-center gap-5">
                <p className="text-[17px] font-bold text-right max-w-[200px] mb-0">{item.text}</p>
                <div className="relative w-[100px] h-[50px] bg-[#eab73f] flex items-center justify-center">
                  <span className="font-bold z-10">{item.number}</span>
                  <div className="absolute top-[-25px] left-0 w-0 h-0 border-l-[50px] border-r-[50px] border-l-transparent border-r-transparent border-b-[25px] border-b-[#eab73f]" />
                  <div className="absolute bottom-[-25px] left-0 w-0 h-0 border-l-[50px] border-r-[50px] border-l-transparent border-r-transparent border-t-[25px] border-t-[#eab73f]" />
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src={img} alt="benefit" className="max-w-[300px] lg:max-w-full" />
          </div>

          <div className="flex flex-col gap-20 w-full lg:w-1/3">
            {benefitsRight.map((item) => (
              <div key={item.number} className="pt-8 flex items-center gap-5">
                <p className="text-[17px] font-bold text-right max-w-[200px] mb-0">{item.text}</p>
                <div className="relative w-[100px] h-[50px] bg-[#eab73f] flex items-center justify-center">
                  <span className="font-bold z-10">{item.number}</span>
                  <div className="absolute top-[-25px] left-0 w-0 h-0 border-l-[50px] border-r-[50px] border-l-transparent border-r-transparent border-b-[25px] border-b-[#eab73f]" />
                  <div className="absolute bottom-[-25px] left-0 w-0 h-0 border-l-[50px] border-r-[50px] border-l-transparent border-r-transparent border-t-[25px] border-t-[#eab73f]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PBenefit;

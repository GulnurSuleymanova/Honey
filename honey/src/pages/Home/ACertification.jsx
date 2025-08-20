import React from 'react';
import img from '../../assets/bn4-1.webp';
import brand1 from '../../assets/brand-1.webp';
import brand2 from '../../assets/brand-2.webp';
import brand3 from '../../assets/brand-3.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';

const ACertification = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <div className="max-w-[1500px] mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center font-medium tracking-wide">
          
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={img}
              className="mx-auto max-w-full h-auto"
              width="700"
              height="500"
              alt="certification-img"
              data-aos="zoom-out-down"
            />
          </div>

          <div className="w-full lg:w-1/2 pt-8 lg:pt-20">
            <div>
              <h6 className="text-[27px] font-semibold mb-2">
                {t("certification.titleSmall")}
              </h6>
              <h3 className="text-[46px] font-semibold mb-3 leading-tight">
                {t("certification.titleBig")}
              </h3>
              <p className="text-shadow-gray-800 mb-6 opacity-80 text-[16px] leading-relaxed">
                {t("certification.desc")}
              </p>

              <div>
                <Swiper
                  grabCursor={true}
                  slidesPerView={3}
                  spaceBetween={10}
                  modules={[Autoplay]}
                  autoplay={{ delay: 1000 }}
                  speed={2000}
                  loop={true}
                >
                  {[brand1, brand2, brand3, brand1, brand2, brand3].map((brand, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full inline-block px-2 pb-8">
                        <div className="bg-white rounded h-[120px] text-center shadow-md p-4 flex items-center justify-center dark:bg-white">
                          <img
                            src={brand}
                            alt={`brand-${index}`}
                            className="w-[80px] h-[80px] object-contain mx-auto"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ACertification;

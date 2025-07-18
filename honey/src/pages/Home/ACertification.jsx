import React from 'react';
import img from '../../assets/bn4-1.webp';
import brand1 from '../../assets/brand-1.webp';
import brand2 from '../../assets/brand-2.webp';
import brand3 from '../../assets/brand-3.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ACertification = () => {
  return (
    <div className="pt-5">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center">

  <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={img}
              className="mx-auto max-w-full h-auto"
              width="700"
              height="500"
              alt="img"
            />
          </div>
          <div className="w-full lg:w-1/2 pt-8 lg:pt-20">
            <div>
              <h6 className="text-[#5B2800] dark:text-[#F9BD17] text-[17px] font-bold mb-2">
                Certified Product
              </h6>
              <h3 className="text-[30px] dark:text-[#A2A8B7] font-semibold mb-3">
                We Are Authentic
              </h3>
              <p className="text-gray-700 dark:text-[#A2A8B7] mb-6">
                Our honey products are tested and certified to meet the highest quality standards.
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
                      <div className="w-full inline-block px-4 pb-10">
                        <div className="bg-white rounded h-[140px] text-center shadow-[13px_15px_30px_0px_rgba(0,0,0,0.2)] p-5 flex items-center justify-center dark:bg-white">
                          <img
                            src={brand}
                            alt={`brand-${index}`}
                            className="w-[90px] h-[90px] object-contain mx-auto"
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

import React from "react";
import test from "../../assets/icon-testimonial.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import quit from '../../assets/quote2.webp'
import avatar1 from '../../assets/avatar-1.webp'
import avatar2 from '../../assets/avatar-2.webp'
import avatar3 from '../../assets/avatar-3.webp'


const Testimonials = () => {
  return (
    <div className="text-center px-8">
      <img src={test} alt="testimonial icon" className="mx-auto mb-4 mt-8" />
      <p className="text-[16px] font-medium text-[#5B2800]">Product Benefits</p>
      <h5 className="text-[24px] font-semibold text-[#222] mb-10">Featured Categories</h5>

      <Swiper
        grabCursor
        slidesPerView={2}
        spaceBetween={20}
        loop
        autoplay={{ delay: 3000 }}
        speed={1000}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className=" max-w-md mx-auto text-left">
          <img src={quit} alt="" />
            <p className="text-sm mb-4">
As a coffee lover, I was a bit skeptical about trying instant coffee, but Botanica's range of instant coffees exceeded my expectations. The taste is so robust and full-bodied, and the convenience is unmatched. I'm definitely a convert now!            </p>
            <div className="flex items-center">
             <img src={avatar1} alt="" className="rounded-3xl border-2 border-dashed"  />
              <div className="ml-3">
                <p className="text-sm font-bold text-green-600 uppercase">Jessica</p>
                <p className="text-xs text-gray-600">From Chicago</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" max-w-md mx-auto text-left">
                      <img src={quit} alt="" />

            <p className="text-sm mb-4">
As a vegetarian, I always miss out on the classic breakfast staple of omelettes. But with Botanica Store's Veg Omelette premix, I can finally enjoy a tasty and protein-packed breakfast option. The mix is easy to use and customize with my favorite veggies.            </p>
            <div className="flex items-center">
                         <img src={avatar2} alt="" className="rounded-3xl border-2 border-dashed" />

              <div className="ml-3">
                <p className="text-sm font-bold text-green-600 uppercase">Mark</p>
                <p className="text-xs text-gray-600">From New York</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" max-w-md mx-auto text-left">
                      <img src={quit} alt="" />

            <p className="text-sm mb-4">
Botanica rice crackers are a staple in my pantry. They are a healthier alternative to traditional crackers and chips, but still satisfy my craving for something spicy and crunchy. Chilli garlic flavor is my personal favorite - it's so delicious!"            </p>
            <div className="flex items-center ">
                          <img src={avatar3} alt="" className="rounded-3xl border-2 border-dashed" />

              <div className="ml-3">
                <p className="text-sm font-bold text-green-600 uppercase">Sophia</p>
                <p className="text-xs text-gray-600">From California</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      
    </div>
  );
};

export default Testimonials;

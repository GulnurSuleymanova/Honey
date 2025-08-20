import React from "react";
import test from "../../assets/icon-testimonial.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import quit from '../../assets/quote2.webp';
import avatar1 from '../../assets/avatar-1.webp';
import avatar2 from '../../assets/avatar-2.webp';
import avatar3 from '../../assets/avatar-3.webp';
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true });

  return (
    <div className="text-center px-8">
      <img src={test} alt="testimonial icon" className="mx-auto mb-4 mt-8" />
      <p className="text-[16px] font-medium ">{t("testimonials.sectionSubtitle")}</p>
      <h5 className="text-[24px] font-semibold  mb-10">{t("testimonials.sectionTitle")}</h5>

      <Swiper
        grabCursor
        slidesPerView={2}
        spaceBetween={20}
        loop
        autoplay={{ delay: 3000 }}
        speed={1000}
        modules={[Autoplay]}
      >
        {testimonials.map((item, index) => {
          const avatar = index === 0 ? avatar1 : index === 1 ? avatar2 : avatar3;
          return (
            <SwiperSlide key={index}>
              <div className=" max-w-md mx-auto text-left">
                <img src={quit} alt="" />
                <p className="text-sm mb-4">{item.text}</p>
                <div className="flex items-center">
                  <img src={avatar} alt="" className="rounded-3xl border-2 border-dashed" />
                  <div className="ml-3">
                    <p className="text-sm font-bold text-green-600 uppercase">{item.name}</p>
                    <p className="text-xs text-gray-600">{item.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;

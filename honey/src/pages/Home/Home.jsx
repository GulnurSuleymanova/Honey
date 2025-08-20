import React, { useEffect } from 'react';
import bee from '../../assets/bee.webp';
import bee2 from '../../assets/bee2.webp';
import WhyChooseUs from './WhyChoossUs';
import ACertification from './ACertification';
import PBenefit from './PBenefit';
import Featured from './Featured';
import BSocial from './BSocial';
import Testimonials from './Testimonials';
import Brend from './Brend';
import Shopbutton from './Shopbutton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // animasiya müddəti
      once: true, // bir dəfə işləsin
      easing: 'ease-in-out', // yumşaq keçid
    });
  }, []);

  return (
    <>
      <div className="relative w-full -mt-32 z-10">
        <div
          className="relative home-hero w-full h-[110vh] pt-[250px]"
        >
          <div className="container mx-auto px-8">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 text-start">
                <h5 className="text-[30px] mb-3  font-medium tracking-wide mx-24" data-aos="fade-right">
                  {t('home.0')}

                </h5>
                <h3
                  className=" text-[60px] leading-[1.2em] mb-[42px] font-medium tracking-wide mx-24"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  {t('home.1')}
                </h3>
              </div>

              <div className="relative w-full md:w-2/3 flex justify-center items-center">
                <div className="absolute left-30 top-7 z-20">
                  <div data-aos="fade-down">
                    <img src={bee} alt="bee" className="max-w-[120px]" />
                  </div>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="herohoney w-[900px] h-[800px] bg-contain bg-no-repeat bg-center mx-auto -mt-30"
                />


                <div
                  className="absolute right-[-40px] bottom-[450px] animate-spin-slow transform -translate-x-1/2 -translate-y-1/2"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <img src={bee2} alt="bee2" className="max-w-[80px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up"><WhyChooseUs /></div>
      <div data-aos="fade-up" data-aos-delay="100"><ACertification /></div>
      <div data-aos="fade-up" data-aos-delay="400"><PBenefit /></div>
      <div ><Featured /></div>
      <div data-aos="fade-up" data-aos-delay="80"><Testimonials /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Shopbutton /></div>
      <div data-aos="fade-up" data-aos-delay="120"><BSocial /></div>
      <div data-aos="fade-up" data-aos-delay="140"><Brend /></div>
    </>
  );
};

export default Home;

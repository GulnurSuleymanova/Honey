import React, { useEffect } from 'react';
import hero_slider1 from '../../assets/honey1.webp';
import bee from '../../assets/bee.webp';
import bee2 from '../../assets/bee2.webp';
import slideBackground from '../../assets/slide4-2.webp';
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

const Home = () => {
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
          className="relative bg-cover bg-center bg-no-repeat w-full h-[110vh] pt-[250px]"
          style={{ backgroundImage: `url(${slideBackground})` }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 text-start">
                <h5 className="text-[30px] mb-3 text-[#151418] font-medium tracking-wide" data-aos="fade-right">
                  Fresh Organic
                </h5>
                <h3
                  className="text-[#151418] text-[60px] leading-[1.2em] mb-[42px] font-medium tracking-wide"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Mint Blossom <br /> Honey
                </h3>
              </div>

              <div className="relative w-full md:w-2/3 flex justify-center items-center">
                {/* Bee - yuxarıdan enir */}
                <div className="absolute left-30 top-7 z-20">
                  <div data-aos="fade-down">
                    <img src={bee} alt="bee" className="max-w-[120px]" />
                  </div>
                </div>

                {/* Əsas şəkil - zoom effekti */}
                <div data-aos="zoom-in" data-aos-delay="300">
                  <img
                    src={hero_slider1}
                    className="mx-auto img-fluid max-w-full hero_img"
                    alt="Hero"
                    loading="lazy"
                  />
                </div>

                {/* İkinci arı - aşağıdan gəlir və fırlanır */}
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

      {/* Digər bölmələrə də maraqlı animasiyalar əlavə etdim */}
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

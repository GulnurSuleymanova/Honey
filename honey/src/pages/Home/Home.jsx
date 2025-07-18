import React from 'react';
import hero_slider1 from '../../assets/honey1.webp';
import bee from '../../assets/bee.webp';
import bee2 from '../../assets/bee2.webp';
import slideBackground from '../../assets/slide4-3.webp';
import WhyChooseUs from './WhyChoossUs';
import ACertification from './ACertification';
import PBenefit from './PBenefit';

const Home = () => {
  return (
    <>
      <div className="relative w-full ">
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full h-[110vh] pt-[250px]"
          style={{ backgroundImage: `url(${slideBackground})` }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 text-start">
                <h5 className="text-[30px] mb-3 dark:text-[#FABE17]">
                  Welcome to our Honey Shop
                </h5>
                <h3 className="text-[60px] leading-[1.2em] text-[#151418] dark:text-[#FABE17]">
                  Pure Natural <br /> Organic Honey
                </h3>
                <div className="pt-5">
                </div>
              </div>

              <div className="relative w-full md:w-2/3 flex justify-center items-center">
                <div className="absolute left-10 animate-bounce">
                  <img src={bee} alt="bee" />
                </div>
                <img
                  src={hero_slider1}
                  className="mx-auto img-fluid max-w-full hero_img"
                  alt="Hero"
                  loading="lazy"
                />
                <div className="absolute right-[-40px] bottom-[450px] animate-spin-slow transform -translate-x-1/2 -translate-y-1/2">
                  <img src={bee2} alt="bee2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <ACertification />
            <PBenefit />

    </>
  );
};

export default Home;

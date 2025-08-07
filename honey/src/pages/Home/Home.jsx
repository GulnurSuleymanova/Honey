import React from 'react';
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

const Home = () => {
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
                <h5 className="text-[30px] mb-3 text-[#151418] font-medium tracking-wide">
                  Fresh Organic
                </h5>
  <h3 className="text-[#151418] text-[60px] leading-[1.2em] mb-[42px] font-medium tracking-wide">
  Mint Blossom <br /> Honey
</h3>



                <div className="pt-5"></div>
              </div>

              <div className="relative w-full md:w-2/3 flex justify-center items-center">
                <div className="absolute left-30 top-7">
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
      <Featured />
      <Testimonials />
      <Shopbutton />
      <BSocial />
      <Brend />
    </>
  );
};

export default Home;

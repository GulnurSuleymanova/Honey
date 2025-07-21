import React from 'react'
import slide4 from '../../assets/slide4.webp'

const Shopbutton = () => {
  return (
    <div className="mt-20">
 <div
  style={{ backgroundImage: `url(${slide4})` }}
  className="relative bg-cover bg-center bg-no-repeat xl:h-[680px] md:h-[550px] h-[420px] flex justify-center items-center"
>
  {/* Overlay div - yarı şəffaf tünd fon, şəklin üstündədir */}
  <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}></div>

  {/* Content - overlay-dən yuxarıda göstərilir */}
  <div className="relative z-10 w-full max-w-[1200px] px-4 text-center">
    <div className="animate-fadeInUp space-y-4">
      <h4 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Special Offer
      </h4>
      <p className="text-white text-xl md:text-3xl lg:text-4xl font-semibold">
        Raw Sunflower Honey
      </p>
      <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
        We proudly source this golden treasure from the <br className="hidden md:block" />
        beekeepers of Ukraine and Romania
      </p>
      <a
        href="#"
        className="inline-block mt-6 px-8 py-3 bg-white text-black rounded-full text-sm md:text-base font-semibold shadow-lg hover:bg-yellow-200 transition duration-300"
      >
        Shop Now
      </a>
    </div>
  </div>
</div>


    </div>
  )
}

export default Shopbutton

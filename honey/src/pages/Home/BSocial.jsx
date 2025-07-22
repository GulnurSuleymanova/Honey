import { FaInstagram } from "react-icons/fa";
import img1 from "../../assets/gallerry1.webp";
import img2 from "../../assets/gallerry2.webp";
import img3 from "../../assets/gallerry3.webp";
import img4 from "../../assets/gallerry4.webp";
import img5 from "../../assets/gallerry5.webp";
import img6 from "../../assets/gallerry6.webp";
import test from "../../assets/icon-testimonial.webp";

const BSocial = () => {
  return (
    <div className="pt-[100px] bg-white dark:bg-white">
                    <img src={test} alt="testimonial icon" className="mx-auto mb-4" />

      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pb-6">
          <div className="w-full lg:w-1/4 relative group overflow-hidden rounded-[20px]">
            <img
              src={img1}
              alt="gallery1"
              className="w-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center text-white text-[40px] opacity-0 group-hover:opacity-100">
              <FaInstagram />
            </div>
          </div>

          <div className="text-center w-full lg:w-1/2">
            <h5 className="text-[35px] text-[#222] font-semibold pb-2">
              Let's Bee Social
            </h5>
            <p className="text-[#434343]">@botanica</p>
            <p className="text-[#434343]">Share your style: #botanica</p>
            <p className="text-[#434343]">Share your pup’s style: #botanica</p>
          </div>

          <div className="w-full lg:w-1/4 relative group overflow-hidden rounded-[20px]">
            <img
              src={img2}
              alt="gallery2"
              className="w-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center text-white text-[40px] opacity-0 group-hover:opacity-100">
<FaInstagram />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-1/2 md:w-1/4 relative group overflow-hidden rounded-[20px]">
            <img
              src={img3}
              alt="gallery3"
              className="w-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center text-white text-[40px] opacity-0 group-hover:opacity-100">
              <FaInstagram />
            </div>
          </div>

          <div className="w-1/2 md:w-1/4 relative group overflow-hidden rounded-[20px]">
            <img
              src={img4}
              alt="gallery4"
              className="w-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center text-white text-[40px] opacity-0 group-hover:opacity-100">
              <FaInstagram />
            </div>
          </div>

          <div className="w-1/2 md:w-1/4 relative group overflow-hidden rounded-[20px]">
            <img
              src={img5}
              alt="gallery5"
              className="w-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center text-white text-[40px] opacity-0 group-hover:opacity-100">
              <FaInstagram />
            </div>
          </div>

          <div className="w-1/2 md:w-1/4 relative group overflow-hidden rounded-[20px]">
            <img
              src={img6}
              alt="gallery6"
              className="w-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center text-white text-[40px] opacity-0 group-hover:opacity-100">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSocial;

import bgImage from "../assets/slider4.webp";
import shopslider1 from "../assets/vegetables-shop.webp";
import shopslider2 from "../assets/bee-cate-shop.webp";
import shopslider3 from "../assets/coffee-shop.webp";
import shopslider4 from "../assets/drinks-shop.webp";
import shopslider5 from "../assets/Fresh_Fruit-shop.webp";
import shopslider6 from "../assets/Meats-shop.webp";

const Shop = () => {
  return (
    <div>
      <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center">
          <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">
            Shop
          </h1>
        </div>
      </section>

      <section className="flex justify-center items-center gap-6 py-12 -mt-30">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md hover:scale-105 transition-all">
          <img
            className="w-full h-full object-cover"
            src={shopslider1}
            alt="Vegetables Shop"
          />
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md hover:scale-105 transition-all">
          <img
            className="w-full h-full object-cover"
            src={shopslider2}
            alt="Bee Cate Shop"
          />
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md hover:scale-105 transition-all">
          <img
            className="w-full h-full object-cover"
            src={shopslider3}
            alt="Coffee Shop"
          />
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md hover:scale-105 transition-all">
          <img
            className="w-full h-full object-cover"
            src={shopslider4}
            alt="Drinks Shop"
          />
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md hover:scale-105 transition-all">
          <img
            className="w-full h-full object-cover"
            src={shopslider5}
            alt="Fresh Fruit Shop"
          />
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md hover:scale-105 transition-all">
          <img
            className="w-full h-full object-cover"
            src={shopslider6}
            alt="Meats Shop"
          />
        </div>
      </section>
    </div>
  );
};

export default Shop;

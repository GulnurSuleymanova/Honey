import React from "react";
import { useAddtocard } from "../context/AddtocardContext";
import bgImage from "../assets/slider4.webp";
import bee from "../assets/icon-footer.png";

const Addtocard = () => {
  const { addtocard, removeFromAddtocard } = useAddtocard();

  if (addtocard.length === 0) {
    return <p className="text-center mt-10 text-lg">Səbət boşdur</p>;
  }

  return (
    <>
      <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center gap-4">
          <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">
          Card
          </h1>
          <img src={bee} alt="Bee" className="w-26" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col gap-6">
          {addtocard.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between 
                border-l border-l-amber-400
                border-r border-r-amber-400  
                hover:border-amber-400 hover:border
                rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.images?.[0]?.url}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-amber-600 font-semibold">{product.price} AZN</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="text-red-600 hover:text-red-800 font-bold text-xl px-3"
                  onClick={() => removeFromAddtocard(product.id)}
                  title="Səbətdən sil"
                >
                  &times;
                </button>
                    <button
                  
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  onClick={() => {
                    alert(`"${product.name}" sifariş edildi!`);
                  }}
                >
                  Sifariş et
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Addtocard;

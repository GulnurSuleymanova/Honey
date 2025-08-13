import React from "react";
import { useAddtocard } from "../context/AddtocardContext";
import bgImage from "../assets/slider4.webp";
import bee from "../assets/icon-footer.png";

const Addtocard = () => {
  const { addtocard, removeFromAddtocard, updateQuantity } = useAddtocard();

  if (addtocard.length === 0) {
    return <p className="text-center mt-10 text-lg">Səbət boşdur</p>;
  }

  // Ümumi qiyməti hesablayırıq
  const totalPrice = addtocard.reduce(
    (acc, product) => acc + product.price * (product.quantity || 1),
    0
  );

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
                  <p className="text-amber-600 font-semibold">
                    {product.price} AZN
                  </p>
                  <p className="text-gray-500 text-sm">
                    Cəmi: {(product.price * (product.quantity || 1)).toFixed(2)} AZN
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Sayı azalt */}
                <button
                  onClick={() =>
                    updateQuantity(product.id, (product.quantity || 1) - 1)
                  }
                  disabled={product.quantity <= 1}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>

                {/* Cari say */}
                <span className="font-bold">{product.quantity || 1}</span>

                {/* Sayı artır */}
                <button
                  onClick={() =>
                    updateQuantity(product.id, (product.quantity || 1) + 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>

                {/* Səbətdən sil */}
                <button
                  className="text-red-600 hover:text-red-800 font-bold text-xl px-3"
                  onClick={() => removeFromAddtocard(product.id)}
                  title="Səbətdən sil"
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ümumi qiymət */}
        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold">
            Ümumi: {totalPrice.toFixed(2)} AZN
          </h2>
        </div>
      </div>
    </>
  );
};

export default Addtocard;

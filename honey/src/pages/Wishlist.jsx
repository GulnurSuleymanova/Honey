import React from "react";
import { useWishlist } from "../context/WishlistContext";
import bgImage from "../assets/slider4.webp";
import bee from "../assets/icon-footer.png";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return <p className="text-center mt-10 text-lg">Wishlist boşdur</p>;
  }

  return (
    <>
      <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center gap-4">
          <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">
            Wishlist
          </h1>
          <img src={bee} alt="Bee" className="w-26" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between 
                border-l border-l-amber-400
                border-r border-r-amber-400  
                hover:border-amber-400  hover:border
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
                  className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
                  onClick={() => {
                    alert(`"${product.name}" cart-a əlavə olundu!`);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="text-red-600 hover:text-red-800 font-bold text-xl px-3"
                  onClick={() => removeFromWishlist(product.id)}
                  title="Remove from wishlist"
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;

import React from "react";
import { useParams} from "react-router-dom";
import { useGetProductByIdQuery } from "../store/shopApi";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import bgImage from "../assets/slider4.webp";
import { useAddtocard } from "../context/AddtocardContext";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return <p className="text-center text-red-500">Product ID not specified.</p>;

  const { data: item, isLoading, error } = useGetProductByIdQuery(id);

  const { toggleAddtocard, addtocard } = useAddtocard();
  const { toggleWishlist, wishlist } = useWishlist();

  const handleAddtocardClick = (e, product) => {
    e.stopPropagation();
    const isInAddtocard = addtocard.some(p => p._id === product._id);
    toggleAddtocard(product);
    toast[isInAddtocard ? "info" : "success"](
      `"${product.name}" ${isInAddtocard ? "səbətdə artıq var" : "səbətə əlavə olundu"}`
    );
  };

  const handleWishlistClick = (e, product) => {
    e.stopPropagation();
    const isInWishlist = wishlist.some(p => p._id === product._id);
    toggleWishlist(product);
    toast[isInWishlist ? "info" : "success"](
      `"${product.name}" ${isInWishlist ? "wishlistdən silindi" : "wishlistə əlavə olundu"}`
    );
  };

  if (error) {
    return <p className="text-center text-red-500">Error loading product.</p>;
  }

  return (
    <>
      <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center">
          <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">
            Details
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-amber-600 hover:text-amber-800 font-semibold mb-6"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Shop
        </button>

        {isLoading ? (
          <p className="text-center text-gray-500 text-lg">Loading...</p>
        ) : !item ? (
          <p className="text-center text-red-500 text-lg">Product not found.</p>
        ) : (
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 bg-white rounded-3xl shadow-lg p-6 flex justify-center items-center relative">
              <img
                src={item.images?.[0]?.url || item.image}
                alt={item.name}
                className="max-h-96 object-contain rounded-xl"
              />
              <div
                className="absolute top-4 right-4 w-11 h-11 bg-amber-50/95 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                onClick={(e) => handleWishlistClick(e, item)}
              >
                <Heart
                  className={`w-5 h-5 transition-all duration-200 ${
                    wishlist.some(p => p._id === item._id)
                      ? "text-red-500 fill-red-500"
                      : "text-amber-700 hover:text-red-500 hover:fill-red-500"
                  }`}
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-extrabold mb-4 text-amber-600">
                  {item.name}
                </h1>
                <p className="text-3xl font-bold text-gray-900 mb-6">
                  {item.price} AZN
                </p>
                {item.description ? (
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                ) : (
                  <p className="text-gray-400">No description available.</p>
                )}
              </div>

              <button
                onClick={(e) => handleAddtocardClick(e, item)}
                className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;

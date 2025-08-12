import React, { useState } from "react";
import bgImage from "../assets/slider4.webp";
import shopslider1 from "../assets/vegetables-shop.webp";
import shopslider2 from "../assets/bee-cate-shop.webp";
import shopslider3 from "../assets/coffee-shop.webp";
import shopslider4 from "../assets/drinks-shop.webp";
import shopslider5 from "../assets/Fresh_Fruit-shop.webp";
import shopslider6 from "../assets/Meats-shop.webp";
import { useGetAllProductQuery, useGetCategoriesQuery } from "../store/shopApi";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-toastify";

const Shop = () => {
  const { toggleWishlist, wishlist } = useWishlist();

  const { data: categoryData = [], isLoading: isCategoryLoading } = useGetCategoriesQuery();
  const { data: productData = [], isLoading: isProductLoading } = useGetAllProductQuery();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState({ min: "", max: "" });
  const [searchTerm, setSearchTerm] = useState(""); // Search
  const navigate = useNavigate();

  const openDetails = (productId) => {
    navigate(`/details/${productId}`);
  };

  const toggleCategory = (categoryName) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryName)
        ? prevSelected.filter((c) => c !== categoryName)
        : [...prevSelected, categoryName]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes((prevSelected) =>
      prevSelected.includes(size)
        ? prevSelected.filter((s) => s !== size)
        : [...prevSelected, size]
    );
  };

  const toggleColors = (color) => {
    setSelectedColors((prevSelected) =>
      prevSelected.includes(color)
        ? prevSelected.filter((k) => k !== color)
        : [...prevSelected, color]
    );
  };

  const uniqueSizes = [...new Set(productData.flatMap((product) => product.sizes || []))];
  const uniqueColors = [...new Set(productData.flatMap((product) => product.colors || []))];


const handleWishlistClick = (e, product) => {
  e.stopPropagation();

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  toggleWishlist(product);

  if (!isInWishlist) {
    toast.success(`"${product.name}" wishliste əlavə olundu.`);
  } else {
    toast(`"${product.name}" wishlistdən silindi.`);
  }
};
  return (
    <>
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

      <section className="flex justify-center items-center gap-6 py-12 -mt-30 flex-wrap">
        {[shopslider1, shopslider2, shopslider3, shopslider4, shopslider5, shopslider6].map(
          (img, index) => (
            <div
              key={index}
              className="w-32 h-32 rounded-full overflow-hidden shadow-md hover:scale-105 transition-all"
            >
              <img className="w-full h-full object-cover" src={img} alt={`Shop ${index}`} />
            </div>
          )
        )}
      </section>

      <section className="flex">
        <div className="shop_filters mx-20 w-1/6">
          <div className="mb-6 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-[#7A3E1C] rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 placeholder-gray-400 text-gray-700 font-medium"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A3E1C] w-5 h-5" />
          </div>

          <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10">
            <p className="text-xl font-semibold tracking-wide text-[#7A3E1C]">Categories</p>
            <hr className="mt-2 border-[#7A3E1C]" />
            <div className="pt-4 flex flex-col gap-3">
              {isCategoryLoading ? (
                <p className="text-gray-500 text-sm text-center">Loading...</p>
              ) : (
                categoryData.map((item, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer select-none transition-all"
                  >
                    <input
                      type="checkbox"
                      value={item.name}
                      checked={selectedCategories.includes(item.name)}
                      onChange={() => toggleCategory(item.name)}
                      className="accent-orange-600 w-4 h-4"
                    />
                    <span
                      className={`text-sm tracking-wide ${
                        selectedCategories.includes(item.name)
                          ? "text-orange-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </span>
                  </label>
                ))
              )}
            </div>
          </div>

          <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10">
            <h5
              className="text-xl font-semibold tracking-wide text-[#7A3E1C] cursor-pointer flex justify-between items-center pb-4 select-none"
            >
              Price
            </h5>
            <div className="relative pt-4">
              <div className="h-2 rounded-full bg-white border border-[#ababab] relative z-10">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={selectedPrice.min || 0}
                  onChange={(e) =>
                    setSelectedPrice((prev) => ({
                      ...prev,
                      min: Math.min(Number(e.target.value), prev.max || 1000),
                    }))
                  }
                  className="absolute w-full h-2 appearance-none pointer-events-auto z-20 bg-transparent"
                  style={{ top: 0, left: 0 }}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={selectedPrice.max || 100}
                  onChange={(e) =>
                    setSelectedPrice((prev) => ({
                      ...prev,
                      max: Math.max(Number(e.target.value), prev.min || 0),
                    }))
                  }
                  className="absolute w-full h-2 appearance-none pointer-events-auto z-20 bg-transparent"
                  style={{ top: 0, left: 0 }}
                />
                <div
                  className="absolute h-2 rounded-full bg-amber-400 border border-amber-400 top-0"
                  style={{
                    left: `${(selectedPrice.min / 100) * 100}%`,
                    right: `${100 - (selectedPrice.max / 100) * 100}%`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs font-semibold text-gray-600 mt-2 select-none">
                <span>{selectedPrice.min ?? 0} AZN</span>
                <span>{selectedPrice.max ?? 100} AZN</span>
              </div>
            </div>
          </div>

          <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10">
            <p className="text-xl font-semibold tracking-wide text-[#7A3E1C]">Sizes</p>
            <hr className="mt-2 border-[#7A3E1C]" />
            <div className="pt-4 flex flex-col gap-3">
              {isProductLoading ? (
                <p className="text-gray-500 text-sm text-center">Loading...</p>
              ) : uniqueSizes.length === 0 ? (
                <p className="text-gray-500 text-sm">No sizes found.</p>
              ) : (
                uniqueSizes.map((size, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer select-none transition-all"
                  >
                    <input
                      type="checkbox"
                      value={size}
                      checked={selectedSizes.includes(size)}
                      onChange={() => toggleSize(size)}
                      className="accent-orange-600 w-4 h-4"
                    />
                    <span
                      className={`text-sm tracking-wide ${
                        selectedSizes.includes(size)
                          ? "text-orange-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {size}
                    </span>
                  </label>
                ))
              )}
            </div>
          </div>

          <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10">
            <p className="text-xl font-semibold tracking-wide text-[#7A3E1C]">Colors</p>
            <hr className="mt-2 border-[#7A3E1C]" />
            <div className="pt-4 flex flex-wrap gap-3">
              {isProductLoading ? (
                <p className="text-gray-500 text-sm text-center">Loading...</p>
              ) : uniqueColors.length === 0 ? (
                <p className="text-gray-500 text-sm">No colors found.</p>
              ) : (
                uniqueColors.map((color, index) => {
                  const isSelected = selectedColors.includes(color);
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => toggleColors(color)}
                      title={color}
                      className={`
                        w-8 h-8 rounded-full border-2 
                        transition 
                        ${isSelected ? 'border-amber-500 ring-2 ring-amber-400' : 'border-gray-300'}
                        focus:outline-none
                        cursor-pointer
                        `}
                      style={{ backgroundColor: color }}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>

        <div className="w-4/5 mr-30 mb-10">
          {isProductLoading ? (
            <p className="text-gray-600 text-center text-lg">Loading products...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productData
                .filter(({ category, sizes = [], colors = [], price, name }) => {
                  const priceValue = Number(price) || 0;
                  const minPrice = selectedPrice.min !== "" ? Number(selectedPrice.min) : null;
                  const maxPrice = selectedPrice.max !== "" ? Number(selectedPrice.max) : null;
                  const searchValue = searchTerm.trim().toLowerCase();

                  const categoryName = typeof category === "string" ? category : category?.name;

                  return (
                    (selectedCategories.length === 0 || selectedCategories.includes(categoryName)) &&
                    (selectedSizes.length === 0 || sizes.some(size => selectedSizes.includes(size))) &&
                    (selectedColors.length === 0 || colors.some(color => selectedColors.includes(color))) &&
                    (minPrice === null || priceValue >= minPrice) &&
                    (maxPrice === null || priceValue <= maxPrice) &&
                    (searchValue === "" || (name || "").toLowerCase().includes(searchValue))
                  );
                })
                .map((product, index) => (
                  <div
                    key={index}
                    onClick={() => openDetails(product.id)}
                    className="group rounded-3xl overflow-hidden shadow-lg cursor-pointer border-2 border-transparent border-r-amber-400 border-l-amber-400 hover:border-amber-400 "
                  >
                    <div className="relative aspect-[4/3] overflow-hidden p-4 bg-white">
                      <img
                        src={product.images?.[0]?.url}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                      <div
                        className="absolute top-4 right-4 w-11 h-11 bg-amber-50/95 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                        onClick={(e) => handleWishlistClick(e, product)}
                        title={
                          wishlist.some((item) => item.id === product.id)
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                      >
                        <Heart
                          className={`w-5 h-5 transition-all duration-200 ${
                            wishlist.some((item) => item.id === product.id)
                              ? "text-red-500 fill-red-500"
                              : "text-amber-700 hover:text-red-500 hover:fill-red-500"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="font-bold text-xl text-gray-900 mb-2 ">
                          {product.name}
                        </h3>

                        <div className="flex items-center gap-1 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 text-amber-400 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-amber-600 ml-1">(4.5)</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-amber-600">
                            {product.price} AZN
                          </span>

                          <button className="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-2xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl">
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Shop;

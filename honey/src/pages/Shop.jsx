import React, { useState } from "react";
import bgImage from "../assets/slider4.webp";
import shopslider1 from "../assets/vegetables-shop.webp";
import shopslider2 from "../assets/bee-cate-shop.webp";
import shopslider3 from "../assets/coffee-shop.webp";
import shopslider4 from "../assets/drinks-shop.webp";
import shopslider5 from "../assets/Fresh_Fruit-shop.webp";
import shopslider6 from "../assets/Meats-shop.webp";
import { useGetAllProductQuery, useGetCategoriesQuery } from "../store/shopApi";
import { Heart, ShoppingCart } from "lucide-react";

const Shop = () => {
  const { data: categoryData = [], isLoading: isCategoryLoading } = useGetCategoriesQuery();
  const { data: productData = [], isLoading: isProductLoading } = useGetAllProductQuery();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState({ min: "", max: "" });

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

  const uniqueSizes = [
    ...new Set(
      productData.flatMap((product) => product.sizes || [])
    ),
  ];
  const uniqueColors = [
    ...new Set(
      productData.flatMap((product) => product.colors || [])
    ),
  ];

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
          {/* Categories */}
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
                      className={`text-sm tracking-wide ${selectedCategories.includes(item.name)
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
 {/* Price Filter */}
          <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10">
            <p className="text-xl font-semibold tracking-wide text-[#7A3E1C]">Price</p>
            <hr className="mt-2 border-[#7A3E1C]" />
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Min:</label>
                <input
                  type="number"
                  min="0"
                  value={selectedPrice.min}
                  onChange={(e) =>
                    setSelectedPrice((prev) => ({ ...prev, min: e.target.value }))
                  }
                  className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Minimum price"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Max:</label>
                <input
                  type="number"
                  min="0"
                  value={selectedPrice.max}
                  onChange={(e) =>
                    setSelectedPrice((prev) => ({ ...prev, max: e.target.value }))
                  }
                  className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Maximum price"
                />
              </div>
            </div>
            </div>
          {/* Sizes */}
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
                      className={`text-sm tracking-wide ${selectedSizes.includes(size)
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

          {/* Colors */}
          <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10">
            <p className="text-xl font-semibold tracking-wide text-[#7A3E1C]">Colors</p>
            <hr className="mt-2 border-[#7A3E1C]" />
            <div className="pt-4 flex flex-col gap-3">
              {isProductLoading ? (
                <p className="text-gray-500 text-sm text-center">Loading...</p>
              ) : uniqueColors.length === 0 ? (
                <p className="text-gray-500 text-sm">No colors found.</p>
              ) : (
                uniqueColors.map((color, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer select-none transition-all"
                  >
                    <input
                      type="checkbox"
                      value={color}
                      checked={selectedColors.includes(color)}
                      onChange={() => toggleColors(color)}
                      className="accent-orange-600 w-4 h-4"
                    />
                    <span
                      className={`text-sm tracking-wide ${selectedColors.includes(color)
                        ? "text-orange-600 font-medium"
                        : "text-gray-700"
                        }`}
                    >
                      {color}
                    </span>
                  </label>
                ))
              )}
            </div>
          </div>

         
        </div>

        {/* Products List */}
        <div className="w-4/5 mr-30">
          {isProductLoading ? (
            <p className="text-gray-600 text-center text-lg">Loading products...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productData
                .filter(({ category, sizes = [], colors = [], price }) =>
                  (selectedCategories.length === 0 || selectedCategories.includes(category)) &&
                  (selectedSizes.length === 0 || sizes.some(size => selectedSizes.includes(size))) &&
                  (selectedColors.length === 0 || colors.some(color => selectedColors.includes(color))) &&
                  (selectedPrice.min === "" || price >= Number(selectedPrice.min)) &&
                  (selectedPrice.max === "" || price <= Number(selectedPrice.max))
                )
                .map((product, index) => (
                  <div
                    key={index}
                    className="group rounded-3xl overflow-hidden shadow-lg cursor-pointer border-2 border-transparent hover:border-r-amber-400 hover:border-l-amber-400"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden p-4 bg-white">
                      <img
                        src={product.images?.[0]?.url}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-4 right-4 w-11 h-11 bg-amber-50/95 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-amber-700 hover:text-red-500 hover:fill-red-500 transition-all duration-200" />
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
                              <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
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

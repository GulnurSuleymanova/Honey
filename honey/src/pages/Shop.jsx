import React, { useState } from "react";
import bgImage from "../assets/slider4.webp";
import shopslider1 from "../assets/vegetables-shop.webp";
import shopslider2 from "../assets/bee-cate-shop.webp";
import shopslider3 from "../assets/coffee-shop.webp";
import shopslider4 from "../assets/drinks-shop.webp";
import shopslider5 from "../assets/Fresh_Fruit-shop.webp";
import shopslider6 from "../assets/Meats-shop.webp";
import { useGetAllProductQuery, useGetCategoriesQuery } from "../store/shopApi";

const Shop = () => {
  const { data: categoryData = [], isLoading: isCategoryLoading } = useGetCategoriesQuery();
  const { data: productData = [], isLoading: isProductLoading } = useGetAllProductQuery();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

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

  const toggleColors = (colors) => {
    setSelectedColors((prevSelected) =>
      prevSelected.includes(colors)
        ? prevSelected.filter((k) => k !== colors)
        : [...prevSelected, colors]
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

      <div className="shop_filters mx-20  w-1/6 ">
        <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10 ">
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
        <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10 ">
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
        <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10 ">
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

    </>
  );
};

export default Shop;

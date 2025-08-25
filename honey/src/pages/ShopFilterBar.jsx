import React from "react";

const ShopFilterBar = ({
  viewType,
  setViewType,
  sortBy,
  setSortBy,
  filteredCount,
  totalCount,
}) => {
  const sortOptions = [
    { label: "Default sorting", value: "default" },
    { label: "Name A → Z", value: "name-asc" },
    { label: "Name Z → A", value: "name-desc" },
    { label: "Price low → high", value: "price-asc" },
    { label: "Price high → low", value: "price-desc" },
  ];

  return (
    <div className="flex items-center category-top-bar mb-[30px]">
      <div className="woocommerce-notices-wrapper"></div>

      <div className="flex justify-center items-center">
        {/* Grid/List toggle */}
        <div className="grid-list flex justify-center items-center text-center mr-7 text-lg text-[color:var(--rbb-general-button-color)]">
          <span
            className={`grid_3 w-[46px] h-[46px] leading-[50px] mr-1.5 rounded ${
              viewType === "grid_3" ? "active" : ""
            }`}
            onClick={() => setViewType("grid_3")}
          >
            <i className="rbb-icon-view-grid-2"></i>
          </span>
          <span
            className={`grid_2 w-[46px] h-[46px] leading-[50px] mr-1.5 rounded ${
              viewType === "grid_2" ? "active" : ""
            }`}
            onClick={() => setViewType("grid_2")}
          >
            <i className="rbb-icon-view-grid-1"></i>
          </span>
          <span
            className={`list w-[46px] h-[46px] leading-[50px] rounded ${
              viewType === "list" ? "active" : ""
            }`}
            onClick={() => setViewType("list")}
          >
            <i className="rbb-icon-view-list-2"></i>
          </span>
        </div>

        {/* Showing count */}
        <p className="woocommerce-result-count mb-0 text-xs">
          Showing {filteredCount} of {totalCount} results
        </p>
      </div>

      {/* Sorting dropdown */}
      <div className="ml-auto mr-0">
        <select
          className="h-[46px] min-w-[165px] px-4 rounded border border-gray-300 cursor-pointer text-sm font-medium"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortOptions.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ShopFilterBar;

import React from "react";

const FiltersSection = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-sm text-gray-600">Showing 1-9 of 16 results</p>

      <div className="flex space-x-2">
        <select className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600 bg-white">
          <option>Filters</option>
          <option>Category</option>
          <option>Price</option>
          <option>Brand</option>
        </select>

        <select className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600 bg-white">
          <option>Sort by popularity</option>
          <option>Sort by price</option>
          <option>Sort by rating</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersSection;

import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center border-2 border-red-500 rounded-full p-1 w-80">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter your zipcode"
          className="px-4 py-2 rounded-full outline-none text-gray-600 flex-grow"
        />
        {/* Button */}
        <button className="bg-red-500 text-white px-6 py-2 rounded-full ml-2">
          Find
        </button>
      </div>
      <p>Enter your zip code to discover products and offers available near you.</p>
    </>
  );
};

export default SearchBar;
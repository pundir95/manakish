import React from "react";
import SearchBar from "./SearchBar";

const HeaderSection = () => {
  return (
    <div>
      <h1 className="font-bebas-neue text-[78px] font-bold leading-[78px] text-left text-customRed">
        Freshly Baked Delights,
      </h1>
      <h1 className="font-bebas-neue text-[78px] font-bold leading-[78px] text-left text-customBlack">
        Crafted with Love ,
      </h1>
      {/* add header section data here */}
      <SearchBar />
    </div>
  );
};

export default HeaderSection;

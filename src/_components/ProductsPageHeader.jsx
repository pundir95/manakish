import React from "react";

const ProductsPageHeader = () => {
  return (
    <div>
      <div className="h-[500px] flex flex-col justify-center items-center text-center" style={{ background: "linear-gradient(95.58deg, #FFFAF4 0%, #FFDC83 99.47%)" }}>
        <h1 className="uppercase font-bebas-neue text-[50px] font-bold leading-[78px] text-customRed">
          Discover Our{" "}
          <span className="uppercase font-bebas-neue text-[50px] font-bold leading-[78px] text-customBlack">
            Delicious categories,
          </span>
        </h1>
        <p>
          This adds a more inviting tone, encouraging exploration with a focus
          on the delicious offerings.
        </p>
        {/* add header section data here */}
      </div>
    </div>
  );
};

export default ProductsPageHeader;

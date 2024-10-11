import React from "react";

const HomePageBanner = () => {
  return (
    <>
      <div className="bg-[url('/images/banner.png')] bg-cover bg-center h-80 flex items-center justify-center text-center">
        <div className="text-white"> {/* Add text color for contrast */}</div>
      </div>
    </>
  );
};

export default HomePageBanner;

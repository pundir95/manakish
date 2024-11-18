import React from "react";

const LeftSection = () => {
  return (
    <div className="max-w-[50vw] relative">
      <img
        src="/images/homeLeft.png"
        alt="Manakish Stories"
        className="min-h-full"
      />
      <div className="absolute top-[30px] left-[50px] w-[15vw] h-[5vw]">
        <img
          src="/images/Logo.png"
          alt="Manakish Stories"
          className="min-h-full"
        />
      </div>
    </div>
  );
};

export default LeftSection;

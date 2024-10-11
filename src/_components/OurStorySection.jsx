import Image from "next/image";
import React from "react";

const OurStorySection = () => {
  return (
    <>
      <section className="container mx-auto py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-4 text-left">
          <h5 className="text-red-600 font-semibold">Our Story</h5>
          <h1 className="font-bold text-4xl md:text-5xl">
            BAKING TRADITION WITH <br /> A{" "}
            <span className="text-red-600">MODERN TWIST</span>
          </h1>
          <p className="text-gray-700 leading-relaxed">
            We blend time-honored baking traditions with modern creativity to
            craft delicious treats that bring joy to every bite. With a passion
            for creating freshly baked goods made from the finest ingredients,
            whether it's a warm loaf of bread, a delicate pastry, or a custom
            cake, each product is handmade with love and care.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300">
            ABOUT US →
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/images/sliced-bread.png"
            alt="Baked Goods"
            className="object-contain"
            width={500}
            height={500}
          />
        </div>
      </section>
    </>
  );
};

export default OurStorySection;

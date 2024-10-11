import React from "react";
import CardComponentOne from "./_common/CardComponentOne";
const DUMMY_DATA = [
  {
    imageUrl: "/images/cardImage.png",
    title: "Whole Grain bread",
    price: 40,
  },
  {
    imageUrl: "/images/cardImage.png",
    title: "Premium Cookies",
    price: 30,
  },
  {
    imageUrl: "/images/cardImage.png",
    title: "Premium Bread",
    price: 10,
  },
  {
    imageUrl: "/images/cardImage.png",
    title: "Premium Cookies",
    price: 10,
  },
];

const ProductsSection = () => {
  return (
    <>
      <h5>Popular Produts</h5>
      <h4 className="uppercase font-bold text-4xl md:text-5xl">
        Delightful <br />
        <span className="uppercase text-red-600">Temptations</span>
      </h4>{" "}
      <div className="flex space-x-5">
        {DUMMY_DATA?.map(({ imageUrl, title, price }, index) => (
          <CardComponentOne
            key={index}
            imageUrl={imageUrl}
            title={title}
            price={price}
          />
        ))}
      </div>
      <button className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300">
        View All Products →
      </button>
    </>
  );
};

export default ProductsSection;

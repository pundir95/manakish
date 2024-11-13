"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CategoryCarousel() {
  const categories = [
    { name: "All", image: "/images/cold_brev.png" },
    { name: "Breads", image: "/images/frenchfries.png" },
    { name: "Pastries", image: "/images/hot_brevg.png" },
    { name: "Pizza", image: "/images/most_selling.png" },
    { name: "Fries", image: "/images/open_swett.png" },
    { name: "Drinks", image: "/images/sweet.png" },
    { name: "Drinks", image: "/images/sweetbun.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 4 } },
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 480, settings: { slidesToShow: 2 } },
      ],
  };

  return (
    <div className="p-4">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="">
            <img
              src={category.image}
              alt={category.name}
              className="rounded-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoryCarousel;

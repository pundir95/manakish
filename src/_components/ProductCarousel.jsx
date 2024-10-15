"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { Fragment } from "react";

const ProductCarousel = ({ images }) => {
  return (
    <Carousel showThumbs={true} showStatus={false} infiniteLoop>
      {images.map((image, index) => (
        <Fragment key={index}>
          <Image
            src={image}
            alt={`Product Image ${index + 1}`}
            width={100}
            height={100}
          />
        </Fragment>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;

import Image from "next/image";
import React from "react";

const CardComponentOne = ({ data }) => {
  const { imageUrl, title, price, className } = data;
  return (
    <div>
      {" "}
      <div className="max-w-xs rounded overflow-hidden shadow-lg border border-gray-200">
        <Image
          src={imageUrl}
          alt="card-image"
          width={280}
          height={202}
          className={className}
        />
        
        <div className="flex space-x-4 p-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-red-600 text-lg">{`$ ${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponentOne;
{
  /* <Carousel>
{images.map((image:any, index:number) => (
  <Card key={index} className="w-full max-w-[100%] ml-auto mr-auto">
    <CardMedia
      component="img"
      alt={`Image ${index + 1}`}
      image={image}
      className='w-full'
    />
  </Card>
))}
</Carousel> */
}

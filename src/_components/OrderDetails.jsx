import React from 'react';
import PriceSummary from './PriceSummary';

const items = [
  { id: 1, name: "Kanelbullar (Cinnamon Buns)", quantity: "02", price: "10.00 SEK", NewPrice: "20.00 SEK", imageUrl: "/images/brevg_l.png" },
  { id: 2, name: "Kanelbullar (Cinnamon Buns)", quantity: "01", price: "10.00 SEK", NewPrice: "20.00 SEK", imageUrl: "/images/brevg_l.png" },
  { id: 3, name: "Kanelbullar (Cinnamon Buns)", quantity: "02", price: "10.00 SEK", NewPrice: "20.00 SEK", imageUrl: "/images/brevg_l.png" },
];

const OrderDetails = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-3 mt-3">
      {items.map(item => (
        <div key={item.id} className="flex items-center border-b border-orange-200 mb-2 pb-2  justify-between">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-12 h-12 rounded-md"
          />
            <div className="font-medium text-gray-700">{item.name}</div>
            <div className='text-gray-700'>{item.quantity}</div>
          <div className=" text-gray-700">{item.price}</div>
          <div className=" text-gray-700 text-orange-600">{item.NewPrice}</div>
        </div>
      ))}
      <PriceSummary/>
    </div>
  );
};

export default OrderDetails;

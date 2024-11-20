"use client";
import PriceSummary from "@/_components/PriceSummary";
import React from "react";
import { FiMail, FiUser, FiPrinter } from "react-icons/fi";
import { CiCreditCard2 } from "react-icons/ci";

const OrderHistory = () => {
  const orders = [
    {
      id: 128416,
      paymentMethod: "Payment via Elavon Converge EU Gateway",
      customerIP: "109.255.18.152",
      customerName: "John Doe",
      amountPaid: "123 SEK (Paid Online)",
      email: "johndoe@gmail.com",
      billingAddress:
        "Erwin Huerto, Parnell Street, Apartment 63 kingscourt, Dublin, Dublin, Ireland",
      status: "Delivered",
      items: [
        {
          id: 1,
          name: "Kanelbullar (Cinnamon Buns)",
          quantity: "02",
          price: "10.00 SEK",
          NewPrice: "20.00 SEK",
          imageUrl: "/images/brevg_l.png",
        },
        {
          id: 2,
          name: "Kanelbullar (Cinnamon Buns)",
          quantity: "01",
          price: "10.00 SEK",
          NewPrice: "20.00 SEK",
          imageUrl: "/images/brevg_l.png",
        },
        {
          id: 3,
          name: "Kanelbullar (Cinnamon Buns)",
          quantity: "02",
          price: "10.00 SEK",
          NewPrice: "20.00 SEK",
          imageUrl: "/images/brevg_l.png",
        },
      ],
      subtotal: "35000.00 SEK",
      vat: "1200 SEK",
      total: "36200.00 SEK",
    },
    {
      id: 128416,
      paymentMethod: "Payment via Elavon Converge EU Gateway",
      customerIP: "109.255.18.152",
      customerName: "John Doe",
      amountPaid: "123 SEK (Paid Online)",
      email: "johndoe@gmail.com",
      billingAddress:
        "Erwin Huerto, Parnell Street, Apartment 63 kingscourt, Dublin, Dublin, Ireland",
      status: "Delivered",
      items: [],
    },
    {
      id: 128416,
      paymentMethod: "Payment via Elavon Converge EU Gateway",
      customerIP: "109.255.18.152",
      customerName: "John Doe",
      amountPaid: "123 SEK (Paid Online)",
      email: "johndoe@gmail.com",
      billingAddress:
        "Erwin Huerto, Parnell Street, Apartment 63 kingscourt, Dublin, Dublin, Ireland",
      status: "Delivered",
      items: [],
    },
    // Add more orders here if needed
  ];

  const handleReorder = (orderId) => {
    alert(`Reordering items for Order #${orderId}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Order History
      </h2>
      {orders.map((order, index) => (
        <div
          key={order.id}
          className="bg-white border border-gray-200 rounded-lg shadow-md mb-6 p-6"
        >
          {/* Order Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Order #{order.id}
            </h3>
            <div className="flex items-end space-x-2 flex-col">
              <span className="flex items-center text-green-500">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>{" "}
                {order.status}
              </span>
              <div className="flex text-black items-center gap-2">
                <FiPrinter className="text-lg"/>
              <button
                onClick={() => handleReorder(order.id)}
                className="bg-green-800 text-white px-12 py-1 rounded-full hover:bg-green-700 transition duration-300"
              >
                Reorder
              </button>
              </div>
            </div>
          </div>

          {/* Payment and Billing Info */}
          <p className="text-sm text-gray-600 mb-4">
            {order.paymentMethod}. Customer IP: {order.customerIP}
          </p>

          {/* Customer Info and Billing Address */}
          <div className="flex mt-4 mb-6">
            <div className="w-1/2 space-y-1">
              <p className="flex items-center text-gray-600">
                <FiUser className="mr-2" /> {order.customerName}
              </p>
              <p className="flex items-center text-gray-600">
                <CiCreditCard2 className="mr-2" />
                {order.amountPaid}
              </p>
              <p className="flex items-center text-gray-600">
                <FiMail className="mr-2" /> {order.email}
              </p>
            </div>
            <div className="w-1/2">
              <p className="text-sm font-semibold text-gray-700">
                Billing Address
              </p>
              <p className="text-sm text-gray-600">{order.billingAddress}</p>
            </div>
          </div>

          {/* Items List */}
          {/* <div className="border-t border-gray-200 pt-4 mb-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <img src={item.imageUrl} alt={item.name} className="w-12 h-12 rounded mr-4" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">Q{item.quantity}</p>
                </div>
                <p className="text-sm text-gray-800">{item.pricePerUnit}</p>
                <p className="text-sm text-gray-800 font-semibold ml-4">{item.totalPrice}</p>
              </div>
            ))}
          </div> */}
          <div>
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-orange-200 mb-2 pb-2  justify-between"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-12 h-12 rounded-md"
                />
                <div className="font-medium text-gray-700">{item.name}</div>
                <div className="text-gray-700">{item.quantity}</div>
                <div className=" text-gray-700">{item.price}</div>
                <div className=" text-gray-700 text-orange-600">
                  {item.NewPrice}
                </div>
              </div>
            ))}
            {index === 0 && <PriceSummary />}
          </div>

          {/* Order Summary */}
          {/* <div className="flex justify-end text-gray-800 font-semibold mt-4 space-x-8">
            <div className="text-right">
              <p>Items Subtotal</p>
              <p>VAT</p>
              <p>Order Total</p>
            </div>
            <div className="text-right">
              <p>{order.subtotal}</p>
              <p>{order.vat}</p>
              <p>{order.total}</p>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;

"use client";
import GoogleMap from "@/_components/_common/GoogleMap";
import UserAddressDetail from "@/_components/_common/UserAddressDetail";
import OrderDetails from "@/_components/OrderDetails";
import PaymentMethods from "@/_components/PaymentMethods";
import PriceSummary from "@/_components/PriceSummary";
import React, { useState } from "react";

function PaymentMode() {
  const [paymentMethod, setPaymentMethod] = useState("wallet");

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="mx-auto p-6 bg-[#FAF4ED] rounded-lg shadow-lg">
      <UserAddressDetail />
      <GoogleMap height={'200px'}/>
      {/* Order Details */}
      <OrderDetails />
      {/* Price Summary */}

      {/* Payment Methods */}
      <PaymentMethods
        handlePaymentChange={handlePaymentChange}
        paymentMethod={paymentMethod}
      />
    </div>
  );
}

export default PaymentMode;

"use client"

import CartAddress from "@/_components/CartAddress";
import ShoppingCart from "@/_components/ShoppingCart";
import React, { useState } from "react";

function ShoppingDetails() {

  const [showShoppingCart, setShowShoppingCart] = useState(true);

  const handleAddressCheckout = () => {
    setShowShoppingCart(false);
  };
 
  return (
   <>
   {showShoppingCart ? <ShoppingCart handleAddressCheckout={handleAddressCheckout}/> : <CartAddress/>}
   </>
  );
}

export default ShoppingDetails;

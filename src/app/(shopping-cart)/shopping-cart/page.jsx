"use client"

import CartAddress from "@/_components/CartAddress";
import ShoppingCart from "@/_components/ShoppingCart";
import React, { useState } from "react";

function ShoppingDetails() {
 
  return (
   <>
   {true && <ShoppingCart/>}
   {false && <CartAddress/>}
   </>

  
  );
}

export default ShoppingDetails;

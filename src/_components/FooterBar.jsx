"use client"
import React,{useState} from 'react'
import { GiBasket } from "react-icons/gi";

const FooterBar = ({handleRoute}) => {
  const [item, setItem] = useState(1);

  const ItemIncrement = () => setItem(item + 1);
  const ItemDecrement = () => setItem(item > 1? item - 1 : 1);

  return (
    <div className='h-24 bg-[#D4A373] rounded-t-lg w-full flex items-center justify-around'>
      <p>1,750.00 SEK</p>
      <div className='flex gap-4 justify-center'>
        <div className='px-4 py-2 bg-gray-100 rounded-full border flex w-32 justify-around'>
          <button className='text-black' onClick={ItemDecrement}>-</button>
          <p className='text-black'>{item}</p>
          <button className='text-black' onClick={ItemIncrement}>+</button>
        </div>
        <button className='px-4 py-2 bg-[#35653e] rounded-full flex w-40 justify-around' onClick={handleRoute}>
          <div  className='flex gap-4 items-center'>
            <GiBasket/>
            <p>Add to Cart</p>
            </div>
        </button>
      </div>
    </div>
  )
}

export default FooterBar
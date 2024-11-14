"use client"
import CommonButton from '@/_components/_common/CommonButton'
import MenuSelection from '@/_components/MenuSelection'
import React from 'react'

const SingleProduct = () => {
  return (
    <div>
    <div className='border bg-[#ffffff] rounded-xl p-2 m-4'>
      <div className="flex gap-6">
      <div className="w-3/6">
        <img src="/images/brevg_l.png" class="w-full h-full" />
      </div>

      <div className="w-3/6">
        <h3 class="text-xl  text-gray-800">Mini Mix 24 Pieces</h3>
        <p className='text-amber-600'>5.500 KD</p>
        <p class="text-xl  text-gray-800 mt-2">Description</p>
        <p class="mt-1 text-sm text-gray-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>

        <div class="mt-8 text-left">
          <h4 class="text-xs text-gray-500">Choose 6 different flavors of mini fatayer</h4>
          <p class="text-xs text-gray-800 mt-0.5">Selection of Dough *</p>
        </div>

        <div class="space-x-5 mt-8">
         <CommonButton type="submit" text="Regular Dough" className="bg-[#3E5F41] p-4 rounded-lg" />
         <CommonButton type="submit" text="Brown Dough"  className="border p-4 text-black rounded-lg"/>
        </div>
      </div>
    </div>
    </div>
    <div>
      <MenuSelection/>
    </div>
    </div>
  )
}

export default SingleProduct
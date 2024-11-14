"use client"
import CommonButton from '@/_components/_common/CommonButton'
import MenuSelection from '@/_components/MenuSelection'
import React from 'react'

const SingleProduct = () => {
  return (
    <div>
    <div className='border-2 m-4'>
      <div class="grid sm:grid-cols-2 items-center gap-8 font-[sans-serif] max-w-5xl max-sm:max-w-sm mx-auto p-2">
      <div class="sm:h-[400px]">
        <img src="/images/brevg_l.png" class="w-full h-full object-contain" />
      </div>

      <div>
        <h3 class="text-xl  text-gray-800">Mini Mix 24 Pieces</h3>
        <p class="text-xl  text-gray-800">Description</p>
        <p class="mt-4 text-sm text-gray-800">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>

        <div class="mt-8 text-left">
          <h4 class="text-base text-gray-500 font-bold">Choose 6 different flavors of mini fatayer</h4>
          <p class="text-xs text-gray-500 mt-0.5">Selection of Dough *</p>
        </div>

        <div class="space-x-5 mt-8">
         <CommonButton type="submit" text="Regular Dough" className="bg-[#3E5F41] p-4 rounded-lg" />
         <CommonButton type="submit" text="Brown Dough"  className="bg-white p-4 text-black rounded-lg"/>
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
import React from 'react';
import Carousel from './Carousel';

export default function Hero() {
  return (
    <div className='bg-[#F6DCAC] '>
      <div className='flex mt-10 bg-white border-2 border-black  justify-center text-center font-extrabold text-blue-700 text-2xl '>
        INTRODUCING 
      </div>
      <div className="flex   mt-2 mb-2 font-bold  text-red-600  justify-center text-7xl text-center">
        WALYA'S GOTI SODA
      </div>
      <div className='flex bg-white border-2 border-black  justify-center text-center font-extrabold text-blue-700 text-2xl '>
        EXPERIENCE THE BURST OF REFRESHMENT 
      </div>
      <div className='mt-10'>
      <Carousel/>

      </div>
    </div>
  );
}

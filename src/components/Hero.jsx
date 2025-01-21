import React from 'react'
import logo from '../assets/logo.png'
import Carousel from './Carousel'

export default function Hero() {
  return (
    <div className='text-4xl'>
      <div className='flex font-mono my-4 items-center justify-center'>
         WALYA'S GOTI SODA  
      </div>
      <div className='flex my-4 items-center justify-center'>
        JUST <div className='mx-16 text-pink-500 font-extrabold scale-150'>POP</div> IT
      </div>
      <div className='text-sm flex text-center justify-center'>
       a fizzy delight in every sip, crafted with love and natural ingredients!
      </div>
      <div className='flex justify-center items-center my-4'>
        MEET OUR DRINKS
      </div>
      <Carousel/>
    </div>
  )
}

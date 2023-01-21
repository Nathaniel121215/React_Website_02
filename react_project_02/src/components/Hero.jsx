import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    
    // <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]'>
    //   <div className='text-white '>nath</div>
    //   <div className='text-white '>nath</div>
    // </div>
    // npm install react-typed --save
    //npm install --save react-type-animation  npm install react-icons
    
    <div className='text-white'>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00DF9A] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text-4xl font-bold sm:text-6xl md:text-7xl md:py-6'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
          <p className='font-bold text-xl sm:text-4xl md:text-5xl py-4'>Fast, Flexible Financing for</p>
          <TypeAnimation className='font-bold text-xl sm:text-4xl md:text-5xl md:pl-4 pl-2 text-[#00DF9A]' sequence={['BTC',2000,'XRP',2000,'SHV',2000]}speed={0} wrapper="div"cursor={true}repeat={Infinity}/>
        </div>
        <p className='text-xl md:text-2xl font-bold text-gray-600'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00DF9A] py-3 my-6 r-4 rounded font-medium w-[180px] mx-auto text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
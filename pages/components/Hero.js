import React from 'react'
import GetStarted from './GetStarted'


export default function Hero() {
  return (
    <section id='home' className='flex md:flex-row flex-col sm:py-16 py-6'>
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 
      sm:px-16 px-6">
        <div
        className="items-center py[6px] px-4 flex flex-row bg-discount-gradient
        rounded-[10px] mb-2">
          <img src="/assets/Discount.svg" alt="" 
          className='w-[32px] h-[32px]'/>
          <p className='font-poppins font-normal text-white text-[18px] leading-[30.8px] ml-2'>
        <span 
        className='text-white'>20%
        </span> Discount For {""}
        <span className='text-white'> 1 Month
        </span>
          </p>
        </div>

        <div 
        className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] 
          text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden'/>
            <span className='text-gradient'>Generation</span> {""}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0 '>
            <GetStarted />
          </div>
        </div>
        <h1 className=' font-poppins font-semibold ss:text-[68px] text-[52px]
        text-white ss:leading-[100px] leading-[75px] w-full'>
          Trading Method
        </h1>
        <p className='font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px]
        mt-5'>
        3Commas helps users grow their crypto investments using a 
        feature-rich terminal and proven automated bots that operate on 18+ 
          major exchanges
        </p>
      </div>
      <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
        <img src="/assets/robot.png" alt="" 
        className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-[0] pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full buttom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 buttom-20 blue__gradient '/>
      </div>
      <div className='ss:hidden flex justify-center items-center '>
        <GetStarted />

      </div>
      
    </section>
  )
}

import React from 'react'
import { motion } from "framer-motion"

export default function Billing() {
  return (
    <section id='product' className='flex md:flex-row flex-col sm:flex-col-reverse 
    sm:py-16 py-6'>
      <motion.div 

      className='flex-1 flex justify-center items-center md:ml-10 ml-0
       md:mt-0 mt-10 relative'>
        <img src="/assets/bill.png" alt="" className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full 
        white__gradient' />
        <div className='absolute z-[0] -left-1/2 buttom-0 w-[50%] h-[50] rounded-full 
        pink__gradient' />
      </motion.div>
      <motion.div
      className='flex-1 flex justify-center items-start flex-col'>
        <h2 
        className="font-poppins font-semibold xs:text-[48px] text-[40px]
         text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your <br className='sm:block hidden' /> Portfolio.
        </h2>
        <p className='font-poppins font-normal text-white text-[18px] 
        max-w-[470px] mt-5 leading-[30.8px]'>
          Elit enim sed massa etiam.mauris eu adipiscing ultrices ametodio aenean 
          neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
      </motion.div>
    </section>
  )
}

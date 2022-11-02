import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

export default function FeedBack({content, name, title, img}) {
  return (
    <motion.div
           initial={{
            y: 200,
        }}
        transition={{
            duration: 1.5
        }}
        whileInView={{
            y: 0,
            opacity: 1,
        }}
    className='flex justify-between flex-col px-10 py-12 rounded-[12px] 
    max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>

      <Image alt='' src="/assets/quotes.svg" width="420pxl" height="27px" className='object-contain'  />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white
      my-10'>{content}</p>

      <div className='flex flex-row '>
        
        <div className='w-[48px] h-[48px] relative'>
          <Image alt='' src={img} layout="fill" />
        </div>
        
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] 
          text-white '>
            {name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-white'>
            {title}</p>

        </div>
      </div>
    </motion.div>
  )
}

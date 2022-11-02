import React from 'react'
import Button from './Button'
import { motion } from "framer-motion"
import Image from "next/image"

export default function CardDeal() {
  return (
    <section className='flex md:flex-row flex-col sm:py-16 py-6'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{duration: 3.5}}
      className='flex-1 flex justify-center items-start flex-col'>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px]
         text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
          Di-bot helps traders win<br className='sm:block hidden' />
         regardless of market condition.</h2>
         <p className='font-poppins font-normal text-white text-[18px] 
         leading-[30.8px] max-w-[470px] mt-5'>
          For every market condition, there’s a trading strategy that can profit from it.
          Di-bot happen to be really good at reducing average acquision costs, directly
          increasing your profit margins from each trade.</p>
         <Button />
      </motion.div>

      <motion.div
        initial={{
            x: 200,
        }}
        transition={{
            duration: 1.5
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
      className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
         
         <Image src={"/assets/card.png"} width={1000} height={1000} />
      </motion.div>

    </section>
  )
}

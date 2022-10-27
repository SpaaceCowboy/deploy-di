import React from 'react'
import Button from './Button'
import { motion } from "framer-motion"

export default function CardDeal() {
  return (
    <section className='flex md:flex-row flex-col sm:py-16 py-6'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{duration: 3.5}}
      className='flex-1 flex justify-center items-start flex-col'>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Find a better card deal <br className='sm:block hidden' />
         in few easy steps.</h2>
         <p className='font-poppins font-normal text-white text-[18px] 
         leading-[30.8px] max-w-[470px] mt-5'>Arcu tortor, pursu in mattis at sed integer faucibus. aliquent ques aliquent
         eget mauris tortor. C aliquent ultrices ac, ametau.</p>
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
         <img src="/assets/card.png" alt="" className='w-[100%] h-[100%]' />
      </motion.div>

    </section>
  )
}

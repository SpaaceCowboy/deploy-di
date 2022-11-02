import React from 'react'
import { motion } from "framer-motion"


export default function PriceCard() {
  return (
    <div>
      <div className='grid ss:grid-cols-2 gap-3 lg:w-[70%] lg:ml-[15%] overflow-x-hidden'>
        <motion.div
        initial={{
          x: -200,
        }}
        transition= {{
          duration: 0.5
        }}
        whileInView= {{
          x: 0,
          opacity: 1,
        }}
        className=' flex flex-col justify-center items-center
        space-y-10 py-10 rounded-[20px]  bg-slate-400/10'>
          <h2 
          className='font-poppins text-2xl text-white'>
            Pack 1
            </h2>
          <h4 
          className='font-poppins text-4xl text-white
          '>
            $20<span className='text-2xl text-[#F7AB0A]'>/mo</span>
          </h4>
          <ul className='space-y-2 '>
            <li className='font-poppins list-disc text-white'>information</li>
            <li className='font-poppins list-disc text-white'>information</li>
           <li className='font-poppins list-disc text-white'>information</li>
          </ul>
          <button className='bg-[#F7AB0A] py-3 px-10 rounded text-black 
          font-poppins font-bold hover:bg-teal-500 hover:text-white'>
            Get Started
          </button>
        </motion.div>
        <motion.div
        initial={{
          x:200
        }}
        transition={{
          duration:0.5
        }}
        whileInView={{
          x:0,
          opacity:1
        }}
        className=' flex flex-col justify-center items-center 
        space-y-10 py-10 rounded-[20px]  bg-slate-400/10'>
          <h2 
          className='font-poppins text-2xl text-white'>
            Pack 2</h2>
          <h4 
          className='font-poppins text-4xl text-white'>
            $30<span className='text-[#F7AB0A] text-2xl'>/mo</span>
            </h4>
          <ul className='space-y-2'>
            <li className='font-poppins list-disc text-white'>information</li>
            <li className='font-poppins list-disc text-white'>information</li>
            <li className='font-poppins list-disc text-white'>information</li>
          </ul>
          <button className='bg-[#F7AB0A]  py-3 px-10 rounded text-black 
          font-poppins font-bold hover:bg-teal-500 hover:text-white'>
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  )
}
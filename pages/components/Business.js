import React from 'react'
import { features } from '../constants'
import Button from './Button'
import { motion } from "framer-motion"



const FeatureCard = ({ icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1
   ? "mb-6" : "mb-0"} feature-card `}> 
    <div className='w-[64px] h-[64px] rounded-4 flex justify-center items-center bg-dimBlue'>
      <img src={icon} alt="icon" 
     className='w-[50%] h-[50%] object-containt'/>
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className='font-poppins font-semibold text-white text-[18px] 
      mb-1 leading-[23px]'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-white text-[16px] mb-1
      leading-[23px]'>
        {content}
      </p>
    </div>
  </div>
)

export default function Business() {
  return (
    <section id='features' className='flex md:flex-row flex-col sm:py-16 py-6'>
    <motion.div 
     initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{duration: 3.5}}
    className='flex-1 flex-col flex justify-center items-start'> 
      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full' >
        You press a button,<br className='sm:block hidden' /> we'll do the trading.
      </h2>
      <p 
      className='font-poppins font-normal text-white text-[18px] leading-[30.8px] 
      max-w-[470px] mt-5 '>
        For every market condition, there’s a trading strategy that can 
        profit from it. 3Commas bots happen to be really good at reducing
         average acquisition costs, directly increasing your profit margins
          from each trade.

      </p>
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
    className='flex-1 flex justify-center items-start flex-col 
     md:ml-10 ml-0 md:mt-0 mt-10 relative'>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>
    </section>

  )
}

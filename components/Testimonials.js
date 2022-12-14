import React from 'react'
import { FeedbackCard } from '.'
import { feedback } from '../constants'

export default function Testimonials() {
  return (
    <section id='clients' className='sm:py-16 py-6 flex justify-center 
    items-center flex-col relative'>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className='w-full flex justify-between items-center md:flex-row flex-col
      sm:mb-16 mb-6 relative z-[1]'>
        <h1 
        className='font-poppins font-semibold xs:text-[48px] text-[40px]
          xs:leading-[76.8px] leading-[66.8px] w-full'>
          What people are <br className='sm:block hidden' /> saying about us </h1>
          <div className='w-full md:mt-0 mt-6 '>
            <p className='font-poppins font-normal text-[18px] 
            leading-[30.8px] text-left max-w-[450px]'>
              everything you need to automatically trade and grow your portfolio anywhere on the planet.
            </p>
          </div>
      </div>
      <div className='flex flex-wrap sm:justify-center w-full feedback-container relative
      z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
      
    </section>
  )
}

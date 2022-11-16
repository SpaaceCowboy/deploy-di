import React from 'react'
import styles from '../constants/style'
import {Navbar, Hero, Billing, Business, Button, CardDeal, 
  Clients, CTA, FeedbackCard, Footer, GetStarted, Stats, 
  Testimonials} from "../components"
  


export default function Home() {
  return (
    <div className=' w-full overflow-hidden '>
      <div className="sm:px-16 px-6 flex justify-center items-center"> 
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>
      <div className=' flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full '>
          <Hero />
        </div>
      </div>

     <div className=' flex justify-center items-start sm:px-16 px-6'>
        <div className='xl:max-w-[1280px] w-full '>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <CTA />
            
        </div>
      </div>
      <div className='sm:px-16 px-6 bg-slate-400/5'>
        <Footer />
      </div>
    </div>
  )
}



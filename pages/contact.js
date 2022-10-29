import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler} from "react-hook-form"
import { Navbar } from './components'



export default function Home() {
  return (
    <div className='bg-[#1D1f57]  relative  text-center md:text-left 
    md:flex-row max-w-7l px-10 justify-evenly mx-auto items-center '>
  
      <div className="sm:px-16 px-6 flex justify-center items-center"> 
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>

      <div className='flex flex-col space-y-10 mt-20'>
        <h4 className='text-4xl font-semibold text-center text-white'>
            Contact Us
        </h4>
        <h2 className='text-2xl font-medium text-center text-white'>
          Fill in the details below to contact us and we will  do our best to <br></br>  respond as quickly as possible.
        </h2>
      


        <form className='flex flex-col space-y-2 w-[80%] lg:w-[40%] mx-auto '>
            <div className='flex flex-col space-y-2 '>
                <input placeholder='Full Name' className='contactInput' type="text" />
                <input placeholder='Email' className='contactInput' type="text" />
            </div>

            <input placeholder='Subject' className='contactInput' type="text" />

            <textarea placeholder='Message' className='contactInput ' />
            <button 
            type='submit'
            className='bg-[#F7AB0A] py-5 px-10 rounded-mb text-black font-bold'>
                Submit
            </button>
        </form>
      </div>
  </div>
  )
}



import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler} from "react-hook-form"
import { Navbar } from './components'



export default function Home() {
  return (
    <div className='bg-[#1D1f57] h-screen relative  text-center md:text-left 
    md:flex-row max-w-7l px-10 justify-evenly mx-auto items-center '>
  
      <div className="sm:px-16 px-6 flex justify-center items-center"> 
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>

      <div className='flex flex-col space-y-10 mt-20'>
        <h4 className='text-4xl font-semibold text-center text-white'>
            I have just what you need {""}
        </h4>

        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center '>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2xl text-white'>+905103688930</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2xl text-white'> Istanbul </p>
            </div>

            
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2xl text-white'> shayan.shoeibzadeh@outlook.com </p>
            </div>
        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto '>
            <div className='flex space-x-2 '>
                <input placeholder='Name' className='contactInput' type="text" />
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



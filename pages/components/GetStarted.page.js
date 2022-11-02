import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase'
import Link from 'next/link'
import Image from 'next/image'


export default function GetStarted() {
  
  const [user, loading] = useAuthState (auth)

  return (
    <div className='flex justify-center flex-center w-[140px] h-[140px] 
    rounded-full bg-blue-gradient p-[2px] cursor-pointer '>
      {!user && (
          <Link href={"/auth/login"} >
        <div className='flex justify-center items-center flex-col
       bg-primary w-[100%] h-[100%] rounded-full'>
        <div className='flex justify-center items-start flex-row'>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <div className='relative w-[23px] h-[23px] object-contain'>
            <Image alt='' src={"/assets/arrow-up.svg"} layout="fill" />
          </div>
        </div>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>
           </div>
      </Link>
      )}
      {user && (
          <Link href={"/Pricing"} >
          <div className='flex justify-center items-center flex-col
       bg-primary w-[100%] h-[100%] rounded-full'>
        <div className='flex justify-center items-start flex-row'>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <div className='w-[23px] h-[23px] object-contain relative'>
            <Image alt='' src={"/assets/arrow-up.svg"} layout="fill" />
          </div>

        </div>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>
         </div>
      </Link>
      )}

    </div>
  )
}

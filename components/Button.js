import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'
import Link from 'next/link'


export default function Button() {

  const [user, loading] = useAuthState(auth)

  return (
    
    <button className=' py-4 px-6 bg-blue-gradient font-poppins font-medium 
    text-[18px] text-primary outline-none mt-7 rounded-[10px]'>
      {!user && (
      <Link href={"/auth/login"}>
      Get Started
      </Link>
      )}
      {user && (
      <Link href="/Pricing">
        Get Started
      </Link>
      
      )}
    </button>
  )
}

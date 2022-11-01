import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase'


export default function Button() {

  const [user, loading] = useAuthState(auth)

  return (
    
    <button className=' py-4 px-6 bg-blue-gradient font-poppins font-medium 
    text-[18px] text-primary outline-none mt-7 rounded-[10px]'>
      {!user && (
      <a href="/auth/login">
        Get Started
      </a>
      )}
      {user && (
      <a href="/Pricing">
        Get Started
      </a>
      )}
    </button>
  )
}

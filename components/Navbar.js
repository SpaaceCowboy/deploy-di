import {useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'
import { navLinks } from "../constants"
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {

  const [toggle, setToggle] = useState(false)

  const [user, loading] = useAuthState(auth)

  return (
    <nav 
    className='w-full flex py-6 justify-center items-center navbar'>
      <ul 
      className='list-none sm:flex hidden justify-end 
      items-center'>
          <li
          className={`font-poppins font-normal cursor-pointer
          text-[16px]
           `}>
            <Link href='/'>
              <a className="tracking-widest py-2 px-6   rounded-lg hover:text-teal-500 hover:bg-slate-500/30">
              Home
              </a>
            </Link>
            {!user && (
            <a
             href='../auth/login' className="tracking-widest py-2 px-6   rounded-lg hover:text-teal-500 hover:bg-slate-500/30">
              Pricing
            </a>
            )}
            {user && (
            <Link href='/Pricing'>
            <a
         className="tracking-widest py-2 px-6   rounded-lg hover:text-teal-500 hover:bg-slate-500/30">
              Pricing
            </a>
            </Link>
            )}

            <a href='../contact' className="tracking-widest py-2 px-6   rounded-lg hover:text-teal-500 hover:bg-slate-500/30">
              Contact
            </a>     

            <a href='../Blog' className="tracking-widest py-2 px-6   rounded-lg hover:text-teal-500 hover:bg-slate-500/30">
              Blog
            </a>    
          </li>
      </ul>
            {!user && ( 
              <div >            
                <a href='../auth/login' 
                className="py-2 px-4 text-lg hover:bg-teal-500 bg-slate-500/30  rounded-lg
                font-medium ml-8">
              Sign In
            </a>   
              </div>
            )}   
            {user && (
              <div>
                <a href="../dashboard"
                className='py-2 px-4 text-lg hover:bg-teal-500 bg-slate-500/30  rounded-lg 
                font-medium ml-8'>Dashboard</a>
                <Link onClick={() => auth.signOut()} href="/"
                >
                  <a 
                className='py-2 px-4 text-lg  hover:bg-teal-500 bg-slate-500/30  rounded-lg 
                font-medium ml-8'>
                  Sign Out
                  </a></Link>

              </div>
            )} 


          {/* sm size nav */}


      <div 
      className='sm:hidden flex flex-1 justify-end items-center'>
        <div className="w-[28px] h-[28px] object-contain relative">
        <Image  layout='fill'
        src={toggle ? "/assets/close.svg" : "/assets/menu.svg"} alt="" 
         onClick={() => setToggle((prev) => 
        !prev)} />
        </div>

        <div 
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20
        right-0 mx-4 my-2 min-2-[140px] rounded-xl sidebar `}>

        <ul 
        className='list-none flex  justify-end 
        items-center flex-1 flex-col'>
          {navLinks.map((nav, index) => ( 
            <li
            key={nav.id} 
            className={`font-poppins font-normal cursor-pointer
            text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
            text-white`}>
              <a className='hover:text-black' href={`${nav.id}`} >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        </div>

      </div>
    </nav>
  )
}

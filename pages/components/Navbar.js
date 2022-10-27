import {useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase'
import { navLinks } from "../constants"

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
           text-white`}>
            <a href='/' className="tracking-widest p-5 hover:border rounded-full hover:border-black/40 
        hover:text-black">
              Home
            </a>
            <a href='#features' className="tracking-widest p-5 hover:border rounded-full hover:border-black/40 
        hover:text-black">
              Features
            </a>
            <a href='#product' className="tracking-widest p-5 hover:border rounded-full hover:border-black/40 
        hover:text-black">
              Product
            </a>
            <a href='#client' className="tracking-widest p-5 hover:border rounded-full hover:border-black/40 
        hover:text-black">
              Client
            </a>
            <a href='../contact' className="tracking-widest p-5 hover:border rounded-full hover:border-black/40 
        hover:text-black">
              Contact
            </a>       
          </li>
      </ul>
            {!user && ( 
              <div >            
                <a href='../auth/login' 
                className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg
                font-medium ml-8">
              Login
            </a>   
              </div>
            )}   
            {user && (
              <div>
                <a href="../dashboard"
                className='py-2 px-4 text-lg bg-teal-500 text-white rounded-lg 
                font-medium ml-8'>Dashboard</a>
              </div>
            )}     

      <div 
      className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
        src={toggle ? "/assets/close.svg" : "/assets/menu.svg"} alt="" 
        className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => 
        !prev)} />

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
              <a className='hover:text-black' href={`#${nav.id}`} >
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

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { Navbar } from '../../components'
 

export default function Login() {
    const [user, loading] = useAuthState(auth)
    const route = useRouter()
    //Sign in with google
    const googleProvider = new GoogleAuthProvider()
    const GoogleLogin =  async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user)
            route.push("../dashboard")
        } catch (error) {
            console.log(error);
        }
    }
    //Sign in with facebook
    const fbProvider = new FacebookAuthProvider()
    const FacebookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, fbProvider)
            console.log(result)
            route.push('../dashboard')
        } catch (error) {
          console.log(error)
        }
    }


  return (
      <div className='bg-[#1D1f57] h-screen'>
        <div className='bg-[#1D1f57] w-full overflow-hidden'>
          <div className='sm:px-16 px-6 flex justify-center items-center '>
            <div className='xl:max-w-[1280px] w-full'>
              <Navbar />
              </div>
          </div>
        </div>

        <div className=" bg-slate-400/10 flex flex-col justify-center 
        items-center ss:ml-[24%] ss:w-[50%] pt-10 shadow-xl mt-32 p-10
         text-gray-700 rounded-lg ">
            <h2 className='text-3xl font-semibold text-white '>Join Today</h2>
            <div className='py-4'>
                <h3 className='text-center py-4 text-2xl text-white'>Sign in with one of the providers</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <button onClick={GoogleLogin} className='text-white bg-gray-700 p-4 w-[100%] 
                font-medium rounded-lg flex align-middle gap-2'>
                    <FcGoogle className='text-2xl ' />
                     Sign in with Google
                    </button>
                <button onClick={FacebookLogin} className='text-white bg-gray-700 p-4 w-[100%] 
                font-medium rounded-lg flex align-middle gap-2'>
                    <AiFillFacebook className='text-2xl ' />
                     Sign in with Facebook
                    </button>
            </div>
        </div>
          </div>
        
  )
}

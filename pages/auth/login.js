import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { Navbar } from '../components'
 

export default function Login() {
    const [user, loading] = useAuthState(auth)
    const route = useRouter()
    //Sign in with google
    const googleProvider = new GoogleAuthProvider()
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user)
            route.push("../dashboard")
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(user) {
            route.push('../dashboard')
        } else{
            console.log('login')
        }
    })
  return (
      <div>
        <div className='bg-[#1D1f57] w-full overflow-hidden'>
          <div className='sm:px-16 px-6 flex justify-center items-center '>
            <div className='xl:max-w-[1280px] w-full'>
              <Navbar />
              </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ml-[24%] w-[50%] pt-10 shadow-xl mt-32 p-10 text-gray-700 rounded-lg ">
            <h2 className='text-3xl font-medium'>Join Today</h2>
            <div className='py-4'>
                <h3 className='py-4'>Sign in with one of the providers</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <button onClick={GoogleLogin} className='text-white bg-gray-700 p-4 w-[100%] 
                font-medium rounded-lg flex align-middle gap-2'>
                    <FcGoogle className='text-2xl ' />
                     Sign in with google
                    </button>
            </div>
        </div>
          </div>
        
  )
}

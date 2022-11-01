import {auth} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { userAgent } from 'next/server'
import { Footer, Navbar } from './components'

export default function Login() {
  const [user,loading] = useAuthState(auth)
  const route = useRouter()
  if (loading)  return <h1>Loading...</h1>
  if (!user) route.push('/auth/login')
  if (user)
  return (
  <div className='bg-[#1D1f57]'>
     <div className=' sm:px-16 px-6 '>
        <div className='bg-[#1D1f57] w-full overflow-hidden'>
          <div className='flex justify-center items-center '>
            <div className='xl:max-w-[1280px] w-full'>
              <Navbar />
              </div>
          </div>
        </div>
        <div className="pt-10 h-[80vh]">
            <h1 className='text-white'>
              Welcome to your dashboard {user.displayName}
              </h1>
        </div>
    </div>
    <div className='sm:px-16 px-6 bg-slate-400/5'>
       <Footer />
    </div>
  </div>

  )
}

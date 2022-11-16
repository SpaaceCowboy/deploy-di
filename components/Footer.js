import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  return (
    <section className='flex justify-center items-center flex-col sm:py-16 py-6'>
      <div className='flex justify-center items-center md:flex-row flex-col mb-8
      w-full'>
        <div className='flex-1 flex-col justify-start mr-10'>
           <p className="font-poppins font-normal text-[18px] leading-[30.8px]
           mt-4 max-w-[310px]">
            A new way to make Trading easy, reliable and secure. 
           </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap
         md:mt-0 mt-10">
          {footerLinks.map((footerLinks) => (
            <div key={footerLinks.key} 
            className="flex flex-col ss:my-0 my-4 
            min-w-[150px]">
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] '>
                {footerLinks.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLinks.links.map((Link, index ) => (
                  <li key={Link.name} 
                  className={`font-poppins font-normal text-[16px] leading-[24px] 
                  hover:text-secondary  cursor-pointer ${index !== footerLinks.links.length -1 ? 
                  'mb-4' : 'mb-9'}`} >
                    <a
                   className='hover:text-teal-500'
                   href="">{Link.name}</a>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6
      border-t-[1px] border-t-[#3f3r45]'>
        <p className='font-poppins font-normal text-[18px] leading-[27px'>
          2022 Di-bot. All rights Reserved.
        </p>

        <div className='flex flex-row md:mt-0 mt-6 space-x-5'>
            <a href="">
              <div className='relative w-[23px] h-[21px] object-contain cursor pointer'>
                <Image alt='' src="/assets/instagram.svg" layout='fill'  />
              </div>
            </a>
            <a href="">
              <div className='relative w-[23px] h-[21px] object-contain cursor pointer'>
                <Image alt='' src="/assets/twitter.svg" layout='fill'  />
              </div>
            </a>
            <a href="">
              <div className='relative w-[23px] h-[21px] object-contain cursor pointer'>
                <Image alt='' src="/assets/linkedin.svg" layout='fill'  />
              </div>
            </a>
            <a href="">
              <div className='relative w-[23px] h-[21px] object-contain cursor pointer'>
                <Image alt='' src="/assets/facebook.svg" layout='fill'  />
              </div>
            </a>
        </div>
      </div>
    </section>
  )
}



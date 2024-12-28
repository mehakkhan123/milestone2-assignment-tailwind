import React from 'react'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const montserrat = Montserrat({subsets:["latin"]})


export default function Footer() {
  return (
    <footer className={`w-full h-[346px] flex flex-col items-center  ${montserrat.className}`}>
      <div className='h-[980px] xl:h-[272px] w-[300px] md:w-[700px] lg:w-[900px] xl:w-[1050px]  flex flex-col md:flex-row py-[50px]  gap-[60px] justify-center items-center text-center md:text-left'>
        <div className='flex flex-col gap-[10px]'>
        <hr className='sm:hidden' />
          <h5 className='text-[#252B42] font-bold text-base leading-6 tracking-[0.1px]'>Company Info</h5>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>About Us</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Career</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>We are hiring</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Blog</h5></Link>
          <hr className='sm:hidden' />
        </div>
        

        <div className='flex flex-col gap-[10px]'>
        <hr className='sm:hidden' />
          <h5 className='text-[#252B42] font-bold text-base xl:leading-6 tracking-[0.1px]'>Legal</h5>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>About Us</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Career</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>We are hiring</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Blog</h5></Link>
          <hr className='sm:hidden' />
        </div>

        <div className='flex flex-col gap-[10px]'>
        <hr className='sm:hidden' />
          <h5 className='text-[#252B42] font-bold text-base leading-6 tracking-[0.1px]'>Features</h5>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Business Marketing</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>User Analytic</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Live Chat</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Unlimited Support</h5></Link>
          <hr className='sm:hidden' />
        </div>

        <div className='flex flex-col gap-[10px]'>
        <hr className='sm:hidden' />
          <h5 className='text-[#252B42] font-bold text-base leading-6 tracking-[0.1px]'>Resources</h5>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>IOS & Android</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Watch a Demo</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Customers</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>API</h5></Link>
          <hr className='sm:hidden' />
        </div>


      </div>

      <div className=' md:h-[74px] bg-[#FAFAFA] w-full flex flex-row justify-center items-center'>
        <div className='w-[1050px] h-[100px] py-2 px-2 md:py-0 md:px-2 md:h-[74px] flex flex-col justify-center gap-3 md:gap-0 md:flex-row md:justify-between items-center'>
          <h5 className='text-[#737373] text-center md:text-left  font-bold text-sm leading-6 tracking-[0.2px]'>Made With Love By Mehak Khan All Right Reserved</h5>
          <div className='flex text-[#96BB7C] gap-[20px] text-2xl'>
          <Link href={"https://www.facebook.com"} target='_blank'><FaFacebook /></Link>
          <Link href={"https://www.instagram.com"} target='_blank'><FaInstagram /></Link>
          <Link href={"https://www.twitter.com"} target='_blank'><FaTwitter /></Link>
          </div>
        </div>

</div>

    </footer>
  )
}

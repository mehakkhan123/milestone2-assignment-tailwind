import React from 'react'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const montserrat = Montserrat({subsets:["latin"]})


export default function Footer() {
  return (
    <footer className={`w-full h-[346px] flex flex-col items-center ${montserrat.className}`}>
      <div className='h-[900px] xl:h-[272px] w-[300px] xl:w-[1050px]  flex flex-col xl:flex-row py-[50px]  gap-[60px] justify-center items-center text-center xl:text-left'>
        <div className='flex flex-col gap-[10px]'>
          <h5 className='text-[#252B42] font-bold text-base leading-6 tracking-[0.1px]'>Company Info</h5>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>About Us</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Career</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>We are hiring</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Blog</h5></Link>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h5 className='text-[#252B42] font-bold text-base xl:leading-6 tracking-[0.1px]'>Legal</h5>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>About Us</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Career</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>We are hiring</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Blog</h5></Link>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h5 className='text-[#252B42] font-bold text-base leading-6 tracking-[0.1px]'>Features</h5>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Business Marketing</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>User Analytic</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Live Chat</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Unlimited Support</h5></Link>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h5 className='text-[#252B42] font-bold text-base leading-6 tracking-[0.1px]'>Resources</h5>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>IOS & Android</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Watch a Demo</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Customers</h5></Link>
          <Link href={""}><h5 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>API</h5></Link>
        </div>


      </div>

      <div className='h-[74px] bg-[#FAFAFA] w-full flex justify-center'>
        <div className='w-[1050px] flex flex-row justify-between items-center'>
          <h5 className='text-[#737373] font-bold text-sm leading-6 tracking-[0.2px]'>Made With Love By Mehak Khan All Right Reserved</h5>
          <div className='flex text-[#96BB7C] gap-[20px] text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          </div>
        </div>

</div>

    </footer>
  )
}

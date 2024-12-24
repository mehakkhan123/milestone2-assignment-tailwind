import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({subsets:["latin"]})

export default function Hero() {
  return (
    <div className={`${montserrat.className} w-full flex flex-row justify-center items-center 2xl:h-[682px] bg-[#fff2f3] box-border`}>
        <div className='flex flex-col items-center lg:flex-row lg:justify-center'>
            {/* left */}
            <div className='flex flex-col items-center text-center py-4 px-4   gap-[30px] 2xl:flex-col w-[300px] sm:w-[573px] 2xl:h-[386px] lg:items-start lg:text-left'>
                <h5 className='text-[#96BB7C] font-bold text-base leading-6 tracking-[0.1px]'>Welcome</h5>
                <h1 className='text-3xl leading-10 md:text-[58px] font-bold  2xl:w-[542px] 2xl:h-[160px] md:leading-[80px] tracking-[0.2px]'>Best Learning Opportunities</h1>
                <h4 className='leading-6 2xl:w-[338px] 2xl:h-[60px] text-[20px] font-normal 2xl:leading-[30px] 2xl:tracking-[0.2px] text-[#737373]'>Our goal is to make online education work for everyone</h4>
                <div className='flex w-[300px] sm:w-[318px] h-[52px] flex-row gap-[10px] justify-center'>
        <button className='w-[126px] sm:w-[135px] h-[52px] bg-[#96BB7C] hover:bg-[#a4cb88] rounded-[5px] py-[15px] px-[10px] 2xl:px-[40px] text-white font-bold text-sm tracking-[0.2px] text-center'>Join Us</button>
        <button className='w-[161px] sm:w-[173px] h-[52px] bg-transparent border border-[#96BB7C] rounded-[5px] py-[15px] px-[10px] 2xl:px-[40px] text-[#96BB7C] font-bold text-sm tracking-[0.2px] text-center hover:text-[#a4cb88]'>Learn More</button>
        </div>
            </div>
            {/* right */}
            <div className=''>
                <Image src={"/images/hero-image.png"} alt='hero-image' width={704} height={682} className=''/>

            </div>
        </div>
    </div>
  )
}




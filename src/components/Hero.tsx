import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({subsets:["latin"]})

export default function Hero() {
  return (
    <div className={`${montserrat.className} w-full flex flex-row justify-center items-center py-4 2xl:h-[682px] bg-[#fff2f3]`}>
        <div className='flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-center'>
            {/* left */}
            <div className='flex flex-col items-center 2xl:flex-col 2xl:w-[573px] 2xl:h-[386px] 2xl:gap-[30px] 2xl:items-start'>
                <h5 className='text-[#96BB7C] font-bold 2xl:text-base 2xl:leading-6 2xl:tracking-[0.1px]'>Welcome</h5>
                <h1 className='2xl:text-[58px] 2xl:font-bold 2xl:w-[542px] 2xl:h-[160px] 2xl:leading-[80px] 2xl:tracking-[0.2px]'>Best Learning Opportunities</h1>
                <h4 className='2xl:w-[338px] 2xl:h-[60px] 2xl:text-[20px] 2xl:font-normal 2xl:leading-[30px] 2xl:tracking-[0.2px] text-[#737373]'>Our goal is to make online education work for everyone</h4>
                <div className='flex 2xl:w-[318px] 2xl:h-[52px] 2xl:flex-row 2xl:gap-[10px]'>
        <button className='2xl:w-[135px] 2xl:h-[52px] bg-[#96BB7C] 2xl:rounded-[5px] 2xl:py-[15px] 2xl:px-[40px] text-white 2xl:font-bold 2xl:text-sm 2xl:tracking-[0.2px] text-center'>Join Us</button>
        <button className='2xl:w-[173px] 2xl:h-[52px] bg-transparent border border-[#96BB7C] 2xl:rounded-[5px] 2xl:py-[15px] 2xl:px-[40px] text-[#96BB7C] 2xl:font-bold 2xl:text-sm 2xl:tracking-[0.2px] text-center'>Learn More</button>
        </div>
            </div>
            {/* right */}
            <div>
                <Image src={"/images/hero-image.png"} alt='hero-image' width={704} height={682}/>

            </div>
        </div>
    </div>
  )
}




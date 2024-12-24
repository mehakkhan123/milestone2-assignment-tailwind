import React from 'react'
import Link from 'next/link'
import { Menu} from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { Montserrat } from 'next/font/google'
import { Caveat } from 'next/font/google'
const montserrat = Montserrat({subsets:["latin"]})



export default function Header() {
  return (
    <div className='w-full bg-[#fff2f3] flex flex-row justify-center items-center'>
      <header className={`${montserrat.className} w-full 2xl:w-[1322px] 2xl:border 2xl:border-black px-2 py-4 sm:px-9 sm:py-3 flex flex-row justify-between items-center 2xl:justify-center 2xl:gap-64`}>
        <h1 className='font-bold text-sm sm:text-xl xl:text-2xl text-[#252B42]'>Brandname</h1>
        <ul className='hidden md:flex md:flex-row md:gap-8 md:text-base lg:gap-24 xl:gap-28 2xl:gap-[21px]'>
            <li className='hover:underline'><Link href={"/"}>Home</Link></li>
            <li className='hover:underline'><Link href={"/"}>Courses</Link></li>
            <li className='hover:underline'><Link href={"/"}>About</Link></li>
        </ul>
        <div className='flex flex-row h-[45px] gap-2  2xl:w-[300px] sm:h-[52px] sm:gap-5'>
        <button className='rounded-[5px] p-2 text-[#96BB7C] font-bold text-sm hover:text-[#a4cb88] h-[52px]'>Login</button>
        <button className='bg-[#96BB7C] hover:bg-[#a4cb88]  rounded-[5px] p-1 text-white font-bold text-sm w-[80px] sm:p-2 sm:w-[100px] xl:w-[138px]'>JOIN US</button>
        </div>
        <Sheet>
          <SheetTrigger className='md:hidden'><Menu/></SheetTrigger>
          <SheetContent className='bg-white'>
            
          <ul className='font-bold text-[#96BB7C]'>
            <li className='border-b border-black pt-5 uppercase text-center'><Link href={"/"}>Home</Link></li>
            <li className='border-b border-black pt-5 uppercase text-center'><Link href={"/"}>Courses</Link></li>
            <li className='border-b border-black pt-5 uppercase text-center'><Link href={"/"}>About</Link></li>
        </ul>
          </SheetContent>
        </Sheet>

    </header>
    </div>
  )
}



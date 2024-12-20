import React from 'react'
import Link from 'next/link'
import { Menu} from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'



export default function Header() {
  return (
    <header className='bg-[#fff2f3] w-full p-2 flex flex-row justify-between items-center'>
        <h1 className='font-bold'>Brandname</h1>
        <ul className='hidden sm:flex'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/"}>Courses</Link></li>
            <li><Link href={"/"}>About</Link></li>
        </ul>
        <div className='flex flex-row gap-[10px]'>
        <button className='rounded-[5px] p-2'>Login</button>
        <button className='bg-[#96BB7C] rounded-[5px] p-2'>JOIN US</button>
        </div>
        <Sheet>
          <SheetTrigger className='sm:hidden'><Menu/></SheetTrigger>
          <SheetContent className='bg-white'>
          <ul className=''>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/"}>Courses</Link></li>
            <li><Link href={"/"}>About</Link></li>
        </ul>
          </SheetContent>
        </Sheet>

    </header>
  )
}
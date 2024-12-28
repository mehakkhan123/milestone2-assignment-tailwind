import React from 'react'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({subsets:["latin"]})

export default function About() {
  return (
    <div className={`${montserrat.className} flex flex-col justify-center items-center p-8`}>
      <h1 className='text-2xl font-bold text-gray-500 lg:text-4xl max-w-[1322px] '>About Us</h1>
      <p className='text-center py-5 max-w-[1322px] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ea repellat distinctio adipisci quam incidunt, veritatis reiciendis maxime molestiae explicabo dignissimos vitae recusandae animi fuga magni dolores nam? Ullam, architecto.
      </p>
      <p className='text-center max-w-[1322px] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nostrum autem impedit aut itaque amet praesentium sed animi quam tempore?</p>
    </div>
  )
}

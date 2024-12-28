import Image from 'next/image';
import React from 'react';
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({subsets:["latin"]})



export default function Courses() {
  return (
    <div className={`${montserrat.className} flex flex-col justify-center items-center p-6`}>
      <h1 className='text-2xl font-bold text-gray-500 lg:text-4xl'>Courses</h1>
      <div className='flex flex-col items-center justify-center px-4 py-5 gap-7 lg:flex-row lg:flex-wrap max-w-[1322px]'>
        <Image
          src={'/images/graphic-design.png'}
          alt='graphics designing'
          width={600} 
          height={600} 
          className='object-contain border border-b-slate-400 cursor-pointer max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px]' 
        />
        <Image
          src={'/images/office.png'}
          alt='ms office'
          width={600} 
          height={600} 
          className='object-contain border border-b-slate-400 cursor-pointer max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px]' 
        />
        <Image
          src={'/images/webdesigning.png'}
          alt='Web designing'
          width={600} 
          height={600} 
          className='object-contain border border-b-slate-400 cursor-pointer max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px]' 
        />
        <Image
          src={'/images/freelancing.png'}
          alt='freelancing'
          width={600} 
          height={600} 
          className='object-contain border border-b-slate-400 cursor-pointer max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px]' 
        />
        <Image
          src={'/images/english.jpg'}
          alt='english language'
          width={600} 
          height={600} 
          className='object-contain border border-b-slate-400 cursor-pointer max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px]' 
        />
      </div>
    </div>
  );
}

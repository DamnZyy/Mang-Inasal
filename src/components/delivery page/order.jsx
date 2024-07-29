'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { FaRegHeart, FaHeart } from "react-icons/fa6";

import Meal1 from '@/images/meal1.png'
import { Description } from '../footer';


export default function page({image, title, description, price, oldPrice}) {
  const [count, setCount] = useState(1);
  const [disable, setDisable] = useState(true);

  const total = price * count;
  const formattedTotal = new Intl.NumberFormat('en-US').format(total);
  const formattedOldPrice = new Intl.NumberFormat('en-US').format(oldPrice);

  return (
    <div className='flex justify-center max-w-[1500px] m-auto pt-10 pb-20 select-none'>
      <div className='max-w-[1240px] w-full m-auto flex-col almost:flex-row flex items-center justify-center'>

        <div className='min-w-[300px] sm:min-w-[400px] relative'>
            <Image src={image} width={500} height={500} quality={100}></Image>
        </div>

        <div className='grid content-between p-5 max-w-[550px]'>

          <div>
            <p className='text-[22px] smol:text-3xl xl:text-4xl font-bold uppercase tracking-tight'>{title}</p>
            <p className='text-gray-600 tracking-tight mt-5'>{description}</p>
            
            <div className='flex items-center justify-start mt-5 gap-5'>
                <p className='text-2xl font-semibold tracking-tighter tabular-nums'>{`₱${formattedTotal}.00`}</p>
                <p className=' font-bold text-base text-green-600 tracking-tighter line-through decoration-2'>{`₱${formattedOldPrice}.00`}</p>
            </div>
          </div>

          <div>

            <span className='flex gap-4 mt-5 mb-5 items-center justify-start'>
              <p className='text- font-semibold uppercase tracking-tighter'>Quantity:</p>
              <div className='flex border-[1px] border-gray-300 rounded-md
              '>
                <button className='px-4 py-0.5 hover:bg-gray-400 rounded-l' onClick={() => setCount(count <= 1 ? 1 : count - 1)}>-</button>
                <p className='px-5 py-1  tabular-nums tracking-tighter'>{count}</p>
                <button className='px-4 py-0.5 hover:bg-gray-400 rounded-r' onClick={() => setCount(count >= 999 ? 999 : count + 1)}>+</button>
              </div>
            </span>
            
            <div className='flex gap-1'>
                    <button className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm w-full py-2.5 text-center transition-colors">Buy Now</button>
                    <button className={`text-green-600 w-12 flex justify-center items-center border-[1px] border-green-600 rounded-lg hover:text-white hover:bg-green-600 transition-all ${disable ? '' : 'hover:bg-green-600'}`} onMouseEnter={() => setDisable(false)} onMouseLeave={() => setDisable(true)}>
                        <FaRegHeart className={disable ? '' : 'hidden'} />
                        <FaHeart className={disable ? 'hidden' : ''} />
                    </button>
                </div>
          </div>

        </div>
      </div>
    </div>
  )
}

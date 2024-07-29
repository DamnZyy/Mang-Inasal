'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import styles from './../styles.module.css'
import Link from 'next/link';

export default function FoodItem({image, title, description, href}) {
    const [disable, setDisable] = useState(true);
  return (
    <div className=''>
        <div className='max-w-[300px] grid content-between h-full m-auto p-5 shadow-darks rounded-xl'>
            <div className='flex items-center justify-center'>
                <Image src={image} width={260} height={160}></Image>
            </div>

            <div>
                <div>
                    <p className='text-base font-semibold'>{title}</p>
                    <p className='text-sm text-gray-600'>{description}</p>
                </div>
                <div className='flex gap-1 mt-3'>
                    <Link href={href} className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm w-full py-2.5 text-center transition-colors">Order Now</Link>
                    {/* <button className={`text-green-600 w-12 flex justify-center items-center border-[1px] border-green-600 rounded-lg hover:text-white hover:bg-green-600 transition-all ${disable ? '' : 'hover:bg-green-600'}`} onMouseEnter={() => setDisable(false)} onMouseLeave={() => setDisable(true)}>
                        <FaRegHeart className={disable ? '' : 'hidden'} />
                        <FaHeart className={disable ? 'hidden' : ''} />
                    </button> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export function FoodItemContainer({children}){
    return(
        <div className={styles.FoodItemContainer}>{children}</div>
    )
}

import React from 'react'
import Background1 from '@/images/Background/background-1.png'
import Background2 from '@/images/Background/background-2.png'
import Image from 'next/image'

import Slider from '@/components/news page/news-slider'

import News1 from '@/images/News/news1.png'


export const metadata = {
  title: 'News'
}

export default function page() {
  return (
    <div>
        <div className='mb-12'>

            <div className='max-w-[1500px] h-[290px] relative mb-10 m-auto'>
                <Image src={Background1} fill alt="Picture of the author" objectFit="cover" quality={100} className='hidden almost:block'></Image>
                <Image src={Background2} fill alt="Picture of the author" objectFit="cover" quality={100} className='block almost:hidden'></Image>
            </div>

            <div className='max-w-[1200px] m-auto px-5'>
                <p className="text-[#2d9751] mb-8 font-bold text-[30px] sm:text-[35px] md:text-[40px] tracking-tight">News</p>
                <div class="keen-slider__slide rounded-xl">
                    <blockquote class="flex flex-col h-full justify-between rounded-2xl bg-white shadow-darks">
                        <Image src={News1} className="w-full rounded-t-2xl" /> 
                        <div class="grid grid-col content-between justify-start h-full mt-4 mb-3 px-5">
                            <p class="text-[20px] sm:text-2xl md:text-3xl font-bold">Maris and Anthony say ‘yes’ to Mang Inasal as Pork BBQ endorsers</p>
                            <p class="mt-2 leading-relaxed text-sm text-gray-400">Posted on 29 Jun 2024</p>
                            <p className='text-gray-600 sm:text-xl my-4'>The Breakthrough Love Team of the Year, MaThon, composed of Maris Racal and Anthony Jennings -- are now the newest endorsers of Mang Inasal Pork BBQ.</p>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>

        <Slider></Slider>
    </div>
  )
}

import React from 'react'
import Image from 'next/image'

import Background1 from '@/images/Background/background-1.png'
import Background2 from '@/images/Background/background-2.png'

export const metadata = {
  title: 'Promos'
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
          <p className="text-[#2d9751] font-bold text-[30px] sm:text-[35px] md:text-[40px]">Promo & E-Gifts</p>

          <div className='flex flex-grow gap-4 flex-wrap w-full'>
            
            <div className='bg-[#14463a] rounded-3xl p-5 flex-1'>
              <div className='border-dashed border-2 p-5 rounded-xl border-[#fbee37] flex flex-col justify-center items-center'>
                <p className='text-[#fbee37] font-bold text-[35px] mt-10'>Promos</p>
                <p className='text-[#fbee37]  text-base text-center'>These deals and discounts are waiting for you!</p>
                <button className='uppercase font-semibold h-[40px] px-[35px] rounded-xl mt-5 mb-10 text-sm bg-[#fbee37] hover:bg-[#2d9751] text-[#2d9751] hover:text-[#fbee37] transition-colors'>find out more</button>
              </div>
            </div>

            <div className='bg-[#fbee37] rounded-3xl p-5 flex-1'>
              <div className='border-dashed border-2 p-5 rounded-xl border-[#2d9751] flex flex-col justify-center items-center'>
                <p className='text-[#2d9751] font-bold text-[35px] mt-10'>E-Gifts</p>
                <p className='text-[#2d9751]  text-base text-center'>You can now send Mang Inasal gifts online!</p>
                <button className='uppercase font-semibold h-[40px] px-[35px] rounded-xl mt-5 mb-10 text-sm bg-[#2d9751] hover:bg-green-700 text-[#fff] transition-colors'>find out more</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

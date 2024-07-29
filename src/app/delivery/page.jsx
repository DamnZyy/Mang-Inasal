import React from 'react'
import Image from 'next/image'
import Background1 from '@/images/Background/background-1.png'
import Background2 from '@/images/Background/background-2.png'

import Order from '@/components/delivery page/order'

export const metadata = {
  title: 'Delivery',
}

export default function page() {
  return (
    <div>
      <div className="mb-12">

      </div>

      <div>
      <Order 
          image={"/halohalo2.png"} 
          title={"Crema de Leche Halo-Halo"} 
          description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."} 
          price={"430"} 
          oldPrice={"2400"} 
      />
      </div>
    </div>
  )
}

import React from 'react'

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

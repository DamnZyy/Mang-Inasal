
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './../styles.module.css'

import { FaChevronRight } from "react-icons/fa6";

const Foods = [
    {
        image: "/chicken3.png",
        foodName: "Paa Large"
    },
    {
        image: "/halohalo1.png",
        foodName: "Extra Creamy Halo-Halo"
    },
    {
        image: "/palabok1.png",
        foodName: "Palabok"
    },
    {
        image: "/grilled1.png",
        foodName: "2 pc Pork BBQ"
    }
];

export default function FoodSale() {
    return(
    <section className='bg-[#faf5ee] max-w-[1500px] m-auto'>
        <div class="mx-auto max-w-[1240px] px-4 pt-12 pb-24">
            <div class="flex-col w-full items-start justify-between">
                <div className="flex justify-between">
                    <h2 class="text-[#2d9751] font-bold text-[40px] tracking-tight">Menu</h2>
                    <Link href="/menu" className='text-[#2d9751] font-[500] text-[16px] flex justify-center items-center gap-1 cursor-pointer hover:text-black transition-colors'>VIEW ALL<FaChevronRight className='text-xs' /></Link>
                </div>
                <p className='text-[16px] pb-6'>Order now via <Link href='https://manginasaldelivery.com.ph/home/brand/4806394001752064?_gl=1*1h642y6*_gcl_au*MTEwNzQ0MTM2LjE3MjA2MDMwNzk.*_ga*MTI3Nzg4NDM1NS4xNzIwNjAzMDc5*_ga_MPTC2MPW1H*MTcyMDYyMDM2Ny41LjEuMTcyMDYyMDM2Ny42MC4wLjA.' target='_blank' className='hover:underline underline-offset-2 transition-all'>manginasaldelivery.com.ph</Link></p>
            </div>

            <FoodItemContainer>
                {Foods.map((food, index) => <FoodComponent key={index} image={food.image} food={food.foodName}/>)}
            </FoodItemContainer>
        </div>
    </section>
    )
}
export function FoodComponent({image, food}) {
    return(
    <div className=''>
        <div className='max-w-[300px] bg-white grid content-between h-full m-auto p-5 shadow-darks rounded-xl'>
            <div className=''>
                <div className='flex items-center justify-center'>
                    <Image src={image} alt='image' width={260} height={160}></Image>
                </div>
                <p className='text-base font-semibold mt-6'>{food}</p>
                <p className='text-sm text-gray-600'></p>
            </div>

            <div className='flex gap-1 mt-3'>
                <Link href="/menu" className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm w-full py-2.5 text-center transition-colors">Order Now</Link>
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
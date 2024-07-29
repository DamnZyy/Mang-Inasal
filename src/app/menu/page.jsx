import React from 'react'
import Select from '@/components/menu page/select'
import Background1 from '@/images/Background/background-1.png'
import Background2 from '@/images/Background/background-2.png'
import Image from 'next/image'
import { GetGroupMeals, GetChickenInasal, GetPalabok, GetGrilledPork, GetSisig, GetOthers } from '@/lib/getData';

export const metadata = {
  title: 'Menu',
}
export default async function page() {
  const GroupMeals = await GetGroupMeals(); 
  const ChickenInasal = await GetChickenInasal();
  const Palabok = await GetPalabok();
  const GrilledPork = await GetGrilledPork();
  const Sisig = await GetSisig();
  const Others = await GetOthers();
  
  const FoodDetails = {
    "Group Meals": GroupMeals,
    "Chicken Inasal": ChickenInasal,
    "Palabok": Palabok,
    "Grilled Pork": GrilledPork,
    "Sisig": Sisig,
    "Others": Others
  };
  return (
    <div>
        <div className='max-w-[1500px] h-[290px] relative mb-10 m-auto'>
            <Image src={Background1} fill alt="Picture of the author" objectFit="cover" quality={100} className='hidden almost:block'></Image>
            <Image src={Background2} fill alt="Picture of the author" objectFit="cover" quality={100} className='block almost:hidden'></Image>
        </div>
        
        <div className="max-w-[1200px] px-5 m-auto mb-12">
            <div className="flex justify-between items-center">
                <p className="text-[#2d9751] font-bold text-[40px]">Menu</p>
            </div>

            <p className="text-[16px] pb-6">Order now via manginasaldelivery.com.ph</p>

            <Select choices={Object.keys(FoodDetails)} FoodDetails={FoodDetails}></Select>
        </div>

    </div>
  )
}

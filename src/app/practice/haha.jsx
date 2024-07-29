'use client'
import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react"
import FoodItem, { FoodItemContainer } from '@/components/menu page/foods'

export default function haha({choices, FoodDetails}) {
    const [isOpen, setIsOpen] = useState(false);
    const [Option, setOption] = useState(choices[0]);
  
    
    const onOptionClicked = (value) => () => {
      setOption(value);
      setIsOpen(false);
    }

  return (
    <div className="">
    <div className="relative border-[1px] inline-flex min-w-full rounded-md bg-white">
      
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between text-slate-900 text-sm w-full px-3 py-2">
        {Option || choices[0]} <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
  
      {isOpen && (
      <div className="w-full border-[1px] bg-white transition-all absolute top-6 right-0 z-10 mt-4 origin-top-right rounded-md shadow-md p-1">
        {choices.map((choice, index) =>
          <div>
            <button type="button" onClick={onOptionClicked(choice)} className="flex items-center text-slate-900 justify-start gap-2 w-full rounded-sm py-1.5 text-sm hover:bg-slate-100" key={index}>
            <span className={`start-0 flex ps-2 items-center justify-center ${choice === Option ? 'opacity-100' : 'opacity-0'}`}><Check className="h-4 w-4" /></span>{choice}
            </button>
          </div>)}
      </div>
      )}
    </div>
  
    <p className="py-5 font-semibold text-xl">{Option}</p>
  
    <FoodItemContainer>
        {FoodDetails[Option] && FoodDetails[Option].map((foods, index) => <FoodItem key={index} image={foods.image} title={foods.title} description={foods.description}></FoodItem>)}
    </FoodItemContainer>
  </div>
  )
}

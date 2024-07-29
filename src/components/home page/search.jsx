'use client'
import React from 'react'
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
  return (
    <div className='max-w-[1200px] m-auto relative px-3'>
        <div class="absolute inset-y-0 start-0 flex items-center ps-7 pointer-events-none">
            <IoSearch className={`w-5 h-5 ${isFocused ? 'text-green-700' : 'text-gray-500 dark:text-gray-400'}`} />
        </div>
        <input type="text" placeholder='What are you looking for?' className='rounded-full w-full border-[1px] my-[65px] outline-green-700 py-2.5 pl-11' onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  )
}

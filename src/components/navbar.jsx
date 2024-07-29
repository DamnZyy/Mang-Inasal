'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from "react-icons/fa6";

export default function Navbar({logo}) {
    const [showNavbar, setShowNavbar] = useState(false);
    const pathname = usePathname();
  return (
    <>
        <nav className='w-full py-3 px-2 z-30 fixed bg-[#faf5ee] almost:shadow-darks'>
            <div className="flex justify-between max-w-7xl m-auto p-3">
                <div className='flex gap-11'>

                    <span className='font-semibold flex items-center'>
                        <FaBars className='text-xl almost:hidden' onClick={() => setShowNavbar(!showNavbar)} />
                        <Image src={logo} alt='logo' className='absolute hidden almost:block' width={100} height={100}></Image>
                    </span>

                    <ul className={`justify-center items-center gap-7 font-semibold ml-20 hidden almost:flex`}>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/menu">Menu</NavLink>
                        <NavLink href="/delivery" dynamicMatch={pathname.startsWith("/delivery")}>Delivery</NavLink>
                        <NavLink href="/promos">Promos</NavLink>
                        <NavLink href="/franchising">Franchising</NavLink>
                        <NavLink href="/news">News</NavLink>
                    </ul>

                </div>

                <div className='flex gap-5 text-sm'>
                    <Link href="/menu" className='text-white bg-green-600 px-4 py-2 rounded-xl hover:bg-green-800 transition-colors font-bold tracking-wide'>ORDER NOW</Link>
                </div>
            </div>
        </nav>

        <ul className={`bg-[#faf5ee] shadow-darks z-20 fixed flex almost:hidden flex-col justify-center items-center gap-11 text-lg py-10 mt-20 left-0 w-full -translate-y-0 transition-all  ${showNavbar ? "-translate-y-0 " : "-translate-y-[500px]"}`}>
            <ResponsiveLink onClick={() => setShowNavbar(!showNavbar)} href="/">Home</ResponsiveLink>
            <ResponsiveLink onClick={() => setShowNavbar(!showNavbar)} href="/menu">Menu</ResponsiveLink>
            <ResponsiveLink onClick={() => setShowNavbar(!showNavbar)} href="/delivery" dynamicMatch={pathname.startsWith("/delivery")}>Delivery</ResponsiveLink>
            <ResponsiveLink onClick={() => setShowNavbar(!showNavbar)} href="/promos">Promos</ResponsiveLink>
            <ResponsiveLink onClick={() => setShowNavbar(!showNavbar)} href="/franchising">Franchising</ResponsiveLink>
            <ResponsiveLink onClick={() => setShowNavbar(!showNavbar)} href="/news">News</ResponsiveLink>
        </ul>
    </>
  )
}

export function NavLink({children, href, dynamicMatch}) {
    const pathname = usePathname();
    const isActive = dynamicMatch ? pathname.startsWith(href) : pathname === href;
    return (
        <li className={`cursor-pointer transition-colors ${isActive ? 'text-[#2d9751]' : 'text-black'}`}>
            <Link href={href}>{children}</Link>
        </li>
    )
}

export function ResponsiveLink({children, href, dynamicMatch, onClick}) {
    const pathname = usePathname();
    const isActive = dynamicMatch ? pathname.startsWith(href) : pathname === href;
    return (
        <li className={`font-semibold ${isActive ? 'text-[#2d9751]' : 'text-black'}`}>
            <Link onClick={onClick} href={href}>{children}</Link>
        </li>
    )
}

import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link';
import Image from 'next/image';

export function Footer({children}) {
  return (
    <footer className='bg-[#1d4f1f]'>
        {children}
    </footer>
  )
}

export function FooterInfo({children}) {
  return (
        <div className='max-w-[200px] mr-32'>
            {children}
        </div>
  )
}

export function Description({children}) {
    return (
        <div className='text-sm text-white'>
            {children}
        </div>
    )
}

export function FooterLogo({image}) {
    return (
        <div className='h-[85px] relative'>
            <Image src={image} alt="Picture of the author" objectFit="cover" quality={100}></Image>
        </div>
    )
}

export function SocialIcons({children}) {
    return (
        <div className='flex text-xl gap-5 mt-3'>
            {children}
        </div>
    )
}

export function Icons({children, href}) {
    return (
        <Link href={href} className='text-gray-300 hover:text-white transition-colors'>
            {children}
        </Link>
    )
}

export function FooterSection({children}) {
  return (
    <div className='max-w-[1300px] pt-10 m-auto bg-[#1d4f1f]'>
        <div className={styles.customized}>
            {children}
        </div>
    </div>
  )
}

export function ColumnLinks({children, content}) {
    return (
        <div>
            <p className='tracking-wide font-semibold text-white text-start mb-3 items-center gap-1'>{content}</p>
            <div className='text-sm flex flex-col'>
                {children}
            </div>
        </div>
    )
}

export function FooterLink({children, href}) {
  return (
    <Link href={href} className={styles.links}>{children}</Link>
  )
}

export function EndContent({children, credits}) {
    return (
      <div className='flex text-sm flex-col md:flex-row justify-between items-center max-w-[600px] almost:max-w-[1300px] pb-10 m-auto mt-5 px-7'>
          <p className='text-white'>{credits}</p>
          <div className='flex gap-7'>
            {children}
          </div>
      </div>
    )
}

export function EndLink({children, href}) {
  return (
    <Link href={href} className="text-white hover:text-gray-300 transition-colors">
        {children}
    </Link>
  )
}


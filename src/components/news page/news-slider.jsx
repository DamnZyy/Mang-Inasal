'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import News1 from '@/images/News/news1.png'
import News2 from '@/images/News/news2.png'
import News3 from '@/images/News/news3.png'
import News4 from '@/images/News/news4.png'
import News5 from '@/images/News/news5.png'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const cardData = [
    { id: 1, image: News1, content: 'LOOK: Mang Inasal Menu and Prices as of July 2024', date: 'Posted on 01 Jul 2024' },
    { id: 2, image: News2, content: 'Maris and Anthony say ‘yes’ to Mang Inasal as Pork BBQ endorsers', date: 'Posted on 29 Jun 2024' },
    { id: 3, image: News3, content: 'Mang Inasal delights international guests with Ihaw-Sarap treats in the 1st UN Tourism Forum', date: 'Posted on 27 Jun 2024' },
    { id: 4, image: News4, content: 'Dads deserve a feast at Mang Inasal this Father’s Day', date: 'Posted on 07 Jun 2024' },
    { id: 5, image: News5, content: 'Mang Inasal launches ‘AlmuSOLB’ breakfast meals in select branches', date: 'Posted on 07 Jun 2024' }
  ];
  

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
        origin: 'auto',
        perView: 1,
        spacing: 15,
    },
    breakpoints: {
        '(min-width: 705px)': {
          slides: {
            origin: 'auto',
            perView: 2,
            spacing: 15,
          },
        },
        '(min-width: 1025px)': {
          slides: {
            origin: 'auto',
            perView: 3,
            spacing: 15,
          },
        },
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })
  return (
    <section className='max-w-[1500px] m-auto'>
        <div class="mx-auto max-w-[1240px] px-4 py-12 border-t-2">
          <div class="max-w-7xl m-auto items-center justify-between sm:flex">
              <div className="flex flex-col">
                <p className="text-[#2d9751] font-bold text-[30px] sm:text-[35px] tracking-tight md:text-[40px]">Other Stories</p>
                <p className='text-[16px] pb-6'>Discover the lastest updates here!</p>
              </div>
              {loaded && instanceRef.current && (
                <div class="flex gap-4 lg:mt-0">
                  <div onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}disabled={currentSlide === 0} aria-label="Previous slide" id="keen-slider-previous-desktop" class="cursor-pointer rounded-full border border-[#2d9751] p-3 text-[#2d9751] transition hover:bg-[#2d9751] hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 rtl:rotate-180"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
                  </div>
                  <div onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} disabled={currentSlide === instanceRef.current.track.details.slides.length - 1} aria-label="Next slide" id="keen-slider-next-desktop" class="cursor-pointer rounded-full border border-[#2d9751] p-3 text-[#2d9751] transition hover:bg-[#2d9751] hover:text-white">
                      <svg class="size-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                  </div>
                </div>
              )}
          </div>

            <div class="mt-8">
                <div ref={sliderRef} class="keen-slider">
                  {cardData.map((data, index) => <NewsSlider image={data.image} key={index} content={data.content} posted={data.date} />)}
                </div>
            </div>
        </div>
    </section>
  )
}

export function NewsSlider({image, content, date}) {
  return (
    <div class="keen-slider__slide rounded-2xl border-2">
        <Image src={image} alt='slider' className="w-full" /> 
        <div class="grid grid-col content-between justify-start h-full mt-4 mb-3 px-5">
            <p class="tex-base font-bold">{content}</p>
            <p class="mt-4 leading-relaxed text-sm text-gray-400">{date}</p>
        </div>
    </div>
  )
}


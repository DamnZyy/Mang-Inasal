'use client'
import * as React from "react"
import Image from "next/image"
import { useState } from "react"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Promo1 from '@/images/Promo/promo1.png';
import Promo2 from '@/images/Promo/promo2.png';
import Promo3 from '@/images/Promo/promo3.png';
import Promo4 from '@/images/Promo/promo4.png';
import Promo5 from '@/images/Promo/promo5.png';
import Promo6 from '@/images/Promo/promo6.png';
import Promo7 from '@/images/Promo/promo7.png';
import Promo8 from '@/images/Promo/promo8.png';
import Promo9 from '@/images/Promo/promo9.png';
import Promo10 from '@/images/Promo/promo10.png';
import Promo11 from '@/images/Promo/promo11.png';
import Promo12 from '@/images/Promo/promo12.png';
import Promo13 from '@/images/Promo/promo13.png';
import Promo14 from '@/images/Promo/promo14.png';
import Promo15 from '@/images/Promo/promo15.png';
import Promo16 from '@/images/Promo/promo16.png';
import Promo17 from '@/images/Promo/promo17.png';
import Promo18 from '@/images/Promo/promo18.png';
import Promo19 from '@/images/Promo/promo19.png';
import Promo20 from '@/images/Promo/promo20.png';
import Promo21 from '@/images/Promo/promo21.png';
import Promo22 from '@/images/Promo/promo22.png';
import Promo23 from '@/images/Promo/promo23.png';
import Promo24 from '@/images/Promo/promo24.png';
import Promo25 from '@/images/Promo/promo25.png';
import Promo26 from '@/images/Promo/promo26.png';
import Promo27 from '@/images/Promo/promo27.png';
import Promo28 from '@/images/Promo/promo28.png';
import Promo29 from '@/images/Promo/promo29.png';
import Promo30 from '@/images/Promo/promo30.png';

export default function CarouselDemo() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: 'auto',
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 500px)': {
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

  const Promos = [Promo1, Promo2, Promo3, Promo4, Promo5, Promo6, Promo7, Promo8, Promo9, Promo10, Promo11, Promo12, Promo13, Promo14, Promo15, Promo16, Promo17, Promo18, Promo19, Promo20, Promo21, Promo22, Promo23, Promo24, Promo25, Promo26, Promo27, Promo28, Promo29, Promo30];

  return (
    <>
    <section class="bg-[#1d4f1f] max-w-[1500px] m-auto">
      <div class="mx-auto max-w-[1240px] px-4 pt-12 pb-20">
        <div class="max-w-7xl m-auto items-center justify-between sm:flex">
          <div className="flex flex-col">
            <h2 class="max-w-xl text-4xl text-[#fbee37] font-bold tracking-tight sm:text-5xl">Promos</h2>
            <p className='text-[16px] text-[#fff] pb-6'>These deals and discounts are waiting for you!</p>
          </div>
          {loaded && instanceRef.current && (
            <div class="flex gap-4 lg:mt-0">
              <div onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}disabled={currentSlide === 0} aria-label="Previous slide" id="keen-slider-previous-desktop" class="cursor-pointer rounded-full border border-[#fbee37] p-3 text-[#fbee37] transition hover:bg-[#fbee37] hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 rtl:rotate-180"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
              </div>
              <div onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} disabled={currentSlide === instanceRef.current.track.details.slides.length - 1} aria-label="Next slide" id="keen-slider-next-desktop" class="cursor-pointer rounded-full border border-[#fbee37] p-3 text-[#fbee37] transition hover:bg-[#fbee37] hover:text-black">
                  <svg class="size-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
              </div>
            </div>
          )}
        </div>

        <div class="mt-8 h-auto">
          <div ref={sliderRef} class="keen-slider">
            {Promos.map((promo, index) => <Expedition image={promo} index={index}></Expedition>)}
          </div>
        </div>
        
      </div>
    </section>
    </>
  )
}

export function Expedition({image}) {
  return(
    <div class="keen-slider__slide rounded-xl w-10">
      <div class="flex h-full bg-primary justify-between bg-transparent shadow-sm">
          <Image src={image} className="w-full" /> 
      </div>
    </div>
  )
}

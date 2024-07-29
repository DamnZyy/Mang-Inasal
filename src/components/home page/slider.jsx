'use client'
import React from 'react'
import Image from 'next/image';

import Inasal6 from "@/images/slider/inasal6.png";
import Inasal7 from "@/images/slider/inasal7.png";
import Inasal8 from "@/images/slider/inasal8.png";
import Inasal9 from "@/images/slider/inasal9.png";
import Inasal10 from "@/images/slider/inasal10.png";
import Inasal11 from "@/images/slider/inasal11.png";
import Inasal12 from "@/images/slider/inasal12.png";
import Inasal13 from "@/images/slider/inasal13.png";

import Inasalv1 from '@/images/Slider/slider1.png'
import Inasalv2 from '@/images/Slider/slider2.png'
import Inasalv3 from '@/images/Slider/slider3.png'
import Inasalv4 from '@/images/Slider/slider4.png'
import Inasalv5 from '@/images/Slider/slider5.png'
import Inasalv6 from '@/images/Slider/slider6.png'
import Inasalv7 from '@/images/Slider/slider7.png'
import Inasalv8 from '@/images/Slider/slider8.png'
import Inasalv9 from '@/images/Slider/slider9.png'
import Inasalv10 from '@/images/Slider/slider10.png'
import Inasalv11 from '@/images/Slider/slider11.png'
import Inasalv12 from '@/images/Slider/slider12.png'
import Inasalv13 from '@/images/Slider/slider12.png'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState, useEffect } from 'react';

export default function ImageSlider() {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const ImageSliderv2 = [Inasal6,  Inasal7,  Inasal8, Inasal9, Inasal10, Inasal11, Inasal12, Inasal13];
  const ImageSliderv1 = [Inasalv1, Inasalv2, Inasalv3, Inasalv4, Inasalv5, Inasalv6, Inasalv7, Inasalv8, Inasalv9, Inasalv10, Inasalv11, Inasalv12, Inasalv13];

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 3000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
  return (
    <div ref={sliderRef} className="keen-slider max-w-[1500px] m-auto">
      {isWideScreen ?  
      (ImageSliderv1.map((image, index) => <div className="keen-slider__slide" key={index}><Image src={image} alt='image'/></div>))
        : 
      (ImageSliderv2.map((image, index) => <div className="keen-slider__slide" key={index}><Image src={image} alt='image'/></div>))}
    </div>
  )
}

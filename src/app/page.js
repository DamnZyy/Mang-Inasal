import React from 'react'

import ImageSlider from '@/components/home page/slider';
import Search from '@/components/home page/search'
import FoodSale from '@/components/home page/food';
import Promo from '@/components/home page/promo'
import News from '@/components/home page/news';
export default function page() {
  return (
    <div className="select-none">
        <ImageSlider></ImageSlider>
        <Search></Search>
        <FoodSale></FoodSale>
        <Promo></Promo>
        <News></News>
    </div>
  )
}

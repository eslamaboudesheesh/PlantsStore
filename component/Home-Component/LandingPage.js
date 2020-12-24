import React from 'react'
import HeaderCover from './HeaderCover'
import CardSlider from './CardSlider';
import CategoryItemList from './CategoryItemList';
import AboutUs from './AboutUs';
import AllProductList from './AllProductList';

export default function LandingPage() {
    return (
        <> 
         <HeaderCover/>
         <CardSlider/>
         <CategoryItemList/>
         <AboutUs/>
        <AllProductList/>
        </>
    )
}

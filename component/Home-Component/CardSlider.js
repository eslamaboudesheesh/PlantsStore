import React from 'react'
import Slider from "react-slick";
import CardsItem from './CardsItem';

export default function CardSlider() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    infinite: true


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.1,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    infinite: true,

                }
            },
        ]
    };
    return (
        <> 
        <h2>New Arrivals</h2>
            <Slider {...settings}>
            <div className=" col-sm-4 col-md-12 my-2">
                  <CardsItem/>
                </div>
                <div className=" col-sm-4 col-md-12 my-2">
                  <CardsItem/>
                </div>
                <div className=" col-sm-4  col-md-12  my-2">
                  <CardsItem/>
                </div>
                <div className=" col-sm-4 col-md-12  my-2">
                  <CardsItem/>
                </div>
                <div className= "col-sm-4 col-md-12  my-2">
                  <CardsItem/>
                </div>
                <div className="col-sm-4 col-md-12  my-2">
                  <CardsItem/>
                </div>
            </Slider>
        </>
    )
}



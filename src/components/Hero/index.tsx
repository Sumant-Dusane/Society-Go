import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import Slider, { Settings } from "react-slick";

const Hero = () => {
  var settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div id='home' className='relative pt-20'>
      <Slider {...settings}>
        <img src="/images/slider/slider_1.jpg" alt="Slide 1" />
        <img src="/images/slider/slider_2.jpg" alt="Slide 2" />
        <img src="/images/slider/slider_3.jpg" alt="Slide 3" />
        <img src="/images/slider/slider_4.jpg" alt="Slide 4" />
      </Slider>
    </div>
  )
}

export default Hero

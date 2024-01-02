import React from 'react';
import Slider from 'react-slick';

const settings = {
 dots: true,
 infinite: true,
 speed: 500,
 slidesToShow: 3,
 slidesToScroll: 1,
 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
 ],
};

const About = () => {
 const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
 ];

 return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </Slider>
    </div>
 );
};

export default About;
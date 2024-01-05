import React from 'react'
import Slider from "react-slick";
import EveningImg from "../assets/images/evening.png"
import NftImg from "../assets/images/nft.png"
import FurnitureImg from "../assets/images/furniture.png"
import FannieImg from "../assets/images/fannie.png"
import shadowLine from "../assets/images/shadowline.svg"
const Partner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };
  return (
    <div className='max-w-[1140px] mx-auto px-3'>
    <Slider {...settings}>
      <div className='!flex'> <img className=' object-contain' src={EveningImg} alt="evening img" /> <img className=' max-lg:hidden ps-3' src={shadowLine} alt="" /> </div>
      <div className='!flex'> <img className=' object-contain' src={NftImg} alt="nft img" /> <img className=' max-lg:hidden ps-3' src={shadowLine} alt="" /></div>
      <div className='!flex'><img className=' object-contain' src={FurnitureImg} alt="furniture img" /> <img className=' max-lg:hidden ps-3' src={shadowLine} alt="" /></div>
      <div className='!flex'><img className=' object-contain' src={FannieImg} alt="fannie img" /> </div>    
      <div className='!flex'> <img className=' object-contain' src={EveningImg} alt="evening img" /> <img className=' max-lg:hidden ps-3' src={shadowLine} alt="" /> </div>
      <div className='!flex'> <img className=' object-contain' src={NftImg} alt="nft img" /> <img className=' max-lg:hidden ps-3' src={shadowLine} alt="" /></div>
      <div className='!flex'><img className=' object-contain' src={FurnitureImg} alt="furniture img" /> <img className=' max-lg:hidden ps-3' src={shadowLine} alt="" /></div>
      <div className='!flex'><img className=' object-contain' src={FannieImg} alt="fannie img" /> </div>    
    </Slider>
    </div>
  )
}

export default Partner

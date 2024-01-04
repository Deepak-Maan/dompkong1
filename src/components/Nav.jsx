import React from 'react'
import PageLogo from "../assets/images/page-logo.png";
import Twitter from "../assets/images/twitter.svg";
import Opensea from "../assets/images/open-sea.svg";
import Diamond from "../assets/images/diamond.svg";
import Discord from "../assets/images/discord.svg";
import Medium from "../assets/images/medium.svg";
import Telegram from "../assets/images/telegram.svg";
import leftYellow from "../assets/images/heroYellowLine1.png";
import rightYellow from "../assets/images/heroYellowLine2.png";
import smallmonkey from "../assets/images/small-monkey.png";
import white_medium_monkey from "../assets/images/white-medium-monkey.png";
import white_large_monkey from "../assets/images/large-monkey.png";
const Hero = () => {
  return (
    <div className='min-h-screen relative'>
      <img className=' absolute top-0 left-0' src={leftYellow} alt="yellow lines" />
      <img className=' absolute top-0 right-0' src={rightYellow} alt="yellow lines" />
      <img className='absolute bottom-0 right-[30%] z-0' src={smallmonkey} alt="monkey" />
      <img className='absolute bottom-0 right-[10%] z-0' src={white_medium_monkey} alt="monkey" />
      <img className='absolute bottom-0 right-0 z-0' src={white_large_monkey} alt="monkey" />
      <div className='max-w-[1140px] mx-auto px-3 '>
        <div className='flex justify-center relative'>
          <img src={PageLogo} alt="pageLogo" />
          <button className='text-black font-azo absolute right-0 top-[20%] bg-[#FDDA60] rounded py-4 px-6 shadow-yellow text-base fontf-normal uppercase'>cONNECT wALLET</button>
        </div>
        <div className='flex gap-6 justify-center pt-5 pb-10 relative z-10'>
          <a href=""><img className='hover:-translate-y-1 duration-500' src={Twitter} alt="twitter" /></a>
          <a href=""><img className='hover:-translate-y-1 duration-500' src={Opensea} alt="Opensea" /></a>
          <a href=""><img className='hover:-translate-y-1 duration-500' src={Diamond} alt="diamond" /></a>
          <a href=""><img className='hover:-translate-y-1 duration-500' src={Discord} alt="discord" /></a>
          <a href=""><img className='hover:-translate-y-1 duration-500' src={Medium} alt="Medium" /></a>
          <a href=""><img className='hover:-translate-y-1 duration-500' src={Telegram} alt="telegram" /></a>
        </div>
          <h1 className=" text-[34px] relative z-10  md:text-[64px] font-normal leading-[108%] text-white  text-center  font-azo">WELCOME <br /> TO <span className="text-[#F1C85D] relative after:absolute after:w-full after:h-[5px] after:bg-[#F1C85D] after:bottom-0 after:left-0">DomPKong</span> </h1>
          <p className="text-base  relative z-10 font-normal text-white max-w-[506px] text-center mx-auto pt-5 font-Montserrat">Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vita</p>
        <div className=" gap-6 flex relative z-10  flex-wrap justify-center pt-6">
          <button className="hover:animate-pulse rounded bg-[#FDDA60] shadow-[0px_4px_16px_0px_rgba(253,218,96,0.50)] py-4 px-6 font-normal text-base leading-[108%] text-black font-azo duration-300">Whitepaper</button>
          <button className="hover:animate-pulse rounded bg-[#FDDA60] shadow-[0px_4px_16px_0px_rgba(253,218,96,0.50)] py-4 px-6 font-normal text-base leading-[108%] text-black font-azo duration-300">Mint</button>
          <button className="hover:animate-pulse rounded bg-[#FDDA60] shadow-[0px_4px_16px_0px_rgba(253,218,96,0.50)] py-4 px-6 font-normal text-base leading-[108%] text-black font-azo duration-300">Opensea</button>
        </div>
      </div>
    </div>
  )
}

export default Hero

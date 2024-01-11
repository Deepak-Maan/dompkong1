import React from 'react'
import cars from "../assets/images/cars.png"
import watches from "../assets/images/watch.png"
import boat from "../assets/images/bots.png"
const About = () => {
    return (
        <div className='overflow-x-clip'>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="grid xl:grid-cols-2 pt-4 sm:pt-8 md:pt-16 lg:pt-32 md:pb-10 sm:pb-5 lg:pb-20">
                    <div>
                        <h2 className='text-white font-azo font-normal text-[64px] leading-[108%] max-xl:text-center'>About </h2>
                        <p className=' font-normal font-Montserrat text-base text-white leading-[160%] max-w-[522px] max-xl:mx-auto'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                    </div>
                    <div>
                        <div className="container1 mx-auto my-[4%] w-[210px] h-[140px] relative">
                            <div className="w-[216px] h-[216px] bg-[#FDDA60] animate-pulse blur-[131px] absolute"></div>
                            <div id="carousel" className='w-full h-full absolute mb-4'>
                                <figure className='  absolute block left-[10px] top-[10px] bg-transparent'><img className='mx-3' id='slider' src={cars} alt="car" /></figure>
                                <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img className='mx-3' id='slider1' src={watches} alt="" /></figure>
                                <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img className='mx-3' id='slider2' src={boat} alt="boast" /></figure>
                                <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img className='mx-3' id='slider3' src={cars} alt="boast" /></figure>
                                <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img className='mx-3' id='slider4' src={watches} alt="watches" /></figure>
                                <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img className='mx-3' id='slider5' src={cars} alt="car" /></figure>
                                <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img className='mx-3' id='slider6' src={boat} alt="boast" /></figure>
                                <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img className='mx-3' id='slider7' src={watches} alt="watches" /></figure>
                                <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img className='mx-3' id='slider6' src={boat} alt="boast" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

import React from 'react'
import { useState } from 'react';
import BottleImg from '../assets/images/bottleImg.png';

const Mint = () => {
    let [count, setCount] = useState(1);

    function incCount() {
        setCount((prevCount) => (prevCount <= 8 ? prevCount + 1 : prevCount));
    }
    function decCount() {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    }
    return (
        <div className='bg-mint-img relative py-12 md:py-0 overflow-x-clip'>
            <div className='max-w-[1000px] mx-auto px-3 flex flex-wrap '>
                <div className=' w-full md:w-1/2 flex justify-center md:justify-start'>
                    <img className='max-sm:w-[60%]' src={BottleImg} alt="bottle" />
                </div>
                <div className=' w-full md:w-1/2 flex flex-col justify-center items-center '>
                    <div className='max-w-[511px] w-full '>
                        <h2 className=' text-[54px] md:text-[64px] font-normal leading-[108%] text-white font-azo pt-4'>Mint NFT</h2>
                        <div className='flex justify-between pt-2 md:pt-12'>
                            <p className='text-white text-4xl font-black font-Montserrat leading-[108%] '>9999 </p>
                            <p className='text-white text-4xl font-black font-Montserrat leading-[108%] md:w-[177px]'>.2 ETH</p>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <p className='text-white text-bace font-normal font-Montserrat leading-[160%] '>of 10,000 minted </p>
                            <p className='text-white text-bace font-normal font-Montserrat leading-[160%] md:w-[177px]'>per NFT</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-white text-4xl font-black font-Montserrat leading-[108%]'>Max 9 </p>
                            <p className='text-white text-4xl font-black font-Montserrat leading-[108%] md:w-[177px] '>Max 2</p>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <p className='text-white text-bace font-normal font-Montserrat leading-[160%]'>NFTs per transaction </p>
                            <p className='text-white text-bace font-normal font-Montserrat leading-[160%] md:w-[177px] '>Transaction per wallet</p>
                        </div>
                        <div className='flex gap-4 pt-12'>
                            <div  onClick={decCount} className=' cursor-pointer  w-[75px] h-[65px] rounded bg-white flex justify-center items-center'><p className='text-4xl font-black font-Montserrat leading-[108%] text-black '>-</p></div>
                            <div className='w-[320px] h-[65px] rounded border border-[#fff] flex justify-center items-center'>
                                <p className='text-4xl font-black font-Montserrat leading-[108%] text-white'>0{count}</p>
                            </div>
                            <div onClick={incCount} className=' cursor-pointer  w-[75px] h-[65px] rounded bg-white flex justify-center items-center'><p className='text-4xl font-black font-Montserrat leading-[108%] text-black '>+</p></div>
                        </div>
                        <button className='text-2xl font-normal border relative border-[#FDDA60] shadow-yellow before:z-[-1] before:transition-all before:ease-linear before:duration-300 before:absolute before:left-[-100%] before:hover:left-0 before:hover:w-full before:top-0 before:w-full before:h-full before:bg-black overflow-hidden before:rounded before:hover:text-white hover:text-white z-[1] leading-[108%] font-azo text-black bg-[#FDDA60] rounded shadow-[rgba(253, 218, 96, 0.50)] py-4 px-[68px] sm:px-[168px] mt-9 sm:max-w-[494px] w-full  duration-300'>MINT NOW</button>
                    </div>
                </div>
                <div className='w-[173px] h-[173px] bg-[#FDDA60] blur-[146px] absolute left-0 top-2 animate-pulse hidden md:block'></div>
                <div className='w-[296px] h-[296px] bg-[#FDDA60] blur-[146px] absolute right-[-7%] animate-pulse top-[23%] leading-[296px] hidden md:block'></div>
            </div>
        </div>
    )
}

export default Mint
import { useState } from 'react'
import bigKong_default from '../assets/images/big-kong-default.png'
import Bigkong1 from '../assets/images/big-kong1.png'
import Bigkong2 from '../assets/images/big-kong2.png'
import bgikong3 from '../assets/images/big-kong3.png'
import bigkong4 from '../assets/images/big-kong4.png'
import bigkong5 from '../assets/images/big-kong5.png'
import bigkong6 from '../assets/images/big-kong6.png'
import bigkong7 from '../assets/images/big-kong-7.png'
import bigkong8 from '../assets/images/big-kong8.png'
import bigkong9 from '../assets/images/big-kong9.png'
import bigkong10 from '../assets/images/big-kong10.png'
import Kong1 from '../assets/images/kong-small1.png'
import Kong2 from '../assets/images/kong-small2.png'
import Kong3 from '../assets/images/kong-small3.png'
import Kong4 from '../assets/images/kong-small4.png'
import Kong5 from '../assets/images/kong-small5.png'
import Kong6 from '../assets/images/kong-small6.png'
import Kong7 from '../assets/images/kong-small7.png'
import Kong8 from '../assets/images/kong-small8.png'
import Kong9 from '../assets/images/kong-small9.png'
import Kong10 from '../assets/images/kong-small10.png'
const KongTab = () => {
    const [tab, setTabs] = useState("tab1")
    function tabChange(tabs) {
        setTabs(tabs)
    }
    return (
        <div className='flex w-full overflow-x-hidden mt-1 relative lg:pb-24 md:pb-12 pb-6'>
            <div className='grid grid-cols-1 sm:grid-cols-4 w-full mx-auto gap-6 relative'>
            <h2 data-aos="fade-right" data-aos-duration="2000" className='text-white font-azo font-normal leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] w-full uppercase absolute top-0 sm:top-6 text-center'>The Kongs</h2>
                <div className='col-span-1'>
                    <div className='flex sm:flex-col justify-around max-xs:pt-12 max-sm:pt-14 flex-wrap gap-7'>
                        <div data-aos="fade-right" data-aos-duration="2000" className='sm:flex sm:justify-start sm:-translate-x-7'>
                            <img onClick={() => tabChange("tab2")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong1} alt='Kong' />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" className='sm:flex sm:justify-center sm:mt-[35px]'>
                            <img onClick={() => tabChange("tab3")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong2} alt='Kong' />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" className='sm:flex sm:justify-end sm:mt-[30px]'>
                            <img onClick={() => tabChange("tab4")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong3} alt='Kong' />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" className='sm:flex sm:justify-center sm:mt-[30px]'>
                            <img onClick={() => tabChange("tab5")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong4} alt='Kong' />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" className='sm:flex sm:justify-start sm:-translate-x-7 sm:mt-[35px]'>
                            <img onClick={() => tabChange("tab6")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong5} alt='Kong' />
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000" className='sm:col-span-2 relative max-xs:mb-4 max-sm:mb-10 sm:mt-[29px]'>
                <div className='w-[296px] h-[296px] bg-[#FDDA60] blur-[146px] absolute right-[30%] z-[0] animate-pulse top-[30%] leading-[296px] hidden md:block'></div>
                    {tab === "tab1" &&
                        <div className='flex justify-center items-center relative z-[3]'>
                            <img src={bigKong_default} alt='kong' />
                        </div>
                    }
                    {tab === "tab2" &&
                        <div className='flex justify-center items-center relative z-[3]'>
                            <img src={Bigkong1} alt='kong' />
                        </div>
                    }
                    {tab === "tab3" &&
                        <div className='flex justify-center items-center relative z-[3]'>
                            <img src={Bigkong2} alt='kong' />
                        </div>
                    }
                    {tab === "tab4" &&
                        <div className='flex justify-center items-center relative z-[3]'>
                            <img src={bgikong3} alt='kong' />
                        </div>
                    }
                    {tab === "tab5" &&
                        <div className='flex justify-center items-center relative z-[3]'>
                            <img src={bigkong4} alt='kong' />
                        </div>
                    }
                    {tab === "tab6" &&
                        <div className='flex justify-center items-center relative z-[3]'>
                            <img src={bigkong5} alt='kong' />
                        </div>
                    }
                    {tab === "tab7" &&
                        <div className='flex justify-center items-center relative z-[3]'>
                            <img src={bigkong6} alt='kong' />
                        </div>
                    }
                    {tab === "tab8" &&
                        <div className='flex justify-center items-center relative z-[3]'>
                            <img src={bigkong7} alt='kong' />
                        </div>
                    }
                    {tab === "tab9" &&
                        <div className='flex justify-center items-center relative z-[3]'>
                            <img src={bigkong8} alt='kong' />
                        </div>
                    }
                    {tab === "tab10" &&
                        <div className='flex justify-center items-center relative z-[3]'>
                            <img src={bigkong9} alt='kong' />
                        </div>
                    }
                    {tab === "tab11" &&
                        <div className='flex justify-center items-center relative z-[3]'>
                            <img src={bigkong10} alt='kong' />
                        </div>
                    }
                </div>
                <div className='col-span-1'>
                    <div className="flex sm:flex-col justify-around max-sm:pb-5 flex-wrap-reverse gap-7">
                        <div data-aos="fade-left" data-aos-duration="2000" className='sm:flex sm:justify-end sm:translate-x-7 '>
                            <img onClick={() => tabChange("tab7")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong6} alt='Kong' />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" className='sm:flex sm:justify-center sm:mt-[35px]'>
                            <img onClick={() => tabChange("tab8")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong7} alt='Kong' />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" className='sm:flex sm:justify-start sm:mt-[30px]'>
                            <img onClick={() => tabChange("tab9")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong8} alt='Kong' />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" className='sm:flex sm:justify-center sm:mt-[30px]'>
                            <img onClick={() => tabChange("tab10")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong9} alt='Kong' />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" className='sm:flex sm:justify-end sm:translate-x-7 sm:mt-[35px]'>
                            <img onClick={() => tabChange("tab11")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong10} alt='Kong' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KongTab

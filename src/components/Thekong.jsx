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

const Kong = () => {
    const [tab, setTabs] = useState("tab1")
    function tabChange(tabs) {
        setTabs(tabs)
    }
    return (
        <div className='flex w-full overflow-hidden pb-24'>
            <div className='grid grid-cols-5 w-full mx-auto'>
                <div className='col-span-1'>
                    <div className='flex justify-start -translate-x-7 mt-[35px]'>
                        <img onClick={() => tabChange("tab2")} className=' border-[4px] border-[#FDDA60] rounded-lg shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)]' src={Kong1} alt='Kong' />
                    </div>
                    <div className='flex justify-center mt-[35px]'>
                        <img onClick={() => tabChange("tab3")} className=' border-[4px] border-[#FDDA60] rounded-lg shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)]' src={Kong2} alt='Kong' />
                    </div>
                    <div className='flex justify-end mt-[35px]'>
                        <img onClick={() => tabChange("tab4")} className=' border-[4px] border-[#FDDA60] rounded-lg shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)]' src={Kong3} alt='Kong' />
                    </div>
                    <div className='flex justify-center mt-[35px]'>
                        <img onClick={() => tabChange("tab5")} className=' border-[4px] border-[#FDDA60] rounded-lg shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)]' src={Kong4} alt='Kong' />
                    </div>
                    <div className='flex justify-start -translate-x-7 mt-[35px]'>
                        <img onClick={() => tabChange("tab6")} className=' border-[4px] border-[#FDDA60] rounded-lg shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)]' src={Kong5} alt='Kong' />
                    </div>
                </div>
                <div className='col-span-3 relative z-[3]'>
                    <div className='w-[296px] h-[296px] bg-[#FDDA60] blur-[146px] absolute right-[30%] z-[0] animate-pulse top-[30%] leading-[296px] hidden md:block'></div>
                    <p className=' absolute'></p>
                    {tab === "tab1" &&
                        <div className='flex justify-center items-center '>
                            <img className='relative z-[3]' src={bigKong_default} alt='kong' />
                        </div>
                    }
                    {tab === "tab2" &&
                        <div className='flex justify-center items-center'>
                            <img className='relative z-[3' src={Bigkong1} alt='kong' />
                        </div>
                    }
                    {tab === "tab3" &&
                        <div className='flex justify-center items-center'>
                            <img className='relative z-[3' src={Bigkong2} alt='kong' />
                        </div>
                    }
                    {tab === "tab4" &&
                        <div className='flex justify-center items-center'>
                            <img className='relative z-[3' src={bgikong3} alt='kong' />
                        </div>
                    }
                    {tab === "tab5" &&
                        <div className='flex justify-center items-center'>
                            <img className='relative z-[3' src={bigkong4} alt='kong' />
                        </div>
                    }
                    {tab === "tab6" &&
                        <div className='flex justify-center items-center'>
                            <img className='relative z-[3' src={bigkong5} alt='kong' />
                        </div>
                    }
                    {tab === "tab7" &&
                        <div className='flex justify-center items-center'>
                            <img className='relative z-[3' src={bigkong6} alt='kong' />
                        </div>
                    }
                    {tab === "tab8" &&
                        <div className='flex justify-center items-center'>
                            <img className='relative z-[3' src={bigkong7} alt='kong' />
                        </div>
                    }
                    {tab === "tab9" &&
                        <div className='flex justify-center items-center'>
                            <img className='relative z-[3' src={bigkong8} alt='kong' />
                        </div>
                    }
                    {tab === "tab10" &&
                        <div className='flex justify-center items-center'>
                            <img className='relative z-[3' src={bigkong9} alt='kong' />
                        </div>
                    }
                    {tab === "tab11" &&
                        <div className='flex justify-center items-center'>
                            <img className='relative z-[3' src={bigkong10} alt='kong' />
                        </div>
                    }
                </div>
                <div className='col-span-1'>
                    <div className='flex justify-end translate-x-7 mt-[35px]'>
                        <img onClick={() => tabChange("tab7")} className=' border-[4px] border-[#FDDA60] rounded-lg shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)]' src={Kong6} alt='Kong' />
                    </div>
                    <div className='flex justify-center mt-[35px]'>
                        <img onClick={() => tabChange("tab8")} className=' border-[4px] border-[#FDDA60] rounded-lg shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)]' src={Kong7} alt='Kong' />
                    </div>
                    <div className='flex justify-start mt-[35px]'>
                        <img onClick={() => tabChange("tab9")} className=' border-[4px] border-[#FDDA60] rounded-lg shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)]' src={Kong8} alt='Kong' />
                    </div>
                    <div className='flex justify-center mt-[35px]'>
                        <img onClick={() => tabChange("tab10")} className=' border-[4px] border-[#FDDA60] rounded-lg shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)]' src={Kong9} alt='Kong' />
                    </div>
                    <div className='flex justify-end translate-x-7 mt-[35px]'>
                        <img onClick={() => tabChange("tab11")} className=' border-[4px] border-[#FDDA60] rounded-lg shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)]' src={Kong10} alt='Kong' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kong
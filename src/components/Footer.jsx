import React from 'react'
import Twitter from "../assets/images/footer-twitter.svg";
import Opensea from "../assets/images/footer-opensea.svg";
import Diamond from "../assets/images/footer-diamond.svg";
import Discord from "../assets/images/footer-discord.svg";
import Medium from "../assets/images/footer-medium.svg";
import Telegram from "../assets/images/footer-telegram.svg";
import logo from "../assets/images/footer-logo.png"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
    return (
        <div className="relative ">
            <svg xmlns="http://www.w3.oyg/1700/svg" width="21" height="2" viewBox="0 0 21 2" fill="none" className={`${id === open ? "mr-3" : "rotate-90"} h-5 w-5   transition-transform`}>
                <path d="M1.69629 1H19.6963" stroke="#FDDA60" stroke-width="2" stroke-linecap="round" />
            </svg>
            <svg className="absolute rotate-0 top-[9px]" xmlns="http://www.w3.org/2000/svg" width="21" height="2" viewBox="0 0 21 2" fill="none" >
                <path d="M1.69629 1H19.6963" stroke="#FDDA60" stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
    );
}

export function Footer() {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className=' relative overflow-x-clip'>
            <div className=" max-w-[1140px] mx-auto px-3">
                <h2 className="font-azo text-[30px] md:text-[64px] text-[#fff] font-normal text-center py-[50px]">FAQs</h2>
                <div className=" mx-auto relative md:w-8/12 px-2 ">
                    <Accordion data-aos="fade-up-right" className="border-b-[1px] border-[#FDDA60]" open={open === 1} icon={<Icon id={1} open={open} />}                >
                        <AccordionHeader onClick={() => handleOpen(1)} className="font-Montserrat text-[11px] sm:text-[16px] md:text-[22px] text-start font-bold text-white w-full justify-between" >Arcu faucibus diam feugiat magna etiam.</AccordionHeader>
                        <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] ">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. </AccordionBody>
                    </Accordion>
                    <Accordion data-aos="fade-up-left" className="border-b-[1px] border-[#FDDA60]  overflow-hidden" open={open === 2} icon={<Icon id={2} open={open} />} >
                        <AccordionHeader onClick={() => handleOpen(2)} className="font-Montserrat text-[11px] sm:text-[16px] md:text-[22px] text-start font-bold text-white"> Fermentum tortor aenean.</AccordionHeader>
                        <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] "> Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, isus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. </AccordionBody>
                    </Accordion>
                    <Accordion data-aos="fade-up-right" className="border-b-[1px] border-[#FDDA60] " open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(3)} className="font-Montserrat text-[11px] sm:text-[16px] md:text-[22px] text-start font-bold text-white" >Dictum est amet sollicitudin.</AccordionHeader>
                        <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] ">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. </AccordionBody>
                    </Accordion>
                    <Accordion data-aos="fade-up-left" className="border-b-[1px] border-[#FDDA60] " open={open === 4} icon={<Icon id={4} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(4)} className="font-Montserrat text-[11px] sm:text-[16px] md:text-[22px] text-start font-bold text-white">Sed vulputate mi faucibus.</AccordionHeader>
                        <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] ">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. </AccordionBody>
                    </Accordion>
                    <Accordion data-aos="fade-up-right" className="border-b-[1px] border-[#FDDA60] " open={open === 5} icon={<Icon id={5} open={open} />} >
                        <AccordionHeader onClick={() => handleOpen(5)} className="font-Montserrat text-[11px] sm:text-[16px] md:text-[22px] text-start font-bold text-white" >Commodo placerat ultricies.</AccordionHeader>
                        <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] ">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</AccordionBody>
                    </Accordion>
                    <Accordion data-aos="fade-up-left" className="border-b-[1px] border-[#FDDA60] " open={open === 6} icon={<Icon id={6} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(6)} className="font-Montserrat text-[11px] sm:text-[16px] md:text-[22px] text-start font-bold text-white"> Nunc amet cursus morbi donec.</AccordionHeader>
                        <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] ">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. </AccordionBody>
                    </Accordion>
                </div>
                <a href="" className='flex justify-center pt-5 md:pt-12 lg:pt-24'><img src={logo} alt="logo" /></a>
                <div className='flex gap-6 justify-center relative py-7 after:flex after:absolute after:h-[0.5px] after:w-[1920px] after:bg-white after:bottom-0 '>
                    <a href="https://twitter.com/i/flow/login" target=' _blank'><img className='hover:-translate-y-1 duration-500' src={Twitter} alt=" social logo" /></a>
                    <a href=""><img className='hover:-translate-y-1 duration-500' src={Opensea} alt=" social logo" /></a>
                    <a href=""><img className='hover:-translate-y-1 duration-500' src={Diamond} alt=" social logo" /></a>
                    <a href="https://discord.com/" target='_blank'><img className='hover:-translate-y-1 duration-500' src={Discord} alt=" social logo" /></a>
                    <a href=""><img className='hover:-translate-y-1 duration-500' src={Medium} alt=" social logo" /></a>
                    <a href="https://web.telegram.org/" target='_blank'><img className='hover:-translate-y-1 duration-500' src={Telegram} alt=" social logo" /></a>
                </div>
                <p className='text-base font-Montserrat font-normal text-white pt-4 pb-5 text-center'>© DomPKong {(new Date().getFullYear())}</p>
            </div>
            <div className='w-[132px] h-[132px] bg-[#FDDA60] blur-[146px] absolute left-[10%] top-[20%] animate-pulse hidden md:block'></div>
            <div className='w-[247px] h-[247px] bg-[#FDDA60] blur-[146px] absolute left-0 animate-pulse bottom-0 leading-[296px] hidden md:block'></div>
        </div>
    );
}
export default Footer;
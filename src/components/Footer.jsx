import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
    return (
        <div className="relative ">
            <svg xmlns="http://www.w3.oyg/1700/svg" width="21" height="2" viewBox="0 0 21 2" fill="none" className={`${id === open ? "" : "rotate-90"} h-5 w-5  transition-transform`}>
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
        <div className=' relative mt_-1'>
            <h2 className="font-azo text-[30px] md:text-[64px] text-[#fff] font-normal text-center py-[50px]">FAQs</h2>
            <div className='pb-[200px]'>
                <div className="container max-[1140px] mx-auto">
                    <div className="my_container mx-auto relative md:w-8/12 px-2">
                        <Accordion className="border-b-[1px] border-[#FDDA60]" open={open === 1} icon={<Icon id={1} open={open} />}                >
                            <AccordionHeader onClick={() => handleOpen(1)} className="font-Montserrat text-[16px] md:text-[22px] text-start font-bold text-white w-full justify-between" >Arcu faucibus diam feugiat magna etiam.</AccordionHeader>
                            <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] ">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. </AccordionBody>
                        </Accordion>
                        <Accordion className="border-b-[1px] border-[#FDDA60]  overflow-hidden" open={open === 2} icon={<Icon id={2} open={open} />} >
                            <AccordionHeader onClick={() => handleOpen(2)} className="font-Montserrat text-[16px] md:text-[22px] text-start font-bold text-white"> Fermentum tortor aenean.</AccordionHeader>
                            <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] "> Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, isus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. </AccordionBody>
                        </Accordion>
                        <Accordion className="border-b-[1px] border-[#FDDA60] " open={open === 3} icon={<Icon id={3} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(3)} className="font-Montserrat text-[16px] md:text-[22px] text-start font-bold text-white" >Dictum est amet sollicitudin.</AccordionHeader>
                            <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] ">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. </AccordionBody>
                        </Accordion>
                        <Accordion className="border-b-[1px] border-[#FDDA60] " open={open === 4} icon={<Icon id={4} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(4)} className="font-Montserrat text-[16px] md:text-[22px] text-start font-bold text-white">Sed vulputate mi faucibus.</AccordionHeader>
                            <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] ">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. </AccordionBody>
                        </Accordion>
                        <Accordion className="border-b-[1px] border-[#FDDA60] " open={open === 5} icon={<Icon id={5} open={open} />} >
                            <AccordionHeader onClick={() => handleOpen(5)} className="font-Montserrat text-[16px] md:text-[22px] text-start font-bold text-white" >Commodo placerat ultricies.</AccordionHeader>
                            <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] ">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</AccordionBody>
                        </Accordion>
                        <Accordion className="border-b-[1px] border-[#FDDA60] " open={open === 6} icon={<Icon id={6} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(6)} className="font-Montserrat text-[16px] md:text-[22px] text-start font-bold text-white"> Nunc amet cursus morbi donec.</AccordionHeader>
                            <AccordionBody className="font-Montserrat text-[14px] md:text-[16px] font-normal text-white max-w-[829px] pt-[10px] ">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
import React from 'react'
import Logo from '../assets/images/footer-logo.png'
const Preloader = () => {
    return (
        <div className='overflow-hidden fixed top-0 left-0 right-0'>
            <div class='flex flex-col space-x-2 justify-center items-center bg-white h-screen'>
                <div><img className=' animate-bounce w-40 h-40 object-contain' src={Logo} alt="" /></div>             
            </div>            
        </div>
    )
}

export default Preloader
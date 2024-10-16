import React from 'react'
import {assets} from '../assets/assets_frontend/assets'


const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left */}
            <div>
                <img className='h-12 w-12 lg:h-16 lg:w-16 rounded-full object-cover mb-0 cursor-pointer' src={assets.logo} alt='assets logo'/>
                <p className ='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto expedita quis vel quidem est rem consequuntur maiores perspiciatis illum!</p>
            </div>
            

            {/* Center */}
            <div>
                <p className='text-xl fornt-medium mb-5'> Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* Right */}
            <div>
                <p className='text-xl fornt-medium mb-5' >GET IN TOUCH</p>
                <ul  className='flex flex-col gap-2 text-gray-600'>
                    <li>+254797246096</li>
                    <li>medrescue@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* Copyright */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ MetaMind Limited - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-1g px-6 md:px-10 1g:px-20'>
        {/* Left Side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
            <p className='text-3x1 md:text-4x1 lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                SAFARI NURSING <br /> AGENCY
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt='group profiles'/>
                <p>At Safari Nursing Agency, we are dedicated to helping healthcare professionals embark on a global journey of excellence
                    ,<br className='hidden sm-block' />Whether you are a nurse, doctor, or healthcare worker seeking employment opportunities abroad or looking to advance your education in prestigious institutions worldwide, we are here to guide you every step of the way.
                </p>
            </div>
            <a className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 ' href='#speciality'>
                Book Appointment <img className='w-3'src={assets.arrow_icon} alt='arrow-icon'/>
            </a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-1g' src={assets.header_img} alt='header img'/>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { motion } from 'framer-motion'

const Header = () => {
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  const buttonVariant = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'
      initial="hidden"
      animate="visible"
    >
      {/* Left Side */}
      <motion.div 
        className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'
        variants={textVariant}
      >
        <motion.p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
          SAFARI NURSE <br /> AGENCY
        </motion.p>
        <motion.div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt='group profiles'/>
          <p>
            At Safari Nurse Agency, we are dedicated to helping healthcare professionals embark on a global journey of excellence,<br className='hidden sm:block' />
            Whether you are a nurse, doctor, or healthcare worker seeking employment opportunities abroad or looking to advance your education in prestigious institutions worldwide, we are here to guide you every step of the way.
          </p>
        </motion.div>
        <motion.a 
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0'
          href='/contact'
          whileHover="hover"
          variants={buttonVariant}
        >
          Book Appointment <img className='w-3' src={assets.arrow_icon} alt='arrow-icon'/>
        </motion.a>
      </motion.div>

      {/* Right Side */}
      <motion.div className='md:w-1/2 relative' variants={imageVariant}>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt='header img'/>
      </motion.div>
    </motion.div>
  )
}

export default Header

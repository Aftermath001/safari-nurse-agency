import React, { useRef } from 'react';
import { assets } from '../assets/assets_frontend/assets';
// import emailjs from 'emailjs-com';

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
  //     .then((result) => {
  //         console.log(result.text);
  //         alert('Message sent successfully!');
  //     }, (error) => {
  //         console.log(error.text);
  //         alert('Failed to send the message. Please try again.');
  //     });
  // };

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt='contact image' />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>Kabarnet <br />Baringo County</p>
          <p className='text-gray-500'>Tel:(+254) 798 567 828 <br />Email:safari.agency@yahoo.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at Safari Nursing Agency</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button 
            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'
            onClick={() => window.open('https://wa.me/798 567 828', '_blank')}
          >
            WhatsApp Us
          </button>
        </div>
      </div>

      {/* <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 max-w-md mx-auto'> */}
      <form  className='flex flex-col gap-4 max-w-md mx-auto'>
        <input type='text' name='name' placeholder='Your Name' required className='border p-2' />
        <input type='email' name='email' placeholder='Your Email' required className='border p-2' />
        <textarea name='message' placeholder='Your Message' required className='border p-2' />
        <button type='submit' className='bg-black text-white px-4 py-2'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;




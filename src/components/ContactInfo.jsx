import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";


const ContactInfo = () => {
  return (
    <div className='container'>
        <div className='infoWrapper flex justify-between'>
        <div className='flex flex-col gap-8 w-[600px]'>
            <div className='flex items-center gap-6'>
                <hr className='w-[72px]' />
                <p className='font-bold'>CONTACT US</p>
            </div>
            <div className='title flex flex-col gap-8'>
            <p className='font-bold text-5xl '>We'd love to hear from you</p>
            <p>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
            </div>
        </div>
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
              <p className='font-bold text-[24px]'>Let's talk! </p>
              <div className='flex gap-8'>
                <p>+1 23 456 789</p>
                <p>hello@finsweet.com</p>
              </div>
              <hr />
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-bold text-[24px]'>Headoffice</p>
                <p>8 Brewery Drive, Hudson, NH 03051
                USA</p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-bold text-[24px]'>Branch Office</p>
              <div className='flex gap-8'>
              <p>178 Marconi St., Venice, 34293
              Italy</p>
              </div>
            </div>
            <div className='flex gap-[20px] items-center'>
            <FaFacebook className='w-[20px] h-[20px]'/>
            <FaTwitter className='w-[20px] h-[20px]'/>
            <FaLinkedin className='w-[20px] h-[20px]'/>
            </div>
        </div>
        </div>
    </div>

  )
}

export default ContactInfo
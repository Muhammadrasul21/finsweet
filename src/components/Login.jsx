import React from 'react'

const Login = () => {
  return (
    <div className='container flex items-center justify-center'>
          <div className='w-[768px] flex flex-col gap-8'>
          <div className='grid grid-cols-2 gap-8'>
            <div className='border-b border-gray-200 flex flex-col gap-2'>
                <p className='font-bold text-[12px] text-[#1D2130]'>First Name</p>
                <p>John</p>
            </div>
            <div className='border-b border-gray-200 flex flex-col gap-2'>
                <p className='font-bold text-[12px] text-[#1D2130]'>Last Name</p>
                <p>Doe</p>
            </div>
            <div className='border-b border-gray-200 flex flex-col gap-2'>
                <p className='font-bold text-[12px] text-[#1D2130]'>Email Id</p>
                <p>johndoe@gmail.com</p>
            </div>
            <div className='border-b border-gray-200 flex flex-col gap-2'>
                <p className='font-bold text-[12px] text-[#1D2130]'>Subject</p>
            </div>
          </div>
          <div>
            <p className='font-bold text-[12px] text-[#1D2130]'>Message</p>
            <textarea className='textarea border w-[768px] h-[156px] border-gray-200 rounded-[4px]' placeholder='Type your Messege'></textarea>
          </div>
          <div className='flex justify-center'>
          <button className='bg-[#70C174] w-[146px] h-[50px] text-white rounded-[4px] hover:bg-white hover:text-black border transition duration-300 ease-in-out'>Learn more</button>
          </div>
          </div>
    </div>
  )
}

export default Login
import React from 'react'
import video from "../assets/video.png"
const Info = () => {
  return (
    <>
    <div className='container'>
        <div className='infoWrapper'>
            <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-8 w-[600px]'>
                <div className='flex items-center gap-6'>
                    <hr className='w-[72px]' />
                    <p className='font-bold'>KNOW ABOUT US</p>
                </div>
                <p className='font-bold text-5xl '>We help nature smile and survive everywhere</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                <div>
                <button className='bg-[#70C174] w-[146px] h-[50px] text-white rounded-[4px] hover:bg-white hover:text-black border transition duration-300 ease-in-out'>Learn more</button>

                </div>
            </div>
            <div><img src={video} alt="" /></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Info
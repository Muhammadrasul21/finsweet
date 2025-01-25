import React from 'react'
import Layout from "../../components/Layout"
import girl from "../../assets/girl.png"

const Media = () => {
  return (
    <>
    <Layout>
    <div className='container'>
        <div className='infoWrapper'>
            <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-8 w-[496px]'>
                <div className='flex items-center gap-6'>
                    <hr className='w-[72px]' />
                    <p className='font-bold'>Top news</p>
                </div>
                <p className='font-bold text-5xl '>Our goal is to make water available for everyone</p>
                <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                <div>
                <button className='bg-[#70C174] w-[146px] h-[50px] text-white rounded-[4px] hover:bg-white hover:text-black border transition duration-300 ease-in-out'>Learn more</button>
                </div>
            </div>
            <div><img src={girl} alt="" /></div>
            </div>
        </div>
    </div>
    </Layout>
    </>
  )
}

export default Media
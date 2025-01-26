import React from 'react'
import { mediaNews } from '../static'

const News = () => {
  return (
    <div className='infoWrapper flex flex-col items-center gap-12'>
        <div className='w-[530px] text-center'>
            <p className='font-bold text-5xl'>Read our Recent News</p>
            <p>Edit this text to make it your own. To edit, simply click directly on the text to start We are served</p>
        </div>
        <div className='flex gap-6'>
            {
                mediaNews?.map((item)=>(
                    <div className='flex flex-col gap-4' key={item.id}>
                        <img src={item.img} alt="" />
                        <div className='flex flex-col gap-4'>
                            <p className='font-medium text-[20px]'>{item.title}</p>
                            <p className='text-[#525560]' >{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default News
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='max-w-[1000px] mx-auto h-screen bg-[#f1f1e8]'>
            {/* Container */}
            <div className='max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='font-bold text-5xl text-[#a49020] font-[Caveat]'>
                    INTEGRATE YOUR STACK</h1>
                <p className='mt-5'>
                    Building a responsive full-stack web applications. All design and features are mordern eye catching.</p>
                <h1 className='font-bold mb-5 text-purple-700 mt-3'>
                    Automate your work</h1>
                <div>
                    <button className='group px-6 py-3 flex items-center bg-[#9e8d2c] text-white rounded-lg hover:bg-[#706420] duration-100'>View Sample <HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-100'/></button>
                </div>
            </div>

        </div>
    )
}

export default Home
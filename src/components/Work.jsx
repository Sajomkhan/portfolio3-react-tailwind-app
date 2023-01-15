import React from 'react'
import workImg from '../assets/projects/workImg.jpeg'
import realestate from '../assets/projects/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className="max-w-[1000px] mx-auto h-screen bg-[#f1f1e8]">
        <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#a49020]' >Work</p>
                <p className='py-6 font-bold'>//Check out some of my recent work :</p>
            </div>
            <div style={{backgroundImage: `url(${workImg})`}}
                className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
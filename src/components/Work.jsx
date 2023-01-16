import React from 'react'
import workImg from '../assets/projects/workImg.jpeg'
import realestate from '../assets/projects/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className="max-w-[1000px] mx-auto bg-[var(--bg)] sm:h-screen">
        <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full '>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[var(--headline)]' >Work</p>
                <p className='py-5 font-bold'>//Check out some of my recent work :</p>
            </div>

            {/* Container */}
            <div className='px-10 grid rounded-md sm:grid-cols-2 md:grid-cols-3 gap-6'>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${workImg})`}}
                    className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl text-white font-bold text-center tracking-wider'>
                            React Js Application
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${realestate})`}}
                    className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl text-white font-bold text-center tracking-wider'>
                            React Js Application
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${workImg})`}}
                    className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl text-white font-bold text-center tracking-wider'>
                            React Js Application
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${realestate})`}}
                    className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl text-white font-bold text-center tracking-wider'>
                            React Js Application
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${workImg})`}}
                    className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl text-white font-bold text-center tracking-wider'>
                            React Js Application
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${realestate})`}}
                    className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl text-white font-bold text-center tracking-wider'>
                            React Js Application
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold'>Code</button>
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
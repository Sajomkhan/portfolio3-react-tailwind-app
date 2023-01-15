import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';


const Skills = () => {
    return (
        <div name='skills' className="max-w-[1000px] mx-auto h-screen bg-[#f1f1e8]">
            <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
                <div>
                    <p className='text-4xl my-4 font-bold inline border-b-4 border-[#a49020]'>Experiences</p>
                    <p className='my-8 font-bold'>//These are the technologies I've worked with :</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                    <div className='shadow-md shadow-black hover:scale-110 duration-300 pt-3 rounded-lg'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                        <p className='font-bold my-2'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-300 pt-3 rounded-lg'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML Icon" />
                        <p className='font-bold my-2'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-300 pt-3 rounded-lg'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML Icon" />
                        <p className='font-bold my-2'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-300 pt-3 rounded-lg'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML Icon" />
                        <p className='font-bold my-2'>React</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-300 pt-3 rounded-lg'>
                        <img className='w-20 mx-auto' src={FireBase} alt="HTML Icon" />
                        <p className='font-bold my-2'>FireBase</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-300 pt-3 rounded-lg'>
                        <img className='w-20 mx-auto' src={Node} alt="HTML Icon" />
                        <p className='font-bold my-2'>Node</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-300 pt-3 rounded-lg'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML Icon" />
                        <p className='font-bold my-2'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-300 pt-3 rounded-lg'>
                        <img className='w-20 mx-auto' src={Mongo} alt="HTML Icon" />
                        <p className='font-bold my-2'>Mongo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../logo.jpg'

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className='fixed w-full h-[65px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo" style={{ width: '170px' }} className='ml-10' />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={() => setNav(!nav)} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* Social Icons */}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0 text-black'>
                <ul>
                    <li className='w-[140px] h-[60px] flex justify-center items-center ml-[-82px] hover:ml-[-10px] duration-200 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-100' href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[140px] h-[60px] flex justify-center items-center ml-[-82px] hover:ml-[-10px] duration-200 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-100' href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[140px] h-[60px] flex justify-center items-center ml-[-82px] hover:ml-[-10px] duration-200 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-100' href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[140px] h-[60px] flex justify-center items-center ml-[-82px] hover:ml-[-10px] duration-200 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-100' href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>                    
                </ul>
            </div>
        </div>
    )
}

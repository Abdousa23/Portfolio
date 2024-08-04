import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <nav className='w-full bg-[#1A0B2E]'>
            <div className='container mx-auto h-20 flex justify-center items-center'>
                <Link to="home" smooth={true} duration={500} className='m-4 p-8 max-md:m-1 max-md:p-2 cursor-pointer'>
                    Home
                </Link>
                <Link to="projects" smooth={true} duration={500} className='m-4 p-8 cursor-pointer max-md:m-1 max-md:p-2'>
                    Projects
                </Link>
                <Link to="contact" smooth={true} duration={500} className='m-4 p-8 cursor-pointer max-md:m-1 max-md:p-2'>
                    About me
                </Link>
            </div>
        </nav>
    );
}
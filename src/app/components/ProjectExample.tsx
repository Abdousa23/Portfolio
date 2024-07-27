'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Url } from 'url';
import AOS from 'aos';
type ProjectExampleProps = {
    theme: string;
    title: string;
    description: string;
    image: string;
    isOdd: boolean;
    links: {
        link?: string | null;
        github?: string | null;
    }
}
export default function ProjectExample(project: ProjectExampleProps) {
    useEffect(() => {
        AOS.refresh()
    }, [])
    return (
        <div className={`relative flex ${project?.isOdd ? "flex-row" : "flex-row-reverse"}  max-lg:flex-col justify-center items-center gap-5 flex-grow mb-40 `}>
            <div data-aos={ !project?.isOdd ? "fade-left":"fade-right"} className='flex-1 my-4 mx-8'>
                <h1 className='text-[#9857d3] text-base font-semibold'>{project?.theme}</h1>
                <h1 className='text-3xl text-[#ccd6f6] font-semibold'>{project?.title}</h1>
                <div className='relative max-w-600px p-4 z-10'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#693B93] via-[#9857d3] to-[#6EBFF4] opacity-20 pointer-events-none'></div>
                    <p className='relative max-w- text-[#CCD6F6]'>{project?.description}</p>
                </div>
                <div className='flex gap-4 my-4'>
                    {project?.links?.github && <Link href={project?.links?.github as unknown as Url}>
                        <Image src={'github.svg'} alt='github' height={40} width={40} />
                    </Link>
                    }
                    
                    {
                        project?.links?.link && <Link href={project?.links?.link as unknown as Url}>
                        <Image src={'internet.svg'} alt={project?.title} height={40} width={40} />
                    </Link>}
                </div>
            </div>
            <div className='max-lg:hidden absolute rounded-full pointer-events-none'
                style={{
                    position: 'absolute',
                    width: '500px',
                    height: '600px',
                    left: project?.isOdd ? '50%' : '0%',
                    top: '50%',
                    transform: 'translate(-5%, -50%)',
                    background: 'radial-gradient(56.07% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)',
                    opacity: '0.5'
                }}></div>
            <div data-aos={ project?.isOdd ? "fade-left":"fade-right"} className=' relative w-full h-72 bg-[#2B0B3A] flex-1'>
                <div className='bg-white w-[95%] max-lg:w-fit max-lg:top-0 max-lg:mx-auto absolute left-10 top-11'>
                    <Image src={project?.image} className='w-full max-lg:w-40 max-lg:h-40' width={600} height={400} alt='edu+' />
                </div>
            </div>
        </div>

    )
}


import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <div className='my-36 text-center h-screen'>
      <h1 className=' text-2xl font-normal'>I'm currently looking to learn more <span className='text-[#A362FF]'>functionnal skills</span></h1>
      <p>that can help me to enhance my professional capabilities</p>
      <ul data-aos = "zoom-in" className='w-1/2 mx-auto my-20 flex justify-center flex-wrap'>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2' src={'/html.svg'} height={40} width={40} alt='html'/>
        </li>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/css.svg'} height={40} width={40} alt='css' />
        </li>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/js.svg'} height={40} width={40} alt='css' />
        </li>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/typescript.svg'} height={40} width={40} alt='typescript' />
        </li>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/react.svg'} height={40} width={40} alt='react' />
        </li>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/next.svg'} height={40} width={40} alt='next' />
        </li>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/nodejs.svg'} height={40} width={40} alt='nodejs' />
        </li>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/express.svg'} height={40} width={40} alt='express' />
        </li>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/mongo.svg'} height={40} width={40} alt='mongo' />
        </li>
        {/* <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/postgresql.svg'} height={40} width={40} alt='postgresql' />
        </li> */}
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/nestjs.svg'} height={40} width={40} alt='nest' />
        </li>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/python.svg'} height={40} width={40} alt='python' />
        </li>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/socket.svg'} height={40} width={40} alt='socketio' />
        </li>
        <li className='bg-[#251C31] rounded-full flex justify-center items-center p-2 m-2'>
          <Image className='m-2'src={'/pwa.svg'} height={40} width={40} alt='pwa' />
        </li>
      </ul>
      <div data-aos="fade-up" className='mx-auto w-1/2 max-lg:hidden'>
        <Image src='orbit.svg' height={340} width={900} alt='orbit' />
      </div>
    </div>
  )
}

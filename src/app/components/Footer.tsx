import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div id='contact' className='w-2/3 mx-auto '>
      <h1 className='text-2xl w-fit'>Contact me</h1>
      <p className='mt-10 text-base max-w-[800px]'>
      I am currently open and available for new projects. Whether you have a small task or a large project, feel free to reach out. I am eager to collaborate and bring your ideas to life.
      <br />
      <Link href={'mailto:a_sahki@estin.dz'}>
      a_sahki@estin.dz
      </Link>
      </p>
      <div className='w-fit flex justify-around items-start mt-4 gap-3 '>
        <Link href='https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b' >
            <Image className='bg-white rounded ' src='linkedin.svg' height={40} width={40} alt='LinkedIn' />
        </Link>
        <Link href='https://github.com/Abdousa23' >
            <Image className='bg-white rounded-full ' src='github.svg' height={40} width={40} alt='github' />
        </Link>
        <Link href='mailto:a_sahki@estin.dz'
        className=' rounded-xl p-0'>
            <Image className='bg-white rounded-full' src='google.svg' height={40} width={40} alt='google' />
        </Link>
      </div>
    </div>
  )
}

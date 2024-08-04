import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function DevDescription() {
  const fullText = "Hello, I'm <span class='text-[#7127BA]'>Abderrahemane 👋</span><br /><br />Exploring code, AI, and data to innovate and inspire.";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  const spanTagRegex = /<span class='text\[#7127BA\]'>/;

  useEffect(() => {
    if (index < fullText.length) {
      const nextChar = fullText[index];
      const nextSubstring = fullText.slice(index, index + 25); // Check the next few characters for the specific span tag
      const timeoutDuration = spanTagRegex.test(nextSubstring) ? 1 : 50;

      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + nextChar);
        setIndex(index + 1);
      }, timeoutDuration);

      return () => clearTimeout(timeoutId);
    }
  }, [index, displayedText, fullText]);

  return (
    <div id="home" className='mt-8' >
      <div className='flex justify-start items-center max-md:flex-col md:ml-[11rem] max-md:text-center gap-20'>
        <Image src='/Me.svg' width={200} height={200} alt='me' />
        <h1 className='text-white text-3xl font-bold max-w-[800px]' dangerouslySetInnerHTML={{ __html: displayedText }} />
      </div>
      <div className='mx-auto max-w-[800px] mt-36'>
        <h1 className='text-white text-3xl font-bold my-8 max-lg:text-center'>I'm a Web Developer</h1>
        <p className='max-lg:text-center max-lg:mx-4'>
          I'm a third-year CS student and a passionate full-stack developer with a keen interest in AI and data science. Driven by curiosity and a love for technology, I explore innovative solutions to complex problems, aiming to make a significant impact in the digital world.
        </p>
      </div>
    </div>
  )
}
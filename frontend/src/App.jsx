import React from 'react'
import './App.css'
import banner from './assets/Berserk.jpg'
import logo from './assets/logo.jpg'
import { TypingEffect } from './components/TypingEffect'
function App() {
  let text = ["Competitive Programmer", "Freelancer", "Web Developer", "Tech Enthusiast"];
  return (
    <>
      <div className='relative bg-white h-auto m-8 -z-1'>
        <div className='absolute top-0 right-0 h-full w-[60px] bg-linear-to-l from-[#121212] to-transparent'></div>
        <div className='absolute top-0 left-0 h-full w-[60px] bg-linear-to-r from-[#121212] to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-[60px] bg-linear-to-t from-[#121212] to-transparent'></div>
        <div className='absolute top-0 right-0 w-full h-[60px] bg-linear-to-b from-[#121212] to-transparent'></div>
        <img src={banner} alt="Berserk Banner" className='w-full h-auto'/>
      </div>

      <div className='flex flex-col ml-12 -mt-20 text-white font-instrument-serif'>
        <img src={logo} alt="Logo" className='w-32 h-32 object-cover rounded-full border-4 border-black'/>
        <div className='ml-4 text-4xl font-bold'>Anas Dharar</div>
        <div className='flex'>
        <div className='ml-4 text-lg text-neutral-500 font-gabarito'>19, he/him | </div>
        <TypingEffect text={text} />
        </div>
      </div>

      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
    </>
  )
}

export default App

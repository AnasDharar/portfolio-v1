import './App.css'
import banner from './assets/Berserk.jpg'
import logo from './assets/logo2.jpg'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import twitter from './assets/twitter.png'
import resume from './assets/resume.png'
import { NavBar } from './components/NavBar'
import { Marquee } from './components/Marquee'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { TypingEffect } from './components/TypingEffect'
import { useState } from 'react'
import { SkillBlocks } from './components/SkillBlocks'
function App() {
  let text = ["Competitive Programmer", "Freelancer", "Web Developer", "Tech Enthusiast"];
  const [skillsState, setSkillsState] = useState("blocks"); // "marquee" or "blocks"
  return (
    <div className='flex flex-col justify-center items-center'>
      <NavBar />

      <div className='relative bg-white h-auto m-8 -z-1'>
        <div className='absolute top-0 right-0 h-full w-[60px] bg-linear-to-l from-[#121212] to-transparent'></div>
        <div className='absolute top-0 left-0 h-full w-[60px] bg-linear-to-r from-[#121212] to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-[60px] bg-linear-to-t from-[#121212] to-transparent'></div>
        <div className='absolute top-0 right-0 w-full h-[60px] bg-linear-to-b from-[#121212] to-transparent'></div>
        <img src={banner} alt="Berserk Banner" className='w-full h-auto' />
      </div>

      <div className='flex flex-col ml-12 -mt-20 text-white font-gabarito duration-100'>
        <img src={logo} alt="Logo" className='w-32 h-32 object-cover rounded-full border-4 border-black' />
        <div className='grid grid-cols-2 ml-4 space-x-2'>
          <div className='text-4xl text-neutral-100 font-bold font-instrument-serif'>Anas Dharar</div>
          <div className='flex justify-end gap-4 mr-8'>

            <div className=' w-6 h-6 hover:scale-125 duration-200'><img src={github} alt="" className='invert object-cover' /></div>
            <div className=' w-6 h-6 hover:scale-125 duration-200'><img src={linkedin} alt="" className='invert object-cover' /></div>
            <div className=' w-6 h-6 hover:scale-125 duration-200'><img src={twitter} alt="" className='invert object-cover' /></div>
            <div className=' w-6 h-6 hover:scale-125 duration-200'><img src={resume} alt="" className='invert object-cover' /></div>
          </div>
        </div>
        <div className='text-neutral-400 ml-4 flex space-x-2'><div>19, he/him | </div><TypingEffect text={text} /> <div> from India</div></div>

        <div className='flex flex-col justify-center items-center'>
          <div className='ml-4 mt-4 text-lg text-neutral-300'>
            I build practical software with a focus on <p className='inline bg-amber-300 text-neutral-800 p-1 rounded-md'> efficiency, clarity, and speed.</p>
            &nbsp; Comfortable across frontend and backend, I care more about systems that work than buzzwords.
          </div>

        </div>
        
      </div>
      <div className='relative flex flex-col justify-center items-center mt-8 w-3/4'>
        <div className='text-neutral-400 font-instrument-serif text-3xl'>
            Tech Stack I use
        </div>
        <div className='relative grid grid-cols-2 border border-neutral-600 rounded-lg mt-4'>
          <div className={`absolute left-0 h-full w-1/2 bg-white transition-transform duration-300 ease-in-out ${skillsState==="marquee" ? "translate-x-0 rounded-l-lg rounded-r-0" : "translate-x-full rounded-r-lg rounded-l-0"}`}></div>
          <div className={`m-2 text-center z-10 cursor-pointer duration-300 ease-in-out ${skillsState==="marquee" ? "text-black" : ""}`} onClick={() => {setSkillsState("marquee")}}>Marquee</div>
          <div className={`m-2 text-center z-10 cursor-pointer duration-300 ease-in-out ${skillsState==="blocks" ? "text-black" : ""}`} onClick={() => {setSkillsState("blocks")}}>Blocks</div>
        </div>
        {skillsState==="marquee" && (
          <Marquee />
        )}
        {skillsState==="blocks" && (
          <SkillBlocks />
        )}
        </div>

      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
    </div>
  )
}

export default App

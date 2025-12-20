import './App.css'
import banner from './assets/Berserk.jpg'
import logo from './assets/anasdharar.jpg'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import twitter from './assets/twitter.png'
import resume from './assets/resume.png'
import {NavBar} from './components/NavBar'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { TypingEffect } from './components/TypingEffect'
function App() {
  let text = ["Competitive Programmer", "Freelancer", "Web Developer", "Tech Enthusiast"];
  return (
    <>
      <NavBar />
      
      <div className='relative bg-white h-auto m-8 -z-1'>
        <div className='absolute top-0 right-0 h-full w-[60px] bg-linear-to-l from-[#121212] to-transparent'></div>
        <div className='absolute top-0 left-0 h-full w-[60px] bg-linear-to-r from-[#121212] to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-[60px] bg-linear-to-t from-[#121212] to-transparent'></div>
        <div className='absolute top-0 right-0 w-full h-[60px] bg-linear-to-b from-[#121212] to-transparent'></div>
        <img src={banner} alt="Berserk Banner" className='w-full h-auto'/>
      </div>

      <div className='flex flex-col ml-12 -mt-20 text-white font-gabarito duration-100'>
        <img src={logo} alt="Logo" className='w-32 h-32 object-cover rounded-full border-4 border-black'/>
        <div className='grid grid-cols-2 ml-4 space-x-2'>
        <div className='text-4xl text-neutral-100 font-bold font-instrument-serif'>Anas Dharar</div>
        <div className='flex justify-end gap-4 mr-8'>
          
          <div className=' w-6 h-6 hover:scale-125 duration-200'><img src={github} alt="" className='invert object-cover'/></div>
          <div className=' w-6 h-6 hover:scale-125 duration-200'><img src={linkedin} alt="" className='invert object-cover'/></div>
          <div className=' w-6 h-6 hover:scale-125 duration-200'><img src={twitter} alt="" className='invert object-cover'/></div>
          <div className=' w-6 h-6 hover:scale-125 duration-200'><img src={resume} alt="" className='invert object-cover'/></div>
        </div>
        </div>
        <div className='text-neutral-400 ml-4 flex space-x-2'><div>19, he/him | </div><TypingEffect text={text} /> <div> from India</div></div>
        <div className='flex justify-center items-center'>
          <div className='ml-4 mt-4 text-lg text-neutral-300'>
            I build practical software with a focus on <p className='inline bg-amber-300 text-black p-1 rounded-md'> efficiency, clarity, and speed.</p> 
            Comfortable across frontend and backend, I care more about systems that work than buzzwords.
          </div>
        </div>
      <div className='m-8 text-center text-lg'>
        A 20 year-old developer from India who loves building efficient, scalable, and intuitive applications.
        With over a year of hands-on experience, I previously worked at a US-based startup 
        and am now building a stealth startup as a Founding engineer.
      </div>
      <div className='m-8 text-center text-lg'>
        A 20 year-old developer from India who loves building efficient, scalable, and intuitive applications.
        With over a year of hands-on experience, I previously worked at a US-based startup 
        and am now building a stealth startup as a Founding engineer.
      </div>
      <div className='m-8 text-center text-lg'>
        A 20 year-old developer from India who loves building efficient, scalable, and intuitive applications.
        With over a year of hands-on experience, I previously worked at a US-based startup 
        and am now building a stealth startup as a Founding engineer.
      </div>
      </div>


      <div className='text-white flex justify-center items-center mt-8'>
        Still Under Construction...
      </div>
    </>
  )
}

export default App

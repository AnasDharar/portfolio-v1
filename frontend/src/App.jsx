import './App.css'
import { NavBar } from './components/NavBar'
import { Marquee } from './components/Marquee'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { TypingEffect } from './components/TypingEffect'
import { useState } from 'react'
import { SkillBlocks, Box} from './components/SkillBlocks'
import { SquareArrowOutUpRight, Github } from 'lucide-react'
function App() {
  let text = ["Competitive Programmer", "Freelancer", "Web Developer", "Tech Enthusiast"];
  const [skillsState, setSkillsState] = useState("marquee"); // "marquee" or "blocks"
  return (
    <div className='flex flex-col justify-center items-center p-8'>
      <NavBar />

      <div className='relative bg-white -z-1 w-full h-auto'>
        <div className='absolute top-0 right-0 h-full w-[60px] bg-linear-to-l from-[#121212] to-transparent'></div>
        <div className='absolute top-0 left-0 h-full w-[60px] bg-linear-to-r from-[#121212] to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-[60px] bg-linear-to-t from-[#121212] to-transparent'></div>
        <div className='absolute top-0 right-0 w-full h-[60px] bg-linear-to-b from-[#121212] to-transparent'></div>
        <img src="icons/Berserk.jpg" alt="Berserk Banner" className='w-full h-auto' />
      </div>

      <div className='flex flex-col ml-4 mr-4 -mt-20 text-white font-gabarito duration-100'>
        <img src="icons/logo2.jpg" alt="Logo" className='w-32 h-32 object-cover rounded-full border-4 border-black' />
        <div className='grid grid-cols-2 ml-4 space-x-2'>
          <div className='md:text-4xl text-2xl text-neutral-100 font-bold font-instrument-serif'>Anas Dharar</div>
          <div className='flex justify-end md:gap-4 gap-2 md:mr-8'>

            <a href='https://github.com/AnasDharar' className=' w-6 h-6 hover:scale-125 duration-200'><img src="icons/github.png" alt="" className='invert object-cover' /></a>
            <a href='https://linkedin.com/in/AnasDharar' className=' w-6 h-6 hover:scale-125 duration-200'><img src="icons/linkedin.png" alt="" className='invert object-cover' /></a>
            <a href='https://twitter.com/anasdharar' className=' w-6 h-6 hover:scale-125 duration-200'><img src="icons/twitter.png" alt="" className='invert object-cover' /></a>
            <a href='https://drive.google.com/file/d/1Kr-DOzKvOIAC8DiwvvksSf9lcSxMrLOO/view?usp=sharing' className=' w-6 h-6 hover:scale-125 duration-200'><img src="icons/resume.png" alt="" className='invert object-cover' /></a>
          </div>
        </div>
        <div className='text-neutral-400 ml-4 text-sm md:text-md flex space-x-2'><div>19, he/him | </div><TypingEffect text={text} /></div>

        <div className='flex flex-col justify-center items-center'>
          <div className='ml-4 mt-4 text-md text-neutral-300'>
            {/* I build practical software with a focus on <p className='inline bg-amber-300 text-neutral-800 p-1 rounded-md'> efficiency, clarity, and speed.</p>
            &nbsp; Comfortable across frontend and backend, I care more about systems that work than buzzwords. */}
            <ul className='list-none gap-2 flex flex-col'>
              <li>
            Hi! I am <span className='font-instrument-serif italic text-lg'> Anas Dharar </span>, a <span className='font-mono text-sm bg-yellow-400 p-1 rounded-md text-black'> web developer</span> && <span className='font-mono text-sm bg-green-400 p-1 rounded-md text-black'> competitive programmer</span>. 
            I love building <span className='border-b-2 border-purple-300 font-serif'> efficient and good looking web applications</span> that solve <span className='text-white font-bold font-sans'>real-world problems.</span> </li>
            {/* <br /> */}

            <li>I’m an IT student who spends time both on <span className='font-bold font-white border-b-2 border-green-400'> problem-solving fundamentals</span> and on <span className='font-bold font-white border-b-2 border-yellow-400'> building software end-to-end.</span></li>
            {/* <br /> */}
            <li>I learn stuff by <span className='font-mono'> building</span>. <span className='border-b-2 border-purple-300'>I break down problems, solve them one by one, and iterate until it works just as I want it to be.</span></li>
            <li>Besides coding, I enjoy <span className='font-serif italic border-b'> listening to music, teaching and playing chess </span></li>
            </ul>


          </div>

        </div>
        
      </div>
      <div className='relative flex flex-col justify-center items-center mt-8 w-3/4'>
        <div className='text-neutral-400 font-instrument-serif text-3xl'>
            Tech Stack I use
        </div>
        {/* the toggle button (doesnt look good imo, so commented for now) */}
        {/* <div className='relative grid grid-cols-2 border border-neutral-600 rounded-lg mt-4'>
          <div className={`absolute left-0 h-full w-1/2 bg-white transition-transform duration-300 ease-in-out ${skillsState==="marquee" ? "translate-x-0 rounded-l-lg rounded-r-0" : "translate-x-full rounded-r-lg rounded-l-0"}`}></div>
          <div className={`m-2 text-center z-10 cursor-pointer duration-300 ease-in-out ${skillsState==="marquee" ? "text-black" : ""}`} onClick={() => {setSkillsState("marquee")}}>Marquee</div>
          <div className={`m-2 text-center z-10 cursor-pointer duration-300 ease-in-out ${skillsState==="blocks" ? "text-black" : ""}`} onClick={() => {setSkillsState("blocks")}}>Blocks</div>
        </div> */}
        {skillsState==="marquee" && (
          <Marquee />
        )}
        {skillsState==="blocks" && (
          <SkillBlocks />
        )}
        </div>

      {/* Experience Section */}
      <div className='relative flex flex-col justify-center items-center mt-16 md:mx-8'>
        <div className='text-neutral-400 font-instrument-serif text-3xl mb-8'>
          Experience
        </div>
        <div className='w-full space-y-6'>

          <div className='border border-neutral-600 rounded-lg p-6 hover:border-neutral-500 duration-200 group'>
            <div className='flex min-h-15 gap-2'>
              <img src="./exp/mlsc.jpg" className='h-15 w-auto rounded-md' alt="" />
              <div className='flex flex-col md:flex-row w-full md:justify-between'>
                <div className='flex flex-col'>
                <h3 className='text-xl text-neutral-400 font-gabarito font-bold group-hover:text-neutral-300 duration-200'>Assistant Secretary</h3>
                <p className='text-neutral-400 text-md group-hover:text-neutral-300 duration-200'>Microsoft Learn Students' Club, WCE Sangli</p>
                </div>
                <span className='text-neutral-400 text-sm group-hover:text-neutral-300 duration-200 italic'>August '25 - Present</span>
              </div>
            </div>
            
            <ul className='text-neutral-400 text-sm mt-4 space-y-2 list-none duration-200 group-hover:text-neutral-300'>
              <li>Led a 2-day workshop on Microsoft Azure fundamentals for 250+ students <br />
              Delivered technical sessions covering Azure core services and cloud fundamentals <br />
              Managed event planning and execution with the MLSC core team</li>
            </ul>
          </div>

          <div className='border border-neutral-600 rounded-lg p-6 hover:border-neutral-500 duration-200 group'>
            <div className='flex min-h-15 gap-2'>
              <img src="./exp/vjti.jpg" className='h-15 w-auto rounded-md' alt="" />
              <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col'>
                <h3 className='text-xl text-neutral-400 font-gabarito font-bold group-hover:text-neutral-300 duration-200'>ML Research Intern</h3>
                <p className='text-neutral-400 text-md group-hover:text-neutral-300 duration-200'>Veermata Jijabai College of Engineering (VJTI) , Mumbai</p>
                </div>
              <span className='text-neutral-400 text-sm group-hover:text-neutral-300 duration-200 italic'>May '25 - July '25</span>
              </div>
            </div>
            
            <ul className='text-neutral-400 mt-4 text-sm space-y-2 list-none duration-200 group-hover:text-neutral-300'>
              <li>Designed and trained a deep learning pipeline (U-Net + postprocessing) to extract editable
                  agricultural field boundaries from drone imagery.</li>
              <li>Designed outputs specifically for human-in-the-loop correction, ensuring predicted boundaries
                  could be manually edited by end users to fix model errors and improve trust in ML outputs.</li>
            </ul>
          </div>

          
        </div>
      </div>

      {/* Projects Section */}
      <div className='relative flex flex-col justify-center items-center mt-16 mb-16'>
        <div className='text-neutral-400 font-instrument-serif text-3xl mb-8'>
          Projects
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-6 w-1/2'>
        
          <div className='border bg-neutral-900 border-neutral-900 rounded-xl hover:border-2 hover:border-neutral-600 hover:shadow-lg hover:shadow-amber-300/10 duration-200 group'>
            <img src="projects/firesolve.png" alt="" className='rounded-xl'/>
            <div className='p-6'>
            <h3 className='text-2xl text-neutral-400 font-gabarito font-bold mb-2 group-hover:text-neutral-300 duration-200'>FireSolve</h3>
            <div className='flex flex-wrap mb-4'>

              <Box prop={{name: "Django", image:"django"}} />
              <Box prop={{name: "Python", image:"python"}} />
              <Box prop={{name: "JavaScript", image:"javascript"}} />
              <Box prop={{name: "Tailwind", image:"tailwind-css"}} />
              <Box prop={{name: "PostgreSQL", image:"postgresql"}} />
            </div>
            <p className='text-neutral-400 mb-4'>
              A platform to track Problems of the Day (POTD) from programming sites like LeetCode and
              curates its own POTDs for the sites like CodeChef and CodeForces, which don’t have this feature.
            </p>
            <div className='flex gap-4'>
              <div className='group/button flex justify-center items-center gap-2 border border-neutral-500 p-1 rounded-md'>
              <img src="icons/internet.png" className='invert opacity-80 group-hover/button:opacity-100 h-5 duration-200' alt="" />
              <a href='#' className='text-neutral-400 group-hover/button:text-neutral-300  text-sm duration-200'>Live Demo</a>
              </div>
              <div className='group/button flex justify-center items-center gap-2 border border-neutral-500 p-1 rounded-md'>
              <img src="icons/github.png" className='invert h-5' alt="" />
              <a href='#' className='text-neutral-400 group-hover/button:text-neutral-300  text-sm duration-200'>GitHub</a>
              </div>
              </div>
            </div>
          </div>

          

      </div>
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

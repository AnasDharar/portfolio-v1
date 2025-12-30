import './App.css'
import { NavBar } from './components/NavBar'
import { Marquee } from './components/Marquee'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { TypingEffect } from './components/TypingEffect'
import { useState } from 'react'
import { SkillBlocks, Box } from './components/SkillBlocks'

import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { SocialBox } from './components/SocialBox'
import { Footer } from './components/Footer'
let experience = [{
    'position': "Assistant Secretary",
    'organization': "Microsoft Learn Students' Club, WCE Sangli",
    'duration': "August '25 - Present",
    'details': [
        "Led a 2-day workshop on Microsoft Azure fundamentals for 250+ students",
        "Delivered technical sessions covering Azure core services and cloud fundamentals",
        "Managed event planning and execution with the MLSC core team"
    ],
    'image': "mlsc"
}
,{
    'position': "ML Research Intern",
    'organization': "Veermata Jijabai College of Engineering (VJTI) , Mumbai",
    'duration': "May '25 - July '25",
    'details': [
        "Designed and trained a deep learning pipeline (U-Net + postprocessing) to extract editable agricultural field boundaries from drone imagery.",
        "Designed outputs specifically for human-in-the-loop correction, ensuring predicted boundaries could be manually edited by end users to fix model errors and improve trust in ML outputs."
    ],
    'image': "vjti"
}]
let education = [{
    'degree': "B.Tech in Information Technology",
    'college': "Walchand College of Engineering, Sangli",
    'duration': "2024 - 2028",
    // 'image': "wce" 
},
{
  'degree': "Class 12th - Science Stream",
  'college': "Rahul International School, Boisar",
  'duration': "2023 - 2024",
}]
function App() {
  let text = ["Competitive Programmer", "Freelancer", "Web Developer", "Tech Enthusiast"];
  const [skillsState, setSkillsState] = useState("marquee"); // "marquee" or "blocks"
  const [isMlscExpanded, setIsMlscExpanded] = useState(false);
  return (
    <div className='flex flex-col justify-center items-center md:p-8 p-2'>
      <NavBar />

      <div className='relative bg-white -z-1 w-full h-auto'>
        <div className='absolute top-0 right-0 h-full w-[30px] md:w-[60px] bg-linear-to-l from-[#121212] to-transparent'></div>
        <div className='absolute top-0 left-0 h-full w-[30px] md:w-[60px] bg-linear-to-r from-[#121212] to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-[30px] md:h-[60px] bg-linear-to-t from-[#121212] to-transparent'></div>
        <div className='absolute top-0 right-0 w-full h-[30px] md:h-[60px] bg-linear-to-b from-[#121212] to-transparent'></div>
        <img src="icons/Berserk.jpg" alt="Berserk Banner" className='w-full h-auto' />
      </div>

      <div className='flex flex-col md:ml-4 md:mr-4 -mt-10 md:-mt-20 text-white font-gabarito duration-100'>
        <img src="/newpfp.jpg" alt="Logo" className='w-20 md:w-32 h-auto m-2 object-cover rounded-full border-4 border-black' />
        <div className='grid grid-cols-1 md:grid-cols-2 ml-4 space-x-2'>
          <div className='md:text-4xl text-3xl text-neutral-100 font-bold font-instrument-serif'>
            <div className='border-b-2 border-dashed border-purple-400 w-fit'>
              Anas Dharar
            </div>
            </div>
          <div className='flex md:justify-end md:gap-4 gap-2 md:mr-8'>
            <a href='https://github.com/AnasDharar' className='w-6 h-auto hover:scale-110 duration-200 my-2 bg-neutral-700 md:bg-transparent rounded-full opacity-70 hover:opacity-90'><img src="icons/github.png" alt="" className='invert object-cover' /></a>
            <a href='https://linkedin.com/in/AnasDharar' className='w-6 h-auto hover:scale-110 duration-200 my-2 bg-neutral-700 md:bg-transparent rounded-full opacity-70 hover:opacity-90'><img src="icons/linkedin.png" alt="" className='invert object-cover' /></a>
            <a href='https://twitter.com/anasdharar' className='w-6 h-auto hover:scale-110 duration-200 my-2 bg-neutral-700 md:bg-transparent rounded-full opacity-70 hover:opacity-90'><img src="icons/twitter.png" alt="" className='invert object-cover' /></a>
            <a href='https://drive.google.com/file/d/1Kr-DOzKvOIAC8DiwvvksSf9lcSxMrLOO/view?usp=sharing' className='w-6 h-auto hover:scale-110 duration-200 my-2 bg-neutral-700 md:bg-transparent rounded-full opacity-70 hover:opacity-90'><img src="icons/resume.png" alt="" className='invert object-cover' /></a>
          </div>
        </div>
        <div className='text-neutral-400 ml-4 text-sm md:text-md flex space-x-2'><div>19, he/him | </div><TypingEffect text={text} /></div>

        <div className='flex flex-col justify-center items-center'>
          <div className='m-4 mt-4 text-md text-neutral-300'>
            {/* I build practical software with a focus on <p className='inline bg-amber-300 text-neutral-800 p-1 rounded-md'> efficiency, clarity, and speed.</p>
            &nbsp; Comfortable across frontend and backend, I care more about systems that work than buzzwords. */}
            <ul className='list-none gap-2 flex flex-col text-sm sm:text-base text-neutral-300'>
              <li>
                Hi! I am <span className='font-instrument-serif italic text-lg'> Anas Dharar </span>, a <span className='font-mono border-b border-b-yellow-400'> web developer</span> && <span className='font-mono border-b border-b-green-400'> competitive programmer</span>.
                I love building <span className='border-b border-purple-300 font-serif'> efficient and good looking web applications</span> that solve real-world problems. </li>
              {/* <br /> */}

              {/* <li>I’m an IT student who spends time both on <span className='font-bold font-white border-b border-green-400'> problem-solving fundamentals</span> and on <span className='font-bold font-white border-b border-yellow-400'> building software end-to-end.</span></li> */}
              {/* <br /> */}
              <li>I learn stuff by <span className='font-mono'> building</span>. <span className='border-b border-purple-300'>I break down problems, solve them one by one, and iterate until it works just as I want it to be.</span></li>
              <li>Besides coding, I enjoy <span className='font-serif italic border-b'> listening to music, teaching and playing chess </span></li>
            </ul>


          </div>

        </div>

      </div>
      <div className='relative flex flex-col justify-center items-center mt-8 w-full md:w-3/4'>
        <div className='text-neutral-200 font-instrument-serif text-3xl border-b-2 border-dashed border-purple-400'>
          Tech Stack I use
        </div>
        {/* the toggle button (doesnt look good imo, so commented for now) */}
        {/* <div className='relative grid grid-cols-2 border border-neutral-600 rounded-lg mt-4'>
          <div className={`absolute left-0 h-full w-1/2 bg-white transition-transform duration-300 ease-in-out ${skillsState==="marquee" ? "translate-x-0 rounded-l-lg rounded-r-0" : "translate-x-full rounded-r-lg rounded-l-0"}`}></div>
          <div className={`m-2 text-center z-10 cursor-pointer duration-300 ease-in-out ${skillsState==="marquee" ? "text-black" : ""}`} onClick={() => {setSkillsState("marquee")}}>Marquee</div>
          <div className={`m-2 text-center z-10 cursor-pointer duration-300 ease-in-out ${skillsState==="blocks" ? "text-black" : ""}`} onClick={() => {setSkillsState("blocks")}}>Blocks</div>
        </div> */}
        {skillsState === "marquee" && (
          <Marquee />
        )}
        {skillsState === "blocks" && (
          <SkillBlocks />
        )}
      </div>

      {/* Experience Section */}
      <section id='exp' className='relative flex flex-col justify-center items-center pt-20 md:px-8 w-full md:w-3/4'>
        <div className='text-neutral-200 font-instrument-serif text-3xl mb-2 border-b-2 border-dashed border-purple-400'>
          Experience
        </div>
        <div className='w-full space-y-6'>

          {experience.map((exp, index) => (
            <Experience key={index} prop={exp} />
          ))}


        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='relative flex flex-col justify-center items-center pt-20'>
        <div className='text-neutral-200 font-instrument-serif text-3xl mb-8 border-b-2 border-dashed border-purple-400'>
          Projects
        </div>
        <div className='grid grid-cols-2 gap-6 w-full'>

          <div className='border bg-neutral-900 border-neutral-900 rounded-xl hover:border hover:border-neutral-600 hover:shadow-lg hover:shadow-amber-300/10 duration-200 group'>
            <img src="projects/firesolve.png" alt="" className='rounded-xl group-hover:scale-105 group-hover:border group-hover:border-neutral-500 duration-200' />
            <div className='md:p-6 p-2'>
              <h3 className='text-2xl text-neutral-300 font-gabarito font-bold md:mb-2 group-hover:text-neutral-200 duration-200'>FireSolve</h3>
              <div className='flex flex-wrap md:mb-4'>

                <Box prop={{ name: "Django", image: "django" }} size="small" />
                <Box prop={{ name: "Python", image: "python" }} size="small" />
                <Box prop={{ name: "JavaScript", image: "javascript" }} size="small" />
                <Box prop={{ name: "Tailwind", image: "tailwind-css" }} size="small" />
                <Box prop={{ name: "PostgreSQL", image: "postgresql" }} size="small" />
              </div>
              <p className='text-neutral-400 group-hover:text-neutral-300 mb-4 duration-200 text-[10px]'>
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

            <div className='text-neutral-600 flex justify-center items-center'>
              More projects coming soon...
            </div>



        </div>
      </section>

      {/* Education Section */}
      <div className='relative flex flex-col justify-center items-center md:mx-8 w-full md:w-3/4 my-6'>
        <div className='text-neutral-200 font-instrument-serif text-3xl mb-4 border-b-2 border-dashed border-purple-400'>
          Education
        </div>
        <div className='w-full space-y-6'>
          {education.map((edu, index) => (
            <Education key={index} prop={edu} />
          ))}
        </div>
      </div>

      {/* Let's Connect Section */}
      <div id='connect' className='relative flex flex-col justify-center items-center md:mx-8 w-full md:w-3/4 my-10'>
        <div className='text-neutral-200 font-instrument-serif text-3xl mb-2 border-b-2 border-dashed border-purple-400'>
          Let's Connect
        </div>
        <p className='text-neutral-400 text-sm mb-6 text-center'>
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
            <SocialBox name="GitHub" image="github.png" link="https://github.com/AnasDharar" />
            <SocialBox name="LinkedIn" image="linkedin.png" link="https://linkedin.com/in/AnasDharar" />
            <SocialBox name="Twitter" image="twitter.png" link="https://twitter.com/anasdharar" />
            <SocialBox name="Resume" image="resume.png" link="https://drive.google.com/file/d/1Kr-DOzKvOIAC8DiwvvksSf9lcSxMrLOO/view?usp=sharing" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App

import './App.css'
import { NavBar } from './components/NavBar'
import { Marquee } from './components/Marquee'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { TypingEffect } from './components/TypingEffect'
import { useState } from 'react'
import { SkillBlocks, Box } from './components/SkillBlocks'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { SocialBox } from './components/SocialBox'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { useRef } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { useEffect } from 'react'
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
  const [skillsState, setSkillsState] = useState("blocks"); // "marquee" or "blocks"
  
  
  const [isDark, setIsDark] = useState(false);
  useEffect(()=> {
    if(isDark) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
    
  }, [isDark]);
  return (
    <div className='flex flex-col justify-center items-center md:p-8 p-2'>
      <Analytics />
      <SpeedInsights />
      
      <NavBar setIsDark={setIsDark} isDark={isDark} />

      {/* <div className='relative bg-white -z-1 w-full h-auto'>
        <div className='absolute top-0 right-0 h-full w-[30px] md:w-[60px] bg-linear-to-l from-[#121212] to-transparent'></div>
        <div className='absolute top-0 left-0 h-full w-[30px] md:w-[60px] bg-linear-to-r from-[#121212] to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-[30px] md:h-[60px] bg-linear-to-t from-[#121212] to-transparent'></div>
        <div className='absolute top-0 right-0 w-full h-[30px] md:h-[60px] bg-linear-to-b from-[#121212] to-transparent'></div>
        <img src="icons/Berserk.jpg" alt="Berserk Banner" className='w-full h-auto' />
      </div> */}

      <div className='flex flex-col md:ml-4 md:mr-4 mt-10 text-[var(--text-main)] font-gabarito duration-100'>
        <div className='md:flex items-center'>
        <img src="/newpfp.jpeg" alt="Logo" className='w-20 md:w-20 h-auto m-2 object-cover rounded-full' />
        <div className='grid grid-cols-1 md:grid-cols-2 ml-4 space-x-2 w-full'>
          <div className='md:text-5xl text-3xl text-[var(--text-main)] font-bold font-instrument-serif'>
            <div className='border-b-2 border-dashed border-purple-400 w-fit'>
              Anas Dharar
            </div>
              <div className='text-[var(--subtext-color)] text-sm md:text-md flex space-x-2'><div>19, he/him | </div><TypingEffect text={text} /></div>
          </div>
          <div className='flex md:justify-end md:gap-4 gap-2 md:mr-8'>
            <a href='https://github.com/AnasDharar' className='w-6 h-auto hover:scale-120 duration-200 my-2 bg-[var(--border-color)] md:bg-transparent rounded-full'><img src="icons/github.png" alt="" className='invert-[var(--invert-value)] object-cover' /></a>
            <a href='https://linkedin.com/in/AnasDharar' className='w-6 h-auto hover:scale-120 duration-200 my-2 bg-[var(--border-color)] md:bg-transparent rounded-full'><img src="icons/linkedin.png" alt="" className='invert-[var(--invert-value)] object-cover' /></a>
            <a href='https://twitter.com/anasdharar' className='w-6 h-auto hover:scale-120 duration-200 my-2 bg-[var(--border-color)] md:bg-transparent rounded-full'><img src="icons/twitter.png" alt="" className='invert-[var(--invert-value)] object-cover' /></a>
            <a href='https://drive.google.com/file/d/1Kr-DOzKvOIAC8DiwvvksSf9lcSxMrLOO/view?usp=sharing' className='w-6 h-auto hover:scale-120 duration-200 my-2 bg-[var(--border-color)] md:bg-transparent rounded-full'><img src="icons/resume.png" alt="" className='invert-[var(--invert-value)] object-cover' /></a>
          </div>
        </div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='m-4 mt-4 text-md text-[var(--text-color)]'>
            {/* I build practical software with a focus on <p className='inline bg-amber-300 text-neutral-800 p-1 rounded-md'> efficiency, clarity, and speed.</p>
            &nbsp; Comfortable across frontend and backend, I care more about systems that work than buzzwords. */}
            <ul className='list-none gap-2 flex flex-col text-sm sm:text-base text-[var(--text-color)]'>
              <li>
                Hi! I am <span className='font-instrument-serif italic text-lg'> Anas Dharar </span>, a <span className='font-mono bg-yellow-400 p-1 rounded-md font-bold dark:text-black'> web developer</span> && <span className='font-mono bg-green-400 p-1 rounded-md font-bold dark:text-black'> competitive programmer</span>.
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
        <div className='text-[var(--head-color)] font-instrument-serif text-3xl border-b-2 border-dashed border-purple-400'>
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
        <div className='text-[var(--head-color)] font-instrument-serif text-3xl mb-2 border-b-2 border-dashed border-purple-400'>
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
        <div className='text-[var(--head-color)] font-instrument-serif text-3xl mb-8 border-b-2 border-dashed border-purple-400'>
          Projects
        </div>
          <Projects />
      </section>

      {/* Education Section */}
      <div className='relative flex flex-col justify-center items-center md:mx-8 w-full md:w-3/4 my-6'>
        <div className='text-[var(--head-color)] font-instrument-serif text-3xl mb-4 border-b-2 border-dashed border-purple-400'>
          Education
        </div>
        <div className='w-full space-y-6'>
          {education.map((edu, index) => (
            <Education key={index} prop={edu}/>
          ))}
        </div>
      </div>
      <div className='m-8 flex flex-col justify-center items-center overflow-x-auto w-full p-4 md:w-auto'>
        <div className='text-[var(--head-color)] font-instrument-serif text-3xl mb-2 border-b-2 border-dashed border-purple-400'>
          Github
        </div>
      <GitHubCalendar username="AnasDharar" blockSize={8} colorScheme={isDark ? "dark" : "light"}/>
      </div>
      {/* Let's Connect Section */}
      <div id='connect' className='relative flex flex-col justify-center items-center md:mx-8 w-full md:w-3/4'>
        <div className='text-[var(--head-color)] font-instrument-serif text-3xl mb-2 border-b-2 border-dashed border-purple-400'>
          Let's Connect
        </div>
        <p className='text-[var(--subtext-color)] text-sm mb-6 text-center'>
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
            <SocialBox name="GitHub" image="github.png" invert={true} link="https://github.com/AnasDharar" />
            <SocialBox name="LinkedIn" image="linkedin.png" invert={true} link="https://linkedin.com/in/AnasDharar" />
            <SocialBox name="X" image="twitter.png" invert={true} link="https://twitter.com/anasdharar" />
            <SocialBox name="Resume" image="resume.png" invert={true} link="https://drive.google.com/file/d/1Kr-DOzKvOIAC8DiwvvksSf9lcSxMrLOO/view?usp=sharing" />
            <SocialBox name="LeetCode" image="leetcode.png" invert={false} link="https://leetcode.com/u/salaarsenpai" />
            <SocialBox name="CodeForces" image="codeforces.webp" invert={false} link="https://codeforces.com/profile/anasdharar" />
            <SocialBox name="CodeChef" image="codechef.webp" invert={true} link="https://www.codechef.com/users/anasdharar" />

        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default App

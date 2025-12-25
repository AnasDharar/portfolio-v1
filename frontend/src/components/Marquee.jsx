import React from 'react'
import './Marquee.css'
const skills = [{name: "TailwindCSS", image:"tailwind-css"}, {name: "HTML", image:"html"}, {name: "CSS", image:"css"}, {name: "JavaScript", image:"javascript"}, {name: "React", image:"react"}, {name: "Python", image:"python"}, {name: "Django", image:"django"}, {name: "C++", image:"cplusplus"}, {name: "Git", image:"git"}, {name: "PostgreSQL", image:"postgresql"}];
function Box({prop}) {
  return (
    <div className='flex justify-center items-center flex-col p-4 gap-2 h-30 w-30 text-center group/box'>
        <img src={`/skills/${prop.image}.png`} alt={prop.name} className='h-10 w-auto grayscale group-hover/box:grayscale-30 duration-200 group-hover/box:scale-120 object-cover'/>
        <div className='text-neutral-300 text-sm group-hover/box:text-neutral-200 group-hover/box:scale-110 duration-200'>{prop.name}</div>
    </div>
  )
}
export const Marquee = () => {
    return (
        <div className='group/marquee relative flex flex-row w-full overflow-hidden justify-center items-center'>
        <div className='absolute top-0 left-0 h-full w-[100px] bg-linear-to-r from-[#000000] to-transparent z-10'></div>
        <div className='absolute top-0 right-0 h-full w-[100px] bg-linear-to-l from-[#000000] to-transparent z-10'></div>
            <div className='flex justify-center animate-marquee flex-row group-hover/marquee:[animation-play-state:paused]'>
                {skills.map((element, index) => (
                    <Box key={index} prop={element} />
                ))}
            </div>

            <div className='flex justify-center animate-marquee flex-row group-hover/marquee:[animation-play-state:paused]'>
                {skills.map((element, index) => (
                    <Box key={index} prop={element} />
                ))}
            </div>
            
            <div className='flex justify-center animate-marquee flex-row group-hover/marquee:[animation-play-state:paused]'>
                {skills.map((element, index) => (
                    <Box key={index} prop={element} />
                ))}
            </div>
        </div>
    )
}

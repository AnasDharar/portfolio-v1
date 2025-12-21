import React from 'react'
import './Marquee.css'
const skills = [{name: "JavaScript", image:"javascript"}, {name: "React", image:"react"}, {name: "Python", image:"python"}, {name: "Django", image:"django"}, {name: "C++", image:"cplusplus"}, {name: "HTML", image:"html"}, {name: "CSS", image:"css"}, {name: "TailwindCSS", image:"tailwind-css"}, {name: "Git", image:"git"}, {name: "PostgreSQL", image:"postgresql"}];
function Box({prop}) {
  return (
    <div className='p-4 flex justify-center items-center flex-col h-30 w-30 text-center'>
        <img src={`/skills/${prop.image}.png`} alt={prop.name} className='h-10 w-10'/>
        <div className='text-white text-sm'>{prop.name}</div>
    </div>
  )
}
export const Marquee = () => {
    return (
        <div className='flex flex-row w-3/4 mt-8 border-2 border-white overflow-hidden justify-center items-center'>
            <div className='flex justify-center animate-marquee flex-row'>
                {skills.map((element, index) => (
                    <Box key={index} prop={element} />
                ))}
            </div>

            <div className='flex justify-center animate-marquee flex-row'>
                {skills.map((element, index) => (
                    <Box key={index} prop={element} />
                ))}
            </div>
            
            <div className='flex justify-center animate-marquee flex-row'>
                {skills.map((element, index) => (
                    <Box key={index} prop={element} />
                ))}
            </div>
        </div>
    )
}

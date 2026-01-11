import React from 'react'
const skills = [
  {name:"FastAPI", image:"fastapi"},
  {name: "Django", image:"django"}, 
  {name: "PostgreSQL", image:"postgresql"},
  {name: "JavaScript", image:"javascript"}, 
  {name: "Python", image:"python"}, 
  {name: "C++", image:"cplusplus"}, 
  {name: "React", image:"react"}, 
  {name: "HTML", image:"html"}, 
  {name: "CSS", image:"css"}, 
  {name: "TailwindCSS", image:"tailwind-css"}, 
  {name: "Git", image:"git"}, 
  {name: "FireBase", image:"firebase"}, 
  {name:"Gemini-API", image:"gemini-api"}, 
];
export function Box({prop, size, gap=2}) {
  let heightClass = 'h-6';
  let textsize = 'text-sm';
  if (size === 'small') {
    heightClass = 'h-4';
    textsize = 'text-sm';
  }
  return (
    <div className={`group flex items-center justify-center gap-${gap} border border-[var(--border-color)] hover:border-[var(--subtext-color)] font-gabarito p-1 m-2 rounded-md duration-200 cursor-pointer`}>
        <img src={`skills/${prop.image}.png`} alt={prop.name} className={`${heightClass} w-auto py-1 object-cover duration-200`} />
        <div className={`${textsize}`}>{prop.name}</div>
    </div>
    )
}
export const SkillBlocks = () => {
  return (
    <div className='flex flex-wrap items-center justify-center w-3/4 mt-4'>
        {skills.map((element, index) => (
            <Box key={index} prop={element} />
        ))}
    </div>
  )
}

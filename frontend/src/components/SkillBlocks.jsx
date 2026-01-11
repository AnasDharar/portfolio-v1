import React from 'react'
const skills = [{name: "TailwindCSS", image:"tailwind-css"}, {name: "HTML", image:"html"}, {name: "CSS", image:"css"}, {name: "JavaScript", image:"javascript"}, {name: "React", image:"react"}, {name: "Python", image:"python"}, {name: "Django", image:"django"}, {name: "C++", image:"cplusplus"}, {name: "Git", image:"git"}, {name: "PostgreSQL", image:"postgresql"}];
export function Box({prop, size}) {
  let heightClass = 'h-6';
  let textsize = 'text-sm';
  if (size === 'small') {
    heightClass = 'h-4';
    textsize = 'text-sm';
  }
  return (
    <div className='group flex items-center justify-center gap-2 border border-[var(--card-border)] hover:border-[var(--subtext-color)] font-gabarito p-1 m-2 rounded-md duration-200 cursor-pointer'>
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

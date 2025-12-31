import React from 'react'

export const SocialBox = ({ image, name, link, invert }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='group flex items-center justify-center gap-2 border border-neutral-700 hover:border-neutral-500 font-gabarito p-2 px-4 m-1 rounded-md duration-200 cursor-pointer bg-neutral-900/30 hover:bg-neutral-800/50 no-underline'>
        <img src={`icons/${image}`} alt={name} className={`h-5 w-auto object-cover ${invert ? "invert" : ""} opacity-70 group-hover:opacity-100 duration-200`} />
        <div className='text-sm text-neutral-400 group-hover:text-neutral-200 duration-200'>{name}</div>
    </a>
  )
}

import React from 'react'

export const SocialBox = ({ image, name, link, invert }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='group flex items-center justify-center gap-2 border border-[var(--border-color)] hover:border-[var(--subtext-color)] font-gabarito p-2 px-4 m-1 rounded-md duration-200 cursor-pointer bg-[var(--card-bg)]/30 hover:bg-[var(--hover-bg)]/50 no-underline'>
        <img src={`icons/${image}`} alt={name} className={`h-5 w-auto object-cover ${invert ? "invert-[var(--invert-value)]" : ""} opacity-70 group-hover:opacity-100 duration-200`} />
        <div className='text-sm text-[var(--subtext-color)] group-hover:text-[var(--head-color)] duration-200'>{name}</div>
    </a>
  )
}

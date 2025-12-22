import React from 'react'

export const NavBar = () => {
  return (
    <div className='sticky top-4 left-0 flex backdrop-blur-sm bg-black/30 justify-between items-center p-4 m-4 w-full rounded-full border border-neutral-700 text-neutral-400 font-gabarito z-10'>
        <div className='ml-4 font-instrument-serif text-white text-2xl italic'>
            Salaar
        </div>
        <div className='flex gap-4 text-lg'>
        <div className='hover:text-neutral-300 cursor-pointer'>experience</div>
        <div className='hover:text-neutral-300 cursor-pointer'>projects</div>
        <div className='hover:text-neutral-300 cursor-pointer'>achievements</div>
        </div>
    </div>
  )
}

import React from 'react'

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-4 m-4 rounded-full border border-neutral-700 text-neutral-400 font-gabarito'>
        <div className='font-instrument-serif text-white text-2xl italic'>
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

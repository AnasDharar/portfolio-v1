import React, { useState } from 'react'

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='sticky top-4 left-0 flex backdrop-blur-sm bg-black/30 justify-between items-center p-4 m-4 w-full rounded-full border border-neutral-700 text-neutral-400 font-gabarito z-10'>
        <div className='ml-4 font-instrument-serif text-white text-2xl italic'>
          Salaar
        </div>
        
        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-4 text-lg mr-4'>
          <div className='hover:text-neutral-300 cursor-pointer'>experience</div>
          <div className='hover:text-neutral-300 cursor-pointer'>projects</div>
          <div className='hover:text-neutral-300 cursor-pointer'>achievements</div>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className='md:hidden mr-4 flex flex-col gap-1 w-6 h-6 justify-center items-center z-20'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-neutral-400 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-neutral-400 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-neutral-400 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-20 right-4 backdrop-blur-sm bg-black/90 border border-neutral-700 rounded-2xl overflow-hidden transition-all duration-300 z-10 ${
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='flex flex-col p-6 gap-4 text-lg text-neutral-400 font-gabarito'>
          <div 
            className='hover:text-neutral-300 cursor-pointer' 
            onClick={toggleMenu}
          >
            experience
          </div>
          <div 
            className='hover:text-neutral-300 cursor-pointer' 
            onClick={toggleMenu}
          >
            projects
          </div>
          <div 
            className='hover:text-neutral-300 cursor-pointer' 
            onClick={toggleMenu}
          >
            achievements
          </div>
        </div>
      </div>
    </>
  )
}

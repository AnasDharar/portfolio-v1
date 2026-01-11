import React, { useState } from 'react'

export const NavBar = ({setIsDark, isDark}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='sticky top-4 left-0 flex backdrop-blur-sm bg-[var(--bg-main)]/30 justify-between items-center p-4 w-full rounded-full border border-[var(--border-color)] text-[var(--subtext-color)] font-gabarito z-50'>
        <div className='ml-4 font-gabarito text-[var(--text-main)] text-2xl font-bold'>
          Anas.
        </div>
        
        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-4 text-lg mr-4'>
          <a href='#exp' className='hover:text-[var(--text-main)] cursor-pointer'>work</a>
          <a href='#projects' className='hover:text-[var(--text-main)] cursor-pointer'>projects</a>
          <button
          onClick={() => setIsDark(!isDark)}
          className="cursor-pointer"
        >
          {isDark ? "light" : "dark"}
        </button>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className='md:hidden mr-4 flex flex-col gap-1 w-6 h-6 justify-center items-center z-20'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-[var(--subtext-color)] transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-[var(--subtext-color)] transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-[var(--subtext-color)] transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-20 right-4 backdrop-blur-sm bg-[var(--bg-main)]/90 border border-[var(--border-color)] rounded-2xl overflow-hidden transition-all duration-300 z-10 ${
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='flex flex-col p-6 gap-4 text-lg text-[var(--subtext-color)] font-gabarito'>
          <a href='#exp'
            className='hover:text-[var(--text-color)] cursor-pointer' 
            onClick={toggleMenu}
          >
            work
          </a>
          <a href='#projects' 
            className='hover:text-[var(--text-color)] cursor-pointer' 
            onClick={toggleMenu}
          >
            projects
          </a>
          <button
            className='hover:text-[var(--text-color)] cursor-pointer text-left' 
            onClick={() => {setIsDark(!isDark); toggleMenu();}}
          >
            {isDark ? "light mode" : "dark mode"}
          </button>
        </div>
      </div>
    </>
  )
}

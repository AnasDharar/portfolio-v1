import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full mt-16 border-t border-neutral-800 bg-neutral-950/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left side - Copyright & Name */}
          <div className="text-center md:text-left">
            <h3 className="text-neutral-200 font-instrument-serif text-xl font-bold border-b-2 border-dashed border-purple-400 w-fit">Anas Dharar</h3>
            <p className="text-neutral-500 text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

"use client";
import { useState } from 'react';
import Image from 'next/image'; 
// import  "bootstrap/dist/css/bootstrap.min.css"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen((prevState) => !prevState);
  
    return (
        <div>
          <nav className="flex items-center justify-between py-4 px-6 bg-black text-white">
            <div className="flex items-center">
              <a className="navbar-brand" href="#Home">
                <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
              </a>
            </div>
  
            {/* Hamburger Menu for mobile only */}
            <button 
              className="md:hidden flex flex-col items-center justify-center w-8 h-8" 
              onClick={toggleMenu} 
              aria-controls="navbarNav" 
              aria-expanded={isOpen} 
              aria-label="Toggle navigation"
            >
              <span className={`block w-full h-1 bg-white transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-full h-1 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-full h-1 bg-white transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1' : ''}`}></span>
            </button>
  
            {/* Desktop Menu */}
            <div className={`hidden md:flex space-x-8 ${isOpen ? 'block' : 'hidden'}`} id="navbarNav">
              <a href="#Home" className="nav-link">Home</a>
              <a href="#About Me" className="nav-link">About Me</a>
              <a href="#Skills" className="nav-link">Skills</a>
              <a href="#Projects" className="nav-link">Projects</a>
              <a href="#Contact" className="nav-link">Contact</a>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="bg-black text-white flex flex-col space-y-4 p-4 md:hidden">
              <a href="#Home" className="nav-link">Home</a>
              <a href="#About Me" className="nav-link">About Me</a>
              <a href="#Skills" className="nav-link">Skills</a>
              <a href="#Projects" className="nav-link">Projects</a>
              <a href="#Contact" className="nav-link">Contact</a>
            </div>
          )}
        </div>
    );
};

export default Navbar;

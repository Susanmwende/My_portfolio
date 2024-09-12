"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <main className="animated-bg h-screen w-full">
      <div>
        <nav className="flex justify-center space-x-8 py-4 bg-black text-white">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about-me" className="nav-link">About Me</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
      
      <div className="flex items-center justify-center gap-52 w-full ">
        <img
          src="images/susanmasaku.jpg"
          alt="Susan Masaku"
          className="w-[600px] h-[700px] opacity-70 pt-24 px-8"
        />
        <div className="pt-20">
          <h1 className="text-white text-center font-sans text-4xl font-dejavu typed-out">
            <span className="text-pink-500">Hi</span> 
            <span className="text-blue-500"> I'm</span> 
            <span className="text-green-500"> Susan Masaku</span> 
            <span className="text-yellow-500"> A Software Developer</span>
          </h1>
          <br />
          <p className="text-left text-lg w-100 text-white">
            I excel at crafting elegant digital experiences and<br />
            I am proficient in various programming languages and<br />
            technologies.
          </p>
          <br />
          <div className="flex items-center gap-32">
            <a 
              href="/document/Susan Masaku CV.pdf" 
              download 
              className="border stroke-green-500 p-4 text-green-500 text-white rounded mr-4"
            >
              Download CV
            </a>
            <div className="flex">
              <a href="https://www.linkedin.com/in/susan-masaku-5506362b4/" target="_blank" rel="noopener noreferrer">
                <img src="images/linkedin.svg" alt="LinkedIn" className="w-8 h-8 mx-2 glow" />
              </a>
              <a href="https://github.com/Susanmwende" target="_blank" rel="noopener noreferrer">
                <img src="images/github.svg" alt="GitHub" className="w-8 h-8 mx-2 glow" />
              </a>
              <a href="https://x.com/Susan_masaku" target="_blank" rel="noopener noreferrer">
                <img src="images/twitter.svg" alt="Twitter" className="w-8 h-8 mx-2 glow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-center px-8 gap-80">
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h1 className="font-bold text-4xl text-white mb-4">About Me</h1>
            <p className="text-white text-lg">
              I am a passionate and dedicated software developer with a strong foundation in various programming languages, including Python, JavaScript, and Kotlin. 
              My love for problem-solving and creating innovative solutions drives me to continuously learn and expand my skills.
              I thrive in collaborative environments, working closely with cross-functional teams to deliver high-quality, user-centric applications.
              With a keen eye for detail and a commitment to clean, efficient code, I aim to write maintainable and scalable software that exceeds client expectations.
              I am particularly interested in exploring emerging technologies and staying at the forefront of industry trends.
              I am excited to connect with like-minded professionals and explore new opportunities to grow as a software developer.
            </p>
          </div>
          <img
            src="images/about-me.png" 
            alt="About Me"
            className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 max-w-sm rounded overflow-hidden shadow-lg bg-black border-0 shadow-green-500"
          />
        </div>
      </div>

      <h1 className="font-bold text-4xl text-white mb-4 text-center py-10">Skills</h1>
      <div className="flex gap-10 justify-center overflow-x-auto scroll-m-10 py-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black border-0 shadow-green-500 p-4 justify-center">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">UI/UX Design</div>
            <p className="text-gray-400 text-base">
              This is a simple description of the card content. It can include
              any relevant information.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Action
            </button>
          </div>
          <br />
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black border-0 shadow-green-500 p-4 justify-center">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">JavaScript</div>
            <p className="text-gray-400 text-base">
              This is a simple description of the card content. It can include
              any relevant information.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Action
            </button>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black border-0 shadow-green-500 p-4 justify-center">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Kotlin</div>
            <p className="text-gray-400 text-base">
              This is a simple description of the card content. It can include
              any relevant information.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Action
            </button>
          </div>
          <br />
        </div>
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black border-0 shadow-green-500 p-4 justify-center">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">Python</div>
              <p className="text-gray-400 text-base">
                This is a simple description of the card content. It can include
                any relevant information.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Action
              </button>
            </div>
            <br />
          </div>
        </div>
       </div>

       <section id="contact" className="py-20">
        <h2 className="font-bold text-center text-white text-4xl mb-8">Contact Me</h2>
        <div className="flex justify-center">
          <form className="p-8 rounded-lg shadow-lg w-full max-w-md bg-black">
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2 text-white">Name</label>
              <input type="text" id="name" name="name" className="border rounded-md p-2 w-full" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2 text-white">Email</label>
              <input type="email" id="email" name="email" className="border rounded-md p-2 w-full" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-bold mb-2 text-white">Message</label>
              <textarea id="message" name="message" rows="4" className="border rounded-md p-2 w-full" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

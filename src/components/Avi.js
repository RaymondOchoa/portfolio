import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import avi from '../assets/avi.png'




const Avi = () => {
    const [text] = useTypewriter({
        words: [
            "Welcome to my portfolio",
            "Get to know me",
            "Check out my projects"
            
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img 
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src={avi} alt="avi"
        />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Full Stack Developer</h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#34eb67"/>
            </h1>

            <div className="pt-5">
             <a href="#about">
                <button className="nav-button">About</button>
             </a>

             <a href="#experience">
                <button className="nav-button">Experience</button>
             </a>

             <a href="#skills">
                <button className="nav-button">Skills</button>
             </a>
             <a href="#projects">
                <button className="nav-button">Projects</button>
             </a>
            
            </div>
        </div>
    </div>
  )
}

export default Avi

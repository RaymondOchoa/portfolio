import React from 'react'
import moviescout from '../assets/moviescoutpage.png'

const Projects = () => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

     <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#32a852]/80"> 

      <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <img 
          src={moviescout} alt="moviescout app"
          className='h-[150px] w-[600] md:h-[450px] md:w-[800px]'
        />

        <div className="space-y-10 px-0 md:px-10 max-w-6xl f">
          <h4 className="text-2xl md:text-4xl font-semibold text-center">
            <span className="underline decoration-[#32a852]/50">Project #1:</span>{" "}
            Movie Scout
          </h4>

          <p className="text-sm md:text-lg text-center md:text-left">During my time at Learn Academy, I collaborated with a group to create a movie app that allows users to share their favorite films with others. The app allows users to post movies they've seen and want others to watch, as well as search for and add movies to their viewing list. This app is a great tool for movie enthusiasts to discover new films and share recommendations with others
          </p>
          <a 
            href="https://movie-scout.onrender.com/" 
            className='flex justify-center align cursor-pointer text-sm md:text-base hover:scale-105 hover:text-blue-500'
            target='_blank'
            rel="noreferrer"
          >Live Demo</a>

        </div>
      </div>
  
    </div>

    <div className="w-full absolute top-[30%] bg-[#32a852]/10 left-0 h-[500px] -skew-y-12"/>
    </div>
  )
}

export default Projects

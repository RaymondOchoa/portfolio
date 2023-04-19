import './App.css';
import React from 'react'
import Header from './components/Header';
import Avi from './components/Avi';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects.js';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
     <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#32a852]/80">
     <Header />

<section id="avi" className="snap-center">
  <Avi />
</section>

<section id="about" className="snap-center">
  <About />
</section>

<section id="experience" className="snap-center">
  <WorkExperience />
</section>


<section id="skills" className="snap-start" >
  <Skills />
</section>


<section id="projects" className="snap-start">
  <Projects />
</section>

<section id="contact" className="snap-start">
  <Contact />
</section>

<a href="#avi">
  <footer className="sticky bottom-5 w-full cursors-pointer">
    <div className="flex items-center justify-center">
      <img 
        className="h-5 w-5 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
        src="../up.png" alt="up arrow"
      />
    </div>
  </footer>
</a>
</div>
)
}


export default App; 
      

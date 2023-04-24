import React from 'react'
import { motion } from 'framer-motion'
import javalogo from '../assets/javalogo.png'
import reactlogo from '../assets/reactlogo.png'
import csslogo from '../assets/csslogo.png'
import htmllogo from '../assets/htmllogo.png'
import learnlogo from '../assets/learnlogo.png'

const LearnCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ 
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={learnlogo} alt="learn logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">Full Stack Student</h4>
        <p className="font-bold text-xl md:text-2xl mt-1">Learn Academy</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src={javalogo} alt="java logo" />
          <img className="h-10 w-10 rounded-full" src={reactlogo} alt="react logo" />
          <img className="h-10 w-10 rounded-full" src={csslogo} alt="CSS logo" />
          <img className="h-10 w-10 rounded-full" src={htmllogo} alt="html logo" />
        </div>
        <p>November '22 - Ended April '23</p>

        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
          <li>Actively participated in daily stand-up meetings, code reviews, and peer programming sessions to improve our communication skills.</li>
          <li>Collaborated in small groups to build full-stack web applications using HTML, CSS, JavaScript, React, and Ruby on Rails, culminating in a final project where we developed and deployed a fully functional website.</li>
          <li>Participated in daily lectures and hands-on coding challenges, working with classmates through pair programming to reinforce concepts and develop problem-solving skills.</li>
        </ul>
      </div>
    </article>
  )
}

export default LearnCard

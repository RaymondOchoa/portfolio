import React from 'react'
import { motion } from "framer-motion"
import aboutavi from "../assets/aboutavi.png"

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        inital={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         src={aboutavi} 
         alt="avi"
         className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a{" "}
          <span className="underline decoration-[#66B48D]">little</span> background
        </h4>
        <p className="text-base">I am a web developer based out of Sacramento, California, able to create a web presence from the ground up. I have a strong foundation in web development and am able to create effective web solutions from start to finish. I like finding creative solutions to my problems and enjoy working collaboratively with a team. I have experience with a variety of scripting languages and frameworks, which allows me to adapt and learn quickly in new development environments. With my skills and eagerness to learn and grow, I am excited to take on new challenges.</p>
      </div>
      
    </motion.div>
  )
}

export default About

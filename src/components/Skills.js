import React from 'react'
import { motion } from 'framer-motion'
import ReactSkill from './ReactSkill.js'
import RubyOnRailsSkill from './RubyOnRailsSkill.js'
import RubySkill from './RubySkill.js'
import HtmlSkill from './HtmlSkill.js'
import CssSkill from './CssSkill.js'
import JavascriptSkill from './JavascriptSkill.js'
import TailwindSkill from './TailwindSkill.js'
import HamlSkill from './HamlSkill.js'
import PostmanSkill from './PostmanSkill.js'
import DockerSkill from './DockerSkill.js'


const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Here are some skills I am familiar with
      </h3>

      <div className="grid grid-cols-3 gap-5">
        <HtmlSkill />
        <CssSkill />
        <JavascriptSkill />
        <ReactSkill />
        <RubySkill />
        <RubyOnRailsSkill />
        <TailwindSkill />
        <HamlSkill />
        <DockerSkill />
        <PostmanSkill />
   
      </div>
      
    </motion.div>
  )
}

export default Skills

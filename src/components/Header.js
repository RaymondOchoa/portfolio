import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'


const Header = () => {
  return (
    <>
    <header className="p-5 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ 
          x: -500,
          opcaity: 0,
          scale: 0.5
        }}
        animate={{ 
          x: 0,
          opcaity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }} 
        className="flex flex-row items-center">
        <SocialIcon 
          url="https://github.com/RaymondOchoa"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon 
          url="https://www.linkedin.com/in/raymondochoa"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>
      <a href="#contact">
      <motion.div
        initial={{ 
          x: 500,
          opcaity: 0,
          scale: 0.5
        }}
        animate={{ 
          x: 0,
          opcaity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}  
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon 
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
      </motion.div>
      </a>
    </header>
    </>
  )
}

export default Header

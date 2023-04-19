import React from 'react'
import { motion } from 'framer-motion'
import scientistlogo from '../assets/scientistlogo.png'
import rubylogo from '../assets/rubylogo.png'
import hamllogo from '../assets/hamllogo.png'
import scsslogo from '../assets/scsslogo.png'

const ScientistCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-=[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ 
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={scientistlogo}
        alt="scientist-logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Intern</h4>
        <p className="font-bold text-2xl mt-1">Scientist.com</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src={rubylogo} alt="ruby logo" />
          <img className="h-10 w-10 rounded-full" src={hamllogo} alt="haml logo" />
          <img className="h-10 w-10 rounded-full" src={scsslogo}alt="scss" />
        </div>
        <p>Started March '23 - April '23</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Collaborated with two fellow interns to implement a new feature for the platform, improving the user experience for thousands of scientists worldwide.</li>
          <li>Worked closely with senior developers and project managers to identify requirements, develop solutions, and deliver quality code on time.</li>
          <li>Gained hands-on experience with Agile development methodologies and industry-standard tools such as Git, Docker, and Microsoft Teams.</li>
        </ul>
      </div>
    </article>
  )
}

export default ScientistCard

import React from 'react'
import hamllogo from '../assets/hamllogo.png'

const HamlSkill = () => {
  return (
    <div className="group relative flex cursor-pointer">
      <img src={hamllogo}alt="haml logo"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100"></p>
        </div>
      </div>

    </div>
  )
}

export default HamlSkill

import React from 'react'
import { useForm } from "react-hook-form"
import { motion } from 'framer-motion';

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = formData =>{
    window.location.href = `mailto:ochoaraymond54@gmail?subject=${formData.subject}&body=Hi, my name is${formData.name}. ${formData.message}`
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>
      
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center"> Get in touch!{" "}
          <span className="decoration-[#32a852]/50 underline">Lets work.</span>
        </h4>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .75 }}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              {...register("name")} 
              placeholder="Name" 
              className="contact-input" 
              type="text"
            />
            <input
            {...register("email")}  
              placeholder="Email" 
              className="contact-input" 
              type="email"
            />
          </div>
          <input
          {...register("subject")}  
            placeholder="Subject" 
            className="contact-input" 
            type="text"
          />

        <textarea
        {...register("message")}  
          placeholder="Message" 
          className="contact-input" 
        />

        <button 
          type="submit"
          className="bg-[#32a852] py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
          </button>  
        </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
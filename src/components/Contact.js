import React from 'react'
import { useForm } from "react-hook-form"
import { motion } from 'framer-motion';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
              {...register("name", { required: true })} 
              placeholder="Name" 
              className="contact-input" 
              type="text"
            />  
            <input
            {...register("email", {required: true})}  
              placeholder="Email" 
              className="contact-input" 
              type="email"
            />
          </div>
          <div className='flex justify-around'>{errors.name && <span>A name is required</span>} {errors.email && <span>An email is required.</span>}</div>
          <input
          {...register("subject", { required: true })}  
            placeholder="Subject" 
            className="contact-input" 
            type="text"
          /><div className="flex justify-around">{errors.subject && <span>A subject is required.</span>}</div>

        <textarea
        {...register("message", { required: true })}  
          placeholder="Message" 
          className="contact-input" 
        />
        <div className="flex justify-around">{errors.message && <span>A message is required.</span>}</div>
  

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

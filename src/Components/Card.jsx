import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({width, para , start, hover='flase'}) => {
 
  return (
    <motion.div whileHover={{backgroundColor: hover==='true' ? '#7443ff' : null , padding:'30px'}} className={`bg-slate-600 text-white p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
        <div className='w-full'>
          <div className='w-full flex justify-between items-center'>
            <h3>one heading</h3>
            <IoIosArrowRoundForward/>
          </div>
          <h1 className='text-3xl font-medium mt-5'>Whatever heading</h1>
        </div>

        <div className="down w-full">
            {start && (
              <>
              <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a project</h1>
              <button className='rounded-full border-2 border-zinc-200 px-5 py-2 mt-5'>Contect us</button>

              </>
            )}
           
            {para && (<p className='mt-3 text-sm text-zinc-400'>Lorem ipsum dolor sit amet consectetur.</p>)}
        </div>
    </motion.div>
  )
}

export default Card
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Button = ({title = "Get Started"}) => {
  return (
    <div className='w-36 mr-2 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center just'>
        <span className='text-sm'>{title} </span>
        <GoArrowUpRight className='ml-1 text-xl'/>
    </div>
  )
}

export default Button
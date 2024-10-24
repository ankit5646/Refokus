import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-5 flex items-center text-white justify-between border-b-[1px] border-zinc-700'>
       <div className='nleft flex'>
       <span><h1 className='text-white text-xl font-medium py-2'>Ankit.dev</h1></span>

<div className='links flex gap-14 ml-16'>

{["Home","Work","Culture","","News"].map((ele,index)=>
     {
        return <a key={index} className='text-md flex items-center gap-2' href='#'>
          
        {ele.length === 0 ? <span className='w-[2px] h-6 bg-zinc-400'></span> : null}
        {index == 1 && <span style={{boxShadow: "0 0 0.95em #00ff19"}} className='inline-block w-2 h-2 rounded-full bg-green-400'></span>}
        {ele}
     </a> 
     

     } 

    )
}

</div>
       </div>

        <Button/>

    </div>
  )
}

export default Navbar
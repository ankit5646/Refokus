import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl mx-auto flex gap-32">
            <div className="w-1/2 text-white">
                <h1 className='text-[9rem] font-medium py-10 leading-none tracking-wide'>refokus.</h1>
            </div>

            <div className='w-1/2 flex gap-16'>
                <div className='flex flex-col'>
                    <h3 className='text-md text-zinc-400 mb-10'>Socials</h3>
                    {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, index)=> <a key={index} className=' capitalize mb-3 text-sm text-zinc-500'>{item}</a>)}  
                </div>

                <div className='flex flex-col'>
                    <h3 className='text-md text-zinc-400 mb-10'>Sitemap</h3>
                    {["home", "work", "careers","contact"].map((item, index)=> <a key={index} className=' capitalize mb-3 text-sm text-zinc-200'>{item}</a>)}  
                </div>

                <div className='flex flex-col items-end text-white blur-[0.5px]  w-1/2'>
                    <p className='text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                    <img className='w-56 mt-10' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
                </div>
 
            </div>
        </div>

    </div>
  )
}

export default Footer
import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-5 py-6 text-white border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] border-zinc-500 flex justify-between items-center'>
        <img src={val.url} alt="" />
        <p className='text-xl font-semibold'>{val.number}</p>
    </div>
  )
}

export default Stripe
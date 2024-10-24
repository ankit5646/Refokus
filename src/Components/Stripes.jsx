import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {

    var data = [
        {url:'https://cdn.prod.website-files.com/6009e6adcf8c45466fee3e56/651d9107f9f229d775b8cf2b_dropbox.svg', number: 48},
        {url:'https://cdn.prod.website-files.com/6009e6adcf8c45466fee3e56/651d9107f9f229d775b8cf2e_ncr-light.svg', number: 2},
        {url:'https://cdn.prod.website-files.com/6009e6adcf8c45466fee3e56/651d9107f9f229d775b8cf29_orange-theory.svg', number: 11},
        {url:'https://cdn.prod.website-files.com/6009e6adcf8c45466fee3e56/651d9107f9f229d775b8cf2b_dropbox.svg', number: 48},
        {url:'https://cdn.prod.website-files.com/6009e6adcf8c45466fee3e56/651d9107f9f229d775b8cf2e_ncr-light.svg', number: 2},
        {url:'https://cdn.prod.website-files.com/6009e6adcf8c45466fee3e56/651d9107f9f229d775b8cf29_orange-theory.svg', number: 11},
    ]

  return (
      <div className='flex items-center'>
       {data.map((ele,index)=>{
       return  <Stripe val ={ele} key={index}/>
       })}
      
    </div>
  )
}

export default Stripes
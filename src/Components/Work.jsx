import React, { useState } from 'react'
import { motion,useMotionValueEvent,useScroll } from "framer-motion"

const Work = () => {

    const[image,setimage]=useState( [

        {url:'https://img.freepik.com/free-vector/creative-process-landing-page_23-2148155552.jpg?uid=R161033561&ga=GA1.1.624501473.1724792226&semt=ais_hybrid',top:'40%',left:'60%', isActive:false},
        {url:'https://img.freepik.com/free-vector/creativity-process-landing-page-template_23-2148150852.jpg?uid=R161033561&ga=GA1.1.624501473.1724792226&semt=ais_hybrid',top:'40%',left:'45%', isActive:false},
        {url:'https://img.freepik.com/free-psd/business-company-landing-page-template_23-2148924995.jpg?uid=R161033561&ga=GA1.1.624501473.1724792226&semt=ais_hybrid',top:'40%',left:'49%', isActive:false},
        {url:'https://img.freepik.com/premium-photo/design-professional-website-layout-company-specializing-gold-cryptocurrency-trading_1096167-105088.jpg?uid=R161033561&ga=GA1.1.624501473.1724792226&semt=ais_hybrid',top:'45%',left:'40%', isActive:false},
    ]
);

   const { scrollYProgress } = useScroll();

   scrollYProgress.on("change",(data)=>{
    console.log(Math.floor(data*100));
    
    function imageShow(arr){
            setimage((pre)=>
            pre.map((item,index)=>
            arr.indexOf(index) === -1 ?
            {...item, isActive: false} :
            {...item, isActive: true}
            )
            );
    }

    switch(Math.floor(data*100)){
        case 0:
            imageShow([]);
            break;

        case 2:
            imageShow([0]);
            break;
        
        case 4:
            imageShow([0,1]);
            break;

        case 6:
            imageShow([0,1,2]);
            break;

        case 8:
            imageShow([0,1,2,3]);
             break;
    }

   })

  
       
  return (
    <div className='w-full mt-10 mb-10'>
        <div className='relative max-w-screen-xl mx-auto text-center select-none'>
            <h1 className='text-[40vh] text-white tracking-wider'>Work</h1>
       

        <div className='absolute top-0 w-full h-full'>
            {image.map(
                (ele,index)=>
                ele.isActive &&(
                <img 
                key={index}
                className=' absolute w-72 rounded-xl -translate-x-[10%] -translate-y-[50%]' 
                src={ele.url} 
                style={{top : ele.top, left : ele.left}}
                alt="" />
            )
            )}

        </div>
        </div>

    </div>
  )
}

export default Work
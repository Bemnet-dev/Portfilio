import React, { useEffect } from 'react'
import gsap from 'gsap'

const Preloader = () => {
  const t1 = gsap.timeline();
    useEffect(() =>{
        const boxes = document.querySelectorAll('.loadbox');
        t1.to(boxes,{
            height:0,
            duration:1,
            stagger:0.2,
            delay:1,
        })
        t1.to(".loadboxes",{
          display:"none"
        })
        t1.to(".mainloadbox",{
          display:"none",
        })
    })
  return (
    <div className='absolute w-screen h-screen z-20 text-black mainloadbox'>
      <div className="loadboxes">
        <div className="loadbox"></div>
        <div className="loadbox"></div>
        <div className="loadbox"></div>
        <div className="loadbox"></div>
        <div className="loadbox"></div>
        <div className="loadbox"></div>
        <div className="loadbox"></div>
        <div className="loadbox"></div>
        <div className="loadbox"></div>
        <div className="loadbox"></div>
      </div>
    </div>
  )
}

export default Preloader

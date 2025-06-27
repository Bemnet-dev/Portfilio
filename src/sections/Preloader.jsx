import React, { useEffect } from 'react'
import gsap from 'gsap'

const Preloader = () => {
    useEffect(() =>{
        const boxes = document.querySelectorAll('.loadbox');
        gsap.to(boxes,{
            height:0,
            duration:1,
            stagger:0.2,
            delay:1,
        })
    })
  return (
    <div className='absolute w-screen h-screen z-20 text-black'>
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

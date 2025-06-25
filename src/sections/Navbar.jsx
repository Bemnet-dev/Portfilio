import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  useGSAP(() =>{
    gsap.to(".navbar",{
      backgroundColor:"rgb(0,0,0,1)",
      duration:1,
      scrollTrigger:{
        trigger:".homepage",
        scroller:"body",
        scrub:true,
        markers:true,
        start:"top 20%",
      }
    })
  },[])
  return (
    <div className='w-full h-[90px] fixed bg-[rgb(0,0,0,0.2)] flex items-center justify-between z-20 border-b border-gray-700 navbar'>
      <div className='flex border-t-0 border-b-0 border-l-0 border-gray-700 border h-full items-center p-3.5 text-3xl'>
        <i className="fa-solid fa-shield-halved text-[#c9f31d]"></i>
        <h1>saisagar</h1>
      </div>
      <ul className='flex justify-between gap-10 h-[60%] items-center'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>WORK</li>
        <li>SERVICE</li>
        <li>TESTIMONIAL</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
      <div className='flex justify-end gap-4 border h-full border-t-0 border-r-0 border-gray-700 p-4 pl-6'>
        <div className='flex items-center gap-3 pt-4.5 pb-4.5 pr-6 pl-6 text-black bg-[#c9f31d] rounded-[5px]'>
          <p>Let's Talk</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className='pt-7 pb-7 pl-4 pr-4 text-black flex items-center justify-center text-2xl h-10 bg-white rounded-[5px]'>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar

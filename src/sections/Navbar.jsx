import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  useGSAP(() =>{
    const designer = document.querySelector('.designer');
    gsap.to(".navbar",{
      backgroundColor:"rgb(0,0,0,1)",
      duration:1,
      scrollTrigger:{
        trigger:".homepage",
        scroller:"body",
        scrub:true,
        start:"top 20%",
      }
    })

    designer.addEventListener('mouseenter',() =>{
      gsap.to(".cursor",{
        scale: 2,
        boxShadow: '0 0 20px #c9f31d',
        backgroundColor: '#c9f31d',
        borderColor: '#c9f31d',
        duration: 0.3,
      })
    })

    designer.addEventListener('mouseleave', () => {
        gsap.to(".cursor", {
          scale: 1,
          boxShadow: 'none',
          backgroundColor: 'transparent',
          borderColor: 'white',
          duration: 0.3,
        });
      });

      gsap.fromTo('.navtabs li',{x:"-50",opacity:0},{x:0,opacity:1,duration:0.3,delay:3,stagger:0.2})
    },[])
  return (
    <div className='w-full h-[90px] fixed bg-[rgb(0,0,0,0.2)] flex items-center justify-between z-20 border-b border-gray-700 navbar'>
      <div className='flex border-t-0 border-b-0 border-l-0 max-[1122px]:border-r-0 max-[1122px]:flex-1/2 border-gray-700 border h-full items-center p-3.5 text-3xl'>
        <i className="fa-solid fa-shield-halved text-[#c9f31d]"></i>
        <h1>saisagar</h1>
      </div>
      <ul className='flex justify-between gap-10 h-[60%] items-center max-[1122px]:hidden navtabs cursor-pointer'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>WORK</li>
        <li>SERVICE</li>
        <li>TESTIMONIAL</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
      <div className='flex justify-end gap-4 border h-full border-t-0 border-r-0 max-[1122px]:border-l-0 max-[1122px]:flex-1/2 border-gray-700 p-4 pl-6 '>
        <div className='flex items-center gap-3 pt-4.5 pb-4.5 pr-6 pl-6 text-black bg-[#c9f31d] rounded-[5px]'>
          <p onClick={() => console.log("hello")}>Let's Talk</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className='pt-7 pb-7 pl-4 pr-4 sidebutton text-black flex items-center justify-center text-2xl h-10 bg-white rounded-[5px]' onClick={() => console.log("hello")}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React, { useEffect } from 'react'
import {ScrollTrigger} from 'gsap/all';
import gsap from 'gsap';
import Navbar from './sections/Navbar';
import Homepage from './sections/Homepage';
import Page2 from './sections/page2';
import Page3 from './sections/Page3';
import Page4 from './sections/Page4';
import Page5 from './sections/Page5';
gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useEffect(() =>{
    const cursor = document.querySelector('.maincontain');
    cursor.addEventListener('mousemove',(dets) =>{
      console.log(dets.x,dets.y)
      gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"power2"
      });
    })
  },[])
  return (
    <div className='text-white bg-pink-200 maincontain cursor-default'>
      <div className="cursor w-8 h-8 border-2 border-[#c9f31d] rounded-full absolute z-20">

      </div>
      <Navbar/>
      <Homepage/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
    </div>
  )
}

export default App

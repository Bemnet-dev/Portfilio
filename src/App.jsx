import React from 'react'
import {ScrollTrigger} from 'gsap/all';
import gsap from 'gsap';
import Navbar from './sections/Navbar';
import Homepage from './sections/Homepage';
import Page2 from './sections/page2';
import Page3 from './sections/Page3';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className='text-white bg-pink-200'>
      <Navbar/>
      <Homepage/>
      <Page2/>
      <Page3/>
    </div>
  )
}

export default App

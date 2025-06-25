// import React, { useEffect } from 'react'
import netflix from '../assets/image.png';
import todo from '../assets/Cream Modern Corporate Download Our App Minimal Instagram Story.png';
import landingpage from '../assets/Screenshot (298).png';
import googleplay from '../assets/Black Modern New Collection Instagram Post.png';
import ecommerce from '../assets/Screenshot (301).png';
import { useEffect } from 'react';
import gsap from 'gsap';

const Page3 = () => {
  
  useEffect(() =>{
    const circul_border = document.querySelector('#cborder');
    const circle = document.querySelector('.more');
    circle.addEventListener('mouseover',() =>{
      gsap.to(circul_border,{
        top:"-20px",
        duration:0.5,
      })
    })
    circle.addEventListener('mouseout',() =>{
      gsap.to(circul_border,{
        top:"10px",
        duration:0.5,
      })
    })
  },[]);

  return (
    <div className='w-screen bg-[#151515] p-20'>
      <h1 className='flex items-center gap-8 w-full justify-center'><span className='w-30 h-[1px] bg-[#c9f31d] flex rounded-[1px]'></span><p className='text-[#c9f31d] text-2xl' style={{fontFamily:"Caveat"}}>Complete Projects</p> <span className='w-30 h-[1px] bg-[#c9f31d] flex rounded-[1px]'></span></h1>
      <br />
      <br />
      <h1 className='text-6xl text-center'>Look at my portfolio and give me your feedback</h1>
      <div className='w-full pt-10 flex justify-between'>
        <div className='leftimages w-[48%] flex flex-col gap-20'>
          {/* image1 */}
          <ul className=''>
            <div className="conver rounded-[10px] overflow-hidden hover:rounded-[0px] transition duration-75">
              <img src={todo} className='hover:scale-[1.01] transition' alt="" />
            </div>
            <br />
            <p className='text-[#c9f31d]'>PRODUCT DESIGN</p>
            <div className="mainline flex justify-between items-end">
              <h1 className='font-bold text-3xl'>Brand Identity & Motion Design</h1>
              <div className='w-12 h-12 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]'>
                <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
              </div>
            </div>
          </ul>
          {/* image2 */}
          <ul className=''>
            <div className="conver rounded-[10px] overflow-hidden hover:rounded-[0px] transition duration-75">
              <img src={ecommerce} className='hover:scale-[1.01] transition' alt="" />
            </div>
            <br />
            <p className='text-[#c9f31d]'>PRODUCT DESIGN</p>
            <div className="mainline flex justify-between items-end">
              <h1 className='font-bold text-3xl'>Brand Identity & Motion Design</h1>
              <div className='w-12 h-12 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]'>
                <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
              </div>
            </div>
          </ul>
        </div>
        {/* right side images */}
        <div className='rightimages w-[48%] flex flex-col gap-20'>
          {/* image1 */}
          <ul className=''>
            <div className="conver rounded-[10px] overflow-hidden hover:rounded-[0px] transition duration-75">
              <img src={netflix} className='hover:scale-[1.01] transition' alt="" />
            </div>
            <br />
            <p className='text-[#c9f31d]'>PRODUCT DESIGN</p>
            <div className="mainline flex justify-between items-end">
              <h1 className='font-bold text-3xl'>Brand Identity & Motion Design</h1>
              <div className='w-12 h-12 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]'>
                <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
              </div>
            </div>
          </ul>
          {/* image2 */}
          <ul className=''>
            <div className="conver rounded-[10px] overflow-hidden hover:rounded-[0px] transition duration-75">
              <img src={landingpage} className='hover:scale-[1.01] transition' alt="" />
            </div>
            <br />
            <p className='text-[#c9f31d]'>PRODUCT DESIGN</p>
            <div className="mainline flex justify-between items-end">
              <h1 className='font-bold text-3xl'>Brand Identity & Motion Design</h1>
              <div className='w-12 h-12 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]'>
                <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
              </div>
            </div>
          </ul>
          {/* image3 */}
          <ul className=''>
            <div className="conver rounded-[10px] overflow-hidden hover:rounded-[0px] transition duration-75">
              <img src={googleplay} className='hover:scale-[1.01] transition' alt="" />
            </div>
            <br />
            <p className='text-[#c9f31d]'>PRODUCT DESIGN</p>
            <div className="mainline flex justify-between items-end">
              <h1 className='font-bold text-3xl'>Brand Identity & Motion Design</h1>
              <div className='w-12 h-12 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]'>
                <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className='w-full h-60 flex justify-center items-center mt-20'>
        <div className="more w-50 h-50 text-black cursor-pointer bg-[#c9f31d] rounded-full flex-col text-2xl relative flex justify-center items-center">
          <i class="fa-solid fa-arrow-right"></i>
          <p>Click For More</p>
          <div className='w-50 h-50 border-2 border-[#c9f31d] rounded-full transition absolute bottom-[-10px] left-[-10px] circul-border' id='cborder'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page3

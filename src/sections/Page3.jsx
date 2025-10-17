// import React, { useEffect } from 'react'
import { useEffect } from 'react';
import gsap from 'gsap';

const Page3 = () => {
  
  useEffect(() =>{
    
    const cursor2 = document.querySelector('.cursor2');
    const mainbody2 = document.querySelector('.mainbody2');
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

    const hoverTargets = document.querySelectorAll('.conver, .more');

    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', () => {
        gsap.to(cursor2, {
          scale: 2,
          boxShadow: '0 0 20px #c9f31d',
          backgroundColor: '#c9f31d',
          borderColor: '#c9f31d',
          duration: 0.3,
        });
      });

      target.addEventListener('mouseleave', () => {
        gsap.to(cursor2, {
          scale: 1,
          boxShadow: 'none',
          backgroundColor: 'transparent',
          borderColor: 'white',
          duration: 0.3,
        });
      });
    });



    //cursor animation
    mainbody2.addEventListener('mousemove',(e) =>{
      const bounds = mainbody2.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      gsap.to(cursor2,{
        x:x,
        y:y,
        duration:0.8
      })
    })


    //projects animaitions
    const t1 = gsap.timeline({
      scrollTrigger:{
        trigger:".mainImages",
        start:"top 80%",
        end:"top -50%",
        scrub:1.2,
      }
    });

    gsap.fromTo(".projectheading",{
      y:100,
      opacity:0,
    },{
      y:0,
      opacity:1,
      scrollTrigger:{
        trigger:".mainbody2",
        start:"top 30%",
        end:"-50%",
        scrub:true,
        toggleActions:"restart",
      }
    })

    t1.fromTo(".image1",{
      x:"-100%"
    },{x:"0%",stagger:1,duration:0.5});

    gsap.fromTo(".image2",{
      x:"100%"
    },{x:"0%",stagger:1,duration:0.5,
      scrollTrigger:{
        trigger:".rightimages",
        start:"top 50%",
        end:"top -50%",
        scrub:1.2,
      }
    });
  },[]);

  return (
    <>
      <div className='w-screen bg-[#151515] p-20 max-sm:p-5 mainbody2 relative' id='work'>
                  <h1 className='flex items-center gap-5 justify-center w-full max-sm:pb-8 max-sm:pt-5'>
                    <span className='w-30 h-[1px] bg-[#c9f31d] flex rounded-[1px]'></span>
                    <p className='text-[#c9f31d] text-2xl max-sm:text-[16px]' style={{fontFamily:"Caveat"}}>
                      Complete Project
                      </p>
                      <span className='w-30 h-[1px] bg-[#c9f31d] flex rounded-[1px]'></span>
                    </h1>
                    <br />
                    <br />
        <h1 className='text-6xl text-center max-sm:text-3xl'>Look at my Projects and give me
          <br />
           Your feedback</h1>
        <div className='w-full pt-10 flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-20 mainImages'>
          <div className='leftimages w-[48%] max-sm:w-[90%] flex flex-col gap-20 max-sm:text-[14px]'>
            {/* image1 */}
            <ul className='image1'>
              <div className="conver rounded-[10px] overflow-hidden hover:rounded-[0px] transition duration-75">
                <img src="src/assets1/pro1-4e06b6ed.png" className='hover:scale-[1.01] transition' alt="" />
              </div>
              <br />
              <p className='text-[#c9f31d] max-sm:text-[14px]'>Product Design</p>
              <div className="mainline flex justify-between items-end">
                <h1 className='font-bold text-3xl max-sm:text-[20px]'>Brand Identity & Motion Design</h1>
                <a href="#">
                  <div className='w-12 h-12 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]'>
                  <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
                </div>
                </a>
              </div>
            </ul>
            {/* image2 */}
            <ul className='image1'>
              <div className="conver rounded-[10px] overflow-hidden hover:rounded-[0px] transition duration-75">
                <img src="src/assets1/pro3-454e8e4f.png" className='hover:scale-[1.01] transition' alt="" />
              </div>
              <br />
              <p className='text-[#c9f31d] max-sm:[16px]'>Product Design</p>
              <div className="mainline flex justify-between items-end">
                <h1 className='font-bold text-3xl max-sm:text-[20px]'>Design & Branding Mokeup</h1>
                <a href="#">
                  <div className='w-12 h-12 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]'>
                  <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
                </div>
                </a>
              </div>
            </ul>
            <ul className='image1'>
              <div className="conver rounded-[10px] overflow-hidden hover:rounded-[0px] transition duration-75">
                <img src="src/assets1/pro5-66e59ab7.png" className='hover:scale-[1.01] transition' alt="" />
              </div>
              <br />
              <p className='text-[#c9f31d] max-sm:[16px]'>UI/UX Design</p>
              <div className="mainline flex justify-between items-end">
                <h1 className='font-bold text-3xl max-sm:text-[20px]'>Mobile Application Development</h1>
                <a href="#">
                  <div className='w-12 h-12 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]'>
                  <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
                </div>
                </a>
              </div>
            </ul>
          </div>
          {/* right side images */}
          <div className='rightimages relative w-[48%] flex flex-col gap-20 max-sm:w-[90%] max-sm:text-[14px]'>
            {/* image1 */}
            <ul className='image2'>
              <div className="conver rounded-[10px] overflow-hidden hover:rounded-[0px] transition duration-75">
                <img src="src/assets1/pro2-f70978ea.png" className='hover:scale-[1.01] transition' alt="" />
              </div>
              <br />
              <p className='text-[#c9f31d]'>UI/UX Design</p>
              <div className="mainline flex justify-between items-end">
                <h1 className='font-bold text-3xl max-sm:text-[20px]'>Mobile Application Development</h1>
                <a href="#">
                  <div className='w-12 h-12 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]'>
                  <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
                </div>
                </a>
              </div>
            </ul>
            {/* image2 */}
            <ul className='image2'>
              <div className="conver rounded-[10px] overflow-hidden hover:rounded-[0px] transition duration-75">
                <img src="src/assets1/pro4-d98308c3.png" className='hover:scale-[1.01] transition' alt="" />
              </div>
              <br />
              <p className='text-[#c9f31d]'>UI/UX Design</p>
              <div className="mainline flex justify-between items-end">
                <h1 className='font-bold text-3xl max-sm:text-[20px]'>Mobile Application Development</h1>
                <a href="#">
                  <div className='w-12 h-12 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]'>
                  <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
                </div>
                </a>
              </div>
            </ul>
            
            {/* image3 */}
            <ul className='image2'>
              <div className="conver rounded-[10px] overflow-hidden hover:rounded-[0px] transition duration-75">
                <img src="src/assets1/pro6-f38a046d.png" className='hover:scale-[1.01] transition' alt="" />
              </div>
              <br />
              <p className='text-[#c9f31d]'>UI/UX Design</p>
              <div className="mainline flex justify-between items-end">
                <h1 className='font-bold text-3xl max-sm:text-[20px]'>Mobile Application Development</h1>
                <a href="#">
                  <div className='w-12 h-12 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]'>
                  <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
                </div>
                </a>
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
      {/* Need a project */}
      <div className='w-full flex max-sm:flex-col'>
        <div className="w-[60%] max-sm:w-[100%] max-sm:p-5 p-20 bg-[#212121] leftside1">
          <h1 className='flex items-center gap-5 justify-start w-full max-sm:pb-8 max-sm:pt-5'><span className='w-30 h-[1px] bg-[#c9f31d] flex rounded-[1px]'></span><p className='text-[#c9f31d] text-2xl max-sm:text-[16px]' style={{fontFamily:"Caveat"}}>Need a Project?</p></h1>
          <h1 className='text-7xl font-thin w-full border-b pb-10 border-gray-600 transition hover:border-[#c9f31d] duration-1000 max-sm:text-[25px]'>Let's work together. Fixed a meeting</h1>
          <div className='w-full flex text-black hover:border-[#c9f31d] max-sm:pt-4 max-sm:pb-4  duration-1000 pt-7 gap-5 pb-7 border-b border-gray-600'>
            <span className='p-3 pl-4 pr-4 max-sm:pb-2 max-sm:pl-3 max-sm:pr-3  max-sm:flex max-sm: items-center text-2xl bg-[#c9f31d] rounded-full max-sm:text-[18px]'>
              <i className="fa-regular fa-envelope"></i>
            </span>
            <div className="w-full flex flex-col justify-between">
              <p className='text-2xl text-[#858585] max-sm:text-[18px]'>Email</p>
              <p className='text-white max-sm:text-[14px]'>Davidmatias333@gmail.com</p>
            </div>
          </div>
          <div className='w-full flex text-black hover:border-[#c9f31d] transition max-sm:pt-4 max-sm:pb-4 duration-1000 pt-7 gap-5 pb-7 border-b border-gray-600'>
            <span className='p-3 pl-4 pr-4  max-sm:pb-2 text-2xl max-sm:text-[18px] bg-[#c9f31d] rounded-full'>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <div className="w-full flex flex-col justify-between">
              <p className='text-2xl text-[#858585] max-sm:text-[18px]'>Location</p>
              <p className='text-white max-sm:text-[14px]'>Victoria Street London, England</p>
            </div>
          </div>
        </div>
        <div className='rightside w-[40%] max-sm:w-[100%] bg-[#212121] p-15'>
          <img src="src/assets1/project-need-dee85a1f.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Page3

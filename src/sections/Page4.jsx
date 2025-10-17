// import React, { useEffect } from 'react'
import { useEffect } from 'react';
import gsap from 'gsap';

const Page4 = () => {
  
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
                      Services That i Provide
                      </p>
                      <span className='w-30 h-[1px] bg-[#c9f31d] flex rounded-[1px]'></span>
                    </h1>
                    <br />
                    <br />
        <h1 className='text-6xl text-center max-sm:text-3xl'>My Special Service For Your 
          <br />
           Business Development</h1>
          <div className='leftimages w-[48%] max-sm:w-[90%] flex flex-col gap-20 max-sm:text-[14px] pt-25'>
            <div className="flex items-center justify-between w-full">
              
            </div>      
    </div>
     </div>

     <div className="w-full bg-[#151515] py-6 px-8 max-sm:px-3">
  <div className="flex items-center justify-between w-full border-b border-[#2a2a2a] hover:border-[#c9f31d] pb-6">
    
    {/* Left Number */}
    <p className="font-bold text-4xl max-sm:text-[22px] text-white">01</p>

    {/* Middle Text Block */}
    <div className="flex flex-col items-center text-center flex-1 px-6 max-sm:px-2">
      <p className="text-gray-400 text-lg max-sm:text-[14px]">Designer</p>
      <h1 className="font-bold text-3xl hover:text-[#c9f31d] transition-colors duration-200 max-sm:text-[20px]">
        Illustration Design
      </h1>
    </div>

    {/* New Description Text */}
    <div className="max-w-[350px] text-gray-400 text-sm leading-relaxed pl-20px">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt mollit.
      </p>
    </div>

    {/* Right Arrow Button */}
    <div className="mainline flex justify-end items-end">
      <a href="#">
        <div className="w-14 h-14 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]">
          <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
        </div>
      </a>
    </div>

  </div>
     </div>

     <div className="w-full bg-[#151515] py-6 px-8 max-sm:px-3">
  <div className="flex items-center justify-between w-full border-b border-[#2a2a2a] hover:border-[#c9f31d] pb-6">
    
    {/* Left Number */}
    <p className="font-bold text-4xl max-sm:text-[22px] text-white">02</p>

    {/* Middle Text Block */}
    <div className="flex flex-col items-center text-center flex-1 px-6 max-sm:px-2">
      <p className="text-gray-400 text-lg max-sm:text-[14px]">Branding</p>
      <h1 className="font-bold text-3xl hover:text-[#c9f31d] transition-colors duration-200 max-sm:text-[20px]">
        Business Branding
      </h1>
    </div>

    {/* New Description Text */}
    <div className="max-w-[350px] text-gray-400 text-sm leading-relaxed pl-20px">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt mollit.
      </p>
    </div>

    {/* Right Arrow Button */}
    <div className="mainline flex justify-end items-end">
      <a href="#">
        <div className="w-14 h-14 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]">
          <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
        </div>
      </a>
    </div>

  </div>
     </div>

     <div className="w-full bg-[#151515] py-6 px-8 max-sm:px-3">
  <div className="flex items-center justify-between w-full border-b border-[#2a2a2a] hover:border-[#c9f31d] pb-6">
    
    {/* Left Number */}
    <p className="font-bold text-4xl max-sm:text-[22px] text-white">03</p>

    {/* Middle Text Block */}
    <div className="flex flex-col items-center text-center flex-1 px-6 max-sm:px-2">
      <p className="text-gray-400 text-lg max-sm:text-[14px]">UI/UX Design</p>
      <h1 className="font-bold text-3xl hover:text-[#c9f31d] transition-colors duration-200 max-sm:text-[20px]">
        Web UI/UX Design
      </h1>
    </div>

    {/* New Description Text */}
    <div className="max-w-[350px] text-gray-400 text-sm leading-relaxed pl-20px">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt mollit.
      </p>
    </div>

    {/* Right Arrow Button */}
    <div className="mainline flex justify-end items-end">
      <a href="#">
        <div className="w-14 h-14 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]">
          <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
        </div>
      </a>
    </div>

  </div>
     </div>

     <div className="w-full bg-[#151515] py-6 px-8 max-sm:px-3">
  <div className="flex items-center justify-between w-full border-b border-[#2a2a2a] hover:border-[#c9f31d] pb-6">
    
    {/* Left Number */}
    <p className="font-bold text-4xl max-sm:text-[22px] text-white">04</p>

    {/* Middle Text Block */}
    <div className="flex flex-col items-center text-center flex-1 px-6 max-sm:px-2">
      <p className="text-gray-400 text-lg max-sm:text-[14px]">Web Design</p>
      <h1 className="font-bold text-3xl hover:text-[#c9f31d] transition-colors duration-200 max-sm:text-[20px]">
        Application Design
      </h1>
    </div>

    {/* New Description Text */}
    <div className="max-w-[350px] text-gray-400 text-sm leading-relaxed pl-20px">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt mollit.
      </p>
    </div>

    {/* Right Arrow Button */}
    <div className="mainline flex justify-end items-end">
      <a href="#">
        <div className="w-14 h-14 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]">
          <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
        </div>
      </a>
    </div>

  </div>
     </div>

     <div className="w-full bg-[#151515] py-6 px-8 max-sm:px-3">
  <div className="flex items-center justify-between w-full border-b border-[#2a2a2a] hover:border-[#c9f31d] pb-6">
    
    {/* Left Number */}
    <p className="font-bold text-4xl max-sm:text-[22px] text-white">05</p>

    {/* Middle Text Block */}
    <div className="flex flex-col items-center text-center flex-1 px-6 max-sm:px-2">
      <p className="text-gray-400 text-lg max-sm:text-[14px]">SEO Analytics</p>
      <h1 className="font-bold text-3xl hover:text-[#c9f31d] transition-colors duration-200 max-sm:text-[20px]">
        Digital Marketing
      </h1>
    </div>

    {/* New Description Text */}
    <div className="max-w-[350px] text-gray-400 text-sm leading-relaxed pl-20px">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sunt in culpa qui officia deserunt mollit.
      </p>
    </div>

    {/* Right Arrow Button */}
    <div className="mainline flex justify-end items-end">
      <a href="#">
        <div className="w-14 h-14 bg-[#242424] hover:bg-[#c9f31d] flex items-center justify-center text-white hover:text-black transition rounded-[3px]">
          <i className="fa-solid fa-arrow-up rotate-45 cursor-pointer"></i>
        </div>
      </a>
    </div>

  </div>
     </div>

    </>
  )
}

export default Page4

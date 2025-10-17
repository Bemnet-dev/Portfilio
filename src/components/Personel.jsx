import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Personel = () => {
  useGSAP(() =>{
    const t1 = gsap.timeline({
      scrollTrigger: {
      trigger: ".details",
      start: "top 60%",
      end: "top 30%",
      scrub:1,
      toggleActions: "restart none none none"
    }
    });
    t1.fromTo(".personaltitle",{
      y:100,
      opacity:0,
    },{
      opacity:1,
      y:0,
      duration:0.3,
      stagger:0.1,
    })
    t1.fromTo(".boxscale1",{
      scale:0.3,
      opacity:0,
    },{
      opacity:1,
      scale:1,
      duration:0.1,
      stagger:0.1,
    })
    t1.fromTo(".boxscale2",{
      scale:0.3,
      opacity:0,
    },{
      duration:0.1,
      opacity:1,
      scale:1,
      stagger:0.3,
    })
  },[])
  return (
    <div className='w-full pl-10 flex flex-col gap-4 max-sm:p-0'>
      <h1 className='text-4xl max-sm:text-2xl max-sm:w-full personaltitle'>Personal Info</h1>
      <p className='text-[18px] max-sm:text-[16px] personaltitle'>
        I'm David Matias, I'm a Brand & Webflow Designer, Currently residing in the lush Victoria Street London, Matias operates globally and is ready to take on any design challenge.
      </p>

      <div className='detialTabs flex flex-wrap items-center justify-between gap-6'>
        <div className="w-[48%] max-sm:w-full rounded-[8px] flex flex-col justify-between h-30 p-4 bg-[#1f1f1f] boxscale1">
            <p className='text-[20px] max-sm:text-[18px] text-[#767676]'>Email</p>
            <p className='text-[20px] max-sm:text-[16px]'>Matias999@Gmail.Com</p>
        </div>
        <div className="w-[48%] max-sm:w-full rounded-[8px] flex flex-col justify-between h-30 p-4 bg-[#1f1f1f] boxscale1">
            <p className='text-[20px] max-sm:text-[18px] text-[#767676]'>Phone</p>
            <p className='text-[20px] max-sm:text-[16px]'>+(2) 871 382 023</p>
        </div>
        <div className="w-[48%] max-sm:w-full rounded-[8px] flex flex-col justify-between h-30 p-4 bg-[#1f1f1f] boxscale2">
            <p className='text-[20px] max-sm:text-[18px] text-[#767676]'>Address</p>
            <p className='text-[20px] max-sm:text-[16px]'>Victoria Street London,</p>
        </div>
        <div className="w-[48%] max-sm:w-full rounded-[8px] flex flex-col justify-between h-30 p-4 bg-[#1f1f1f] boxscale2">
            <p className='text-[20px] max-sm:text-[18px] text-[#767676]'>Follow</p>
            <ul className='flex gap-5'>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-linkedin"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-x-twitter"></i></li>
                <li><i className="fa-brands fa-whatsapp"></i></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Personel

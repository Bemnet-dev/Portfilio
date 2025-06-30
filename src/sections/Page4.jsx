import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  // const t1 = gsap.timeline({
  //   scrollTrigger:{
  //     markers:true,
  //     trigger:".workprocess",
  //     start:"top 30%",
  //     scrub:true,
  //   }
  // })
  useEffect(() =>{
    const mainbox = document.querySelectorAll('.dreambox');
    mainbox.forEach((box) => 
    {
      const blackbox = box.querySelector('.blackbox');
      box.addEventListener('mouseenter',() =>{
      gsap.to(blackbox,{
        backgroundColor:"#c9f31d",
      })

      box.addEventListener('mouseleave',() =>{
        gsap.to(blackbox,{
          backgroundColor:"#090909",
        })
      })
    })
  })

gsap.fromTo(".dreambox", 
  { y: 200, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease:"none",
    scrollTrigger: {
      trigger: ".workprocess",
      start: "top 30%",
      end:"top -10%",
      markers: true,
      scrub:true,
      toggleActions: "restart none none none",
    }
  }
);
gsap.fromTo(".dreamtext", 
  { y: 200, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease:"none",
    scrollTrigger: {
      trigger: ".workprocess",
      start: "top 30%",
      end:"top -10%",
      markers: true,
      scrub:true,
      toggleActions: "restart none none none",
    }
  }
);


},[])
  return (
    <div className='w-screen h-screen max-sm:h-auto bg-[#151515] p-22 flex flex-col justify-around gap-10 max-sm:p-4 workprocess relative'>
      <h1 className='flex items-center gap-8 w-full justify-center'><span className='w-30 h-[1px] bg-[#c9f31d] flex rounded-[1px]'></span><p className='text-[#c9f31d] text-2xl' style={{fontFamily:"Caveat"}}>Working Process</p> <span className='w-30 h-[1px] bg-[#c9f31d] flex rounded-[1px]'></span></h1>
      <br />
      <h1 className='text-7xl text-center dreamtext'>Your Dream Website In Just Few Steps</h1>
      <div className='w-full flex justify-between max-sm:flex-col max-sm:gap-6'>
          <div className='w-100 p-6 border border-[#6b6b6b] max-sm:w-[100%] max-sm:text-[16px] translate-y-[100px] opacity-0 flex dreambox flex-col gap-5 rounded-[10px] transition-all duration-300 overflow-hidden hover:border-[#c9f31d] relative'>
            <div className='w-15 h-15 rounded-full absolute bottom-[-15px] blackbox bg-[#090909] right-[-15px]'>

            </div>
            <h1 className='text-4xl font-bold max-sm:text-2xl'>Concept</h1>
            <p>We help you define a clear vision for your project by deeply understanding your business goals and your users' needs.</p>
            <ul className='list-none flex flex-col gap-1 text-[14px]'>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Conduct in-depth brand analysis</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Identify target audience and market opportunities</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Outline strategic objectives and roadmap</li>
            </ul>
        </div>
          <div className='w-100 p-6 border border-[#6b6b6b] flex flex-col gap-5 dreambox translate-y-[100px] opacity-0 rounded-[10px] max-sm:w-[100%] transition-all duration-300 relative overflow-hidden hover:border-[#c9f31d]'>
            <div className='w-15 h-15 rounded-full absolute bottom-[-15px] blackbox bg-[#090909] right-[-15px]'>

            </div>
            <h1 className='text-4xl font-bold max-sm:text-2xl'>Design</h1>
            <p>Transforming ideas into beautiful, functional interfaces that deliver exceptional user experiences.</p>
            <ul className='list-none flex flex-col gap-1 text-[14px]'>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Develop wireframes and high-fidelity mockups</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Define design systems and brand guidelines</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Prioritize usability and accessibility</li>
            </ul>
        </div>
          <div className='w-100 p-6 border border-[#6b6b6b] flex flex-col max-sm:w-[100%] translate-y-[100px] opacity-0 dreambox gap-5 rounded-[10px] transition-all duration-300 relative overflow-hidden hover:border-[#c9f31d]'>
            <div className='w-15 h-15 rounded-full absolute bottom-[-15px] bg-[#090909] blackbox right-[-15px]'>

            </div>
            <h1 className='text-4xl font-bold max-sm:text-2xl'>Development</h1>
            <p>Building robust, scalable, and maintainable solutions with clean code and best practices.</p>
            <ul className='list-none flex flex-col gap-1 text-[14px]'>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Frontend and backend development with modern frameworks</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Integrate APIs and third-party services</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Optimize performance and ensure security</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Page4

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

const Page6 = () => {

  const backTop = () => {
    const top = document.querySelector('.backtop');
    top.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollbtn",
        start: "top 20%",
        end: "end -50%",
        scrub: true,
        toggleActions: "restart",
      }
    })

    t1.fromTo('btn', { y: 100, opacity: 0 }, {
      opacity: 1,
      y: 0,
      duration: 1,
    })
  }, [])
  return (
    <div className='w-screen h-screen max-sm:h-auto bg-[#111111] flex justify-between flex-col' id='contact'>
      <div className='pl-20 pr-20 max-sm:p-5'>
        <h1 className='text-[140px] text-center border max-sm:text-8xl rounded-[5px]'>GET IN TOUCH</h1>
      </div>
      <div className='w-full flex items-center max-sm:flex-col'>
        <div className="w-[50%] h-50 flex flex-col justify-between max-sm:w-full pr-30 pl-20 max-sm:p-5">
          <h1 className='text-2xl max-sm:text-[20px]'>Hello, I’m David Matias, Website & User Interface Designer based in London.</h1>
          <h1 className='text-3xl underline max-sm:text-2xl'>davidmatias333@gmail.com</h1>
        </div>
        <div className="w-[50%] pl-20 flex  flex-wrap relative scrollbtn gap-14 items-center justify-between max-sm:flex-col max-sm:p-5 max-sm:w-full pr-20">
          <a href="#" className='max-sm:w-full'>
            <span className='w-60 hover:bg-[#c9f31d] btn hover:text-black duration-200 cursor-pointer max-sm:w-full flex items-center justify-between bg-[#121212] border-[#272727] border p-5 rounded-[8px] max-sm:items-center max-sm:justify-between'>
              <p>Gmail</p>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
          <a href="#" className='max-sm:w-full'>
            <span className='w-60 hover:bg-[#c9f31d] btn hover:text-black duration-200 cursor-pointer max-sm:w-full flex items-center justify-between bg-[#121212] p-5 border-[#272727] border rounded-[8px] max-sm:items-center max-sm:justify-between'>
              <p>Instagram</p>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
          <a href='#' className='max-sm:w-full'>
            <span className='w-60 hover:bg-[#c9f31d] btn hover:text-black duration-200 cursor-pointer max-sm:w-full flex items-center justify-between bg-[#121212] border border-[#272727] p-5 rounded-[8px] max-sm:items-center max-sm:justify-between'>
              <p>Linkedin</p>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
          <a href="#" className='max-sm:w-full'>
            <span className='w-60 hover:bg-[#c9f31d] btn hover:text-black duration-200 cursor-pointer max-sm:w-full flex items-center justify-between bg-[#121212] border-[#272727] border p-5 rounded-[8px] max-sm:items-center max-sm:justify-between'>
              <p>Twitter</p>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-30 bg-[#1f1f1f] flex justify-between items-center max-sm:h-auto max-sm:p-5 max-sm:gap-6 pl-25 pr-25">
        <p className='text-[14px] max-sm:text-[11px]'>Copyright © 2025 Sagar. All rights reserved.</p>
        <div className='flex gap-5 text-[14px] max-sm:flex-col max-sm:text-[11px] max-sm:gap-0'>
          <p>Terms&Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <span className='bg-[#c9f31d] cursor-pointer p-5 rounded-[5px] backtop text-black' onClick={backTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </span>
      </div>
    </div>
  )
}

export default Page6

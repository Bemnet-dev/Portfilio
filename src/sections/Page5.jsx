import React, { useEffect } from 'react'

const Page5 = () => {
  useEffect(() =>{
    const top = document.querySelector('.backtop');
    top.addEventListener('click',() =>{
      
    })
  })
  return (
    <div className='w-screen h-screen max-sm:h-auto bg-[#111111] flex justify-between flex-col'>
      <div className='pl-20 pr-20 max-sm:p-5'>
          <h1 className='text-[140px] text-center border max-sm:text-8xl rounded-[5px]'>GET IN TOUCH</h1>
      </div>
      <div className='w-full flex items-center max-sm:flex-col'>
        <div className="w-[50%] h-50 flex flex-col justify-between max-sm:w-full pr-30 pl-20 max-sm:p-5">
            <h1 className='text-2xl max-sm:text-[20px]'>Hello, I’m Sagar Sailada, Website & User Interface Designer and Developer based in London.</h1>
            <h1 className='text-3xl underline max-sm:text-2xl'>Sagameperso@gmail.com</h1>
        </div>
        <div className="w-[50%] pl-20 flex  flex-wrap gap-14 items-center justify-between max-sm:flex-col max-sm:p-5 max-sm:w-full pr-20">
            <span className='w-60 max-sm:w-full flex items-center justify-between bg-[#121212] border-[#272727] border p-5 rounded-[8px] max-sm:items-center max-sm:justify-between'>
                <p>Facebook</p>
                <i className="fa-solid fa-arrow-right"></i>
            </span>
            <span className='w-60 max-sm:w-full flex items-center justify-between bg-[#121212] p-5 border-[#272727] border rounded-[8px] max-sm:items-center max-sm:justify-between'>
                <p>Instagram</p>
                <i className="fa-solid fa-arrow-right"></i>
            </span>
            <span className='w-60 max-sm:w-full flex items-center justify-between bg-[#121212] border border-[#272727] p-5 rounded-[8px] max-sm:items-center max-sm:justify-between'>
                <p>Linkedin</p>
                <i className="fa-solid fa-arrow-right"></i>
            </span>
            <span className='w-60 max-sm:w-full flex items-center justify-between bg-[#121212] border-[#272727] border p-5 rounded-[8px] max-sm:items-center max-sm:justify-between'>
                <p>Twitter</p>
                <i className="fa-solid fa-arrow-right"></i>
            </span>
        </div>
      </div>
      <div className="w-full h-30 bg-[#1f1f1f] flex justify-between items-center max-sm:h-auto max-sm:p-5 max-sm:gap-6 pl-25 pr-25">
        <p className='text-[20px] max-sm:text-[11px]'>Copyright © 2025 Sagar. All rights reserved.</p>
        <div className='flex gap-5 max-sm:flex-col max-sm:text-[11px] max-sm:gap-0'>
            <p>Terms&Conditions</p>
            <p>Privacy Policy</p>
        </div>
        <span className='bg-[#c9f31d] p-5 rounded-[5px] backtop text-black'>
          <i className="fa-solid fa-arrow-up"></i>
        </span>
      </div>
    </div>
  )
}

export default Page5

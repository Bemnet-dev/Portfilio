import React from 'react'

const Page5 = () => {
  return (
    <div className='w-screen h-screen bg-[#111111] flex justify-between flex-col'>
        <div className='pl-20 pr-20'>
            <h1 className='text-[140px] text-center border'>GET IN TOUCH</h1>
        </div>
      <div className='w-full flex items-center'>
        <div className="w-[50%] h-50 flex flex-col justify-between pr-30 pl-20">
            <h1 className='text-2xl'>Hello, I’m David Matias, Website & User Interface Designer based in London.</h1>
            <h1 className='text-3xl underline'>Davidmatias333@gmail.com</h1>
        </div>
        <div className="w-[50%] pl-20 flex  flex-wrap gap-14 items-center justify-between pr-20">
            <span className='w-60 flex bg-[#121212] border-[#272727] border p-5 rounded-[8px]'>
                <p>Facebook</p>
                <i className="fa-solid fa-arrow-right"></i>
            </span>
            <span className='w-60 flex bg-[#121212] p-5 border-[#272727] border rounded-[8px]'>
                <p>Facebook</p>
                <i className="fa-solid fa-arrow-right"></i>
            </span>
            <span className='w-60 flex bg-[#121212] border border-[#272727] p-5 rounded-[8px]'>
                <p>Facebook</p>
                <i className="fa-solid fa-arrow-right"></i>
            </span>
            <span className='w-60 flex bg-[#121212] border-[#272727] border p-5 rounded-[8px]'>
                <p>Facebook</p>
                <i className="fa-solid fa-arrow-right"></i>
            </span>
        </div>
      </div>
      <div className="w-full h-30 bg-[#1f1f1f] flex justify-between items-center pl-25 pr-25">
        <p className='text-[20px]'>Copyright © 2025 Matias. All rights reserved.</p>
        <div className='flex gap-5'>
            <p>Terms&Conditions</p>
            <p>Privacy Policy</p>
        </div>
        <span className='bg-[#c9f31d] p-5 rounded-[5px] text-black'>
            <i className="fa-solid fa-arrow-up"></i>
        </span>
      </div>
    </div>
  )
}

export default Page5

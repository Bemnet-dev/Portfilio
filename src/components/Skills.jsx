import React from 'react'

const Skills = () => {
  return (
    <div className='w-full pl-10 flex flex-col gap-4 max-sm:p-0'>
      <h1 className='text-4xl max-sm:text-2xl max-sm:w-full personaltitle'>My Skills</h1>
      <p className='text-[18px] max-sm:text-[16px] personaltitle'>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil
        </p>

      <div className='w-full h-80 flex flex-wrap scroll-smooth scrollbar'>
        <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="/src/assets1/c847802a-c546-4096-9c68-587f7e0c0ee3.png" className='w-[40%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1  className='text-[#848484]'>Figma</h1>
          <p className='text-[60px]'>90%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="/src/assets1/word-f6c599de.png" className='w-[40%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1  className='text-[#848484]'>Wordpress</h1>
          <p className='text-[60px]'>95%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="/src/assets1/html-7ff88025.png" className='w-[40%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1  className='text-[#848484]'>HTML</h1>
          <p className='text-[60px]'>85%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="/src/assets1/boot-f1f5c693.png" className='w-[40%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1  className='text-[#848484]'>Bootstrap</h1>
          <p className='text-[60px]'>97%</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills

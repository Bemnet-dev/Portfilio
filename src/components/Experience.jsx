import React from 'react';


const Experience = () => {
  return (
    <div className='w-full pl-10 flex flex-col gap-4 max-sm:p-0'>
      <h1 className='text-4xl max-sm:text-2xl max-sm:w-full personaltitle'>My Experience</h1>
      <p className='text-[18px] max-sm:text-[16px] personaltitle'>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil        
      </p>

      <div className='detialTabs flex flex-wrap items-center w-full justify-between gap-6 p-5 border-t'>
        <p className='text-[18px] text-[#c9f31d]'>In 2011</p>
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-2xl'>Software Engineer</h1>
          <p className='text-[#848484]'>UI Head & Manager</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center w-full justify-between gap-6 p-5 border-t'>
        <p className='text-[18px] text-[#c9f31d]'>In 2016</p>
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-2xl'>Product Designer</h1>
          <p className='text-[#848484]'>Head of Department</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center w-full justify-between gap-6 p-5 border-t'>
        <p className='text-[18px] text-[#c9f31d]'>In 2023</p>
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-2xl'>Senior UI Designer</h1>
          <p className='text-[#848484]'>Fiverr.com</p>
        </div>
      </div>
    </div>
  )
}

export default Experience

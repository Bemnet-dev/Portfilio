import React from 'react'

const Educations = () => {
  return (
    <div className='w-full pl-10 flex flex-col gap-4 max-sm:p-0'>
      <h1 className='text-4xl max-sm:text-2xl max-sm:w-full personaltitle'>My Education</h1>
      <p className='text-[18px] max-sm:text-[16px] personaltitle'>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil
      </p>

      <div className='detialTabs flex flex-wrap items-start w-full justify-between gap-6 p-5 border-t'>
        <p className='text-[18px] text-[#c9f31d]'>2011-2013</p>
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[20px]'>Programming Courseg</h1>
          <p className='text-[#848484]'>New York University</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-start w-full justify-between gap-6 p-5 border-t'>
        <p className='text-[18px] text-[#c9f31d]'>2013-2016</p>
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-2xl'>University of Design</h1>
          <p className='text-[#848484]'>Kingston, United States</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-start w-full justify-between gap-6 p-5 border-t'>
        <p className='text-[18px] text-[#c9f31d]'>2016-2018</p>
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-2xl'>Web Design Course</h1>
          <p className='text-[#848484]'>New York University</p>
        </div>
      </div>
    </div>
  )
}

export default Educations

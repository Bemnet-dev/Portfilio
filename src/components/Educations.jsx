import React from 'react'

const Educations = () => {
  return (
    <div className='w-full pl-10 flex flex-col gap-4 max-sm:p-0'>
      <h1 className='text-4xl max-sm:text-2xl max-sm:w-full personaltitle'>Education</h1>
      <p className='text-[18px] max-sm:text-[16px] personaltitle'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil</p>

      <div className='detialTabs flex flex-wrap items-start w-full justify-between gap-6 p-5 border-t'>
        <p className='text-[18px] text-[#c9f31d]'>2023-2027</p>
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[20px]'>Sasi Institute of Technology and Engineering</h1>
          <p className='text-[#848484]'>Iformation Technology</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-start w-full justify-between gap-6 p-5 border-t'>
        <p className='text-[18px] text-[#c9f31d]'>2020-2023</p>
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-2xl'>Vedantha Juniour College</h1>
          <p className='text-[#848484]'>MPC</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-start w-full justify-between gap-6 p-5 border-t'>
        <p className='text-[18px] text-[#c9f31d]'>2020</p>
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-2xl'>Ravindhra Bharathi School</h1>
          <p className='text-[#848484]'>SSC</p>
        </div>
      </div>
    </div>
  )
}

export default Educations

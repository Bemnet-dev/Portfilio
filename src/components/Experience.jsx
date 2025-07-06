import React from 'react';
import certificate from '../assets/BEENSD68344.jpg';

const Experience = () => {
  return (
    <div className='w-full pl-10 flex flex-col gap-4 max-sm:p-0'>
      <h1 className='text-4xl max-sm:text-2xl max-sm:w-full personaltitle'>Experience</h1>
      <p className='text-[18px] max-sm:text-[16px] personaltitle'>Completed an internship at Bluestock Fintech as a Software Development Engineer. Contributed to developing secure, scalable fintech applications, working on backend APIs and frontend integration.</p>

      <div className='detialTabs flex flex-wrap items-center w-full justify-between gap-6 p-5 border-t'>
        <p className='text-[18px] text-[#c9f31d]'>In 2025</p>
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-2xl'>Software Developemnt Engineer Intern</h1>
          <p className='text-[#848484]'>Bluestock Fintech</p>
        </div>
        <div className='w-80 flex justify-center rounded-[10px] overflow-hidden bg-black' style={{objectFit:"cover"}}>
          <img src={certificate} style={{objectFit:"cover"}} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Experience

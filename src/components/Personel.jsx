import React from 'react'

const Personel = () => {
  return (
    <div className='w-full pl-10 flex flex-col gap-4'>
      <h1 className='text-4xl'>Personal Info</h1>
      <p className='text-[18px]'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil</p>

      <div className='detialTabs flex flex-wrap items-center justify-between gap-6'>
        <div className="w-[48%] rounded-[8px] flex flex-col justify-between h-30 p-4 bg-[#1f1f1f]">
            <p className='text-[20px] text-[#767676]'>Email</p>
            <p className='text-[20px]'>Sagameperso@gmail.com</p>
        </div>
        <div className="w-[48%] rounded-[8px] flex flex-col justify-between h-30 p-4 bg-[#1f1f1f]">
            <p className='text-[20px] text-[#767676]'>Phone</p>
            <p className='text-[20px]'>+917842293493</p>
        </div>
        <div className="w-[48%] rounded-[8px] flex flex-col justify-between h-30 p-4 bg-[#1f1f1f]">
            <p className='text-[20px] text-[#767676]'>Address</p>
            <p className='text-[20px]'>Vizayanagaram</p>
        </div>
        <div className="w-[48%] rounded-[8px] flex flex-col justify-between h-30 p-4 bg-[#1f1f1f]">
            <p className='text-[20px] text-[#767676]'>Follow</p>
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

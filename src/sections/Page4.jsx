import React from 'react'

const Page4 = () => {
  return (
    <div className='w-screen h-screen bg-[#151515] p-22 flex flex-col justify-around gap-10'>
      <h1 className='flex items-center gap-8 w-full justify-center'><span className='w-30 h-[1px] bg-[#c9f31d] flex rounded-[1px]'></span><p className='text-[#c9f31d] text-2xl' style={{fontFamily:"Caveat"}}>Working Process</p> <span className='w-30 h-[1px] bg-[#c9f31d] flex rounded-[1px]'></span></h1>
      <br />
      <h1 className='text-7xl text-center'>Your Dream Website In Just Few Steps</h1>
      <div className='w-full flex justify-between'>
        <div className='w-100 p-6 border border-[#6b6b6b] flex flex-col gap-5 rounded-[10px] transition-all duration-300 overflow-hidden hover:border-[#c9f31d] relative'>
            <div className='w-15 h-15 rounded-full absolute bottom-[-15px] bg-[#090909] right-[-15px]'>

            </div>
            <h1 className='text-4xl font-bold'>Concept</h1>
            <p>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit</p>
            <ul className='list-none flex flex-col gap-1 text-[14px]'>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Reviewing any existing branding</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Target audience and competitors research</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Developing a strategy</li>
            </ul>
        </div>
        <div className='w-100 p-6 border border-[#6b6b6b] flex flex-col gap-5 rounded-[10px] transition-all duration-300 relative overflow-hidden hover:border-[#c9f31d]'>
            <div className='w-15 h-15 rounded-full absolute bottom-[-15px] bg-[#090909] right-[-15px]'>

            </div>
            <h1 className='text-4xl font-bold'>Design</h1>
            <p>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit</p>
            <ul className='list-none flex flex-col gap-1 text-[14px]'>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Reviewing any existing branding</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Target audience and competitors research</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Developing a strategy</li>
            </ul>
        </div>
        <div className='w-100 p-6 border border-[#6b6b6b] flex flex-col gap-5 rounded-[10px] transition-all duration-300 relative overflow-hidden hover:border-[#c9f31d]'>
            <div className='w-15 h-15 rounded-full absolute bottom-[-15px] bg-[#090909] right-[-15px]'>

            </div>
            <h1 className='text-4xl font-bold'>Webflow</h1>
            <p>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit</p>
            <ul className='list-none flex flex-col gap-1 text-[14px]'>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Reviewing any existing branding</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Target audience and competitors research</li>
                <li className='flex items-center gap-2'><i className="fa-solid fa-circle text-[#c9f31d] text-[8px]"></i>Developing a strategy</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Page4

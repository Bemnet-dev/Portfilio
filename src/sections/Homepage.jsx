import React from 'react';

const Homepage = () => {
  return (
    <div className='w-screen h-screen image flex justify-center items-center text-white homepage pt-[90px] z-10'>
        <div className=' w-full h-full flex'>
            <div className="w-[10%] h-full flex flex-col justify-around pt-20 pb-20 items-center">
                <div className="number text-black rotate-90 flex gap-3 items-center">
                    <i class="fa-solid fa-phone text-gray-600"></i>
                    <p className='text-white'>+917842293493</p>
                </div>
                <div className="scroll rotate-90 text-black flex items-center gap-5">
                    <p className='text-white'>SCROLLDOWN</p>
                    <div className='flex items-center justify-center gap-0'>
                        <span className='w-20 h-[2px] bg-gray-600 flex'></span>
                        <i className="fa-solid text-gray-600 fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            
            {/* Remaining body */}
            <div className='w-[82%] h-full flex-col flex items-start justify-center'>
                <div className='w-[35%] h-30 text-2xl'>
                    <h1>Currently Available For Freelance Worldwide <i className="fa-solid fa-arrow-up rotate-45"></i></h1>
                    <span className='w-full h-[2px] flex bg-white mt-2'></span>
                </div>

                <div className='text-9xl font-bold'>
                    <h1>Creative Visual</h1>
                    
                    <div className=' z-0'>
                        <h1 className='text-transparent designer'>Designer</h1>
                    </div>
                </div>

                <div className='w-full flex gap-5 items-center'>
                    <img src="https://www.pngall.com/wp-content/uploads/13/Curved-Arrow-PNG-Image.png" width={"100px"} className='bg-blend-color-dodge' alt="" />
                    <div className='flex items-center gap-5'>
                        <div className="play w-20 h-20 rounded-full border-2 border-white flex justify-center absolute items-center animate-ping">
                        </div>
                        <div className="subplay w-20 h-20 border-2 rounded-full flex items-center justify-center">
                            <i className="fa-solid fa-play text-white text-4xl"></i>
                        </div>
                        <p className='text-2xl'>Work <br></br>process</p>
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="w-[8%] h-full flex flex-col justify-center gap-40 pt-70 pb-20 items-center">
                <div className="scroll rotate-90 text-black flex items-center gap-5">
                    <p className='text-white'>SCROLLDOWN</p>
                    <div className='flex items-center justify-center'>
                        <span className='w-20 h-[2px] bg-gray-600 flex'></span>
                        <i className="fa-solid text-gray-600 fa-arrow-right"></i>
                    </div>
                </div>

                <ul className='flex flex-col gap-5'>
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

export default Homepage

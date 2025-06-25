import React from 'react'
import leaf from '../assets/leafemoji2.png';
import personel from '../assets/personal.png';
import Personel from '../components/Personel';

const page2 = () => {
  return (
    <div className='w-screen bg-[#171713] text-white'>
      <div className='text-scroll w-full h-24 bg-[#c9f31d]'>
        <ul className='text-black flex w-full h-full text-5xl justify-around items-center'>
          <li><i class="fa-brands fa-html5"></i></li>
          <li><i class="fa-brands fa-css3-alt"></i></li>
          <li><i class="fa-brands fa-react"></i></li>
          <li><i class="fa-solid fa-leaf"></i></li>
          <li><i class="fa-brands fa-js"></i></li>
          <li><i class="fa-brands fa-flutter"></i></li>
        </ul>
      </div>

      <div className='w-full justify-center flex-col items-center flex p-5'>
        <img src={leaf} className='w-12' alt="" />
        <h1 className='text-[40px] w-[90%] text-center'>I'm David Matias, I'm a Brand & Webflow Designer, Currently residing in the lush Victoria Street London, Matias operates globally and is ready to take on any design challenge.</h1>

        <div className='tabs p-10 text-[18px] font-thin flex gap-5'>
          <button className='pl-8 pr-8 rounded-[8px] pt-3 pb-3 bg-[#2d2d2d]'>ABOUT</button>
          <button className='pl-8 pr-8 rounded-[8px] pt-3 pb-3 bg-[#2d2d2d]'>EXPERIENCE</button>
          <button className='pl-8 pr-8 rounded-[8px] pt-3 pb-3 bg-[#2d2d2d]'>EDUCATION</button>
          <button className='pl-8 pr-8 rounded-[8px] pt-3 pb-3 bg-[#2d2d2d]'>SKILLS</button>
        </div>

        <div className="details w-[88%] p-15 mt-10 mb-10 h-145 bg-[#1a1a1a] flex">
          <img className='w-[40%]' src={personel} alt="" />
          <div className='w-[60%] h-[100%]'>
            <Personel/>
          </div>
        </div>
      </div>

      <div className='text-scroll w-full h-24 bg-[#c9f31d]'>
        <ul className='text-black flex w-full h-full text-5xl justify-between items-center gap-5'>
          <li className='h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]'><i class="fa-brands fa-html5"></i><p>HTML</p></li>
          <li className='h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]'><i class="fa-brands fa-css3-alt"></i><p>CSS</p></li>
          <li className='h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]'><i class="fa-brands fa-react"></i><p>REACT</p></li>
          <li className='h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]'><i class="fa-solid fa-leaf"></i><p>MONGODB</p></li>
          <li className='h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]'><i class="fa-brands fa-js"></i><p>JAVASCRIPT</p></li>
          <li className='h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]'><i class="fa-brands fa-flutter"></i><p>FLUTTER</p></li>
        </ul>
      </div>

      <div className='w-full text-white bg-[#1d1d1d] p-18 pb-30 list-none list flex-col flex gap-8'>
        <li className='w-full flex justify-between items-center'>
          <h1 className='text-4xl'>My Certifications</h1>
          <p className='text-[#c9f31d]'>View My Work</p>
        </li>
        <hr className='text-gray-600' />
        <div className='list w-full flex flex-col gap-8'>
          <ul className='w-full flex justify-between text-[20px]'>
            <li>Site Of The Day</li>
            <li>Css & Animation</li>
            <li>2018</li>
          </ul>
          <hr className='text-gray-600' />
          <ul className='w-full flex justify-between text-[20px]'>
            <li>Site Of The Day</li>
            <li>Css & Animation</li>
            <li>2018</li>
          </ul>
          <hr className='text-gray-600' />
          <ul className='w-full flex justify-between text-[20px]'>
            <li>Site Of The Day</li>
            <li>Css & Animation</li>
            <li>2018</li>
          </ul>
          <hr className='text-gray-600' />
          <ul className='w-full flex justify-between text-[20px]'>
            <li>Site Of The Day</li>
            <li>Css & Animation</li>
            <li>2018</li>
          </ul>
          <hr className='text-gray-600' />
          <ul className='w-full flex justify-between text-[20px]'>
            <li>Site Of The Day</li>
            <li>Css & Animation</li>
            <li>2018</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page2

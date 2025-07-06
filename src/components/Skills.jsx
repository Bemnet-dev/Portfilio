import React from 'react'

const Skills = () => {
  return (
    <div className='w-full pl-10 flex gap-4 max-sm:p-0 flex-wrap scrollcolor overflow-auto'>
      <h1 className='text-4xl max-sm:text-2xl max-sm:w-full personaltitle'>My Skills</h1>
      <p className='text-[18px] max-sm:text-[16px] personaltitle'>I have hands-on experience with the MERN stack, Flutter, and React Native, building responsive web and mobile applications. Skilled in tools like Tailwind CSS, Figma, and MySQL, I focus on creating user-friendly, high-performance solutions.</p>

      <div className='w-full h-80 flex flex-wrap scroll-smooth scrollbar'>
        <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" className='w-[40%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[18px]'>ReactJS</h1>
          <p className='text-[#848484]'>90%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp" className='w-[40%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[18px]'>NodeJS</h1>
          <p className='text-[#848484]'>85%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="https://img.icons8.com/nolan/512/express-js.png" className='w-[40%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[18px]'>ExpressJS</h1>
          <p className='text-[#848484]'>92%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s" className='w-[40%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[18px]'>MongoDB</h1>
          <p className='text-[#848484]'>82%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-download-in-svg-png-gif-file-formats--programming-language-coding-development-logos-icons-1720090.png?f=webp" className='w-[40%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[18px]'>Flutter</h1>
          <p className='text-[#848484]'>85%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="https://i.pinimg.com/736x/27/45/30/2745305c9702bceee2525cc24e1d00c2.jpg" className='w-[60%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[18px]'>MYSQL</h1>
          <p className='text-[#848484]'>95%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png" className='w-[50%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[18px]'>Figma</h1>
          <p className='text-[#848484]'>90%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" className='w-[50%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[16px]'>Tailwindcss</h1>
          <p className='text-[#848484]'>97%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className='w-[40%]' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[18px]'>React Native</h1>
          <p className='text-[#848484]'>88%</p>
        </div>
      </div>
      <div className='detialTabs flex flex-wrap items-center justify-between gap-6 p-5 border w-[45%] max-sm:w-full rounded-lg m-2'>
        <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" className='w-[40%] bg-white rounded-3xl' alt="" />
        <div className='flex flex-col items-end justify-between gap-2'>
          <h1 className='text-[18px]'>React Native</h1>
          <p className='text-[#848484]'>88%</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills

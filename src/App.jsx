import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Navbar from "./sections/Navbar";
import Homepage from "./sections/Homepage";
import Page2 from "./sections/page2";
import Page3 from "./sections/Page3";
import Page4 from "./sections/Page4";
import Page5 from "./sections/Page5";
import Page6 from "./sections/pasge6";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() =>{
    const cursor = document.querySelector(".maincontain");
    const sidebtn = document.querySelector('.sidebutton');
    const cross = document.querySelector('.cross');
    const moveHandler = (dets) => {
      gsap.to(".cursor", {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "power2",
      });
    };

    const mouseEnter = () =>{
      gsap.to(".sidebar1",{
        transform:"translateX(0%)",
        duration:0.3,
        ease:"none",
        display:"block"
      })
    }

    const mouseRemove = () =>{
      gsap.to(".sidebar1",{
        transform:"translateX(100%)",
        duration:0.3,
        ease:"none",
        display:"none"
      })
    }
    cursor.addEventListener('mousemove',moveHandler);
    sidebtn.addEventListener('click',mouseEnter);
    cross.addEventListener('click',mouseRemove);
  },[])

  return (
    <div className="text-white bg-pink-200 maincontain cursor-default">
      <div className="cursor w-8 h-8 border-2 border-[#c9f31d] rounded-full absolute z-20"></div>
      <div className="w-[300px] h-screen z-40 transform translate-x-[100%] backdrop-blur-lg bg-[#00000045] fixed right-0 top-0 text-white p-5 sidebar1" style={{display:"none"}}>
        <div className="w-full h-23 p-5 flex active:opacity-60 justify-end">
          <i className="fa-solid fa-xmark cross text-black pt-3.5 pl-3.5 pr-3.5 cursor-pointer text-2xl flex justify-center items-center bg-[#c9f31d] rounded-[4px]"></i>
        </div>
        <div className="flex border-t-0 border-b-0 border-l-0 max-[1122px]:border-r-0 max-[1122px]:flex-1/2 border-gray-700 text-3xl">
          <img src="src\assets1\0459d443-21fd-4d1e-a8e7-a367df2133c1.png" alt="" className='flex justify-between gap-10 h-[60%]' />
        </div>
        <p className="text-white text-[14px]">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, 
          aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam,
           nisi ut aliquid ex ea autem velit esse quam nihil
        </p>
        <br />
        <div>
          <h1 className="text-[#797979]">Address</h1>
          <h1 className="text-[15px]">Victoria Street London,</h1>
          <br />
          <h1>Email</h1>
          <h1 className="text-[15px]">matias999@.com</h1>
          <br/>
          <h1 className="text-[#797979]">Call now</h1>
          <h1 className="text-[15px]">+98 4758 2154 021</h1>
        </div>
        <ul className="flex gap-5 p-5 justify-center text-[28px]">
          <li>
            <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-400 transition-all"></i>
          </li>
          <li>
            <i className="fa-brands fa-linkedin cursor-pointer hover:text-[#4784c2] transition-all"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram cursor-pointer hover:text-pink-600 transition-all"></i>
          </li>
          <li>
            <i className="fa-brands fa-x-twitter cursor-pointer hover:text-gray-300 transition-all"></i>
          </li>
          <li>
            <i className="fa-brands fa-whatsapp cursor-pointer hover:text-green-600 transition-all"></i>
          </li>
        </ul>
        <div className='flex items-center gap-3 pt-4.5 relative pb-4.5 cursor-pointer pr-6 group pl-6 text-black bg-[#c9f31d] rounded-[5px]'>
          <p >Let's Talk</p>
          <i className="fa-solid fa-arrow-right"></i>
          <div className="w-0 text-transparent h-full group-hover:w-full transition-all duration-400 cursor-pointer group-hover:text-black bg-green-400 absolute left-0 rounded-[5px] flex justify-center items-center"><p >Let's Talk</p></div>
        </div>
      </div>
      <Navbar />
      <Homepage />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </div>
  );
};

export default App;

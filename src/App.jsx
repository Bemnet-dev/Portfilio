import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Navbar from "./sections/Navbar";
import Homepage from "./sections/Homepage";
import Page2 from "./sections/page2";
import Page3 from "./sections/Page3";
import Page4 from "./sections/Page4";
import Page5 from "./sections/Page5";
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
        duration:0.7,
        ease:"none",
      })
    }

    const mouseRemove = () =>{
      gsap.to(".sidebar1",{
        transform:"translateX(100%)",
        duration:0.7,
        ease:"none",
      })
    }
    cursor.addEventListener('mousemove',moveHandler);
    sidebtn.addEventListener('click',mouseEnter);
    cross.addEventListener('click',mouseRemove);
  },[])

  return (
    <div className="text-white bg-pink-200 maincontain cursor-default">
      <div className="cursor w-8 h-8 border-2 border-[#c9f31d] rounded-full absolute z-20"></div>
      <div className="w-[300px] h-screen z-50 bg-black absolute right-0 top-0 text-white p-5 sidebar1">
        <div className="w-full h-23 p-5 flex justify-end">
          <i className="fa-solid fa-xmark cross text-black pt-3.5 pl-3.5 pr-3.5 cursor-pointer text-2xl flex justify-center items-center bg-[#c9f31d] rounded-[4px]"></i>
        </div>
        <div className="flex border-t-0 border-b-0 border-l-0 max-[1122px]:border-r-0 max-[1122px]:flex-1/2 border-gray-700 text-3xl">
          <i className="fa-solid fa-shield-halved text-[#c9f31d]"></i>
          <h1>saisagar</h1>
        </div>
        <p className="text-white text-[14px]">
          I am a passionate and detail-oriented Full-Stack Web Developer with
          experience building responsive, user-friendly web applications.
          Skilled in technologies such as React, Node.js, MongoDB, and
          JavaScript, I excel at creating clean, maintainable code and intuitive
          user experiences. I am committed to continuous learning and love
          solving complex challenges as part of a collaborative team.
        </p>
        <br />
        <div>
          <h1 className="text-[#797979]">Address</h1>
          <h1 className="text-[15px]">Kusumaguddi Street,Parvathipuram</h1>
          <br />
          <h1>Email</h1>
          <h1 className="text-[15px]">sagameperso@gmail.com</h1>
        </div>
        <ul className="flex gap-5 p-5 justify-center text-[28px]">
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-x-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-whatsapp"></i>
          </li>
        </ul>
        <div className='flex items-center gap-3 pt-4.5 pb-4.5 pr-6 pl-6 text-black bg-[#c9f31d] rounded-[5px]'>
          <p>Let's Talk</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <Navbar />
      <Homepage />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import leaf from "../assets/leafemoji2.png";
import personel from "../assets/personal.png";
import Personel from "../components/Personel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Experience from "../components/Experience";
import Educations from "../components/Educations";
import Skills from '../components/Skills';
gsap.registerPlugin(ScrollTrigger);

const page2 = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".starimage",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".animationbox1",
          start: "top 70%",
          toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      ".maintext1",
      {
        opacity: 0,
        transform: "translateY(100px)",
      },
      {
        opacity: 1,
        transform: "translateY(0px)",
        duration: 1.2,
        scrollTrigger: {
          trigger: ".animationbox1",
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );

    // animation-2
    gsap.fromTo(
      ".personalimg",
      {
        scale: 0.5,
      },
      {
        scale: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".details",
          start: "top 90%",
          end: "top -10%",
          scrub: true,
          toggleActions: "restart",
        },
      }
    );

    // animation-3
    gsap.fromTo(
      ".skillsets",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        delay: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".details2",
          start: "top 0%",
          end: "top -10%",
          toggleActions: "restart",
        },
      }
    );
    const t1 = gsap.timeline();
    t1.fromTo("#scroll1",{
      x:"0%",
    },{
      x:"-121.5%",
      duration:5,
      ease:"none",
      repeat:-1,
    })
    const t2 = gsap.timeline();
    t2.fromTo("#scroll2",{
      x:"0%",
    },{
      x:"-121.5%",
      duration:5,
      ease:"none",
      repeat:-1,
    })

    gsap.fromTo(".scroller2",{
      x:"-121.5%",
    },{
      x:"0%",
      duration:10,
      ease:"none",
      repeat:-1,
    })
    const scroller = document.querySelector('#scroll1');
    scroller.addEventListener('mouseenter',() =>{
      t1.pause();
    })
    scroller.addEventListener('mouseleave',() =>{
      t1.play();
    })
    const scroller2 = document.querySelector('#scroll2');
    scroller2.addEventListener('mouseenter',() =>{
      t2.pause();
    })
    scroller2.addEventListener('mouseleave',() =>{
      t2.play();
    })
  }, []);



  const mylists = [
    {id:1,component:<Personel/>},
    {id:2,component:<Experience/>},
    {id:3,component:<Educations/>},
    {id:4,component:<Skills/>}
  ];

  const [data,setData] = useState(1);
  return (
    <div className="w-screen bg-[#171713] text-white details2">
      <div className="text-scroll w-full h-24 bg-[#c9f31d] max-[1122px]:h-15 flex">
        <ul className="text-black flex w-full h-full text-5xl justify-between items-center gap-5 max-[1122px]:text-2xl scroller1 whitespace-nowrap" id="scroll1">
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-html5"></i>
            <p>HTML</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-react"></i>
            <p>REACT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-solid fa-leaf"></i>
            <p>MONGODB</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-js"></i>
            <p>JAVASCRIPT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-flutter"></i>
            <p>FLUTTER</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-html5"></i>
            <p>HTML</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-react"></i>
            <p>REACT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-solid fa-leaf"></i>
            <p>MONGODB</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-js"></i>
            <p>JAVASCRIPT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-flutter"></i>
            <p>FLUTTER</p>
          </li>
        </ul>
      </div>

      <div className="w-full justify-center flex-col items-center flex p-5 max-[1122px]:pl-1 pr-1 animationbox1">
        <img src={leaf} className="w-12 starimage" alt="" />
        <h1 className="text-[40px] w-[90%] text-center max-[1122px]:text-2xl maintext1">
          I'm David Matias, I'm a Brand & Webflow Designer, Currently residing
          in the lush Victoria Street London, Matias operates globally and is
          ready to take on any design challenge.
        </h1>

        <div className="tabs p-10 max-sm:p-7  text-[18px] font-thin flex gap-5 max-[1122px]:flex-wrap items-center">
          <button className="pl-8 pr-8 rounded-[8px] pt-3 pb-3 bg-[#2d2d2d] cursor-pointer" style={data == 1? {backgroundColor:"#c9f31d",color:"black",fontWeight:"normal"}:{backgroundColor:"#2d2d2d"}} onClick={() => setData(1)}>
            ABOUT
          </button>
          <button className="pl-8 pr-8 rounded-[8px] pt-3 pb-3 bg-[#2d2d2d] cursor-pointer" style={data == 2? {backgroundColor:"#c9f31d",color:"black",fontWeight:"normal"}:{backgroundColor:"#2d2d2d"}} onClick={() => setData(2)}>
            EXPERIENCE
          </button>
          <button className="pl-8 pr-8 rounded-[8px] pt-3 pb-3 bg-[#2d2d2d] cursor-pointer" style={data == 3? {backgroundColor:"#c9f31d",color:"black",fontWeight:"normal"}:{backgroundColor:"#2d2d2d"}} onClick={() => setData(3)}>
            EDUCATION
          </button>
          <button className="pl-8 pr-8 rounded-[8px] pt-3 pb-3 bg-[#2d2d2d] cursor-pointer" style={data == 4? {backgroundColor:"#c9f31d",color:"black",fontWeight:"normal"}:{backgroundColor:"#2d2d2d"}} onClick={() => setData(4)}>
            SKILLS
          </button>
        </div>

        <div className="details w-[88%] max-sm:w-full max-sm:p-6 p-15 mt-10 mb-10 h-145 max-sm:h-auto bg-[#1a1a1a] flex max-sm:flex-col">
          <img
            className="w-[40%] max-sm:w-full personalimg"
            src={personel}
            alt=""
          />
          <div className="w-[60%] max-sm:w-full max-sm:text[18px] h-[100%]">
            {
              mylists.map((item) => {
                if(item.id == data){
                  return item.component;
                }
              })
            }
          </div>
        </div>
      </div>

      <div className="text-scroll w-full h-24 bg-[#c9f31d] max-[1122px]:h-15 flex">
        <ul className="text-black flex w-full h-full text-5xl justify-between items-center gap-5 max-[1122px]:text-2xl scroller1 whitespace-nowrap" id="scroll2">
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-html5"></i>
            <p>HTML</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-react"></i>
            <p>REACT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-solid fa-leaf"></i>
            <p>MONGODB</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-js"></i>
            <p>JAVASCRIPT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-flutter"></i>
            <p>FLUTTER</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-html5"></i>
            <p>HTML</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-react"></i>
            <p>REACT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-solid fa-leaf"></i>
            <p>MONGODB</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-js"></i>
            <p>JAVASCRIPT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-flutter"></i>
            <p>FLUTTER</p>
          </li>
        </ul>
      </div>
          <br />
      <div className="text-scroll2 w-full h-24 bg-[#c9f31d] max-[1122px]:h-15 flex">
        <ul className="text-black flex w-full h-full text-5xl justify-between items-center gap-5 max-[1122px]:text-2xl scroller2 whitespace-nowrap">
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-html5"></i>
            <p>HTML</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-react"></i>
            <p>REACT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-solid fa-leaf"></i>
            <p>MONGODB</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-js"></i>
            <p>JAVASCRIPT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-flutter"></i>
            <p>FLUTTER</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-html5"></i>
            <p>HTML</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-react"></i>
            <p>REACT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-solid fa-leaf"></i>
            <p>MONGODB</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-js"></i>
            <p>JAVASCRIPT</p>
          </li>
          <li className="h-[80%] border flex items-center pl-5 pr-5 rounded-[5px]">
            <i class="fa-brands fa-flutter"></i>
            <p>FLUTTER</p>
          </li>
        </ul>
      </div>

      <div className="w-full text-white bg-[#1d1d1d] max-sm:p-8 p-18 pb-30 list-none list flex-col flex gap-8 skillsets">
        <li className="w-full flex justify-between items-center">
          <h1 className="text-4xl max-sm:text-2xl">My Certifications</h1>
          <p className="text-[#c9f31d] max-sm:text-[14px]">View My Work</p>
        </li>
        <hr className="text-gray-600" />
        <div className="list w-full flex flex-col gap-8">
          <ul className="w-full flex justify-between max-sm:text-[14px] text-[20px]">
            <li>Bluestock Fintech</li>
            <li>SDE Intern</li>
            <li>2025</li>
          </ul>
          <hr className="text-gray-600" />
          <ul className="w-full flex justify-between max-sm:text-[14px] text-[20px]">
            <li>Coursera</li>
            <li>Version Control</li>
            <li>2024</li>
          </ul>
          <hr className="text-gray-600" />
          <ul className="w-full flex justify-between max-sm:text-[14px] text-[20px]">
            <li>Coursera/IBM</li>
            <li>Python for Data Science, AI & Development</li>
            <li>2024</li>
          </ul>
          <hr className="text-gray-600" />
          <ul className="w-full flex justify-between max-sm:text-[14px] text-[20px]">
            <li>Linkedin Learning</li>
            <li>
              Learning Full-Stack JavaScript Development: MongoDB, Node, and
              React
            </li>
            <li>2018</li>
          </ul>
          <hr className="text-gray-600" />
          <ul className="w-full flex justify-between max-sm:text-[14px] text-[20px]">
            <li>Simplilearn</li>
            <li>Introduction to Flutter Course</li>
            <li>2025</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page2;

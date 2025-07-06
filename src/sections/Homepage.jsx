import React from "react";
import Preloader from "./Preloader";

const Homepage = () => {
  return (
    <>
      <Preloader />
      <div className="w-screen h-screen image flex justify-center items-center text-white homepage pt-[90px] z-10 relative" id="home">
        <div className=" w-full h-full flex">
          <div className="w-[10%] h-full flex flex-col justify-around pt-20 pb-20 items-center">
            <div className="number text-black rotate-90 flex gap-3 items-center">
              <i class="fa-solid fa-phone text-gray-600"></i>
              <a href="/top">
                <p className="text-white">+917842293493</p>
              </a>
            </div>
            <div className="scroll rotate-90 text-black flex items-center gap-5">
              <p className="text-white">SCROLLDOWN</p>
              <div className="flex items-center justify-center gap-0">
                <span className="w-20 h-[2px] bg-gray-600 flex"></span>
                <i className="fa-solid text-gray-600 fa-arrow-right"></i>
              </div>
            </div>
          </div>

          {/* Remaining body */}
          <div className="w-[82%] h-full flex-col flex items-start justify-center max-sm:gap-10">
            <div className="w-[35%] max-sm:w-70 text-[20px] max-sm:text-[16px]">
              <h1 href="/top">
                Currently Available For Freelance Internships{" "}
                <i className="fa-solid fa-arrow-up rotate-45"></i>
              </h1>
              <span className="w-full h-[2px] flex bg-white mt-2"></span>
            </div>

            <div className="text-9xl font-bold">
              <h1 className="max-sm:text-5xl">Full Stack</h1>

              <div className=" z-0">
                <h1 className="text-transparent designer max-sm:text-5xl">
                  Web Developer
                </h1>
              </div>
            </div>

            <div className="w-full flex gap-5 items-center max-sm:justify-center">
              <img
                src="https://www.pngall.com/wp-content/uploads/13/Curved-Arrow-PNG-Image.png"
                className="bg-blend-color-dodge w-[100px] max-sm:w-[80px]"
                alt=""
              />
              <div className="flex items-center gap-5 max-sm:items-center">
                <div className="play w-20 max-sm:w-15 max-sm:h-15 h-20 rounded-full border-2 border-white flex justify-center absolute items-center animate-ping"></div>
                <div className="subplay w-20 h-20 border-2 rounded-full flex items-center justify-center max-sm:w-15 max-sm:h-15">
                  <i className="fa-solid fa-play text-white text-4xl"></i>
                </div>
                <p className="text-2xl max-sm:text-[16px]">
                  Work <br></br>process
                </p>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="w-[8%] h-full flex flex-col justify-center gap-40 pt-70 pb-20 items-center">
            <div className="scroll rotate-90 text-black flex items-center gap-5">
              <p className="text-white">SCROLLDOWN</p>
              <div className="flex items-center justify-center">
                <span className="w-20 h-[2px] bg-gray-600 flex"></span>
                <i className="fa-solid text-gray-600 fa-arrow-right"></i>
              </div>
            </div>

            <ul className="flex flex-col gap-5">
              <li className="hover:bg-blue-600">
                <i className="fa-brands fa-facebook cursor-pointer"></i>
              </li>
              <li className="hover:bg-blue-600">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

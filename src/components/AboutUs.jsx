import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import { IoStarSharp } from "react-icons/io5";
import VideoModal from "./Modal/VideoModal";

const AboutUs = () => {

  const [isOpen,setIsOpen] = useState(false);

 
  const closeModal =()=>{
      setIsOpen(false);
  }

  return (
    <>
    <div className=" relative w-full py-[40px] md:py-[80px] lg:py-[120px] overflow-hidden">
      <div className="main-container mx-auto flex justify-center md:px-10 lg:px-0">
        <div className="flex flex-col md:flex-row  lg:gap-[50px] xl:gap-[100px]">

            {/* section for the about us text */}

          <div className="flex flex-col gap-10 w-full md:w-[70%]">
            <div className="flex flex-col gap-6">
              <h1 className="heading-h2 text-custom-heading">
                We are <span className="text-custom-blue">beyond </span>
                design and designers.
              </h1>
              <span className="font-konsoleRegular text-[18px] leading-[27px] lg:text-[20px] lg:leading-[30px] text-custom-body">
                Our team is a mix of product designers who can talk metrics,
                engineers who understand alignments, product strategists who
                love problems and know marketing and managers who believe in
                collaboration.
              </span>
              <Link to="#">
                <span className="flex gap-2 items-center font-narwaSemiBold text-sm hover:text-custom-blue">
                  Learn more about Idea Fueled
                  <FiArrowUpRight size={20} />
                </span>
              </Link>
            </div>

            {/* Section for reviews */}

            <div className="flex flex-col items-center justify-center md:justify-start sm:flex-row gap-6">
              <div className="flex items-center">
                <div className="flex flex-col justify-center text-center rounded-full gap-2 z-10 text-white bg-custom-blue font-konsoleRegular font-semibold h-[150px] w-[96px]">
                  <span className="text-[22px] leading-[27.5px]">150</span>
                  <span className="text-[12px] leading-[18px]">
                    Projects Delivered
                  </span>
                </div>
                <div className="flex flex-col bg-clutch-section cursor-pointer hover:bg-clutch-section2 transition-all ease-in duration-300  ml-[-20px] z-0 py-4 pr-4 pl-10 w-[252px] sm:max-w-[170px] h-[100px] star-section rounded-lg">
                  <span className="flex justify-between mb-[14px]">
                    <img src="/clutch-logo.png" alt="clutch-logo" />
                    <FiArrowUpRight
                      className="hidden text-[#EB594E]"
                      size={20}
                    />
                  </span>
                  <span className="flex text-[#EB594E]">
                    <IoStarSharp size={15} /> <IoStarSharp size={15} />
                    <IoStarSharp size={15} /> <IoStarSharp size={15} />
                    <IoStarSharp size={15} />
                  </span>
                  <span className="font-konsoleRegular text-xs leading-[18px] text-custom-body mt-1">
                    <span className="font-semibold">32 </span>
                    <span>verified reviews</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col justify-center text-center rounded-full gap-2 z-10 text-white bg-custom-blue font-konsoleRegular font-semibold h-[150px] w-[96px]">
                  <span className="text-[22px] leading-[27.5px]">100%</span>
                  <span className="text-[12px] leading-[18px]">
                    Job <br />
                    Success
                  </span>
                </div>
                <div className="flex flex-col bg-upwork-section hover:bg-upwork-section2 transition-all ease-in duration-300  cursor-pointer ml-[-20px] z-0 py-4 pr-4 pl-10  w-[252px] sm:max-w-[170px] lg:w-[170px] h-[100px] star-section rounded-lg">
                  <span className="flex justify-between mb-[14px]">
                    <img src="/upwork-logo.png" alt="upwork logo" />
                    <FiArrowUpRight
                      className="hidden text-[#F9B52C]"
                      size={20}
                    />
                  </span>
                  <span className="flex text-[#F9B52C]">
                    <IoStarSharp size={15} /> <IoStarSharp size={15} />
                    <IoStarSharp size={15} /> <IoStarSharp size={15} />
                    <IoStarSharp size={15} />
                  </span>
                  <span className="font-konsoleRegular text-xs leading-[18px] text-custom-body mt-1 font-semibold">
                    Top rated plus
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[320px] min-h-[445px] h-[520px] mt-10 md:mt-0 self-center">
            <img src="/team-image.jpg" alt="our team image" className="rounded-full w-full" />
            <div className="absolute bottom-10 md:bottom-20 left-16 bg-custom-blue w-[160px] flex gap-2 rounded-full p-1 pr-4 cursor-pointer">
                <span>
                  <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_27_1457)">
<path fillRule="evenodd" clipRule="evenodd" d="M20 40.6667C31.0457 40.6667 40 31.7124 40 20.6667C40 9.62105 31.0457 0.666748 20 0.666748C8.9543 0.666748 0 9.62105 0 20.6667C0 31.7124 8.9543 40.6667 20 40.6667ZM16.875 28.0028L28.125 21.7148C28.9583 21.249 28.9583 20.0845 28.125 19.6187L16.875 13.3307C16.0417 12.8649 15 13.4471 15 14.3787L15 26.9548C15 27.8864 16.0417 28.4686 16.875 28.0028Z" fill="white"/>
</g>
<defs>
<filter id="filter0_b_27_1457" x="-16" y="-15.3333" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_27_1457"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_27_1457" result="shape"/>
</filter>
</defs>
</svg>
</span>
<div 
onClick={()=>setIsOpen(true)}
className="flex flex-col font-konsoleRegular font-semibold text-white text-sm hover:opacity-80" >
    <span>Watch Video</span>
    <span className="font-normal text-[12px] font-konsoleRegular">1:10 min</span>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {
   
        isOpen && <VideoModal closeModal={closeModal}>
         
          <iframe  
          className='w-full h-full'
          src="https://www.youtube.com/embed/Hgg7M3kSqyE?si=ELceV7PVyNzcSMfJ" frameBorder="0"
          title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
          ></iframe>
        </VideoModal>
      }
    </>
  );
};

export default AboutUs;

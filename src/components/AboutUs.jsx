import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import { IoStarSharp } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="w-full h-[733px] py-[120px]">
      <div className="main-container mx-auto flex justify-center">
        <div className="flex justify-between">
          <div className="flex flex-col gap-10 max-w-[600px]">
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
            <div className="flex gap-6">
              <div className="flex gap-[19px] items-center">
                <div className="flex flex-col justify-center text-center rounded-full gap-2 text-white bg-custom-blue font-konsoleRegular font-semibold h-[150px] w-[96px]">
                  <span className="text-[22px] leading-[27.5px]">150</span>
                  <span className="text-[12px] leading-[18px]">
                    Projects Delivered
                  </span>
                </div>
                <div className="flex flex-col bg-rating-section p-4 w-[170px] h-[100px] star-section rounded-lg">
                  <span className="flex justify-between mb-[14px]">
                    <img src="/clutch-logo.png" alt="clutch-logo" />
                    <FiArrowUpRight
                      className="hidden text-[#EB594E]"
                      size={20}
                    />
                  </span>
                  <span className="flex text-[#EB594E]">
                    <IoStarSharp size={15} /> <IoStarSharp size={15} />{" "}
                    <IoStarSharp size={15} /> <IoStarSharp size={15} />{" "}
                    <IoStarSharp size={15} />
                  </span>
                  <span className="font-konsoleRegular text-xs leading-[18px] text-custom-body mt-1">
                    <span className="font-semibold">32 </span>
                    <span>verified reviews</span>
                  </span>
                </div>
              </div>
              <div className="flex gap-[19px] items-center">
                <div className="flex flex-col justify-center text-center rounded-full gap-2 text-white bg-custom-blue font-konsoleRegular font-semibold h-[150px] w-[96px]">
                  <span className="text-[22px] leading-[27.5px]">100%</span>
                  <span className="text-[12px] leading-[18px]">
                    Job <br />
                    Success
                  </span>
                </div>
                <div className="flex flex-col bg-rating-section p-4 w-[170px] h-[100px] star-section rounded-lg">
                  <span className="flex justify-between mb-[14px]">
                    <img src="/upwork-logo.png" alt="upwork logo" />
                    <FiArrowUpRight
                      className="hidden text-[#F9B52C]"
                      size={20}
                    />
                  </span>
                  <span className="flex text-[#F9B52C]">
                    <IoStarSharp size={15} /> <IoStarSharp size={15} />{" "}
                    <IoStarSharp size={15} /> <IoStarSharp size={15} />{" "}
                    <IoStarSharp size={15} />
                  </span>
                  <span className="font-konsoleRegular text-xs leading-[18px] text-custom-body mt-1 font-semibold">
                    Top rated plus
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[320px] h-[520px]">
            <img src="/team-image.jpg" alt="our team image" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

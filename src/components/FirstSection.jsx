import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { PiArrowUpRightBold } from "react-icons/pi";
import { TbArrowUpRight } from "react-icons/tb";


const FirstSection = () => {
  return (
    <div className="w-full mt-[73px] h-[720px] bg-hero-section">
      <div className="flex flex-col gap-10 py-[151px]">
        <div className="flex flex-col gap-8 max-w-[900px] mx-auto items-center">
          <div className="font-narwaBold text-white text-[60px] leading-[75px] text-center">
            Building better
            <br />
            products and experiences
            <br />
            shouldn't take forever.
          </div>
          <div className="font-konsoleRegular text-2xl leading-9 max-w-[700px] text-white text-center">
            We help partners innovate fast through rapid iterations using real
            data, no guesswork.
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
            <button className="flex items-center gap-2 bg-[#FFED00] hover:bg-transparent hover:border-[1.5px] border-[#FFED00]  hover:text-[#FFED00] rounded-lg w-[171px] h-[48px] justify-center  text-custom-heading font-konsoleRegular font-semibold transition-colors duration-150 delay-75">
                <span>Book a Call</span>
                <span><PiArrowUpRightBold /></span>
            </button>
            <button className="flex items-center gap-2 bg-transparent rounded-lg w-[171px] h-[48px] justify-center border-[1.5px] hover:bg-[#FFED00] hover:text-custom-heading border-[#FFED00]  text-[#FFED00] font-konsoleRegular font-semibold transition-colors duration-150 delay-75" >
            <span>Email Us</span>
            <span><PiArrowUpRightBold /></span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default FirstSection

import { FiArrowUpRight } from "react-icons/fi";

const FirstSection = () => {
  return (
    <div className="w-full pt-[73px] min-h-[100vh] bg-hero-section flex items-center justify-center">
      <div className="flex flex-col gap-10 py-20 px-5 lg:px-0">
        <div className="flex flex-col gap-8 max-w-[900px] mx-auto items-center">
          <div className="heading-h1 text-white text-center">
            Building better <br className="hidden lg:block" /> products and experiences  <br className="hidden lg:block" /> {`shouldn't`} take forever.      
          </div>
          <div className="sub-heading max-w-[700px] text-white text-center">
            We help partners innovate fast through rapid iterations using real
            data, no guesswork.
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-4">
            <button className="flex items-center gap-2 bg-[#FFED00] hover:bg-transparent hover:border-[1.5px] border-[#FFED00]  hover:text-[#FFED00] rounded-lg w-[171px] h-[48px] justify-center  text-custom-heading font-konsoleRegular font-semibold transition-colors duration-150 delay-75">
                <span>Book a Call</span>
                <span><FiArrowUpRight  size={20}/></span>
            </button>
            <button className="flex items-center gap-2 bg-transparent rounded-lg w-[142px] h-[48px] justify-center border-[1.5px] hover:bg-[#FFED00] hover:text-custom-heading border-[#FFED00]  text-[#FFED00] font-konsoleRegular font-semibold transition-colors duration-150 delay-75" >
            <span>Email Us</span>
            <span><FiArrowUpRight  size={20}/></span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default FirstSection

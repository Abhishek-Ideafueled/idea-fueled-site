import { FaCircleCheck } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="w-full bg-case-studies bg-no-repeat bg-cover">
      <div className="main-container mx-auto py-10 lg:py-20">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="heading-h2 text-white">
            Explore <span className="text-custom-blue">Projects</span>
          </h2>
          <span className="sub-heading2 text-light-gray">
            A testiment of our teams who consitently deliver value, we promise.
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-[60px] ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:bg-project-card mx-auto bg-none md:shadow-project-card-shadow pt-4 md:py-8 md:px-10 md:rounded-2xl">
            <div className="max-w-[456px]">
              <div className="flex flex-col">
                <h3 className="card-heading mb-4">Accounting MVP Design</h3>
                <span className="font-konsoleRegular text-light-gray text-base">
                  With a 14-day deadline to present to investors, we created a
                  fully functional MVP for our client to transform their idea
                  into reality.
                </span>

                <div className="flex flex-wrap gap-2 mt-6">
                  <div className=" h-[40px] bg-pills-bg text-[#8A989E] flex items-center gap-2 rounded-[50px] py-2 pl-2 pr-4">
                    <FaCircleCheck />
                    <span className="font-konsoleRegular font-semibold text-[12px] leading-[18px]">
                      PITCH DECK DESIGN
                    </span>
                  </div>
                  <div className=" h-[40px] bg-pills-bg text-[#8A989E] flex items-center gap-2 rounded-[50px] py-2 pl-2 pr-4">
                    <FaCircleCheck />
                    <span className="font-konsoleRegular font-semibold text-[12px] leading-[18px]">
                      WEBSITE DESIGN
                    </span>
                  </div>
                  <div className=" h-[40px] bg-pills-bg text-[#8A989E] flex items-center gap-2 rounded-[50px] py-2 pl-2 pr-4">
                    <FaCircleCheck />
                    <span className="font-konsoleRegular font-semibold text-[12px] leading-[18px]">
                      SOCIAL MEDIA MARKETING
                    </span>
                  </div>
                  <div className=" h-[40px] bg-pills-bg text-[#8A989E] flex items-center gap-2 rounded-[50px] py-2 pl-2 pr-4">
                    <FaCircleCheck />
                    <span className="font-konsoleRegular font-semibold text-[12px] leading-[18px]">
                      CONTENT WRITING
                    </span>
                  </div>
                </div>
                <button className="card-btn flex gap-2 justify-center items-center mt-10">
                  Visit Website
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
            <div className="max-h-[300px] order-first md:order-last">
              <img
                src="/many-reach-site.jpg"
                alt="many reach site page"
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:bg-project-card mx-auto bg-none md:shadow-project-card-shadow pt-4 md:py-8 md:px-10 md:rounded-2xl">
            <div className="max-w-[456px]">
              <div className="flex flex-col">
                <h3 className="card-heading mb-4">
                  Ed-Tech Course Learning Platform
                </h3>
                <span className="font-konsoleRegular text-light-gray text-base">
                  We created a premium learning experience & distinctive brand
                  identity for this web development course learning company.
                </span>

                <div className="flex flex-wrap gap-2 mt-6">
                  <div className=" h-[40px] bg-pills-bg text-[#8A989E] flex items-center gap-2 rounded-[50px] py-2 pl-2 pr-4">
                    <FaCircleCheck />
                    <span className="font-konsoleRegular font-semibold text-[12px] leading-[18px]">
                      UX REDESIGN
                    </span>
                  </div>
                  <div className=" h-[40px] bg-pills-bg text-[#8A989E] flex items-center gap-2 rounded-[50px] py-2 pl-2 pr-4">
                    <FaCircleCheck />
                    <span className="font-konsoleRegular font-semibold text-[12px] leading-[18px]">
                      BRANDING MATERIAL
                    </span>
                  </div>
                  <div className=" h-[40px] bg-pills-bg text-[#8A989E] flex items-center gap-2 rounded-[50px] py-2 pl-2 pr-4">
                    <FaCircleCheck />
                    <span className="font-konsoleRegular font-semibold text-[12px] leading-[18px]">
                      WEBSITE DESIGN
                    </span>
                  </div>
                </div>
                <button className="card-btn flex gap-2 justify-center items-center mt-10">
                  Visit Website
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
            <div className="max-h-[300px] order-first md:order-last">
              <img
                src="/ed-tech-site.jpg"
                alt="ed tech site"
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:bg-project-card mx-auto bg-none md:shadow-project-card-shadow pt-4 md:py-8 md:px-10 md:rounded-2xl">
            <div className="max-w-[456px]">
              <div className="flex flex-col">
                <h3 className="card-heading mb-4">
                Evergreen - IIT Bombay
                </h3>
                <span className="font-konsoleRegular text-light-gray text-base">
                With a 14-day deadline to present to investors, we created a fully functional MVP for our client to transform their idea into reality.
                </span>

                <div className="flex flex-wrap gap-2 mt-6">
                  <div className=" h-[40px] bg-pills-bg text-[#8A989E] flex items-center gap-2 rounded-[50px] py-2 pl-2 pr-4">
                    <FaCircleCheck />
                    <span className="font-konsoleRegular font-semibold text-[12px] leading-[18px]">
                     PITCH DECK DESIGN
                    </span>
                  </div>
                  <div className=" h-[40px] bg-pills-bg text-[#8A989E] flex items-center gap-2 rounded-[50px] py-2 pl-2 pr-4">
                    <FaCircleCheck />
                    <span className="font-konsoleRegular font-semibold text-[12px] leading-[18px]">
                      WEBSITE DESIGN
                    </span>
                  </div>
                  
                  <div className=" h-[40px] bg-pills-bg text-[#8A989E] flex items-center gap-2 rounded-[50px] py-2 pl-2 pr-4">
                    <FaCircleCheck />
                    <span className="font-konsoleRegular font-semibold text-[12px] leading-[18px]">
                    SOCIAL MEDIA MARKETING
                    </span>
                  </div>
                  <div className=" h-[40px] bg-pills-bg text-[#8A989E] flex items-center gap-2 rounded-[50px] py-2 pl-2 pr-4">
                    <FaCircleCheck />
                    <span className="font-konsoleRegular font-semibold text-[12px] leading-[18px]">
                    CONTENT WRITING
                    </span>
                  </div>
                </div>
                <button className="card-btn flex gap-2 justify-center items-center mt-10">
                  Visit Website
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
            <div className="max-h-[300px] order-first md:order-last">
              <img
                src="/iit-bombay.jpg"
                alt="evergreen iit bombay site"
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="font-konsoleRegular flex justify-center font-semibold text-base text-white">
            <Link to="#" className="flex items-center gap-4 hover:text-custom-blue transition-all duration-200 delay-100"> 
            View All Case Studies <FiArrowUpRight size={21}/>
        </Link></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

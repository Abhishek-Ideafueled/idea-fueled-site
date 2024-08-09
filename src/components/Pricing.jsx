
import { FaCircleCheck } from "react-icons/fa6"
import { FiArrowUpRight } from "react-icons/fi"

const Pricing = () => {
  return (
    <div className="w-full bg-pricing-bg" >
        <div className="main-container mx-auto py-10 lg:py-20">
            <div className="flex flex-col gap-6 text-center">
                <h2 className="heading-h2 text-white">Pricing</h2>
                <span className="sub-heading2 text-light-gray">
                We collaborate in a way that works for you
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-[60px] gap-6">
                <div className="flex flex-col bg-pricing-cardbg gap-4 px-4 py-6 rounded-2xl hover:cursor-pointer hover:bg-pricing-hover">
                  
                    <h3 className="font-narwaBold text-2xl leading-[30px] text-white font-bold text-center">Build From Scratch</h3>
                   <span className="bg-pricing-border h-[1px]"></span> 
                    <div className="font-konsoleRegular text-light-gray font-normal text-base leading-[26px] py-2">
                        <ul className="flex flex-col gap-[10px]">
                            <li className="flex gap-2"> <span className="w-[20px] h-[20px]"><FaCircleCheck className="mt-[5px] text-[#31C03F]"  size={20}/></span> Have an idea you want to launch from scratch?</li>
                            <li className="flex gap-2"> <span className="w-[20px] h-[20px]"><FaCircleCheck className="mt-[5px] text-[#31C03F]"  size={20}/></span> We help you with discovery, design, development and delivery.</li>
                            <li className="flex gap-2"> <span className="w-[20px] h-[20px]"><FaCircleCheck className="mt-[5px] text-[#31C03F]"  size={20}/></span> We typically start with paid discovery sessions, which are refundable.</li>
                        </ul>

                    </div>
                    <button className="card-btn w-full flex items-center justify-center gap-2 text-base mt-2">
                    Book a Call <FiArrowUpRight  size={20}/>
                    </button>
                </div>
                <div className="flex flex-col bg-pricing-cardbg gap-4 px-4 py-6 rounded-2xl hover:cursor-pointer hover:bg-pricing-hover">
                  
                    <h3 className="font-narwaBold text-2xl leading-[30px] text-white font-bold text-center">Your Product Team</h3>
                    <span className="bg-pricing-border h-[1px]"></span> 
                    <div className="font-konsoleRegular text-light-gray font-normal text-base leading-[26px] py-2">
                        <ul className="flex flex-col gap-[10px]">
                            <li className="flex gap-2"> <span className="w-[20px] h-[20px]"><FaCircleCheck className="mt-[5px] text-[#31C03F]"  size={20}/></span> Want to accelerate product development?</li>
                            <li className="flex gap-2"> <span className="w-[20px] h-[20px]"><FaCircleCheck className="mt-[5px] text-[#31C03F]"  size={20}/></span> We'll be your product team, enabling you to focus on the business. Pick from the relevant resources you need - product managers, designers and developers.</li>
                            
                        </ul>

                    </div>
                    <button className="card-btn w-full flex items-center justify-center gap-2 text-base mt-4">
                    Book a Call <FiArrowUpRight  size={20}/>
                    </button>
                </div>
                <div className="flex flex-col bg-pricing-cardbg gap-4 px-4 py-6 rounded-2xl hover:cursor-pointer hover:bg-pricing-hover">
                
                    <h3 className="font-narwaBold text-2xl leading-[30px] text-white font-bold text-center">Support & Upgrades</h3>
                    <span className="bg-pricing-border h-[1px]"></span> 
                    <div className="font-konsoleRegular text-light-gray font-normal text-base leading-[26px] py-2">
                        <ul className="flex flex-col gap-[10px]">
                            <li className="flex gap-2 "> <span className="w-[20px] h-[20px]"><FaCircleCheck className="mt-[5px] text-[#31C03F]"  size={20}/></span> Have an existing app that needs support?</li>
                            <li className="flex gap-2"> <span className="w-[20px] h-[20px]"><FaCircleCheck className="mt-[5px] text-[#31C03F]"  size={20}/></span> We provide regular support, maintenance and upgrades with SLAs..</li>
                            <li className="flex gap-2"> <span className="w-[20px] h-[20px]"><FaCircleCheck className="mt-[5px] text-[#31C03F]"  size={20}/></span> Its flexible - we know things change every month.</li>
                        </ul>

                    </div>
                    <button className="card-btn w-full flex items-center justify-center gap-2 text-base mt-[30px]">
                    Book a Call <FiArrowUpRight  size={20}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing

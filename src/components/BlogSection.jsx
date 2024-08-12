import { FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router-dom"


const BlogSection = () => {
  return (
    <div className="w-full">
        <div className="main-container mx-auto py-10 lg:py-20">
             <div className="w-full flex flex-col gap-10 lg:gap-[60px]">
                <div className="flex flex-col gap-6 text-center">
                    <h2 className="heading-h2">Latest at <span className="text-custom-blue">Ideafueled</span></h2>
                    <span className="sub-heading2 text-custom-body">
                    Stay informed with the latest company updates and upcoming initiatives, 
                    gaining valuable insights into the direction we're headed and the exciting developments on the horizon.
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mx-auto md:mx-0">
                    <div className="flex flex-col max-w-[480px] hover:shadow-card-shadow rounded-2xl border-[1px] border-transparent hover:border-[#EEEEEE] transition-all duration-300 delay-100">
                        <div>
                            <img src="/blog-img1.jpg" className="rounded-2xl" alt="stock image for blog" />
                        </div>
                        <div className="flex flex-col p-6 gap-4">
                        <div className="flex flex-wrap gap-2">
                            <div className="services-pill">
                            category tag
                            </div>
                            <div className="services-pill">
                            category tag
                            </div>
                        </div>
                        <div className="font-narwaBold font-bold text-2xl leading-[30px] text-custom-heading">
                        Know your way forward -  The run way to a glorious future.
                        </div>
                        <div className="font-konsoleRegular text-custom-body">
                        Sitting down with the CEO of IdeaFueled to discuss the importance of speed for startups and the value of good product design.
                        </div>
                      <Link to="#" className="flex items-center gap-2 font-narwaSemiBold transition-all ease-in duration-200 hover:text-custom-blue font-semibold text-custom-heading text-sm">
                      Read article
                      <span>
                      <FiArrowUpRight  size={20}/>
                      </span>
                      </Link>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-[480px] hover:shadow-card-shadow rounded-2xl border-[1px] border-transparent hover:border-[#EEEEEE] transition-all duration-300 delay-100">
                        <div>
                            <img src="/blog-img2.jpg" className="rounded-2xl" alt="stock image for blog" />
                        </div>
                        <div className="flex flex-col p-6 gap-4">
                        <div className="flex flex-wrap gap-2">
                            <div className="services-pill">
                            category tag
                            </div>
                            <div className="services-pill">
                            category tag
                            </div>
                        </div>
                        <div className="font-narwaBold font-bold text-2xl leading-[30px] text-custom-heading">
                        Beyond product design: Supporting Seam’s launch strategy
                        </div>
                        <div className="font-konsoleRegular text-custom-body">
                        The story of joining forces with Seam’s co-founder and CEO to create high-quality content to boost their public launch.
                        </div>
                      <Link to="#" className="flex items-center gap-2 font-narwaSemiBold transition-all ease-in duration-200 hover:text-custom-blue font-semibold text-custom-heading text-sm">
                      Read article
                      <span>
                      <FiArrowUpRight  size={20}/>
                      </span>
                      </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                <button className="card-btn flex items-center justify-center gap-2 text-base w-[205px]">
                View All Articles <FiArrowUpRight  size={20}/>
                    </button>
                </div>
             </div>
        </div>
      
    </div>
  )
}

export default BlogSection

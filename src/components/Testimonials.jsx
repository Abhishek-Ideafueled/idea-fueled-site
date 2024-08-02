import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials.css';
import { useRef } from "react";

const Testimonials = () => {
    
    const prevRef = useRef(null);
    const nextRef = useRef(null);

  return (
    <div className="w-full bg-light-gray">
        <div className="main-container mx-auto flex flex-col py-10 lg:py-20 gap-[60px]">
            <div className="flex flex-col gap-2 text-center">
                <span className="font-konsoleRegular font-semibold text-custom-blue text-lg">{`Don't`} just take my words. 150+ happy clients.</span>
                <h2 className="heading-h2 text-custom-heading">When they appreciate, we love it</h2>
            </div>
            <div className="slider-outer">
                <Swiper 
                pagination={true}
                // navigation
                modules={[Pagination,Navigation]}
                slidesPerView="3"
                observer="true"
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                >
                    <SwiperSlide>
                        <div className="flex flex-col gap-6 w-[317px] h-[371px] rounded-2xl shadow-testimonial-shadow p-6 bg-white">
                            <div className="flex flex-col gap-10">
                                <span>
                                    <img src="/Livwell.png" alt="livwell logo" />
                                </span>
                                <p className="font-konsoleRegular text-custom-heading">
                                “We are very happy with the work Nic and his team have done. 
                                They’ve been involved in the design of our product from the very beginning and have been supporting our design needs ever since.”
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="font-narwaBold text-lg font-bold text-custom-heading">Jenny Wilson</span>
                                    <p className="font-konsoleRegular text-sm text-custom-body">Co-Founder</p>
                                </div>
                                <div>
                                    <img src="/jenny-wilson.jpg" className="rounded-[3.5px]" alt="Jenny Wilson co-founder" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-6 w-[317px] h-[371px] rounded-2xl shadow-testimonial-shadow p-6 bg-white">
                            <div className="flex flex-col gap-10">
                                <span>
                                    <img src="/sprentzo.png" alt="sprentzo logo" />
                                </span>
                                <p className="font-konsoleRegular text-custom-heading">
                                “We, we were looking for true partnership, not just great execution. Semiflat was all of that and more. They helped bring our vision to life & were real thought partners through out the creative process.”
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="font-narwaBold text-lg font-bold text-custom-heading">Thomas Finney</span>
                                    <p className="font-konsoleRegular text-sm text-custom-body">CTO</p>
                                </div>
                                <div>
                                    <img src="/thomas-finney.png" className="rounded-[3.5px]" alt="Thomas Finney CTO" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-6 w-[317px] h-[371px] rounded-2xl shadow-testimonial-shadow p-6 bg-custom-blue">
                            <div className="flex flex-col gap-10">
                                <span className="">
                                    <img src="/medfin-logo2.png" alt="medfin logo" />
                                </span>
                                <div className="bg-custom-blue">
                                    <img src="/medfin-banner.png" className="rounded-lg" alt="Medfin Bannder video" />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="font-narwaBold text-lg font-bold text-white">Hanan Hemerlin</span>
                                    <p className="font-konsoleRegular font-normal text-sm text-light-gray">Executive Director </p>
                                </div>
                                <div>
                                    <img src="/medfin-director.png" className="rounded-[3.5px]" alt="Hanan Hemerlin Executive Director" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    {/* Copies start from here */}
                    <SwiperSlide>
                        <div className="flex flex-col gap-6 w-[317px] h-[371px] rounded-2xl shadow-testimonial-shadow p-6 bg-white">
                            <div className="flex flex-col gap-10">
                                <span>
                                    <img src="/Livwell.png" alt="livwell logo" />
                                </span>
                                <p className="font-konsoleRegular text-custom-heading">
                                “We are very happy with the work Nic and his team have done. 
                                They’ve been involved in the design of our product from the very beginning and have been supporting our design needs ever since.”
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="font-narwaBold text-lg font-bold text-custom-heading">Jenny Wilson</span>
                                    <p className="font-konsoleRegular text-sm text-custom-body">Co-Founder</p>
                                </div>
                                <div>
                                    <img src="/jenny-wilson.jpg" className="rounded-[3.5px]" alt="Jenny Wilson co-founder" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-6 w-[317px] h-[371px] rounded-2xl shadow-testimonial-shadow p-6 bg-white">
                            <div className="flex flex-col gap-10">
                                <span>
                                    <img src="/sprentzo.png" alt="sprentzo logo" />
                                </span>
                                <p className="font-konsoleRegular text-custom-heading">
                                “We, we were looking for true partnership, not just great execution. Semiflat was all of that and more. They helped bring our vision to life & were real thought partners through out the creative process.”
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="font-narwaBold text-lg font-bold text-custom-heading">Thomas Finney</span>
                                    <p className="font-konsoleRegular text-sm text-custom-body">CTO</p>
                                </div>
                                <div>
                                    <img src="/thomas-finney.png" className="rounded-[3.5px]" alt="Thomas Finney CTO" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-6 w-[317px] h-[371px] rounded-2xl shadow-testimonial-shadow p-6 bg-custom-blue">
                            <div className="flex flex-col gap-10">
                                <span className="">
                                    <img src="/medfin-logo2.png" alt="medfin logo" />
                                </span>
                                <div className="bg-custom-blue">
                                    <img src="/medfin-banner.png" className="rounded-lg" alt="Medfin Bannder video" />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="font-narwaBold text-lg font-bold text-white">Hanan Hemerlin</span>
                                    <p className="font-konsoleRegular font-normal text-sm text-light-gray">Executive Director </p>
                                </div>
                                <div>
                                    <img src="/medfin-director.png" className="rounded-[3.5px]" alt="Hanan Hemerlin Executive Director" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-6 w-[317px] h-[371px] rounded-2xl shadow-testimonial-shadow p-6 bg-white">
                            <div className="flex flex-col gap-10">
                                <span>
                                    <img src="/Livwell.png" alt="livwell logo" />
                                </span>
                                <p className="font-konsoleRegular text-custom-heading">
                                “We are very happy with the work Nic and his team have done. 
                                They’ve been involved in the design of our product from the very beginning and have been supporting our design needs ever since.”
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="font-narwaBold text-lg font-bold text-custom-heading">Jenny Wilson</span>
                                    <p className="font-konsoleRegular text-sm text-custom-body">Co-Founder</p>
                                </div>
                                <div>
                                    <img src="/jenny-wilson.jpg" className="rounded-[3.5px]" alt="Jenny Wilson co-founder" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-6 w-[317px] h-[371px] rounded-2xl shadow-testimonial-shadow p-6 bg-white">
                            <div className="flex flex-col gap-10">
                                <span>
                                    <img src="/sprentzo.png" alt="sprentzo logo" />
                                </span>
                                <p className="font-konsoleRegular text-custom-heading">
                                “We, we were looking for true partnership, not just great execution. Semiflat was all of that and more. They helped bring our vision to life & were real thought partners through out the creative process.”
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="font-narwaBold text-lg font-bold text-custom-heading">Thomas Finney</span>
                                    <p className="font-konsoleRegular text-sm text-custom-body">CTO</p>
                                </div>
                                <div>
                                    <img src="/thomas-finney.png" className="rounded-[3.5px]" alt="Thomas Finney CTO" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-6 w-[317px] h-[371px] rounded-2xl shadow-testimonial-shadow p-6 bg-custom-blue">
                            <div className="flex flex-col gap-10">
                                <span className="">
                                    <img src="/medfin-logo2.png" alt="medfin logo" />
                                </span>
                                <div className="bg-custom-blue">
                                    <img src="/medfin-banner.png" className="rounded-lg" alt="Medfin Bannder video" />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="font-narwaBold text-lg font-bold text-white">Hanan Hemerlin</span>
                                    <p className="font-konsoleRegular font-normal text-sm text-light-gray">Executive Director </p>
                                </div>
                                <div>
                                    <img src="/medfin-director.png" className="rounded-[3.5px]" alt="Hanan Hemerlin Executive Director" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <div className="w-full flex justify-center gap-4">
        <div className="btn-prev">  Prev       
        </div>
        <div className="btn-next" >Next</div>
        </div>
                </Swiper>

            </div>
        </div>
      
    </div>
  )
}

export default Testimonials

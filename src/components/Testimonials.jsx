import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonials.css";
import { useRef } from "react";

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full bg-light-gray">
      <div className="main-container mx-auto flex flex-col py-10 lg:py-20 gap-[60px]">
        <div className="flex flex-col gap-2 text-center">
          <span className="font-konsoleRegular font-semibold text-custom-blue text-base md:text-lg">
            {`Don't`} just take my words. 150+ happy clients.
          </span>
          <h2 className="heading-h2 text-custom-heading">
            When they appreciate, we love it
          </h2>
        </div>
        <div className="slider-outer">
          <Swiper
            pagination={
                {clickable:true}
            }
            modules={[Pagination, Navigation]}
            slidesPerView="auto"
            spaceBetween={20}
            observer="true"
            // slidesPerGroup={1}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="mySwiper"
            breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                540:{
                    slidesPerView:2,
                    spaceBetween:40
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
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
                    They’ve been involved in the design of our product from the
                    very beginning and have been supporting our design needs
                    ever since.”
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="font-narwaBold text-lg font-bold text-custom-heading">
                      Jenny Wilson
                    </span>
                    <p className="font-konsoleRegular text-sm text-custom-body">
                      Co-Founder
                    </p>
                  </div>
                  <div>
                    <img
                      src="/jenny-wilson.jpg"
                      className="rounded-[3.5px]"
                      alt="Jenny Wilson co-founder"
                    />
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
                    “We, we were looking for true partnership, not just great
                    execution. Semiflat was all of that and more. They helped
                    bring our vision to life & were real thought partners
                    through out the creative process.”
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="font-narwaBold text-lg font-bold text-custom-heading">
                      Thomas Finney
                    </span>
                    <p className="font-konsoleRegular text-sm text-custom-body">
                      CTO
                    </p>
                  </div>
                  <div>
                    <img
                      src="/thomas-finney.png"
                      className="rounded-[3.5px]"
                      alt="Thomas Finney CTO"
                    />
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
                  <div className="bg-custom-blue relative">
                    <img
                      src="/medfin-banner.png"
                      className="rounded-lg relative"
                      alt="Medfin Bannder video"
                    />
                    <div className="absolute top-[40%] left-[40%] cursor-pointer hover:opacity-80">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_99_7)">
                          <path
                            d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
                            fill="#EBDB00"
                          />
                          <path
                            d="M20.2634 32.7158C19.9871 32.7152 19.7156 32.639 19.4758 32.4945C18.9357 32.1724 18.6 31.5471 18.6 30.8684V17.1316C18.6 16.4509 18.9357 15.8276 19.4758 15.5055C19.7214 15.3569 20.0003 15.2805 20.2835 15.2843C20.5667 15.288 20.8437 15.3718 21.0857 15.5268L32.2405 22.5543C32.4729 22.7078 32.6646 22.9208 32.7974 23.1735C32.9303 23.4262 33 23.7102 33 23.999C33 24.2879 32.9303 24.5719 32.7974 24.8246C32.6646 25.0773 32.4729 25.2903 32.2405 25.4438L21.0839 32.4732C20.8363 32.6307 20.5527 32.7146 20.2634 32.7158Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_99_7">
                            <rect width="48" height="48" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="font-narwaBold text-lg font-bold text-white">
                      Hanan Hemerlin
                    </span>
                    <p className="font-konsoleRegular font-normal text-sm text-light-gray">
                      Executive Director{" "}
                    </p>
                  </div>
                  <div>
                    <img
                      src="/medfin-director.png"
                      className="rounded-[3.5px]"
                      alt="Hanan Hemerlin Executive Director"
                    />
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
                    They’ve been involved in the design of our product from the
                    very beginning and have been supporting our design needs
                    ever since.”
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="font-narwaBold text-lg font-bold text-custom-heading">
                      Jenny Wilson
                    </span>
                    <p className="font-konsoleRegular text-sm text-custom-body">
                      Co-Founder
                    </p>
                  </div>
                  <div>
                    <img
                      src="/jenny-wilson.jpg"
                      className="rounded-[3.5px]"
                      alt="Jenny Wilson co-founder"
                    />
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
                    “We, we were looking for true partnership, not just great
                    execution. Semiflat was all of that and more. They helped
                    bring our vision to life & were real thought partners
                    through out the creative process.”
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="font-narwaBold text-lg font-bold text-custom-heading">
                      Thomas Finney
                    </span>
                    <p className="font-konsoleRegular text-sm text-custom-body">
                      CTO
                    </p>
                  </div>
                  <div>
                    <img
                      src="/thomas-finney.png"
                      className="rounded-[3.5px]"
                      alt="Thomas Finney CTO"
                    />
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
                  <div className="bg-custom-blue relative">
                    <img
                      src="/medfin-banner.png"
                      className="rounded-lg relative"
                      alt="Medfin Bannder video"
                    />
                    <div className="absolute top-[40%] left-[40%] cursor-pointer hover:opacity-80">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_99_7)">
                          <path
                            d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
                            fill="#EBDB00"
                          />
                          <path
                            d="M20.2634 32.7158C19.9871 32.7152 19.7156 32.639 19.4758 32.4945C18.9357 32.1724 18.6 31.5471 18.6 30.8684V17.1316C18.6 16.4509 18.9357 15.8276 19.4758 15.5055C19.7214 15.3569 20.0003 15.2805 20.2835 15.2843C20.5667 15.288 20.8437 15.3718 21.0857 15.5268L32.2405 22.5543C32.4729 22.7078 32.6646 22.9208 32.7974 23.1735C32.9303 23.4262 33 23.7102 33 23.999C33 24.2879 32.9303 24.5719 32.7974 24.8246C32.6646 25.0773 32.4729 25.2903 32.2405 25.4438L21.0839 32.4732C20.8363 32.6307 20.5527 32.7146 20.2634 32.7158Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_99_7">
                            <rect width="48" height="48" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="font-narwaBold text-lg font-bold text-white">
                      Hanan Hemerlin
                    </span>
                    <p className="font-konsoleRegular font-normal text-sm text-light-gray">
                      Executive Director{" "}
                    </p>
                  </div>
                  <div>
                    <img
                      src="/medfin-director.png"
                      className="rounded-[3.5px]"
                      alt="Hanan Hemerlin Executive Director"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="w-full flex justify-center gap-4 mt-12 absolute bottom-[-30px] h-[100px]">
        <div className="btn-prev bg-custom-blue flex items-center justify-center" ref={prevRef}>  
        </div>
        <div className="btn-next bg-custom-blue flex items-center justify-center" ref={nextRef}></div>
        </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

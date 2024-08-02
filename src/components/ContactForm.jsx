import { FaCircleCheck } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const ContactForm = () => {
  return (
    <div className="w-full bg-contactform-bg">
      <div className="main-container mx-auto py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 ">


          <div className="flex flex-col max-w-[492px]">
            <div className="heading-h2 text-white mb-8">
              Step into the future with confidence
            </div>
            <div className="flex flex-col gap-6">
              <p className="sub-heading2 text-white">
                Let’s discuss how we can support your business objectives. Fill
                out the form, and take the first step towards transformation.
              </p>
              <ul className="flex flex-col gap-[10px]">
                <li className="flex gap-[10px] font-konsoleRegular text-white text-lg leading-[27px]">
                  <span className="w-[20px] h-[20px]">
                    <FaCircleCheck className="mt-[2px] " size={20} />
                  </span>
                  We will respond to you within 24 hours.
                </li>
                <li className="flex gap-[10px] font-konsoleRegular text-white text-lg leading-[27px]">
                  <span className="w-[20px] h-[20px]">
                    <FaCircleCheck className="mt-[2px] " size={20} />
                  </span>
                  Access to dedicated product specialists.
                </li>
              </ul>
              <div className="flex gap-4 mt-20">
                <div>
                  <img src="/form-img.png" alt="image for form"  className="rounded-2xl"/>
                </div>

                <div className="flex flex-col gap-2 text-white justify-center m">
                  <span>
                    <h4 className="font-narwaBold font-bold  text-xl leading-[25px]">
                      Puneet Chopra
                    </h4>
                    <p className="font-konsole font-base">
                      puneet@ideafueled.com
                    </p>
                  </span>
                  <p className="flex items-center gag-2 font-narwaSemiBold font-semibold">
                    Book a call <FiArrowUpRight size={20} />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white text-[#0D0D0D] rounded-2xl">
            <form action="" className="flex flex-col gap-6">
                <h3 className="font-narwaSemiBold text-xl leading-[30px]">Tell us about your requirement, 
                and we'll get in touch with you soon!</h3>
                <div className="flex gap-4 h-[53px]">
                <input 
                type="text"
                className="w-1/2 border-[1.5px] border-[#DADADA] p-4 rounded-lg"
                placeholder="Full name *" 
                />
                <input 
                type="email"
                className="w-1/2 border-[1.5px] border-[#DADADA] p-4 rounded-lg"
                placeholder="Email *" 
                />
                </div>
                <div className="flex gap-4 h-[53px]">
                <input 
                type="text"
                className="w-1/2 border-[1.5px] border-[#DADADA] p-4 rounded-lg"
                placeholder="Phone Number *" 
                />
                <input 
                type="email"
                className="w-1/2 border-[1.5px] border-[#DADADA] p-4 rounded-lg"
                placeholder="I'm Interested In *" 
                />
                </div>
                <textarea name="" id="" rows={4}
                placeholder="Type your message here"
                className="border-[1.5px] border-[#DADADA] rounded-lg p-4"
                >

                </textarea>
                <div className="flex flex-col gap-2 items-end">
                <p className="font-konsoleRegular text-sm">By sending this form I confirm that I have read and accept the <span className="text-custom-blue">Privacy Policy</span></p>
                <button className="card-btn">
                Send a Message
                </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

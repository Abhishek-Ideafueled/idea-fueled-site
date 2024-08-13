import { FaCircleCheck } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input';
import { act, useState } from "react";
import './ContactForm.css';
import { Link } from "react-router-dom";

const ContactForm = () => {

  const [phone,setPhone] = useState("");
  const [active,setActive] = useState(null);

  const formatPhoneNumberIntl=(value)=>{
    setPhone(value);
  }
  

  return (
    <div className="w-full bg-contactform-bg" id="contactForm">
      <div className="main-container mx-auto py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


          <div className="flex flex-col max-w-[492px] mx-auto md:mx-0">
            <div className="font-narwaSemiBold font-semibold text-[28px] leading-[35px] md:text-[36px] md:leading-[45px] lg:text-[42px] lg:leading-[52.5px] text-white mb-8">
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
              <div className="flex gap-4 mt-4 md:mt-20">
                <div>
                  <img src="/form-img.png" alt="image for form"  className="rounded-2xl"/>
                </div>

                <div className="flex flex-col gap-2 text-white justify-center m">
                  <span>
                    <h4 className="font-narwaBold font-bold  text-xl leading-[25px]">
                      Puneet Chopra
                    </h4>
                    <p className="font-konsole font-base cursor-pointer" onClick={() => window.location.href = 'mailto:puneet@ideafueled.com'}>
                      puneet@ideafueled.com
                    </p>
                  </span>
                  <Link className="flex items-center gag-2 font-narwaSemiBold font-semibold hover:underline">
                    Book a call <FiArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white text-[#0D0D0D] rounded-2xl">
            <form action="" className="flex flex-col gap-6">
                <h3 className="font-narwaBold text-xl leading-[30px]">Tell us about your requirement, 
                and we'll get in touch with you soon!</h3>
                <div className="flex gap-4 sm:h-[53px] flex-col sm:flex-row">
                <input 
                onClick={()=>setActive(null)}
                type="text"
                className="w-full sm:w-1/2 border-[1.5px] border-[#DADADA] p-4 rounded-lg outline-custom-blue focus:border-custom-blue"
                placeholder="Full name *" 
                />
                <input 
                onClick={()=>setActive(null)}
                type="email"
                className="w-full sm:w-1/2 border-[1.5px] border-[#DADADA] p-4 rounded-lg outline-custom-blue focus:border-custom-blue"
                placeholder="Email *" 
                />
                </div>
                <div className="flex gap-4 sm:h-[53px] flex-col sm:flex-row">
                {/* <input 
                type="text"
                className="w-full sm:w-1/2 border-[1.5px] border-[#DADADA] p-4 rounded-lg"
                placeholder="Phone Number *" 
                /> */}
                 <PhoneInput
                 placeholder="Phone Number"
        defaultCountry="US"
        value={phone}
        onChange={formatPhoneNumberIntl}
        international={false}
        // displayFormat={formatPhoneNumber}
addInternationalOption={false}
          className={`w-full sm:w-1/2 ${active ===1 ?'border-[1.5px] border-custom-blue': 'border-[1.5px] border-[#DADADA]'} p-4 rounded-lg phone-input-custom`}
          onClick={()=>setActive(1)}
      />
                <input 
                type="email"
                className="w-full sm:w-1/2 border-[1.5px] border-[#DADADA] p-4 rounded-lg outline-custom-blue focus:border-custom-blue"
                placeholder="I'm Interested In *" 
                onClick={()=>setActive(null)}
                />
                </div>
                <textarea name="" id="" rows={4}
                placeholder="Type your message here"
                className="border-[1.5px] border-[#DADADA] rounded-lg p-4 outline-custom-blue focus:border-custom-blue"
                onClick={()=>setActive(null)}
                >

                </textarea>
                <div className="flex flex-col gap-2 items-end">
                <p className="font-konsoleRegular text-sm">By sending this form I confirm that I have read and accept the 
                  <span className="text-custom-blue">
                    <Link to="#">Privacy Policy</Link></span></p>
                <button className="card-btn w-full sm:w-[173px]">
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

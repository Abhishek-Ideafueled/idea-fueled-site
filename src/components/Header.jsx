import { IoIosArrowDown } from "react-icons/io";
import './Header.css';
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {

    const [showDropdown,setShowDropdown] = useState(false);
    const [showCompany,setShowCompany] = useState(false);
    const [active,setActive] = useState({id:'',isActive:false});

    const data =[
        {
            id:1,
            heading:"Digital advisory",
            body:"In publishing and graphic design Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts."
        },
        {
            id:2,
            heading:"Design",
            body:"In publishing and graphic design Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts."
        },
        {
            id:3,
            heading:"Development",
            body:"In publishing and graphic design Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts."
        },
        {
            id:4,
            heading:"Marketing",
            body:"In publishing and graphic design Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts."
        }

    ]

    const dropDownRef = useRef();
    const companyRef = useRef()

    useEffect(()=>{
      document.addEventListener('mousedown',handleClickOutside);
  
      return ()=>{
        document.removeEventListener('mousedown',handleClickOutside)
      }
    },[showDropdown])
  
  
    const handleClickOutside=(event)=>{
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
  
       setShowDropdown(false);
  
      }
    //   if (companyRef.current && !companyRef.current.contains(event.target)) {
  
    //     setShowCompany(false);
   
    //    }
    }
    
    const handleCompany=()=>{
        setShowCompany(!showCompany);
    }

  return (
    <div className="h-[73px] w-full fixed top-0 z-20 bg-white flex items-center">
      <div className="flex  justify-between items-center w-full max-w-[1280px] mx-auto">
        <div className="cursor-pointer">
          <svg
            width="130"
            height="46"
            viewBox="0 0 130 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 6.89385C0 5.59431 0 4.94454 0.403714 4.54083C0.807427 4.13712 1.45719 4.13712 2.75673 4.13712H28.1132C29.4127 4.13712 30.0625 4.13712 30.4662 4.54083C30.8699 4.94454 30.8699 5.59431 30.8699 6.89384V32.2503C30.8699 33.5498 30.8699 34.1996 30.4662 34.6033C30.0625 35.007 29.4127 35.007 28.1132 35.007H10.795C10.3719 35.007 10.1603 35.007 9.96132 35.0686C9.76232 35.1301 9.58771 35.2496 9.2385 35.4885L0 41.8084L0 6.89385Z"
              fill="#1D71B8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0885 25.9704C17.1984 25.8736 17.3063 25.7743 17.4122 25.6727L21.5193 26.3969C21.7578 26.439 21.9575 26.2158 21.8892 25.9833C21.4583 24.5169 20.6895 23.3057 19.7114 22.3724C20.031 21.6387 20.27 20.8555 20.4151 20.0321C21.074 16.2955 19.636 12.6782 16.9513 10.405C13.651 11.6228 11.0624 14.5303 10.4035 18.2669C10.239 19.1997 10.2052 20.1252 10.2889 21.0241C9.23672 21.5717 8.27407 22.3732 7.48561 23.4436C7.34194 23.6386 7.45324 23.9167 7.6918 23.9588L11.2961 24.5943C11.392 24.7895 11.494 24.9814 11.6019 25.1698C11.3719 25.4067 11.208 25.7126 11.1464 26.0623C10.9825 26.9915 11.603 27.8776 12.5322 28.0415L15.3283 28.5345C16.2575 28.6983 17.1436 28.0779 17.3075 27.1486C17.3821 26.7256 17.2941 26.3115 17.0885 25.9704Z"
              fill="#FFED00"
            />
            <ellipse
              cx="15.9405"
              cy="16.4958"
              rx="1.5435"
              ry="1.5435"
              transform="rotate(10 15.9405 16.4958)"
              fill="#1D71B8"
            />
            <path
              d="M127.635 22.5946V15.7697H130V29.9042H127.635V28.8185C126.781 30.04 125.657 30.1757 125.056 30.1757C122.477 30.1757 120.771 28.1592 120.771 25.6969C120.771 23.2151 122.458 21.2374 124.94 21.2374C125.579 21.2374 126.84 21.3537 127.635 22.5946ZM125.541 23.3314C124.183 23.3314 123.214 24.359 123.214 25.6969C123.214 27.0347 124.183 28.0817 125.541 28.0817C126.898 28.0817 127.867 27.0347 127.867 25.6969C127.867 24.359 126.898 23.3314 125.541 23.3314Z"
              fill="#222020"
            />
            <path
              d="M117.524 27.2092L119.696 27.5582C119.444 28.1786 118.493 30.1757 115.566 30.1757C114.208 30.1757 113.181 29.7879 112.347 28.993C111.416 28.1205 111.029 27.0347 111.029 25.7163C111.029 24.0488 111.707 23.0212 112.308 22.4201C113.297 21.4507 114.461 21.2374 115.469 21.2374C117.175 21.2374 118.164 21.916 118.746 22.614C119.637 23.6804 119.754 24.9989 119.754 25.9101V26.104H113.472C113.472 26.6081 113.607 27.151 113.879 27.5194C114.131 27.8684 114.654 28.3144 115.566 28.3144C116.458 28.3144 117.136 27.8878 117.524 27.2092ZM113.549 24.5917H117.524C117.33 23.4477 116.399 22.9049 115.527 22.9049C114.654 22.9049 113.743 23.4671 113.549 24.5917Z"
              fill="#222020"
            />
            <path
              d="M107.223 15.7697H109.588V29.9042H107.223V15.7697Z"
              fill="#222020"
            />
            <path
              d="M103.55 27.2092L105.721 27.5582C105.469 28.1786 104.519 30.1757 101.591 30.1757C100.234 30.1757 99.2065 29.7879 98.3728 28.993C97.4421 28.1205 97.0543 27.0347 97.0543 25.7163C97.0543 24.0488 97.7329 23.0212 98.334 22.4201C99.3228 21.4507 100.486 21.2374 101.494 21.2374C103.201 21.2374 104.189 21.916 104.771 22.614C105.663 23.6804 105.779 24.9989 105.779 25.9101V26.104H99.4973C99.4973 26.6081 99.6331 27.151 99.9045 27.5194C100.157 27.8684 100.68 28.3144 101.591 28.3144C102.483 28.3144 103.162 27.8878 103.55 27.2092ZM99.5749 24.5917H103.55C103.356 23.4477 102.425 22.9049 101.553 22.9049C100.68 22.9049 99.7688 23.4671 99.5749 24.5917Z"
              fill="#222020"
            />
            <path
              d="M87.4736 21.5089H89.839V26.2591C89.839 26.7051 89.8778 27.3061 90.3432 27.7327C90.634 27.9847 91.0993 28.1592 91.5453 28.1592C91.9912 28.1592 92.4566 27.9847 92.7474 27.7327C93.2127 27.3061 93.2515 26.7051 93.2515 26.2591V21.5089H95.6169V26.6469C95.6169 27.4031 95.52 28.4113 94.5893 29.2256C93.8138 29.9042 92.5729 30.1757 91.5453 30.1757C90.5177 30.1757 89.2768 29.9042 88.5012 29.2256C87.5705 28.4113 87.4736 27.4031 87.4736 26.6469V21.5089Z"
              fill="#222020"
            />
            <path
              d="M86.4589 16.9718V19.1434H82.1157V22.0324H86.1874V24.2039H82.1157V29.9043H79.5952V16.9718H86.4589Z"
              fill="#222020"
            />
            <path
              d="M70.8758 22.5946V21.5089H73.2412V29.9043H70.8758V28.8185C70.0226 30.04 68.8981 30.1757 68.297 30.1757C65.7183 30.1757 64.0121 28.1593 64.0121 25.6969C64.0121 23.2151 65.6989 21.2374 68.1807 21.2374C68.8205 21.2374 70.0808 21.3537 70.8758 22.5946ZM68.7818 23.3314C67.4245 23.3314 66.4551 24.359 66.4551 25.6969C66.4551 27.0347 67.4245 28.0817 68.7818 28.0817C70.139 28.0817 71.1084 27.0347 71.1084 25.6969C71.1084 24.359 70.139 23.3314 68.7818 23.3314Z"
              fill="#222020"
            />
            <path
              d="M60.5759 27.2092L62.7474 27.5582C62.4954 28.1786 61.5453 30.1757 58.6176 30.1757C57.2604 30.1757 56.2328 29.7879 55.399 28.993C54.4684 28.1205 54.0806 27.0347 54.0806 25.7163C54.0806 24.0488 54.7592 23.0212 55.3603 22.4201C56.3491 21.4507 57.5124 21.2374 58.5207 21.2374C60.2269 21.2374 61.2157 21.916 61.7974 22.614C62.6893 23.6804 62.8056 24.9989 62.8056 25.9101V26.104H56.5236C56.5236 26.6081 56.6593 27.151 56.9308 27.5194C57.1828 27.8684 57.7063 28.3144 58.6176 28.3144C59.5095 28.3144 60.1881 27.8878 60.5759 27.2092ZM56.6012 24.5917H60.5759C60.382 23.4477 59.4513 22.9049 58.5788 22.9049C57.7063 22.9049 56.795 23.4671 56.6012 24.5917Z"
              fill="#222020"
            />
            <path
              d="M50.2743 22.5946V15.7697H52.6397V29.9042H50.2743V28.8185C49.4212 30.04 48.2966 30.1757 47.6956 30.1757C45.1168 30.1757 43.4106 28.1592 43.4106 25.6969C43.4106 23.2151 45.0974 21.2374 47.5792 21.2374C48.2191 21.2374 49.4793 21.3537 50.2743 22.5946ZM48.1803 23.3314C46.8231 23.3314 45.8536 24.359 45.8536 25.6969C45.8536 27.0347 46.8231 28.0817 48.1803 28.0817C49.5375 28.0817 50.507 27.0347 50.507 25.6969C50.507 24.359 49.5375 23.3314 48.1803 23.3314Z"
              fill="#222020"
            />
            <path
              d="M39.1019 16.9718H41.6225V29.9043H39.1019V16.9718Z"
              fill="#222020"
            />
          </svg>
        </div>
        <div className="flex gap-6 items-center h-full">
            <div className="flex gap-8 items-center font-narwaSemiBold text-base">
                <div className="flex items-center relative cursor-pointer" onMouseEnter={()=>{setShowDropdown(true); setActive({id:"1",isActive:"true"})}} onMouseLeave={()=>{setShowDropdown(false); setActive({id:"1",isActive:"false"})}} ref={dropDownRef}>
                <div className="overflow-hidden relative flex items-center gap-2 ">

                
                <span className={`relative h-[23px] flip-button ${active.id==="1" && active.isActive==="true" ? "active " : ""}`}>
                    <span className="button-texts text-custom-heading"> Services</span>
                    <span className="button-texts-abs "> Services</span>
                    
                </span>
                <span>
                    <IoIosArrowDown className={`${active.id==="1" && active.isActive==="true" ? "arrow_icon text-active-blue" : ""}`} />
                    </span>
                    </div>
  
                <div className={`${!showDropdown ? 'z-0 h-0 w-0 invisible drop-down' : 'fixed top-[30px] mx-auto left-0 right-0 max-w-[1280px] max-h-[329px] bg-transparent drop-down active' }`}>
                 <div 
                 className="h-full w-full mt-12 px-12 py-8 rounded-2xl bg-white">
                    <div className="grid grid-cols-4 gap-6">
                       {data.map((item)=>
                       <div key={item.id} className="bg-[#F8FAFB] rounded-2xl flex flex-col gap-[20px] p-6">
                       <div className="font-narwaBold text-custom-heading text-2xl font-bold leading-[30px]">
                            {item.heading}
                       </div>
                       <div className="text-custom-body font-konsoleRegular text-sm ">
                            {item.body}
                       </div>
                   </div>) }
                    </div>
                </div>
                </div>
                </div>
             
                <div className="cursor-pointer overflow-hidden relative h-full" onMouseEnter={()=>{ setActive({id:"2",isActive:"true"})}} onMouseLeave={()=>{ setActive({id:"2",isActive:"false"})}}>
                   <div className={`flip-button h-full ${active.id ==="2" && active.isActive==="true" ? "active " : ""}`}>
                        <div className="button-texts">Projects</div>
                        <div className="button-texts-abs">Projects</div>
                   </div>
                </div>
                
                  <div className="cursor-pointer relative overflow-hidden" onMouseEnter={()=>{ setActive({id:"3",isActive:"true"})}} onMouseLeave={()=>{ setActive({id:"3",isActive:"false"})}}>
                          <div className={`flip-button block ${active.id ==="3" && active.isActive==="true" ? "active " : ""}`}>
                          <div className="button-texts">Process</div>
                          <div className="button-texts-abs text-[#0E5EA2]">Process</div>
                          </div>
                 
                  
                </div>
                <div className="flex items-center relative cursor-pointer" onMouseEnter={()=>{setShowCompany(true); setActive({id:"4",isActive:"true"})}} onMouseLeave={()=>{setShowCompany(false); setActive({id:"4",isActive:"false"})}}>
                <div className=" overflow-hidden relative flex items-center gap-2" > 
                <span className={`relative h-[23px] flip-button ${active.id==="4" && active.isActive==="true" ? "active " : ""}`}>
                    <span className="button-texts text-custom-heading"> Company</span>
                    <span className="button-texts-abs "> Company</span>
                    
                </span>
                <span>
                    <IoIosArrowDown className={`${active.id==="4" && active.isActive==="true" ? "arrow_icon text-active-blue" : ""}`} />
                    </span> </div>
            
                    <div className={`${!showCompany ? 'invisible z-0 w-0 h-0 drop-down' : 'absolute drop-down active right-0 inset-0 top-[10px] h-[114px] w-[250px] bg-transparent'}`}>
                    <div
                    // ref={companyRef}
                    className="mt-11 h-full flex flex-col justify-between bg-[#F8FAFB] rounded-lg py-4 px-6 font-narwaSemiBold font-semibold text-sm ">
                    <ul>
                       <Link to="#" > 
                       <li  className="flex items-center justify-between h-[37px] mb-2 hover:text-active-blue">
                      
                        About us 
                        <FiArrowUpRight className="hidden"  size={20}/>
                       </li> </Link>
                     <Link to='#'>  <li className="flex items-center justify-between  h-[37px] hover:text-active-blue"> 
                       
                        Career 
                         <FiArrowUpRight className="hidden"  size={20}/>
                        
                        </li></Link>
                      </ul>  
                    
                   
                </div>
                </div>
                
                </div>
              
                 <div className="cursor-pointer relative overflow-hidden" onMouseEnter={()=>{ setActive({id:"5",isActive:"true"})}} onMouseLeave={()=>{ setActive({id:"5",isActive:"false"})}}>
                          <div className={`flip-button block ${active.id ==="5" && active.isActive==="true" ? "active " : ""}`}>
                          <div className="button-texts">Blog</div>
                          <div className="button-texts-abs text-[#0E5EA2]">Blog</div>
                          </div>
                 
                  
                </div>
            </div>
            <button className="bg-custom-blue hover:bg-active-blue text-white font-narwaSemiBold text-[16px] leading-[1.45rem] rounded-lg h-[47px] w-[107px]">
                Contact
            </button>
        </div>
      </div>
    </div>
  );
}

export default Header

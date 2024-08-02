import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { IoIosArrowDown } from 'react-icons/io';

const HeaderMobile = () => {

    const [headerAccordian,setHeaderAccordian] = useState({id:"",isActive:false});

    const handleAccordian=(id)=>{
        setHeaderAccordian({id:id,isActive:!headerAccordian.isActive})
    }

  return (
    <div className="w-full h-full bg-transparent">
        <div className={`bg-white p-6 rounded-xl mt-1 ${headerAccordian.id===2 && headerAccordian.isActive===true ? 'h-[250px]': ''}`}>
<ul className="font-narwaSemiBold text-base leading-[23px] text-custom-heading flex flex-col gap-4">
        <li className="relative flex justify-between items-center hover:text-active-blue" onClick={()=>handleAccordian(1)}>
            Services
            <IoIosArrowDown className={`${headerAccordian.id===1 && headerAccordian.isActive===true ? 'arrow-active': 'arrow-side'}  transition-all duration-200`}/>
            
            <div className={`${headerAccordian.id===1 && headerAccordian.isActive===true ? 'h-auto w-auto z-10 ':'h-0 w-0 z-0 invisible'} absolute inset-0 top-10`}>
                <ul className='flex flex-col gap-[14px] bg-white text-custom-heading'>
                   <Link> <li className='border-b-blue-100 border-b-[1px]'>Digital Advisory</li></Link>
                   <Link> <li className='border-b-blue-100 border-b-[1px]'>Design</li></Link>
                   <Link> <li className='border-b-blue-100 border-b-[1px]'>Development</li></Link>
                   <Link> <li className='border-b-blue-100 border-b-[1px]'>Marketing</li></Link>
                </ul>
            </div>
           

            </li>
        <Link to="#">
          <li className='hover:text-active-blue'>Projects</li>
        </Link>
        <Link to="#">
          <li className='hover:text-active-blue'>Process</li>
        </Link>
        <li className="relative flex justify-between items-center hover:text-active-blue" onClick={()=>handleAccordian(2)}>
            Company
            <IoIosArrowDown className={`${headerAccordian.id===2 && headerAccordian.isActive===true ? 'arrow-active': 'arrow-side'} transition-all duration-200`}/>
            <div className={`${headerAccordian.id===2 && headerAccordian.isActive===true ? 'h-auto w-auto z-10':'h-0 w-0 z-0 invisible'} absolute inset-0 top-10`}>
                <ul className='flex flex-col gap-4 bg-white text-custom-heading'>
                   <Link> <li>About Us</li></Link>
                   <Link> <li>Career</li></Link>
                </ul>
            </div>
            </li>
        <Link to="#">
          <li  className='hover:text-active-blue'>Blog</li>
        </Link>
      </ul>
        </div>
      <div className='bg-white mt-2 p-2 rounded-xl flex justify-center'>
          <button className="bg-custom-blue hover:bg-active-blue text-white font-narwaSemiBold text-[16px] leading-[1.45rem] rounded-lg h-[37px] w-[107px]">
                Contact
            </button>
      </div>
    
    </div>
  );
}

export default HeaderMobile

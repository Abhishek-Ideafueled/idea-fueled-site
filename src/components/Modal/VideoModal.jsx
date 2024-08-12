import React, { useEffect, useRef } from 'react'
 import ReactDOM from 'react-dom';

const VideoModal =({ children,isOpen,closeModal })=> {
    const modalRef = useRef();

    useEffect(()=>{
        document.addEventListener('mousedown',handleClickOutside);

        return ()=>{
          document.removeEventListener('mousedown',handleClickOutside)
        }
      },[isOpen])


      const handleClickOutside=(event)=>{
        if (modalRef.current && !modalRef.current.contains(event.target)) {

         closeModal();
    
        }
      }

      useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "Escape") {
            closeModal();
          }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, []);

      const modalRoot = document.getElementById('modal-root');
      return ReactDOM.createPortal(
        <div className="modal fixed inset-0 z-[999] w-full h-full bg-black/60">
            <button className=' relative top-[5%] left-[80%] text-[32px] text-white w-10 h-[10]'>&times;</button>
             <div className='relative top-[5%] left-[15%] w-[70%] h-[80%] flex justify-center items-center' ref={modalRef}>
            {children}
            </div>
          
        </div>,
        modalRoot
      );
    }
    
    

export default VideoModal
"use client"

import React, { useEffect , useState } from "react";



function nav() {

    // function useScrollDirection() {
    //     const [scrollDirection, setScrollDirection] = useState(null);
      
    //     useEffect(() => {
    //       let lastScrollY = window.pageYOffset;
      
    //       const updateScrollDirection = () => {
    //         const scrollY = window.pageYOffset;
    //         const direction = scrollY > lastScrollY ? "down" : "up";

    //         if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
    //           setScrollDirection(direction);
    //         }

    //         lastScrollY = scrollY > 0 ? scrollY : 0;
    //       };
    //       window.addEventListener("scroll", updateScrollDirection); // add event listener
    //       return () => {
    //         window.removeEventListener("scroll", updateScrollDirection); // clean up
    //       }
    //     }, [scrollDirection]);
      
    //     return scrollDirection;
    //   };
      
      
    //     const scrollDirection = useScrollDirection();


    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 10) {
            setShow(false)
        } 
        else if (window.scrollY < 10) 
        {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])


  return (
    <>
    

   
      
    {/* <div className={`w-full bg-[#efefef] top-0 ${show && 'none'} `}>
        
        <div id="item2" className=" text-center">
           Additional 15% off for members
        </div>
    
    </div> */}
      


 

      <header className={`navbar border-b-2 flex flex-row justify-between items-center z-10 bg-white fixed  top-0 h-auto md:h-20 md:pl-36 md:pr-36  `}>

        <div className="">
          <a className="text-xl text-black"> <img className=" w-12 h-auto" src="https://i.pinimg.com/originals/d5/62/0a/d5620af0e61c3882e0f164cae98f0cc9.png" alt="" srcset="" /></a>
              <div className="m-3 hidden md:block">
                <a className="text-sm font-bold m-2 md:m-4 hover:underline " href="">New</a>
                <a className="text-sm font-bold m-2 md:m-4" href="">Men</a>
                <a className="text-sm font-bold m-2 md:m-4" href="">Women</a>
                <a className="text-sm font-bold m-2 md:m-4" href="">Kids</a>
                <a className="text-sm font-bold m-2 md:m-4" href="">Gift Ideas</a>
                <a className="text-sm font-bold m-2 md:m-4" href="">Sale</a>  
              </div>
        </div>

      <div className="">
        <div className={` flex-none mr-4 ${show && 'opacity-0'}  transition duration-300 ease-in-out `} >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>

        <div className="flex-none mr-4">
          <button className="">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
              />
            </svg>
          </button>
        </div>
        <div className="flex-none mr-4 md:hidden">
          <button className="">
            <svg
              class="w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>

      {/* <div className="fixed m-0 p-0 h-full w-full top-0 bottom-0 overflow-hidden bg-slate-400 z-50">
                <div>
                   TEST
                </div>
      </div> */}

      <div className={` z-0 h-16 px-2 mt-20 transition-all duration-500 md:hidden`}>
          <input className="w-full  border-1  focus:border-black focus:ring-0 "type="text" placeholder="Search"/>
      </div>

      

      


      


    </>
  )
}

export default nav
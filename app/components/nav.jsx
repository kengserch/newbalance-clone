"use client";

import React, { useEffect, useState } from "react";

function Nav() {
   

    const [show, setShow] = useState(true);
    const controlNavbar = () => {
        if (window.scrollY > 10) {
            setShow(true);
        } else if (window.scrollY < 10) {
            setShow(false);
        }
        
    };


    const [navbarToggle, setNavbarToggle] = useState(false);

    const NavToggle = () => {
        setNavbarToggle(!navbarToggle);
        //console.log(navbarToggle);
    };

    const [searchToggle, setSearchToggle] = useState(false);

    const searchTog = () => {
        setSearchToggle(!searchToggle);
    };

    useEffect(() => {
        if (navbarToggle == true) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }

        console.log(show)
       
        window.addEventListener("scroll", controlNavbar);

    }, [navbarToggle,show]);

    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        // This variable prevents race condition
        let current = 1;
        const cycleReviews = () => {
            if (current === 3) {
                current = 1;
            } else {
                current += 1;
            }
            setActiveSlide(current);
        };
        // intervalId identified so it can be canceled on unmount
        const intervalId = setInterval(() => {
            cycleReviews();
        }, 5000);
        // Removes interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    const reviews = [
        {
            quote: "Style at an affordable price. Shop shoes under $100",
        },
        {
            quote: "Introducing The Green Edit. Shop now",
        },
        {
            quote: "Free returns and free shipping on orders $75+.",
        },
    ];

    return (
        <>
            <div className={`w-full bg-[#efefef] h-10 top-0 text-center flex justify-center items-center `}>
                <ul className="carousel__list">
                    {reviews.map((review, index) => {
                        const { quote } = review;
                        const count = index + 1;
                        return (
                            <li
                                className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
                                key={count}
                            >
                                <blockquote className="carousel__quote">
                                    <p className="text-sm font-semibold">{quote}</p>
                                </blockquote>
                            </li>
                        );
                    })}
                    <li className="carousel__indicator">
                        <span className={`carousel__dot${activeSlide === 1 ? " active" : ""}`} />
                        <span className={`carousel__dot${activeSlide === 2 ? " active" : ""}`} />
                        <span className={`carousel__dot${activeSlide === 3 ? " active" : ""}`} />
                    </li>
                </ul>
            </div>

            <header className={`border-b-2 w-full flex flex-row justify-between items-center z-10 bg-white fixed h-20 transition-all duration-75 ${show ? "top-0" : "top-10"}`}>
                <nav className=" container-nav sm:container-fluid  mx-auto z-10 flex justify-between">
                    <div className="flex items-center">
                        <a className="text-xl text-black pl-2">
                            <img className=" w-12 h-auto cursor-pointer" src="https://i.pinimg.com/originals/d5/62/0a/d5620af0e61c3882e0f164cae98f0cc9.png" />
                        </a>
                        <div className=" m-3 hidden md:block">
                            <a className="text-sm font-bold m-2 md:m-4 hover:underline decoration-red-700 decoration-2 underline-offset-[20px] " href="">
                                New
                            </a>
                            <a className="text-sm font-bold m-2 md:m-4 hover:underline decoration-red-700 decoration-2 underline-offset-[20px] " href="">
                                Men
                            </a>
                            <a className="text-sm font-bold m-2 md:m-4 hover:underline decoration-red-700 decoration-2 underline-offset-[20px] " href="">
                                Women
                            </a>
                            <a className="text-sm font-bold m-2 md:m-4 hover:underline decoration-red-700 decoration-2 underline-offset-[20px] " href="">
                                Kids
                            </a>
                            <a className="text-sm font-bold m-2 md:m-4 hover:underline decoration-red-700 decoration-2 underline-offset-[20px] " href="">
                                Gift Ideas
                            </a>
                            <a className="text-sm font-bold m-2 md:m-4 hover:underline decoration-red-700 decoration-2 underline-offset-[20px] " href="">
                                Sale
                            </a>
                        </div>
                    </div>

                    <div className=" flex items-center">
                        <div onClick={searchTog} className={` flex-none mr-4 lg:hidden ${show ? "opacity-100" : "opacity-0"}  transition duration-300 ease-in-out `}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <div className="hidden lg:block">
                            <input className=" w-[200px]  bg-zinc-200 h-8  border-1  focus:border-black focus:ring-0 " type="text" placeholder="Search" />
                        </div>
                        <div className=" hidden lg:flex lg:mx-10 ">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z" />
                            </svg>
                            <div className="pl-2 font-bold">
                                <a className="hover:underline cursor-pointer">Log in</a>
                                <span> | </span>
                                <a className="hover:underline cursor-pointer">Join</a>
                            </div>
                        </div>
                        <div className="flex items-center mr-4">
                            <button className="">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-none mr-4 md:hidden">
                            <button onClick={NavToggle} className="">
                                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <nav className={` top-0 fixed w-full h-screen z-50 bg-white  transition duration-200 ${navbarToggle ? "translate-x-0 " : "translate-x-[100%]"} md:hidden `}>
                <div className="grid grid-cols-2 grid-flow-col">
                    <div className="grid justify-items-start px-5 py-5 sm:px-12">
                        <img className=" w-12 h-auto cursor-pointer" src="https://i.pinimg.com/originals/d5/62/0a/d5620af0e61c3882e0f164cae98f0cc9.png" />
                    </div>

                    <div className="grid justify-items-end content-center px-5 py-5 sm:px-12">
                        <svg onClick={NavToggle} className=" w-4 h-4 text-gray-800 dark:text-white cursor-pointer " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-rows-6 grid-flow-col gap-2 px-4 sm:px-10">
                    <a className="text-sm font-bold m-2 md:m-4 " href="#">
                        New
                    </a>
                    <a className="text-sm font-bold m-2 md:m-4 " href="#">
                        Men
                    </a>
                    <a className="text-sm font-bold m-2 md:m-4 " href="#">
                        Women
                    </a>
                    <a className="text-sm font-bold m-2 md:m-4 " href="#">
                        Kids
                    </a>
                    <a className="text-sm font-bold m-2 md:m-4 " href="#">
                        Gift Ideas
                    </a>
                    <a className="text-sm font-bold m-2 md:m-4 " href="#">
                        Sale
                    </a>
                </div>

                <div className="grid grid-rows-6 grid-flow-col gap-2 px-4 mt-6 sm:px-10">
                    <a className="text-sm  m-2 md:m-4 " href="#">
                        Login | Join
                    </a>
                    <a className="text-sm  m-2 md:m-4 " href="#">
                        Order Status
                    </a>
                    <a className="text-sm  m-2 md:m-4 " href="#">
                        Return Order
                    </a>
                    <a className="text-sm  m-2 md:m-4 " href="#">
                        FAQ
                    </a>
                    <a className="text-sm  m-2 md:m-4 " href="#">
                        Help
                    </a>
                    <a className="text-sm  m-2 md:m-4 " href="#">
                        Select Store
                    </a>
                </div>
            </nav>

            {/* <div className="fixed m-0 p-0 h-full w-full top-0 bottom-0 overflow-hidden bg-slate-400 z-50">
                <div>
                   TEST
                </div>
      </div> */}

            <div className={` z-40 h-16 px-2 mt-10  py-2 w-[100%] bg-white fixed transition duration-100 md:hidden ${searchToggle ? "opacity-1" : "opacity-0"} ${show ? "opacity-1" : "opacity-0"} `}>
                <input className="w-full  border-1  focus:border-black focus:ring-0 " type="text" placeholder="Search" />
            </div>
            <div className={` z-0 h-16 px-2 mt-20 transition-all duration-500 md:hidden `}>
                <input className="w-full  border-1  focus:border-black focus:ring-0 " type="text" placeholder="Search" />
            </div>
        </>
    );
}

export default Nav;

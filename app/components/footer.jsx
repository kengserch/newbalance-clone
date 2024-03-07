"use client"

import React, { useState } from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {

    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    const [isActive4, setActive4] = useState(false);

    const toggleClass1 = () => {
    setActive1(!isActive1);
    };
    const toggleClass2 = () => {
        setActive2(!isActive2);
    };
    const toggleClass3 = () => {
        setActive3(!isActive3);
    };
    const toggleClass4 = () => {
        setActive4(!isActive4);
    };

  return (
    <footer className='mt-10'>
        <div className='bg-black p-5 flex justify-center items-center'>
           <div className='w-52 lg:w-80'> <span className='text-white text-base'>Be the first to know about new arrivals</span> </div>
           <div> <button className=' w-full bg-red-700 text-white text-base p-4 lg:px-10'>Sign up</button> </div>
        </div>
    <div className='container mx-auto px-5'>
       <div className='grid grid-rows-2 lg:grid-cols-2 lg:mt-10 lg:grid-rows-none'>
            <div className='lg:grid lg:grid-cols-4 lg:p-5 lg:gap-10'>
               <div className='py-4 '>
                    <button onClick={toggleClass1} className='flex items-center justify-between w-full'>
                        <span className=' font-bold text-sm'> Help</span>
                        <svg class={`w-4 h-4 text-gray-800 dark:text-white ${isActive1 ? "hidden" : "block"} lg:hidden` } aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                        </svg>
                        <svg class={`w-4 h-4 text-gray-800 dark:text-white ${isActive1 ? "block" : "hidden"} lg:hidden` } aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
                        </svg>
                    </button>
                    <ul className={` text-sm mt-3 ${isActive1 ? "block" : "hidden"} lg:block`}>
                        <li className='pt-2'>Contact us</li>
                        <li className='pt-2'>Start a return</li>
                        <li className='pt-2'>Track your order</li>
                        <li className='pt-2'>Size guide</li>
                        <li className='pt-2'>FAQ</li>
                    </ul>
               </div>
                
               <div className='py-4'>
                    <button onClick={toggleClass2} className='flex items-center justify-between w-full'>
                        <span className=' font-bold text-sm'> Shop</span>
                        <svg class={`w-4 h-4 text-gray-800 dark:text-white ${isActive2 ? "hidden" : "block"} lg:hidden` } aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                        </svg>
                        <svg class={`w-4 h-4 text-gray-800 dark:text-white ${isActive2 ? "block" : "hidden"} lg:hidden` } aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
                        </svg>
                    </button>
                    <ul className={`text-sm mt-3 ${isActive2 ? "block" : "hidden"} lg:block`}>
                        <li className='pt-2'>Find a store</li>
                        <li className='pt-2'>Gift cards</li>
                        <li className='pt-2'>Shipping information</li>
                        <li className='pt-2'>Sale exclusions</li>
                        <li className='pt-2'>Custom uniforms</li>
                    </ul>
               </div>

               <div className='py-4'>
                    <button onClick={toggleClass3} className='flex items-center justify-between w-full'>
                        <span className=' font-bold text-sm'> About Us</span>
                        <svg class={`w-4 h-4 text-gray-800 dark:text-white ${isActive3 ? "hidden" : "block"} lg:hidden` } aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                        </svg>
                        <svg class={`w-4 h-4 text-gray-800 dark:text-white ${isActive3 ? "block" : "hidden"} lg:hidden` } aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
                        </svg>
                    </button>
                    <ul className={` text-sm mt-3  ${isActive3 ? "block " : "hidden"} lg:block`}>
                        <li className='pt-2'>Our Purpose</li>
                        <li className='pt-2'>Responsible Leadership</li>
                        <li className='pt-2'>Careers</li>
                        <li className='pt-2'>The TRACK at New Balance</li>
                        <li className='pt-2'>Press Box</li>
                    </ul>
               </div>

               <div className='py-4'>
                    <button onClick={toggleClass4} className='flex items-center justify-between w-full'>
                        <span className=' font-bold text-sm'> For you</span>
                        <svg class={`w-4 h-4 text-gray-800 dark:text-white ${isActive4 ? "hidden" : "block"} lg:hidden` } aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                        </svg>
                        <svg class={`w-4 h-4 text-gray-800 dark:text-white ${isActive4 ? "block" : "hidden"} lg:hidden` } aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
                        </svg>
                    </button>
                    <ul className={` text-sm mt-3 ${isActive4 ? "block" : "hidden"} lg:block`}>
                        <li className='pt-2 '>Special Discounts </li>
                        <li className='pt-2'>Sign Up to Wear Test</li>
                        <li className='pt-2'>Idea Submission</li>
                        <li className='pt-2'>Affiliate Program</li>
                        <li className='pt-2'>Counterfeit Products</li>
                        <li className='pt-2'>Accessibility Statement</li>
                    </ul>
               </div>
            </div>

            <div className='lg:ml-16 lg:p-5 xl:pl-[20%]'>
                <div>
                    <img className=' w-16 h-16' src="https://www.newbalance.com/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw3de6aa04/images/homepage/footer/logo.svg" alt="" srcset="" />
                </div>
                <div>
                    <p className='text-base font-normal leading-loose xl:w-[30rem]'>Independent since 1906, we empower people through sport and craftsmanship to create positive change in communities around the world.</p>
                </div>
                <div className='flex mt-3'>
                    <AiOutlineInstagram className=' w-8 h-8 mr-2' />
                    <AiOutlineFacebook className=' w-8 h-8 mr-2'/>
                    <AiOutlineTwitter className=' w-8 h-8 mr-2'/>
                </div>
            </div>
       </div>
    </div>
    </footer>
  )
}

export default Footer
import React, { useState , useEffect } from 'react'

import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { productData } from "../data"
function Product() {

    const [toggle, setToggle] = useState(1)
 

    function UpdateToggle (id) {
        setToggle(id)
    }

    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
    
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
          ]
    }

    return (
        <>
            <div data-aos="fade-up" className="flex justify-center ml-4 mt-5 ">
                <a className={`tab text-base pb-5 text-black font-semibold w-[100px]  lg:w-[200px]  ${toggle === 1 ? ' text-red-700 border-b-4 border-red-700' : 'border-b-[1px] border-black'} `} onClick={() => UpdateToggle(1)}>Men </a>
                <a className={`tab text-base pb-5 text-black font-semibold w-[100px] lg:w-[200px] ${toggle === 2 ? ' text-red-700 border-b-4 border-red-700 ' : 'border-b-[1px] border-black'} `} onClick={() => UpdateToggle(2)}>Women</a>
                <a className={`tab text-base pb-5 text-black font-semibold w-[100px] lg:w-[200px] ${toggle === 3 ? ' text-red-700 border-b-4 border-red-700' : 'border-b-[1px] border-black'} `} onClick={() => UpdateToggle(3)}>Kids</a>
            </div>

            <div className={`grid grid-cols-2 gap-2 p-2 pt-5 none lg:grid-cols-4 lg:m-12 ${toggle === 1 ? "block  " : "hidden"} `}>
                {productData.mens.map(item =>
                    <div data-aos="fade-up" key={item.title} className='outline-none' >
                        <img src={item.img} className="w-full h-auto" alt="Picture of Mens Product" />
                        <p className=" font-bold">{item.title}</p>
                        <p className=" text-sm">{item.sex}</p>
                        <p className=" text-m font-semibold">{item.price}</p>
                    </div>
                )}
            </div>

            <div className={`grid grid-cols-2 gap-2 p-2 pt-5 none lg:grid-cols-4 lg:m-12 ${toggle === 2 ? "block" : "hidden"} `}>
                {productData.womens.map(item =>
                    <div data-aos="fade-up" key={item.title} className='outline-none' >
                      <img src={item.img} className="w-full h-auto" alt="Picture of Womens Product" />
                        <p className=" font-bold">{item.title}</p>
                        <p className=" text-sm">{item.sex}</p>
                        <p className=" text-m font-semibold">{item.price}</p>
                    </div>
                )}
            </div>

            <div className={`grid grid-cols-2 gap-2 p-2 pt-5 none lg:grid-cols-4 lg:m-12 ${toggle === 3 ? "block" : "hidden"} `}>
                {productData.kids.map(item =>
                    <div data-aos="fade-up" key={item.title} className='outline-none' >
                      <img src={item.img} className="w-full h-auto" alt="Picture of Kids Product" />
                        <p className=" font-bold">{item.title}</p>
                        <p className=" text-sm">{item.sex}</p>
                        <p className=" text-m font-semibold">{item.price}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Product
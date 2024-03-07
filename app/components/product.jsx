import React, { useState} from 'react'
import { productData } from "../data"
function product() {

    const [toggle, setToggle] = useState(1)
    function UpdateToggle(id) {
        setToggle(id)
    }

    return (
        <>
            <div data-aos="fade-up" className="flex justify-center ml-4 mt-5 ">
                <a className={`tab text-base pb-5 text-black font-semibold w-[100px]  lg:w-[200px]  ${toggle === 1 ? ' text-red-700 border-b-4 border-red-700' : 'border-b-[1px] border-black'} `} onClick={() => UpdateToggle(1)}>Men </a>
                <a className={`tab text-base pb-5 text-black font-semibold w-[100px] lg:w-[200px] ${toggle === 2 ? ' text-red-700 border-b-4 border-red-700 ' : 'border-b-[1px] border-black'} `} onClick={() => UpdateToggle(2)}>Women</a>
                <a className={`tab text-base pb-5 text-black font-semibold w-[100px] lg:w-[200px] ${toggle === 3 ? ' text-red-700 border-b-4 border-red-700' : 'border-b-[1px] border-black'} `} onClick={() => UpdateToggle(3)}>Kids</a>
            </div>
            <div className={`grid grid-cols-2 gap-2 p-2 pt-5 none lg:grid-cols-4 lg:m-12 ${toggle === 1 ? "block" : "hidden"} `}>
                {productData.mens.map(item =>
                    <div data-aos="fade-up" key={item.title}>
                        <img className=" w-full h-auto" src={item.img} alt="" srcset="" />
                        <p className=" underline font-bold">{item.title}</p>
                        <p className=" text-sm">{item.sex}</p>
                        <p className=" text-m font-semibold">{item.price}</p>
                    </div>
                )}
            </div>
            <div className={`grid grid-cols-2 gap-2 p-2 pt-5 none lg:grid-cols-4 lg:m-12 ${toggle === 2 ? "block" : "hidden"} `}>
                {productData.womens.map(item =>
                    <div data-aos="fade-up" key={item.id}>
                        <img className=" w-full h-auto" src={item.img} alt="" srcset="" />
                        <p className=" underline font-bold">{item.title}</p>
                        <p className=" text-sm">{item.sex}</p>
                        <p className=" text-m font-semibold">{item.price}</p>
                    </div>
                )}
            </div>
            <div className={`grid grid-cols-2 gap-2 p-2 pt-5 none lg:grid-cols-4 lg:m-12 ${toggle === 3 ? "block" : "hidden"} `}>
                {productData.kids.map(item =>
                    <div data-aos="fade-up" key={item.id}>
                        <img className=" w-full h-auto" src={item.img} alt="" srcset="" />
                        <p className=" underline font-bold">{item.title}</p>
                        <p className=" text-sm">{item.sex}</p>
                        <p className=" text-m font-semibold">{item.price}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default product
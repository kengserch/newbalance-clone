import React, { useState } from 'react'
import { productData } from "./data"

function content() {

  const [toggle, setToggle] = useState(1)

  function UpdateToggle(id) {
    setToggle(id)
  }

  return (
    <>

      <main className='container mx-auto'>

        <div className="m-3 md:hidden">
          <a className="text-sm font-bold m-4" href="">New</a>
          <a className="text-sm font-bold m-4" href="">Sale</a>
          <a className="text-sm font-bold m-4" href="">Gift Ideas</a>
          <a className="text-sm font-bold m-4" href=""> Launch Calendar</a>
        </div>

        <div className=''>
          <img className=" lg:block  hidden w-full h-auto  " src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwff0f11fe/images/page-designer/2023/october/16005_Comp_A_Desktop.jpg?sw=1616&sfrm=jpg" />
          <img className="w-full h-auto lg:hidden" src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw55dd73c5/images/page-designer/2023/october/16005_Comp_A_Mobile.jpg?sw=991&sfrm=jpg" alt="" srcset="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw55dd73c5/images/page-designer/2023/october/16005_Comp_A_Mobile.jpg?sw=991&sfrm=jpg 1x, https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw55dd73c5/images/page-designer/2023/october/16005_Comp_A_Mobile.jpg 2x" />
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4 mt-7 p-3 md:hidden ">
          <h1 className=" text-black text-4xl cursor-default font-bold ">Holiday Gifts 2023</h1>
          <button className="bg-red-600 h-12  text-white hover:bg-white hover:text-red-700 hover:border-red-700 hover:border-2" type="button">Shop Now</button>
          <button className=" bg-red-600 h-12 text-white hover:bg-white hover:text-red-700 hover:border-red-700 hover:border-2 " type="button">Explore</button>
        </div>

        <h1 className=" text-black text-xl font-semibold cursor-default mt-7 px-3 md:text-center md:text-2xl md:mt-20">Trending gifts</h1>

        <div className="tabs justify-center ml-4 mt-5 ">
          <a className={`tab text-base text-black font-semibold underline decoration-2 underline-offset-[10px] ${toggle === 1 ? ' text-red-700 underline decoration-red-700 decoration-2 underline-offset-[10px]' : null} `} onClick={() =>  UpdateToggle(1)  }>Men </a>
          <a className={`tab text-base text-black font-semibold underline decoration-2 underline-offset-[10px] ${toggle === 2 ? ' text-red-700 underline decoration-red-700 decoration-2 underline-offset-[10px] ' : null} `} onClick={() =>  UpdateToggle(2)  }>WoMen</a>
          <a className={`tab text-base text-black font-semibold underline decoration-2 underline-offset-[10px] ${toggle === 3 ? ' text-red-700 underline decoration-red-700 decoration-2 underline-offset-[10px]' : null} `} onClick={() =>  UpdateToggle(3) }>Kids</a>
        </div>

        <div className={`grid grid-cols-2 gap-2 p-2 none lg:grid-cols-4 lg:m-12 ${toggle === 1 ? "block" : "hidden"} `}>
            {productData.mens.map(item =>
              <div>
                <img className=" w-full h-auto" src={item.img} alt="" srcset="" />
                <p className=" underline font-bold">{item.title}</p>
                <p className=" text-sm">{item.sex}</p>
                <p className=" text-m font-semibold">{item.price}</p>
              </div>
            )}
        </div>

        <div className={`grid grid-cols-2 gap-2 p-2 none lg:grid-cols-4 lg:m-12 ${toggle === 2 ? "block" : "hidden"} `}>
        {productData.womens.map(item =>
              <div>
                <img className=" w-full h-auto" src={item.img} alt="" srcset="" />
                <p className=" underline font-bold">{item.title}</p>
                <p className=" text-sm">{item.sex}</p>
                <p className=" text-m font-semibold">{item.price}</p>
              </div>
          )}

        </div>

        <div className={`grid grid-cols-2 gap-2 p-2 none lg:grid-cols-4 lg:m-12 ${toggle === 3 ? "block" : "hidden"} `}>
          {productData.kids.map(item =>
              <div>
                <img className=" w-full h-auto" src={item.img} alt="" srcset="" />
                <p className=" underline font-bold">{item.title}</p>
                <p className=" text-sm">{item.sex}</p>
                <p className=" text-m font-semibold">{item.price}</p>
              </div>
          )}

        </div>

        <div className=" m-3 md:flex md:justify-center">
          <button className="  font-bold w-full h-12 bg-white text-red-700 border-red-700 border-2 hover:border-4 md:w-72" type="button">Explore</button>
        </div>

        <div className=" grid grid-cols-2 gap-2 p-3 mt-10 lg:grid-cols-3">
          <div>
            <img src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw34a69c42/images/page-designer/2023/october/16005_Comp_I_Image1.jpg?sw=660&sfrm=jpg" alt="" srcset="" />
            <p className='font-bold text-sm underline pt-4'>Gifts for men</p>
          </div>
          <div>
            <img src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwa68da0e4/images/page-designer/2023/october/16005_Comp_I_Image2.jpg?sw=660&sfrm=jpg" alt="" srcset="" />
            <p className='font-bold text-sm underline pt-4'>Gifts for women</p>
          </div>
          <div className='hidden lg:block'>
            <img src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw32e7e1cf/images/page-designer/2023/october/16005_Comp_I_Image3.jpg?sw=660&sfrm=jpg" alt="" srcset="" />
            <p className='font-bold text-sm underline pt-4'>Gifts for kids</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='p-3'>
            <img className='' src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw5db5c7b9/images/page-designer/2023/october/16005_Comp_E3_Image1.jpg?sw=991&sfrm=jpg" alt="" srcset="" />
            <p className='font-bold text-xl my-4 '>Gifts of everyday comfort</p>
            <button className="bg-red-600 w-full  h-12   text-white hover:bg-white hover:text-red-700 hover:border-red-700 hover:border-2 lg:w-40" type="button">Shop Now</button>
          </div>
          <div className='p-3'>
            <img className='' src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwa671e80d/images/page-designer/2023/october/16005_Comp_E2_Image1.jpg?sw=991&sfrm=jpg" alt="" srcset="" />
            <p className='font-bold text-xl my-4'>Gifts for runners and outdoor enthusiasts</p>
            <button className="bg-red-600 w-full  h-12  text-white hover:bg-white hover:text-red-700 hover:border-red-700 hover:border-2 lg:w-40" type="button">Shop Now</button>
          </div>
        </div>

        <h1 className=" text-black text-xl font-semibold cursor-default mt-4 px-3 md:text-center md:text-2xl md:mt-20">Gifts by price</h1>

        <div className='p-3 grid grid-cols-1 md:grid-cols-3'>
          <img className=' mt-4' src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw8b62582c/images/page-designer/2023/october/16005_Comp_R_Image1.jpg" alt="" srcset="" />
          <img className=' mt-4 pl-3' src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw41d639f2/images/page-designer/2023/october/16005_Comp_R_Image2.jpg" alt="" srcset="" />
          <img className=' mt-4 pl-3' src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw19332442/images/page-designer/2023/october/16005_Comp_R_Image3.jpg" alt="" srcset="" />
        </div>
        
        <h1 className=" text-black text-xl font-semibold cursor-default mt-4 px-3 md:text-center md:text-2xl md:mt-20">Recommended for you</h1>
        
        
      </main>
    </>
  )
}

export default content
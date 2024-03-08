import React from 'react'
import { productData } from "../data"
function product() {

    return (
        <>       
            <div className={`grid grid-cols-2 gap-2 p-2 pt-5 none lg:grid-cols-4 lg:m-12`}>
                {productData.recommend.map(item =>
                    <div data-aos="fade-up" key={item.id}>
                        <img className=" w-full h-auto" src={item.img} alt="" srcset="" />
                        <p className=" font-bold">{item.title}</p>
                        <p className=" text-sm">{item.sex}</p>
                        <p className=" text-m font-semibold">{item.price}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default product
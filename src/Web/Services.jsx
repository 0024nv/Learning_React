import React from "react";
import ServiceFor from "./ServiceFor";
import WebArr from './WebArr';

function Services() {

    return (
        <>
            <h1 className="text-center p-2 mb-8 font-semiboldbold text-3xl">
                Service
            </h1>
            <div className="flex flex-wrap gap-x-5">
                {
                    WebArr.map((value,index)=>{
                        return(
                            <ServiceFor
                            key = {index}
                            img = {value.img}
                            work = {value.work}
                            desc = {value.desc}
                            link = {value.link}
                            />
                        )
                    })
                }
                
            </div>

        </>
    )
}
export default Services;
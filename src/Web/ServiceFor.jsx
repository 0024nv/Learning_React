import React from "react";

function ServiceFor(props) {
    return (
        <>
            <div className="w-[32%] mb-6 border-solid border-[1px] border-gray-500">
                <div>
                    <img src={props.img} alt="loading" />
                </div>

                <h1 className="px-3 pt-2 font-semibold">{props.work}</h1>
                <p className="px-3 py-2 text-gray-500">
                    {props.desc}
                </p>
                <a href={props.link}>
                <button className="mx-2 my-3 border-solid border-[1px] border-gray-500 text-blue-600 px-4 py-1 rounded-lg hover:bg-blue-100">
                    Read More
                </button>
                </a>
                
        
                
            </div>
        </>
    )
}
export default ServiceFor;
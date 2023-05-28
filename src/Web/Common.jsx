import React from "react";
import {useNavigate} from 'react-router-dom'

function Common(props) {
    const ImgSrc = `${props.imgLink}`;
    const navigate = useNavigate();
    const Service =()=>{
           navigate(`${props.btnLink}`)
    }

    return (
        <>
            <div className="h-screen  flex ">
                <div className="flex items-center w-1/2">
                    <div>
                        <h1 className="text-2xl">
                            {props.title}
                        </h1>
                        <h1 className="text-2xl text-blue-600 font-bold">
                            Denver Technician
                        </h1>
                        <p className="text-gray-600 py-3">
                            {props.desc}
                        </p>
                        <button className="border-solid border-2 border-red-500 px-6 py-4 hover:bg-red-300" onClick={Service}>
                            {props.btnText}
                        </button>
                    </div>

                </div>

                <div>
                    <img src={ImgSrc} alt="loading" />
                </div>
            </div>
        </>
    )
}
export default Common;
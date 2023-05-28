import React from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";

function Weather() {

    const [currval,Cval] = useState('delhi');
    const inputE=(event)=>{
        console.log(event.target.value);
        Cval(event.target.value);
    }

    const[city,Ccity]= useState(null);

    const GetData= async ()=>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currval}&units=metric&appid=8da200c11d71c230bc0b03bf0fed7656`);
        const data = await response.json();
        Ccity(data.main);
        console.log(city);
    }
    useEffect(()=>{
        GetData();
    },[currval]);

    return (<>
        <div className="h-screen  flex items-center">
            <div className="w-1/3 h-96 bg-blue-100 m-auto rounded-2xl">

                <div className="w-fit mx-auto my-2">
                    <input
                        className="p-2 border-solid border-2 border-gray-500 rounded-full"
                        type="search"
                        placeholder="Search loaction"
                        value={currval}
                        onChange={inputE}
                    />
                </div>
                
                {!city?<p className="text-center text-red-500 font-semibold ">No City Found</p>:
                 <div className="text-center">
                 <h1 className="font-bold text-5xl mt-24 ">🌡{currval}</h1>
                 {/* <h1 className="font-semibold text-xl text-gray-500">India</h1> */}
                 <div className="mt-8 p-2 text-3xl font-semibold">
                 {city.temp}℃
                 </div>
                 <p>
                     <span className="p-1">Min : {city.temp_min}℃</span>|
                     <span className="p-1">max : {city.temp_max}℃</span>
                 </p>
             </div>
                }
               
            </div>
        </div>

    </>)
}
export default Weather;
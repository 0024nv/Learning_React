import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Covid19For from "./Covid19For";

function Covid19(){

    const [arr,Darr] = useState([]);

    const getdata= async ()=>{
        const response = await fetch('https://data.covid19india.org/data.json');
        const data = await response.json();
        Darr(data.statewise);

        // console.log(arr);
        console.log(data);
        console.log(data.statewise);
    }

    useEffect(()=>{
        getdata();
    },[])

    return (
        <>
        <h1 style={{textAlign:'center'}}>🔴 Live Covid Tracker</h1>
        {/* <div>
            hello {arr[0].active}
        </div> */}
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                arr.map((value,index)=>{
                    return <Covid19For
                    key={index}
                    state = {value.state}
                    confirmed={value.confirmed}
                    active={value.active}

                    />
                })
            }
        </div>
        </>
    )
}

export default Covid19;
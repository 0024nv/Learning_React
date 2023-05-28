import React from "react";
import { useState } from "react";

function Challenge6IncDesc(){
    const [val,CngVal] = useState(0);
    const Inc=()=>{
        CngVal(val+1);
    }
    const Desc=()=>{
        if(val===0){
            alert('Value can not be Negative');
        }
        else{
            CngVal(val-1);
        }
        
    }
    return(
        <>
        <div>
            <h1>{val}</h1>
            <span><button onClick={Inc}>Inc</button></span>
            <span><button onClick={Desc}>Desc</button></span>
        </div>
        </>
    )
}

export default Challenge6IncDesc;
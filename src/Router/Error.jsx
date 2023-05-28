import React from "react";
import {useNavigate} from 'react-router-dom';

function Error(){

    const navigate = useNavigate();
    const Goback=()=>{
        navigate(-1);
    }

    return(
        <>
        <div>

       
        <h1 style={{textAlign:'center'}}>
            404 Error occurr
        </h1>
        <div style={{width:'100px',margin:'auto'}}>
        <button onClick={Goback} >
            Go Back
        </button>
        </div>
        </div>
        </>

    )
}

export default Error;
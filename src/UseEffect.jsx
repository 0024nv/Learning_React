import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseEfect(){
    const[inc,Cinc] = useState(1); 
    // const[dec,Cdec] = useState(0); 

    // Will executed every time when render call
    // useEffect(()=>{
    //     alert('Render Executed')
    // })

    // Only executed once
    // useEffect(()=>{
    //     alert('Render Executed')
    // },[])


    // Only executed when inc button is clicked
    useEffect(()=>{
        // alert('Render Executed')
        // alert(`You Clicked me ${inc} times`)
        document.title=`You Clicked me ${inc} times`;
    },[inc])

    return(
        <>
        {/* <button onClick={()=>{Cinc(inc+1)}}>Inc {inc}</button>
        <br />
        <button onClick={()=>{Cdec(dec-1)}}>Dec {dec}</button> */}

        {/* Challenge -7 */}
        <button onClick={()=>{Cinc(inc+1)}}>Inc {inc}</button>
        </>
    )
}
export default UseEfect;
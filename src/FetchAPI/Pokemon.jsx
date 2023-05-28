import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Pokemon(){

    const [num,Cnum] = useState(1);
    const [move,Cmove] = useState();
    const [nam,Cnam] = useState();
    
    const cng=(e)=>{
        Cnum(e.target.value);
    }

    const getdata = async()=>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
        const data = await res.json();
        console.log(data);
        Cmove(data.moves.length);
        Cnam(data.name);

        // Using AXIOS
        // npm install axios
        // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        // Cmove(data.moves.length);
        // Cnam(data.name);

    }
    useEffect(
        ()=>{
            getdata();
        }
    )
    return (
        <>
        <h1>You have selected <span style={{color:'red'}}>{num}</span></h1>
        <h1>Pokemon is <span style={{color:'red'}}>{nam}</span></h1>
        <h1>Moves is <span style={{color:'red'}}>{move}</span></h1>
        <select value={num} onChange={cng}>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="25">25</option>
        <option value="5">5</option>
        </select>
        </>
    )
}
export default Pokemon;
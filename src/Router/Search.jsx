import React from "react";
import { useState } from "react";
import SearchRes from "./SearchRes";

function Search(){
    const [text,Ctext] = useState();
    const serched=(e)=>{
        const data = e.target.value;
        Ctext(data);
    }
    return(
        <>
    <div style={{width:'60px',margin:'auto'}}>
        <input type="text" 
         placeholder="Search Images"
         value={text}
         onChange={serched}
         />
    </div>
    <div>
        <SearchRes ig={text}/>
    </div>
        </>
    )
}
export default Search;
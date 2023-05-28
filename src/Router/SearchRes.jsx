import React from "react";

function SearchRes(props){
const img =`https://source.unsplash.com/random/200x200?${props.ig}`;
    return (
        <>
        <div>
            <img src={img} alt="Loading" />
        </div>
        </>
    )
}
export default SearchRes;
import React from "react";

function Covid19For(props){
    return (
        <>
        <div style={{width:'30%', margin:'5px',padding:'10px'}}>
        <h3 style={{textAlign:'center',color:'darkviolet'}}>{props.state}</h3>
            <div style={{display:'flex',justifyContent:'center',alignItems:'baseline'}}>
                <span>Total </span>
                <span style={{fontWeight:'bold', fontSize:'30px',padding:'5px',color:'lightblue'}}>Confirmed</span>
            </div>
            <div style={{padding:'20px',textAlign:'center',fontWeight:'bolder',fontSize:'40px',color:'blue'}}>
                {props.confirmed}
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'baseline'}}>
                <span>Total </span>
                <span style={{fontWeight:'bold', fontSize:'30px',padding:'5px', color:'lightcoral'}}>Active</span>
            </div>
            <div style={{padding:'20px',textAlign:'center',fontWeight:'bolder',fontSize:'40px',color:'red'}}>
                {props.active
}
            </div>
        </div>
        </>
    )
}

export default Covid19For;
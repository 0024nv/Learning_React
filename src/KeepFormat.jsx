import React from "react";
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';

function KeepFormat(props) {
    return (
        <>
            <div style={{ width: '30%' }}>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <div style={{display:'flex',justifyContent:'center'}}>
                <Button style={{color:'red',backgroundColor:'lightcoral'}} onClick={()=>{
                    props.dlt(props.id)
                }} >
                <RemoveIcon />
                </Button>
                </div>
               
            </div>
        </>
    )
}
export default KeepFormat;
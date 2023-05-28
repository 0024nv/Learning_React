import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useState } from "react";

function AccordionProto(props) {

    const [cng,Change] = useState(false);

    const clicked =()=>{
        if(cng){
            Change(false);
        }
        else{
            Change(true);
        }
    }

    return (
        <>
            <div style={{width:'60%'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'} }>
                    <p>{props.ques}</p>
                    
                    <Button onClick={clicked} >
                    {cng?<RemoveIcon/>:<AddIcon/>}
                    </Button>
                </div>
                {/* <div style={{display:cng?'block':'none'}}>
                    <p>{props.desc}</p>
                </div> */}
        {/* Adding ternary operator in new way  */}
                {cng && <p>{props.desc}</p>}
            </div>
        </>
    )
}
export default AccordionProto;

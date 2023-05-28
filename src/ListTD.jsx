import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { useState } from "react";

function ListTD(props){
    const [line,changeLine] =useState(0);
    const Line=()=>{
        changeLine(1);
    }
    return(<>
    <div style={{display:'flex', alignItems:'center'  }}>
        {/* <button onClick={
            // Here By using arrow function we have pass our function as well as id ... so that delete 
            // function may access id as well 
            ()=>{
                props.delete(props.id);
            }
        }>
            
        </button> */}
        {/* <h2> {props.desc}</h2> */}

        <Button>
        <DeleteIcon onClick={Line} />
        </Button>
        <h2 style={{textDecoration: line?'line-through':'none'}}> {props.desc}</h2>
    </div>
    </>)
}

export default ListTD;
import React from 'react';

function Slot(props){
    if(props.x===props.y && props.y===props.z){
        return <>
        <div className="inner_slot">
            <h1 className='emj_slot'>{props.x} {props.y} {props.z}</h1>
            <p className='slot_text'>This is matching</p>
            <hr />
        </div>
        </>
    }
    else{
        return <>
        <div className="inner_slot">
            <h1 className='emj_slot'>{props.x} {props.y} {props.z}</h1>
            <p className='slot_text_not'>This is not matching</p>
            <hr />
        </div>
        </>
    }
}

export default Slot;
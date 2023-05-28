import React from 'react';
import arr from './AccordionArr';
import AccordionProto from './AccordionProto';

function Accordion(){
    return (<>
    <div>
    <h1>Ask me anything!</h1>
    {arr.map((value,index)=>{
        return(
            <AccordionProto ques ={value.ques} desc={value.desc} />
        )
    })}
    </div>
    </>)
}
export default Accordion;
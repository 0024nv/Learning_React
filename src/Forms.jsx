import React from "react";
import { useState } from "react";
import './index.css';

function Forms() {
    const [up, Update] = useState('');
    const [curr, currVal] = useState('');
    const [lastname,getcurrLN] = useState('');
    const [ln,gln] = useState('');

    const inputEvent = (event) => {
        // Update(event.target.value);
        currVal(event.target.value);
        console.log(event.target.value);
    }
    const onSubmits = (e) => {
        e.preventDefault();
        Update(curr);
        gln(lastname);
    }

    const lastName=(event)=>{
        getcurrLN(event.target.value);
    }

    return (
        <>
            {/* 
            //  Without using form keyword

        <div style={{display:'flex' , flexDirection:'column', width:'40%',alignItems:'center', justifyContent:'center'}}> 
    <h1 className="NetHeading">Hello {up} </h1>
    <input 
        type="text" 
        placeholder="Enter text" 
        onChange={inputEvent} 
        value={curr}
    />
    <button className="eventButton" style={{margin:'3px'}} onClick={onSubmits} >Submit</button>
    </div> */}

            <form onSubmit={onSubmits}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '40%', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 className="NetHeading">Hello {up} {ln}</h1>
                    <input
                    style={{margin:'3px'}}
                        type="text"
                        placeholder="User name"
                        onChange={inputEvent}
                        value={curr}
                    />
                    <input 
                    style={{margin:'3px'}}
                        type="text"
                        placeholder="Last Name"
                        onChange={lastName}
                        value={lastname}

                    />
                    <button type="submit" className="eventButton" style={{ margin: '3px' }}>Submit</button>
                </div>

            </form>
        </>
    )
}

export default Forms;